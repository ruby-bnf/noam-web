import { useRef, useState } from "react";
import SiteNav from "../components/SiteNav";
import Footer from "../sections/Footer";

import ComicCat from "../assets/PortfolioThumbnails/Comic/cat-p1.png";
import ComicKangaroo from "../assets/PortfolioThumbnails/Comic/Kangarp-2.png";
import ComicOliver from "../assets/PortfolioThumbnails/Comic/oliver.png";
import ComicTomato from "../assets/PortfolioThumbnails/Comic/Tomato-factory.png";
import CAT3 from "../assets/PortfolioThumbnails/scrollGallery/CAT3.png";
import KangarooP1 from "../assets/PortfolioThumbnails/scrollGallery/Kangaroo-p-1.png";
import KangarooP2 from "../assets/PortfolioThumbnails/scrollGallery/Kangaroo-p-2.png";
import OliverMap from "../assets/PortfolioThumbnails/scrollGallery/OliverMap.png";
import OliverPoop from "../assets/PortfolioThumbnails/scrollGallery/OliverPoop.png";

type PortfolioProject = {
  title: string;
  category: string;
  summary: string;
  image: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    title: "Kangaroo Journey",
    category: "Comic",
    summary:
      "A playful narrative sequence that follows a curious kangaroo character through dramatic panels and energetic pacing.",
    image: ComicKangaroo,
  },
  {
    title: "Cat Story Panel",
    category: "Comic",
    summary:
      "Character-focused storytelling with expressive poses and contrast-driven composition to guide the eye.",
    image: ComicCat,
  },
  {
    title: "Oliver Portrait Scene",
    category: "Illustration",
    summary:
      "An illustrative scene centered on texture and shape language, balancing warmth with strong silhouette design.",
    image: ComicOliver,
  },
  {
    title: "Tomato Factory",
    category: "Comic",
    summary:
      "A busy environment piece packed with visual details and rhythmic panel flow inspired by editorial comics.",
    image: ComicTomato,
  },
  {
    title: "Kangaroo Opening",
    category: "Storyboard",
    summary:
      "An opening frame that establishes motion and scale, combining clean line work with atmospheric color.",
    image: KangarooP1,
  },
  {
    title: "Kangaroo Continuation",
    category: "Storyboard",
    summary:
      "Continuation scene emphasizing momentum, with directional composition used to pull attention across the frame.",
    image: KangarooP2,
  },
  {
    title: "CAT3 Study",
    category: "Character Study",
    summary:
      "A focused character exploration that tests mood, expression, and personality through minimal staging.",
    image: CAT3,
  },
  {
    title: "Oliver Map",
    category: "Visual Development",
    summary:
      "A world-building artwork that layers iconography and location cues to suggest story context and journey.",
    image: OliverMap,
  },
  {
    title: "Oliver Poop",
    category: "Humor Illustration",
    summary:
      "A comedic beat illustration designed around timing, exaggeration, and readable character acting.",
    image: OliverPoop,
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
    <div className="flex min-h-screen flex-col bg-[linear-gradient(165deg,#fff9ef_0%,#f4efe4_44%,#edf2f0_100%)] text-[var(--ink)]">
      <SiteNav />

      <main className="mx-auto w-full max-w-7xl flex-1 px-[clamp(1.25rem,4vw,5rem)] pt-28 pb-0 sm:pt-32">
        <div className="max-w-3xl">
          <p className="m-0 pb-2 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[rgba(var(--ink-rgb),0.72)]">
            Portfolio
          </p>
          <h1 className="section-title m-0 text-[clamp(2.2rem,4.2vw,4.25rem)] leading-[0.95] tracking-[0.04em] uppercase text-[rgba(var(--ink-rgb),1)]">
            Gallery
          </h1>
          <p className="m-0 pt-4 text-[clamp(0.98rem,1.1vw,1.12rem)] leading-[1.72] text-[rgba(var(--ink-rgb),0.82)]">
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
            <div className="grid grid-cols-1 gap-5 border border-[rgba(var(--ink-rgb),0.12)] bg-[rgba(255,255,255,0.72)] p-4 sm:p-6 lg:grid-cols-[1.15fr_1fr] lg:items-start">
              <div className="min-w-0">
                <p className="m-0 text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[rgba(var(--ink-rgb),0.65)]">
                  {selectedProject.category}
                </p>
                <h2 className="m-0 pt-2 text-[clamp(1.6rem,2.4vw,2.4rem)] leading-[1.02] tracking-[0.03em] uppercase text-[rgba(var(--ink-rgb),1)]">
                  {selectedProject.title}
                </h2>
                <p className="m-0 pt-4 text-[clamp(0.98rem,1.1vw,1.08rem)] leading-[1.7] text-[rgba(var(--ink-rgb),0.84)]">
                  {selectedProject.summary}
                </p>
              </div>

              <div className="overflow-hidden bg-white">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
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
                key={`${project.image}-${index}`}
                type="button"
                onClick={() => handleProjectSelect(project)}
                className="button-unstyled group relative block aspect-[4/5] overflow-hidden bg-white"
                aria-label={`Show details for ${project.title}`}
              >
                <img
                  src={project.image}
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
