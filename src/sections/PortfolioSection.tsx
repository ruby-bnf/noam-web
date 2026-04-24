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
        className="flex h-screen snap-start flex-col justify-center gap-3 bg-[radial-gradient(circle_at_20%_15%,rgba(var(--sun-rgb),0.24),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(var(--sea-rgb),0.2),transparent_50%),linear-gradient(135deg,#fff9ef_0%,#f2efe7_40%,#ecf2f3_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-16 pb-6 md:pt-20 md:pb-8"
      >
        <PortfolioSectionIntro />
        <PortfolioEmptyState />
      </section>
    );
  }

  return (
    <section
      id="portfolio"
      className="flex h-screen snap-start flex-col justify-center gap-3 bg-[radial-gradient(circle_at_20%_15%,rgba(var(--sun-rgb),0.24),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(var(--sea-rgb),0.2),transparent_50%),linear-gradient(135deg,#fff9ef_0%,#f2efe7_40%,#ecf2f3_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-16 pb-6 md:pt-20 md:pb-8"
    >
      <PortfolioSectionIntro />
      <PortfolioCarousel projects={featuredProjects} />

      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <button type="button" className="button-secondary mt-1">
          Portfolio
        </button>
      </div>
    </section>
  );
}

export default PortfolioSection;
