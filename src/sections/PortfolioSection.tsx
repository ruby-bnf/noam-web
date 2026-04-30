import PortfolioCarousel from "../components/portfolio/PortfolioCarousel";
import PortfolioEmptyState from "../components/portfolio/PortfolioEmptyState";
import PortfolioSectionIntro from "../components/portfolio/PortfolioSectionIntro";
import type { ProjectItem } from "../components/portfolio/types";

type PortfolioSectionProps = {
  featuredProjects: ProjectItem[];
};

function PortfolioSection({ featuredProjects }: PortfolioSectionProps) {
  if (featuredProjects.length === 0) {
    return (
      <section
        id="portfolio"
        className="flex h-screen snap-start flex-col justify-center gap-3 bg-[radial-gradient(circle_at_18%_14%,rgba(var(--sun-rgb),0.12),transparent_42%),radial-gradient(circle_at_82%_82%,rgba(var(--sea-rgb),0.1),transparent_46%),linear-gradient(135deg,#fffdf7_0%,#fbf7ef_42%,#f7f5ef_100%)] pt-16 pb-6 md:pt-20 md:pb-8"
      >
        <div className="px-[clamp(1.25rem,4vw,5rem)]">
          <PortfolioSectionIntro />
        </div>
        <div className="px-[clamp(1.25rem,4vw,5rem)]">
          <PortfolioEmptyState />
        </div>
      </section>
    );
  }

  return (
    <section
      id="portfolio"
      className="flex h-screen snap-start flex-col justify-center gap-3 bg-[radial-gradient(circle_at_18%_14%,rgba(var(--sun-rgb),0.12),transparent_42%),radial-gradient(circle_at_82%_82%,rgba(var(--sea-rgb),0.1),transparent_46%),linear-gradient(135deg,#fffdf7_0%,#fbf7ef_42%,#f7f5ef_100%)] pt-16 pb-6 md:pt-20 md:pb-8"
    >
      <div className="px-[clamp(1.25rem,4vw,5rem)]">
        <PortfolioSectionIntro />
      </div>
      <PortfolioCarousel projects={featuredProjects} />

      <div className="px-[clamp(1.25rem,4vw,5rem)]">
        <div className="mx-auto flex w-full max-w-6xl justify-center">
          <button type="button" className="button-secondary mt-1">
            Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
