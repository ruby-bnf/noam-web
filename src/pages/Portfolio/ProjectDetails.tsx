import type { PortfolioProject } from "./portfolioProjects";
import closeIcon from "../../assets/icons/closeIcon.svg";

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
      <div className="grid grid-cols-1 gap-5 border border-[rgba(var(--colors-Primary-dark-green-rgb),0.12)] bg-[rgba(var(--colors-Primary-white-rgb),0.72)] p-4 sm:p-6 lg:grid-cols-[1.5fr_0.7fr] lg:items-start">
        <div className="flex flex-col gap-3">
          {selectedProject.image.map((imageSrc, index) => (
            <div
              key={`${selectedProject.title}-${index}`}
              className="overflow-hidden bg-[var(--colors-Primary-white)]"
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

        <div className="min-w-0 flex flex-col">
          <button
            type="button"
            onClick={onClose}
            className="mb-2 self-end p-2 bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Close project details"
            title="Close"
            style={{ background: "none" }}
          >
            <img src={closeIcon} alt="Close" width="24" height="24" />
          </button>
          <p className="m-0 text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[rgba(var(--colors-Primary-dark-green-rgb),0.65)]">
            {selectedProject.category}
          </p>
          <h2 className="m-0 pt-2 text-[clamp(1.6rem,2.4vw,2.4rem)] leading-[1.02] tracking-[0.03em] uppercase text-[rgba(var(--colors-Primary-dark-green-rgb),1)]">
            {selectedProject.title}
          </h2>
          <p className="m-0 pt-4 text-[clamp(0.98rem,1.1vw,1.08rem)] leading-[1.7] text-[rgba(var(--colors-Primary-dark-green-rgb),0.84)]">
            {selectedProject.summary}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
