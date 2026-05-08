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
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="portfolio-gallery"
      className="relative w-full flex min-h-screen snap-start items-center bg-white px-[clamp(1.25rem,4vw,5rem)] py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8">
          <h2 className="section-title text-[clamp(2rem,3.6vw,3.8rem)] leading-[0.98] tracking-[0.05em] uppercase">
            Recent Works
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {galleryImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-[rgba(var(--ink-rgb),0.1)] hover:bg-[rgba(var(--ink-rgb),0.2)] rounded-full p-3 transition-colors duration-300"
            aria-label="Scroll gallery left"
          >
            <svg
              className="w-6 h-6"
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

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-[rgba(var(--ink-rgb),0.1)] hover:bg-[rgba(var(--ink-rgb),0.2)] rounded-full p-3 transition-colors duration-300"
            aria-label="Scroll gallery right"
          >
            <svg
              className="w-6 h-6"
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
