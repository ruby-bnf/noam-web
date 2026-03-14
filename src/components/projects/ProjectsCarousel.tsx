import { useMemo, useState } from "react";
import ProjectCarouselCard from "./ProjectCarouselCard";
import ProjectCarouselIndicators from "./ProjectCarouselIndicators";
import ProjectCarouselNavButton from "./ProjectCarouselNavButton";
import type { ProjectItem } from "./types";

type ProjectsCarouselProps = {
  projects: ProjectItem[];
};

function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleIndexes = useMemo(
    () =>
      Array.from(
        { length: Math.min(3, projects.length) },
        (_, offset) => (activeIndex + offset) % projects.length,
      ),
    [activeIndex, projects],
  );

  const showPrevious = () => {
    setActiveIndex((previousIndex) =>
      previousIndex === 0 ? projects.length - 1 : previousIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((previousIndex) => (previousIndex + 1) % projects.length);
  };

  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl gap-4 rounded-[1.4rem] border border-black/10 bg-[rgba(var(--cream-rgb),0.88)] p-4 shadow-[0_12px_28px_rgba(var(--ink-rgb),0.12)] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-5 md:p-6">
        <ProjectCarouselNavButton
          label="Show previous project"
          direction="previous"
          onClick={showPrevious}
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleIndexes.map((projectIndex) => {
            const project = projects[projectIndex];

            return (
              <ProjectCarouselCard
                key={`${project.title}-${projectIndex}`}
                project={project}
                projectIndex={projectIndex}
              />
            );
          })}
        </div>

        <ProjectCarouselNavButton
          label="Show next project"
          direction="next"
          onClick={showNext}
        />
      </div>

      <ProjectCarouselIndicators
        activeIndex={activeIndex}
        projects={projects}
        onSelect={setActiveIndex}
      />
    </>
  );
}

export default ProjectsCarousel;