import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const assetsRoot = path.join(projectRoot, "src", "assets");
const sourceRoot = path.join(projectRoot, "src");

const rasterExts = new Set([".png", ".jpg", ".jpeg", ".gif"]);
const sourceFileExts = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);
const maxDimension = 2200;
const forceRebuild = process.argv.includes("--force");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function convertToWebp(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const outputPath = inputPath.slice(0, -ext.length) + ".webp";

  const inputStat = await fs.stat(inputPath);
  const outputExists = await fileExists(outputPath);

  if (outputExists && !forceRebuild) {
    const outputStat = await fs.stat(outputPath);
    if (outputStat.mtimeMs >= inputStat.mtimeMs) {
      return { converted: false, outputPath };
    }
  }

  const pipeline = sharp(inputPath, { animated: ext === ".gif" }).rotate();
  const metadata = await pipeline.metadata();

  if (metadata.width && metadata.height) {
    if (metadata.width > maxDimension || metadata.height > maxDimension) {
      pipeline.resize({
        width: maxDimension,
        height: maxDimension,
        fit: "inside",
        withoutEnlargement: true,
      });
    }
  }

  await pipeline.webp({ quality: 70, effort: 5 }).toFile(outputPath);

  return { converted: true, outputPath };
}

function updateImportPaths(content) {
  return content
    .replace(
      /(from\s+["'][^"']*assets\/[^"']+)\.(png|jpe?g|gif)(["'])/gi,
      "$1.webp$3",
    )
    .replace(
      /(url\(["']?[^"')]*assets\/[^"')]+)\.(png|jpe?g|gif)(["']?\))/gi,
      "$1.webp$3",
    );
}

async function main() {
  const assetFiles = await walk(assetsRoot);
  const rasterFiles = assetFiles.filter((file) =>
    rasterExts.has(path.extname(file).toLowerCase()),
  );

  let convertedCount = 0;
  for (const filePath of rasterFiles) {
    const result = await convertToWebp(filePath);
    if (result.converted) {
      convertedCount += 1;
    }
  }

  const sourceFiles = (await walk(sourceRoot)).filter((file) =>
    sourceFileExts.has(path.extname(file).toLowerCase()),
  );

  let updatedSources = 0;
  for (const sourceFile of sourceFiles) {
    const original = await fs.readFile(sourceFile, "utf8");
    const updated = updateImportPaths(original);

    if (updated !== original) {
      await fs.writeFile(sourceFile, updated, "utf8");
      updatedSources += 1;
    }
  }

  console.log(`Converted images: ${convertedCount}`);
  console.log(`Source files updated: ${updatedSources}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
