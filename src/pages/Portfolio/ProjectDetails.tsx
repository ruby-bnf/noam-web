import { useEffect, useState } from "react";
import type { PortfolioProject } from "./portfolioProjects";

type ProjectDetailsProps = {
  selectedProject: PortfolioProject | null;
  projectDetailsRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
};

function ProjectDetails({
  selectedProject,
  projectDetailsRef,
  onClose,
}: ProjectDetailsProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const imageCount = selectedProject?.image.length ?? 0;
  const isLightboxOpen = lightboxIndex !== null;

  useEffect(() => {
    if (!isLightboxOpen || imageCount === 0) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }

      if (imageCount > 1 && event.key === "ArrowLeft") {
        setLightboxIndex((current) =>
          current === null ? 0 : (current - 1 + imageCount) % imageCount,
        );
      }

      if (imageCount > 1 && event.key === "ArrowRight") {
        setLightboxIndex((current) =>
          current === null ? 0 : (current + 1) % imageCount,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageCount, isLightboxOpen]);

  const showPreviousImage = () => {
    setLightboxIndex((current) =>
      current === null ? 0 : (current - 1 + imageCount) % imageCount,
    );
  };

  const showNextImage = () => {
    setLightboxIndex((current) =>
      current === null ? 0 : (current + 1) % imageCount,
    );
  };

  if (!selectedProject) return null;

  return (
    <section
      ref={projectDetailsRef}
      className="pt-8 sm:pt-10"
      aria-label="Selected project details"
    >
      <div className="grid grid-cols-1 gap-5 backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-4 sm:p-6 lg:grid-cols-[1.35fr_0.85fr] lg:items-start shadow-xl">
        <div className="min-w-0 flex flex-col lg:order-last">
          <button
            type="button"
            onClick={onClose}
            className="mb-2 self-end navigation-button button-unstyled"
            aria-label="Close project details"
            title="Close"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="subtitle text-dark-green/[0.65]">
            {selectedProject.category}
          </p>
          <h2 className="header-title m-0 pt-2 break-normal [overflow-wrap:normal] [word-break:normal]">
            {selectedProject.title}
          </h2>
          <p className="body-text m-0 pt-2 whitespace-pre-wrap break-words">
            {selectedProject.summary}
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:order-first">
          {selectedProject.image.map((imageSrc, index) => (
            <button
              key={`${selectedProject.title}-${index}`}
              type="button"
              className="button-unstyled overflow-hidden bg-white"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open ${selectedProject.title} image ${index + 1} in full screen`}
            >
              <img
                src={imageSrc}
                alt={`${selectedProject.title} ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.01]"
              />
            </button>
          ))}
        </div>
      </div>

      {isLightboxOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-3 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} image viewer`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setLightboxIndex(null);
            }
          }}
        >
          <div
            className="relative w-full max-w-[70rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="button-unstyled absolute right-2 top-2 z-10 rounded-full border border-white/50 bg-black/35 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
              aria-label="Close image viewer"
              title="Close"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {imageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  className="button-unstyled absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-black/35 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
                  aria-label="Show previous image"
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

                <button
                  type="button"
                  onClick={showNextImage}
                  className="button-unstyled absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-black/35 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
                  aria-label="Show next image"
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
              </>
            )}

            <img
              src={selectedProject.image[lightboxIndex]}
              alt={`${selectedProject.title} ${lightboxIndex + 1}`}
              className="max-h-[88vh] w-full rounded-lg object-contain"
            />

            {imageCount > 1 && (
              <p className="subtitle m-0 pt-3 text-center !text-white/85">
                {lightboxIndex + 1} / {imageCount}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectDetails;
