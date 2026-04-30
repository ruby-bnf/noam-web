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

  const translateX = `calc((100% - var(--slide-width)) / 2 - ${activeIndex} * var(--slide-width))`;

  return (
    <div className="flex flex-col gap-2 overflow-x-hidden">
      {/* Carousel track */}
      {/* Carousel track — full viewport width, breaks out of section padding */}
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden [--slide-width:86%] md:[--slide-width:50%]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX})` }}
        >
          {projects.map((project, i) => {
            const isCenter = i === activeIndex;
            const projectTitle = project.title?.trim() ? project.title : " ";
            return (
              <div
                key={`${project.title}-${i}`}
                className="w-[var(--slide-width)] flex-shrink-0 px-2 transition-all duration-500 md:px-6"
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

                <div className="mt-2 min-h-[2rem]">
                  <span className="text-[clamp(0.95rem,1.35vw,1.2rem)] font-semibold leading-[1.2]">
                    {projectTitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
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
