import type { ProjectItem } from "./types";

type ProjectCarouselCardProps = {
  project: ProjectItem;
  projectIndex: number;
  projects: ProjectItem[];
};

function ProjectCarouselCard({
  project,
  projectIndex,
  projects: _projects,
}: ProjectCarouselCardProps) {
  return (
    <article className="relative isolate overflow-visible rounded-[1rem] text-left">
      {project.imageSrc ? (
        <div className="relative block w-full overflow-hidden bg-[linear-gradient(160deg,rgba(var(--sea-rgb),0.22)_0%,rgba(var(--sun-rgb),0.18)_100%)] p-0 text-left shadow-[0_10px_22px_rgba(var(--ink-rgb),0.12)]">
          <img
            src={project.thumbnailSrc ?? project.imageSrc}
            alt={project.imageAlt ?? `Project ${projectIndex + 1}`}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="aspect-[3/2] w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-[3/2] w-full flex-col items-center justify-center gap-2 rounded-[1rem] border border-[rgba(var(--ink-rgb),0.16)] bg-[linear-gradient(160deg,rgba(var(--sea-rgb),0.22)_0%,rgba(var(--sun-rgb),0.18)_100%)] px-4 text-center shadow-[0_10px_22px_rgba(var(--ink-rgb),0.12)]">
          <span className="rounded-full border border-[rgba(var(--ink-rgb),0.25)] px-3 py-1 text-xs font-semibold tracking-[0.08em] uppercase">
            Image Placeholder
          </span>
          <p className="m-0 text-sm text-[rgba(var(--ink-rgb),0.75)]">
            Upload your project image later
          </p>
        </div>
      )}
    </article>
  );
}

export default ProjectCarouselCard;
