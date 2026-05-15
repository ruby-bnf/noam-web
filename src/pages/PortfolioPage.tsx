import { useRef, useState } from "react";
import SiteNav from "../components/SiteNav";
import Footer from "../sections/Footer";
import cat1 from "../assets/portfolio/Cat-story/cat1.png";
import cat2 from "../assets/portfolio/Cat-story/cat2.png";
import cat3 from "../assets/portfolio/Cat-story/cat3.png";
import cat4 from "../assets/portfolio/Cat-story/cat4.png";
import cat5 from "../assets/portfolio/Cat-story/cat5.png";

type PortfolioProject = {
  category: string;
  title: string;
  summary: string | null;
  image: string[];
};

const portfolioProjects: PortfolioProject[] = [
  {
    title: "Cat story",
    category: "Comic",
    summary:
      "A short story about the time I looked after my neighbor’s cat and ended up in a garden-to-garden chase.",
    image: [cat1, cat2, cat3, cat4, cat5],
  },
];

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

  return (
    <div className="flex min-h-screen flex-col bg-[var(--colors-Primary-white)] text-[var(--colors-Primary-dark-green)]">
      <SiteNav />

      <main className="mx-auto w-full max-w-7xl flex-1 px-[clamp(1.25rem,4vw,5rem)] pt-28 pb-0 sm:pt-32">
        <div className="max-w-3xl">
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

        {selectedProject ? (
          <section
            ref={projectDetailsRef}
            className="pt-8 sm:pt-10"
            aria-label="Selected project details"
          >
            <div className="grid grid-cols-1 gap-5 border border-[rgba(var(--colors-Primary-dark-green-rgb),0.12)] bg-[rgba(var(--colors-Primary-white-rgb),0.72)] p-4 sm:p-6 lg:grid-cols-[1.5fr_0.7fr] lg:items-start">
              <div className="flex flex-col gap-3">
                {selectedProject.image.map((imageSrc, index) => (
                  <div
                    key={`${selectedProject.title}-${index}`}
                    className="overflow-hidden bg-[var(--colors-Primary-white)]"
                  >
                    <img
                      src={imageSrc}
                      alt={`${selectedProject.title} ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="min-w-0">
                <p className="m-0 text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[rgba(var(--colors-Primary-dark-green-rgb),0.65)]">
                  {selectedProject.category}
                </p>
                <h2 className="m-0 pt-2 text-[clamp(1.6rem,2.4vw,2.4rem)] leading-[1.02] tracking-[0.03em] uppercase text-[rgba(var(--colors-Primary-dark-green-rgb),1)]">
                  {selectedProject.title}
                </h2>
                <p className="m-0 pt-4 text-[clamp(0.98rem,1.1vw,1.08rem)] leading-[1.7] text-[rgba(var(--colors-Primary-dark-green-rgb),0.84)]">
                  {selectedProject.summary}
                </p>
              </div>
            </div>
          </section>
        ) : null}

        <section
          className="pt-8 sm:pt-10"
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
                  src={project.image[0]}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
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
