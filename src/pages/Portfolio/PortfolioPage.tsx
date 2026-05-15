import { useRef, useState, useEffect } from "react";
import SiteNav from "../../components/SiteNav";
import Footer from "../../sections/Footer";
import { portfolioProjects, type PortfolioProject } from "./portfolioProjects";
import ProjectDetails from "./ProjectDetails";

function PortfolioPage() {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const projectDetailsRef = useRef<HTMLElement | null>(null);

  const handleProjectSelect = (project: PortfolioProject) => {
    setSelectedProject(project);

    window.requestAnimationFrame(() => {
      projectDetailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        projectDetailsRef.current &&
        !projectDetailsRef.current.contains(event.target as Node)
      ) {
        // Check if click is outside the project details section
        const target = event.target as HTMLElement;
        // Allow clicks on gallery buttons to still work
        if (!target.closest("#portfolio-gallery-grid")) {
          setSelectedProject(null);
        }
      }
    };

    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [selectedProject]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--colors-Primary-white)] text-[var(--colors-Primary-dark-green)]">
      <SiteNav />

      <main className="mx-auto w-full max-w-7xl flex-1 px-[clamp(1.25rem,4vw,5rem)] pt-8 sm:pt-10">
        <ProjectDetails
          selectedProject={selectedProject}
          projectDetailsRef={projectDetailsRef}
          onClose={() => setSelectedProject(null)}
        />
        <div className="max-w-3xl pt-8 sm:pt-10">
          <p className="m-0 pb-2 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[rgba(var(--colors-Primary-dark-green-rgb),0.72)]">
            Portfolio
          </p>
          <h1 className="section-title m-0 text-[clamp(2.2rem,4.2vw,4.25rem)] leading-[0.95] tracking-[0.04em] uppercase text-[rgba(var(--colors-Primary-dark-green-rgb),1)]">
            Gallery
          </h1>
          <p className="m-0 pt-4 text-[clamp(0.98rem,1.1vw,1.12rem)] leading-[1.72] text-[rgba(var(--colors-Primary-dark-green-rgb),0.82)]">
            A selection of illustrations and comic snapshots. Click any image to
            open its project section at the top.
          </p>
        </div>

        <section
          className="pt-12 sm:pt-16 pb-12 sm:pb-16"
          aria-label="Portfolio image gallery"
          id="portfolio-gallery-grid"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <button
                key={`${project.title}-${index}`}
                type="button"
                onClick={() => handleProjectSelect(project)}
                className="button-unstyled group relative block aspect-[4/5] overflow-hidden bg-[var(--colors-Primary-white)]"
                aria-label={`Show details for ${project.title}`}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[rgba(var(--colors-Primary-black-rgb),0)] transition-colors duration-300 ease-out group-hover:bg-[rgba(var(--colors-Primary-black-rgb),0.48)] group-focus-visible:bg-[rgba(var(--colors-Primary-black-rgb),0.48)]"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
                  <p className="m-0 translate-y-2 text-center text-[clamp(1rem,1.3vw,1.2rem)] font-semibold tracking-[0.03em] text-[var(--colors-Primary-white)] opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {project.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default PortfolioPage;
