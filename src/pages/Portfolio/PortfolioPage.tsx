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
    <div className="flex min-h-screen flex-col bg-white text-dark-green">
      <SiteNav />

      <main className="mx-auto w-full max-w-7xl flex-1 px-[clamp(1.25rem,4vw,5rem)] pt-8 sm:pt-10">
        <ProjectDetails
          selectedProject={selectedProject}
          projectDetailsRef={projectDetailsRef}
          onClose={() => setSelectedProject(null)}
        />
        <div className="max-w-3xl pt-8 sm:pt-10">
          <p className="subtitle pb-2">Comic Art and Illustrations</p>
          <h1 className="header-title m-0">Portfolio</h1>
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
                className="button-unstyled group relative block aspect-[4/5] overflow-hidden bg-white"
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
                  className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/[0.48] group-focus-visible:bg-black/[0.48]"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
                  <p className="body-text m-0 translate-y-2 text-center font-semibold tracking-[0.03em] text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
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
