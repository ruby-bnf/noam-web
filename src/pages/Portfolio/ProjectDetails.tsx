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
  if (!selectedProject) return null;

  return (
    <section
      ref={projectDetailsRef}
      className="pt-8 sm:pt-10"
      aria-label="Selected project details"
    >
      <div className="grid grid-cols-1 gap-5 backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-4 sm:p-6 lg:grid-cols-[1.5fr_0.7fr] lg:items-start shadow-xl">
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
          <h2 className="header-title m-0 pt-2">{selectedProject.title}</h2>
          <p className="body-text m-0 pt-2 whitespace-pre-wrap">
            {selectedProject.summary}
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:order-first">
          {selectedProject.image.map((imageSrc, index) => (
            <div
              key={`${selectedProject.title}-${index}`}
              className="overflow-hidden bg-white"
            >
              <img
                src={imageSrc}
                alt={`${selectedProject.title} ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
