import type { ProjectItem } from "./types";

type ProjectCarouselIndicatorsProps = {
  activeIndex: number;
  projects: ProjectItem[];
  onSelect: (index: number) => void;
};

function ProjectCarouselIndicators({
  activeIndex,
  projects,
  onSelect,
}: ProjectCarouselIndicatorsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {projects.map((project, index) => (
        <button
          key={project.title}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Go to ${project.title}`}
          aria-current={activeIndex === index}
          className={`button-unstyled h-2.5 rounded-full transition-all duration-200 ${
            activeIndex === index
              ? "w-8 bg-[var(--ink)]"
              : "w-2.5 bg-[rgba(var(--ink-rgb),0.35)]"
          }`}
        />
      ))}
    </div>
  );
}

export default ProjectCarouselIndicators;