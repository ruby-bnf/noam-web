import { useState } from "react";

type PortfolioGalleryProps = {
  images: string[];
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
    <div className="flex h-full flex-col overflow-hidden bg-[rgba(255,255,255,0.52)] md:flex-row md:flex-nowrap md:gap-0">
      {images.map((image, index) => (
        <button
          key={`${image}-${index}`}
          type="button"
          onClick={() => handlePanelClick(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onFocus={() => setHoveredIndex(index)}
          onBlur={() => setHoveredIndex(null)}
          className="button-unstyled group relative isolate min-w-0 overflow-hidden text-left transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] md:h-full"
          style={{ flexBasis: 0, flexGrow: getDesktopGrow(index) }}
          aria-expanded={activeIndex === index}
          aria-label={`Reveal featured work ${index + 1}`}
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
                src={image}
                alt="Portfolio work"
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
  );
}

export default PortfolioGallery;
