import type { ProjectItem } from "./types";

type ProjectCarouselCardProps = {
  project: ProjectItem;
  projectIndex: number;
};

function ProjectCarouselCard({
  project,
  projectIndex,
}: ProjectCarouselCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1rem] border border-[rgba(var(--ink-rgb),0.16)] bg-[linear-gradient(160deg,rgba(var(--sea-rgb),0.22)_0%,rgba(var(--sun-rgb),0.18)_100%)] text-left">
      {project.imageSrc ? (
        <img
          src={project.imageSrc}
          alt={project.imageAlt ?? `Project ${projectIndex + 1}`}
          className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-[220px] w-full flex-col items-center justify-center gap-2 px-4 text-center">
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