import { useRef } from "react";
import CAT3 from "../assets/PortfolioThumbnails/CAT3.png";
import KangarooP2 from "../assets/PortfolioThumbnails/Kangaroo-p-2.png";
import OliverMap from "../assets/PortfolioThumbnails/OliverMap.png";
import OliverPoop from "../assets/PortfolioThumbnails/OliverPoop.png";

const galleryImages = [KangarooP2, CAT3, OliverMap, OliverPoop];

function PortfolioSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector<HTMLElement>(
        "[data-gallery-card='true']",
      );
      const scrollAmount = firstCard
        ? firstCard.offsetWidth + 16
        : Math.max(
            260,
            Math.round(scrollContainerRef.current.clientWidth * 0.9),
          );
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="portfolio-gallery"
      className="relative flex min-h-screen w-full snap-start items-center overflow-x-hidden bg-white px-[clamp(1.25rem,4vw,5rem)] py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8">
          <h2 className="section-title text-[clamp(2rem,3.6vw,3.8rem)] leading-[0.98] tracking-[0.05em] uppercase">
            Recent Works
          </h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => scroll("left")}
            className="z-10 shrink-0 rounded-full bg-[rgba(var(--ink-rgb),0.1)] p-2 transition-colors duration-300 hover:bg-[rgba(var(--ink-rgb),0.2)] sm:p-3"
            aria-label="Scroll gallery left"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {galleryImages.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  data-gallery-card="true"
                  className="h-[22rem] w-full snap-start flex-shrink-0 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg sm:h-96 sm:w-[clamp(14rem,20vw,18rem)]"
                >
                  <img
                    src={image}
                    alt={`Gallery item ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll("right")}
            className="z-10 shrink-0 rounded-full bg-[rgba(var(--ink-rgb),0.1)] p-2 transition-colors duration-300 hover:bg-[rgba(var(--ink-rgb),0.2)] sm:p-3"
            aria-label="Scroll gallery right"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex justify-center">
          <a href="/#portfolio-gallery" className="button-primary">
            Go To Recent Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
