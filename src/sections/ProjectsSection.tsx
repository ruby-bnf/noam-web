import ProjectsCarousel from "../components/projects/ProjectsCarousel";
import ProjectsEmptyState from "../components/projects/ProjectsEmptyState";
import ProjectsSectionIntro from "../components/projects/ProjectsSectionIntro";
import type { ProjectItem } from "../components/projects/types";

type ProjectsSectionProps = {
  featuredProjects: ProjectItem[];
};

function ProjectsSection({ featuredProjects }: ProjectsSectionProps) {
  if (featuredProjects.length === 0) {
    return (
      <section
        id="projects"
        className="flex min-h-screen snap-start flex-col justify-center gap-5 bg-[radial-gradient(circle_at_20%_15%,rgba(var(--sun-rgb),0.24),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(var(--sea-rgb),0.2),transparent_50%),linear-gradient(135deg,#fff9ef_0%,#f2efe7_40%,#ecf2f3_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
      >
        <ProjectsSectionIntro />
        <ProjectsEmptyState />
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="flex min-h-screen snap-start flex-col justify-center gap-5 bg-[radial-gradient(circle_at_20%_15%,rgba(var(--sun-rgb),0.24),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(var(--sea-rgb),0.2),transparent_50%),linear-gradient(135deg,#fff9ef_0%,#f2efe7_40%,#ecf2f3_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <ProjectsSectionIntro />
      <ProjectsCarousel projects={featuredProjects} />

      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <button
          type="button"
          className="mt-1 inline-flex items-center justify-center rounded-full bg-[var(--colors-Secondary-bubble-pink)] px-5 py-3 text-sm font-semibold text-[var(--colors-Primary-dark-green)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Portfolio
        </button>
      </div>
    </section>
  );
}

export default ProjectsSection;
