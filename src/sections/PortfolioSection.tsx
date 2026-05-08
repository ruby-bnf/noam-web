import PortfolioGallery from "../components/portfolio/PortfolioGallery";
import { projectsSectionContent } from "../constants/content";

import CAT3 from "../assets/PortfolioThumbnails/CAT3.png";
import KangarooP2 from "../assets/PortfolioThumbnails/Kangaroo-p-2.png";
import OliverMap from "../assets/PortfolioThumbnails/OliverMap.png";
import OliverPoop from "../assets/PortfolioThumbnails/OliverPoop.png";

const portfolioGalleryImages = [KangarooP2, CAT3, OliverMap, OliverPoop];

function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative w-full flex min-h-screen snap-start items-center bg-white px-[clamp(1.25rem,4vw,5rem)] pt-20 pb-10"
    >
      <div className="mx-auto grid min-h-[calc(100vh-7.5rem)] w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="order-1 flex flex-col justify-center lg:order-1">
          <div className="max-w-xl space-y-6">
            <p className="m-0 inline-flex pb-1 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[rgba(var(--ink-rgb),0.72)]">
              Recent Work
            </p>

            <h2 className="section-title text-[clamp(2rem,3.6vw,3.8rem)] leading-[0.98] tracking-[0.05em] uppercase text-[rgba(var(--ink-rgb),1)]">
              <span className="block">Most</span>
              <span className="block">Recent</span>
              <span className="block">Works</span>
            </h2>

            <p className="m-0 text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.75] text-[rgba(var(--ink-rgb),0.84)]">
              {projectsSectionContent.body}
            </p>
          </div>
        </div>

        <div className="order-2 min-h-[24rem] lg:order-2 lg:min-h-full">
          <PortfolioGallery images={portfolioGalleryImages} />
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
