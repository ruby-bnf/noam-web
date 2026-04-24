import { useState } from "react";
import ProjectCarouselCard from "./ProjectCarouselCard";
import ProjectCarouselNavButton from "./ProjectCarouselNavButton";
import type { ProjectItem } from "./types";

type PortfolioCarouselProps = {
  projects: ProjectItem[];
};

function PortfolioCarousel({ projects }: PortfolioCarouselProps) {
  // Start at index 1 so pic 1 peeks on the left, pic 2 is centered, pic 3 peeks on the right
  const [activeIndex, setActiveIndex] = useState(projects.length > 1 ? 1 : 0);

  const showPrevious = () => {
    setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  };

  const showNext = () => {
    setActiveIndex((i) => (i + 1) % projects.length);
  };

  // Each card is 50% wide → center fully visible + 25% peeks on each side
  const translateX = `calc(${25 - activeIndex * 50}%)`;

  const activeProject = projects[activeIndex];
  const hasTitle = Boolean(activeProject.title?.trim());
  const hasDescription =
    activeProject.type === "project" &&
    Boolean(activeProject.shortDescription?.trim());

  return (
    <div className="flex flex-col gap-2">
      {/* Carousel track */}
      {/* Carousel track — full viewport width, breaks out of section padding */}
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX})` }}
        >
          {projects.map((project, i) => {
            const isCenter = i === activeIndex;
            return (
              <div
                key={`${project.title}-${i}`}
                className="w-1/2 flex-shrink-0 px-3 transition-all duration-500"
                style={{
                  opacity: isCenter ? 1 : 0.45,
                  transform: isCenter ? "scale(1)" : "scale(0.93)",
                }}
              >
                <ProjectCarouselCard
                  project={project}
                  projectIndex={i}
                  projects={projects}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption */}
      <div className="mx-auto flex min-h-[3.5rem] w-[calc(50vw-1.5rem)] flex-col justify-start">
        <span className="text-[clamp(0.95rem,1.35vw,1.2rem)] font-semibold leading-[1.2]">
          {hasTitle ? activeProject.title : " "}
        </span>
        {hasDescription && (
          <p className="mt-0.5 text-[clamp(0.8rem,0.95vw,0.95rem)] leading-[1.45] text-[rgba(var(--ink-rgb),0.7)]">
            {activeProject.shortDescription}
          </p>
        )}
      </div>

      {/* Navigation — centered */}
      <div className="flex w-full items-center justify-center gap-2">
        <ProjectCarouselNavButton
          label="Show previous project"
          direction="previous"
          onClick={showPrevious}
        />

        <div className="flex gap-1.5">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`button-unstyled h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-5 bg-[var(--ink)]"
                  : "w-1.5 bg-[rgba(var(--ink-rgb),0.3)]"
              }`}
            />
          ))}
        </div>

        <ProjectCarouselNavButton
          label="Show next project"
          direction="next"
          onClick={showNext}
        />
      </div>
    </div>
  );
}

export default PortfolioCarousel;
