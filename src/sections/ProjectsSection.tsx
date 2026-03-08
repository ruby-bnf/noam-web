import { useMemo, useState } from "react";
import { projectsSectionContent } from "../constants/content";

type ProjectItem = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  year: string;
  medium: string;
  detail: string;
};

type ProjectsSectionProps = {
  featuredProjects: ProjectItem[];
};

function ProjectsSection({ featuredProjects }: ProjectsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleIndexes = useMemo(
    () =>
      Array.from(
        { length: Math.min(3, featuredProjects.length) },
        (_, offset) => (activeIndex + offset) % featuredProjects.length,
      ),
    [activeIndex, featuredProjects],
  );

  const showPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  if (featuredProjects.length === 0) {
    return (
      <section
        id="projects"
        className="flex min-h-screen snap-start flex-col justify-center gap-5 bg-[radial-gradient(circle_at_20%_15%,rgba(var(--sun-rgb),0.24),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(var(--sea-rgb),0.2),transparent_50%),linear-gradient(135deg,#fff9ef_0%,#f2efe7_40%,#ecf2f3_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] font-semibold tracking-[0.08em] uppercase">
            Projects
          </h2>
          <p className="mt-3 max-w-[70ch] text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.65] text-[rgba(var(--colors-Primary-dark-green-rgb),0.88)]">
            {projectsSectionContent.body}
          </p>
        </div>
        <p className="max-w-[45ch] rounded-[1rem] border border-black/10 bg-[rgba(var(--cream-rgb),0.85)] p-4 leading-[1.6]">
          Add projects in `App.tsx` to show your carousel here.
        </p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="flex min-h-screen snap-start flex-col justify-center gap-5 bg-[radial-gradient(circle_at_20%_15%,rgba(var(--sun-rgb),0.24),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(var(--sea-rgb),0.2),transparent_50%),linear-gradient(135deg,#fff9ef_0%,#f2efe7_40%,#ecf2f3_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] font-semibold tracking-[0.08em] uppercase">
          Projects
        </h2>
        <p className="mt-3 max-w-[70ch] text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.65] text-[rgba(var(--colors-Primary-dark-green-rgb),0.88)]">
          {projectsSectionContent.body}
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-4 rounded-[1.4rem] border border-black/10 bg-[rgba(var(--cream-rgb),0.88)] p-4 shadow-[0_12px_28px_rgba(var(--ink-rgb),0.12)] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-5 md:p-6">
        <button
          type="button"
          onClick={showPrevious}
          className="button-unstyled inline-flex h-10 w-10 items-center justify-center self-center rounded-full border border-[rgba(var(--ink-rgb),0.25)] bg-[rgba(var(--cream-rgb),0.94)] text-lg font-semibold text-[var(--ink)] transition-transform duration-200 hover:-translate-y-0.5"
          aria-label="Show previous project"
        >
          &lt;
        </button>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleIndexes.map((projectIndex) => {
            const project = featuredProjects[projectIndex];

            return (
              <div
                key={`${project.title}-${projectIndex}`}
                className="group relative overflow-hidden rounded-[1rem] border border-[rgba(var(--ink-rgb),0.16)] bg-[linear-gradient(160deg,rgba(var(--sea-rgb),0.22)_0%,rgba(var(--sun-rgb),0.18)_100%)] text-left"
              >
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
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={showNext}
          className="button-unstyled inline-flex h-10 w-10 items-center justify-center self-center rounded-full border border-[rgba(var(--ink-rgb),0.25)] bg-[rgba(var(--cream-rgb),0.94)] text-lg font-semibold text-[var(--ink)] transition-transform duration-200 hover:-translate-y-0.5"
          aria-label="Show next project"
        >
          &gt;
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {featuredProjects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActiveIndex(index)}
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

      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <button
          type="button"
          className="mt-1 inline-flex items-center justify-center rounded-full bg-[var(--colors-Secondary-bubble-pink)] px-5 py-3 text-sm font-semibold text-[var(--colors-Primary-dark-green)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          portolio
        </button>
      </div>
    </section>
  );
}

export default ProjectsSection;
