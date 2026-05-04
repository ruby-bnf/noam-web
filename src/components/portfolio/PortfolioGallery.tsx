import { useState } from "react";
import { projectsSectionContent } from "../../constants/content";

type PortfolioGalleryImage = {
  src: string;
  alt: string;
};

type PortfolioGalleryProps = {
  images: PortfolioGalleryImage[];
};

const expandedDesktopGrow = 2;
const collapsedDesktopGrow = 0.75;
const restingDesktopGrow = 0.72;
const restingFeaturedGrow = 1.25;

function PortfolioGallery({ images }: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const getDesktopGrow = (index: number) => {
    if (hoveredIndex !== null) {
      return hoveredIndex === index
        ? expandedDesktopGrow
        : collapsedDesktopGrow;
    }

    if (activeIndex === null) {
      return restingDesktopGrow;
    }

    return index === activeIndex ? restingFeaturedGrow : restingDesktopGrow;
  };

  const handlePanelClick = (index: number) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section
      id="portfolio-gallery"
      className="relative flex min-h-screen snap-start items-center bg-white px-[clamp(1.25rem,4vw,5rem)] pt-20 pb-10"
    >
      <div className="mx-auto grid min-h-[calc(100vh-7.5rem)] w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="order-2 min-h-[24rem] lg:order-1 lg:min-h-full">
          <div className="flex h-full flex-col overflow-hidden bg-[rgba(255,255,255,0.52)] md:flex-row md:flex-nowrap md:gap-0">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => handlePanelClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                className="button-unstyled group relative isolate min-w-0 overflow-hidden text-left transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] md:h-full"
                style={{ flexBasis: 0, flexGrow: getDesktopGrow(index) }}
                aria-expanded={activeIndex === index}
                aria-label={`Reveal featured work ${image.alt}`}
              >
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out md:h-full md:max-h-none md:opacity-100 ${
                    activeIndex === index
                      ? "max-h-[20rem] opacity-100"
                      : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                  }`}
                >
                  <div className="aspect-[4/5] md:h-full md:aspect-auto">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full object-cover transition-all duration-500 ease-out ${
                        hoveredIndex === index
                          ? "scale-100 opacity-100 md:saturate-[1.08] md:contrast-[1.03]"
                          : "scale-100 opacity-100 md:saturate-100 md:grayscale-0"
                      }`}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <div className="max-w-xl space-y-6 lg:ml-auto">
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
      </div>
    </section>
  );
}

export default PortfolioGallery;
