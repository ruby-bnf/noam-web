import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { portfolioProjects } from "../pages/Portfolio/portfolioProjects";

function PortfolioSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>(
      "[data-gallery-card='true']",
    );
    const scrollAmount = firstCard
      ? firstCard.offsetWidth + 16
      : Math.max(260, Math.round(container.clientWidth * 0.9));

    if (direction === "right") {
      const atEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 2;
      if (atEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      const atStart = container.scrollLeft <= 2;
      if (atStart) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="portfolio-gallery"
      className="relative flex min-h-screen w-full snap-start items-center overflow-x-hidden bg-white px-[clamp(1.25rem,4vw,5rem)] py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8">
          <h2 className="header-title">Recent Works</h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => scroll("left")}
            className="navigation-button button-unstyled"
          >
            <svg
              width="24"
              height="24"
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
              {portfolioProjects.slice(0, 10).map((project, index) => (
                <button
                  key={`${project.title}-${index}`}
                  type="button"
                  data-gallery-card="true"
                  onClick={() =>
                    navigate("/portfolio", {
                      state: { selectedProjectTitle: project.title },
                    })
                  }
                  className="button-unstyled group relative h-[22rem] w-full snap-start flex-shrink-0 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg sm:h-96 sm:w-[clamp(14rem,20vw,18rem)]"
                  aria-label={`View ${project.title}`}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
                    <p className="subtitle !text-white m-0 translate-y-2 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {project.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll("right")}
            className="navigation-button button-unstyled"
          >
            <svg
              width="24"
              height="24"
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
          <Link to="/portfolio" className="button-primary">
            Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
