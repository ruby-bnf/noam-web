import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/icons/closeIconCream.svg";
import type { ProjectItem } from "./types";

type ProjectCarouselCardProps = {
  project: ProjectItem;
  projectIndex: number;
  projects: ProjectItem[];
};

function ProjectCarouselCard({
  project,
  projectIndex,
  projects,
}: ProjectCarouselCardProps) {
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogProjectIndex, setDialogProjectIndex] = useState(projectIndex);

  const imageProjectIndexes = projects
    .map((projectItem, index) => (projectItem.imageSrc ? index : -1))
    .filter((index) => index >= 0);

  const currentDialogProject = projects[dialogProjectIndex] ?? project;
  const currentImagePosition = imageProjectIndexes.indexOf(dialogProjectIndex);
  const canNavigateImages = imageProjectIndexes.length > 1;

  const showPreviousImage = () => {
    if (!canNavigateImages || currentImagePosition < 0) {
      return;
    }

    const previousPosition =
      currentImagePosition === 0
        ? imageProjectIndexes.length - 1
        : currentImagePosition - 1;
    setDialogProjectIndex(imageProjectIndexes[previousPosition]);
  };

  const showNextImage = () => {
    if (!canNavigateImages || currentImagePosition < 0) {
      return;
    }

    const nextPosition =
      currentImagePosition === imageProjectIndexes.length - 1
        ? 0
        : currentImagePosition + 1;
    setDialogProjectIndex(imageProjectIndexes[nextPosition]);
  };

  useEffect(() => {
    if (!isDialogOpen) {
      return undefined;
    }

    const { overflow } = document.body.style;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDialogOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDialogOpen]);

  const openProjectPage = () => {
    if (currentDialogProject.type !== "project") {
      return;
    }

    setIsDialogOpen(false);
    navigate(currentDialogProject.pagePath);
  };

  return (
    <>
      <article className="group relative isolate overflow-visible rounded-[1rem] text-left hover:z-20">
        {project.imageSrc ? (
          <button
            type="button"
            aria-label={`Open ${project.title}`}
            aria-haspopup="dialog"
            className="button-unstyled relative block w-full cursor-pointer overflow-hidden rounded-[1rem] border border-[rgba(var(--ink-rgb),0.16)] bg-[linear-gradient(160deg,rgba(var(--sea-rgb),0.22)_0%,rgba(var(--sun-rgb),0.18)_100%)] p-0 text-left shadow-[0_10px_22px_rgba(var(--ink-rgb),0.12)] transition-shadow duration-300 hover:shadow-[0_22px_42px_rgba(var(--ink-rgb),0.22)]"
            onMouseEnter={(event) =>
              setCursorPosition({ x: event.clientX, y: event.clientY })
            }
            onMouseMove={(event) =>
              setCursorPosition({ x: event.clientX, y: event.clientY })
            }
            onMouseLeave={() => setCursorPosition(null)}
            onClick={() => {
              setDialogProjectIndex(projectIndex);
              setIsDialogOpen(true);
            }}
          >
            <img
              src={project.thumbnailSrc ?? project.imageSrc}
              alt={project.imageAlt ?? `Project ${projectIndex + 1}`}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="h-[220px] w-full object-cover"
            />
          </button>
        ) : (
          <div className="flex h-[220px] w-full flex-col items-center justify-center gap-2 rounded-[1rem] border border-[rgba(var(--ink-rgb),0.16)] bg-[linear-gradient(160deg,rgba(var(--sea-rgb),0.22)_0%,rgba(var(--sun-rgb),0.18)_100%)] px-4 text-center shadow-[0_10px_22px_rgba(var(--ink-rgb),0.12)] transition-shadow duration-300 group-hover:shadow-[0_22px_42px_rgba(var(--ink-rgb),0.22)]">
            <span className="rounded-full border border-[rgba(var(--ink-rgb),0.25)] px-3 py-1 text-xs font-semibold tracking-[0.08em] uppercase">
              Image Placeholder
            </span>
            <p className="m-0 text-sm text-[rgba(var(--ink-rgb),0.75)]">
              Upload your project image later
            </p>
          </div>
        )}

        {cursorPosition ? (
          <div
            className="pointer-events-none fixed z-[70] rounded-md bg-[var(--colors-Primary-dark-green)] px-3 py-1.5 text-sm font-semibold text-[var(--colors-Primary-white)] shadow-[0_10px_20px_rgba(var(--colors-Primary-black-rgb),0.28)]"
            style={{
              left: `${cursorPosition.x + 14}px`,
              top: `${cursorPosition.y + 14}px`,
            }}
          >
            <span className="text-xs font-semibold tracking-[0.04em] uppercase">
              {project.title}
            </span>
          </div>
        ) : null}
      </article>

      {isDialogOpen && currentDialogProject.imageSrc ? (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(var(--colors-Primary-black-rgb),0.68)] p-4"
          onClick={() => setIsDialogOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative w-[75vw] max-w-[75vw] bg-transparent"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-3">
              {canNavigateImages ? (
                <button
                  type="button"
                  aria-label="Show previous image"
                  className="button-unstyled flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(var(--colors-Primary-black-rgb),0.55)] p-0 text-[1.6rem] leading-none text-[var(--colors-Primary-white)]"
                  onClick={showPreviousImage}
                >
                  <span className="block leading-none">&#8249;</span>
                </button>
              ) : null}

              <div className="relative inline-block">
                <button
                  type="button"
                  aria-label="Close dialog"
                  className="button-unstyled absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-[rgba(var(--colors-Primary-black-rgb),0.62)] p-2"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <img
                    src={closeIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                  />
                </button>

                <img
                  src={currentDialogProject.imageSrc}
                  alt={
                    currentDialogProject.imageAlt ??
                    `Project ${dialogProjectIndex + 1}`
                  }
                  className="block max-h-[75vh] max-w-full rounded-[0.75rem] object-contain"
                />

                <div
                  className={`absolute right-3 bottom-3 flex flex-col items-start rounded-[0.6rem] border border-[rgba(var(--colors-Primary-white-rgb),0.14)] bg-[rgba(var(--colors-Primary-black-rgb),0.7)] px-3 py-2 text-left shadow-[0_10px_24px_rgba(var(--colors-Primary-black-rgb),0.35)] backdrop-blur-sm ${currentDialogProject.type === "project" ? "max-w-[min(18rem,calc(100%-1.5rem))]" : ""}`}
                >
                  <p className="m-0 text-xs leading-tight font-semibold tracking-[0.04em] uppercase text-[var(--colors-Primary-white)] [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
                    {currentDialogProject.title}
                  </p>

                  {currentDialogProject.type === "project" ? (
                    <>
                      <p className="mt-2 mb-0 text-sm leading-5 text-[rgba(var(--colors-Primary-white-rgb),0.96)] [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
                        {currentDialogProject.shortDescription}
                      </p>

                      <button
                        type="button"
                        className="button-unstyled button-secondary mt-3 self-start"
                        onClick={openProjectPage}
                      >
                        Open Project Page
                      </button>
                    </>
                  ) : null}
                </div>
              </div>

              {canNavigateImages ? (
                <button
                  type="button"
                  aria-label="Show next image"
                  className="button-unstyled flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(var(--colors-Primary-black-rgb),0.55)] p-0 text-[1.6rem] leading-none text-[var(--colors-Primary-white)]"
                  onClick={showNextImage}
                >
                  <span className="block leading-none">&#8250;</span>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProjectCarouselCard;
