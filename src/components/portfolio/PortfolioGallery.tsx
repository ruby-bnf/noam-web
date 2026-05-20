import { useState } from "react";
import { useNavigate } from "react-router-dom";

type PortfolioGalleryProps = {
  images: string[];
  projectTitles?: string[];
};

const expandedDesktopGrow = 2;
const collapsedDesktopGrow = 0.75;
const restingDesktopGrow = 0.72;
const restingFeaturedGrow = 1.25;

function PortfolioGallery({ images, projectTitles }: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const navigate = useNavigate();

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
    const title = projectTitles?.[index];
    if (title) {
      navigate("/portfolio", { state: { selectedProjectTitle: title } });
      return;
    }
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-white/[0.52] md:flex-row md:flex-nowrap md:gap-0">
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
            className={`overflow-hidden transition-all duration-500 ease-out max-h-[20rem] opacity-100 md:h-full md:max-h-none md:opacity-100 ${
              activeIndex === index
                ? "md:max-h-[20rem] md:opacity-100"
                : "md:max-h-0 md:opacity-0"
            }`}
          >
            <div className="aspect-[4/5] md:h-full md:aspect-auto">
              <img
                src={image}
                alt="Portfolio work"
                loading="lazy"
                decoding="async"
                className={`h-full w-full scale-125 object-cover transition-all duration-500 ease-out ${
                  hoveredIndex === index
                    ? "md:saturate-[1.08] md:contrast-[1.03]"
                    : "md:saturate-100 md:grayscale-0"
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
