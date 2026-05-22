import type { WorkshopProject } from "./workshopProjects";

const commissionFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeBOhSKgrusVzXPkv_uLjEjqTuvg0mHJdK0JS4lF6ZTQWcaQA/viewform?usp=header";

type WorkshopDetailsProps = {
  selectedWorkshop: WorkshopProject | null;
  workshopDetailsRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
};

function WorkshopDetails({
  selectedWorkshop,
  workshopDetailsRef,
  onClose,
}: WorkshopDetailsProps) {
  if (!selectedWorkshop) {
    return null;
  }

  const ctaLabel =
    selectedWorkshop.status === "closed" ? "Show interest" : "Book now";

  return (
    <section
      ref={workshopDetailsRef}
      className="pt-8 sm:pt-10"
      aria-label="Selected workshop details"
    >
      <div className="grid grid-cols-1 gap-5 rounded-2xl border border-white/30 bg-white/50 p-4 shadow-xl backdrop-blur-md sm:p-6 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
        <div className="min-w-0 flex flex-col lg:order-last">
          <button
            type="button"
            onClick={onClose}
            className="navigation-button button-unstyled mb-2 self-end"
            aria-label="Close workshop details"
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
            {selectedWorkshop.category}
          </p>
          <h2 className="header-title m-0 pt-2 break-normal [overflow-wrap:normal] [word-break:normal]">
            {selectedWorkshop.title}
          </h2>
          <p className="body-text m-0 pt-2 whitespace-pre-wrap break-words">
            {selectedWorkshop.summary}
          </p>
          <a
            href={commissionFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary mt-5 w-fit"
          >
            {ctaLabel}
          </a>
        </div>

        <div className="flex flex-col gap-3 lg:order-first">
          {selectedWorkshop.images.map((imageSrc, index) => (
            <div
              key={`${selectedWorkshop.title}-${index}`}
              className="overflow-hidden bg-white"
            >
              <img
                src={imageSrc}
                alt={`${selectedWorkshop.title} ${index + 1}`}
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

export default WorkshopDetails;
