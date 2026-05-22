import ContentCard from "../components/ContentCard";
import { workshopsSectionContent } from "../constants/workshopsInfo";

function WorkshopsSection() {
  const sortedWorkshops = [...workshopsSectionContent.workshops].sort(
    (a, b) => {
      if (a.status === b.status) return 0;
      if (a.status === "new") return -1;
      if (b.status === "new") return 1;
      return 0;
    },
  );

  return (
    <section
      id="workshops"
      className="relative flex min-h-screen snap-start flex-col justify-center gap-6 overflow-hidden bg-red px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6">
        <h2 className="header-title !text-blue">Workshops</h2>
        <p className="body-text max-w-[70ch]">
          {workshopsSectionContent.intro}
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] justify-center gap-4">
          {sortedWorkshops.map((workshop) => (
            <ContentCard
              key={workshop.title}
              title={workshop.title}
              description={workshop.description}
              picture={workshop.thumbnail}
              status={workshop.status}
              href={`/workshops?selected=${encodeURIComponent(workshop.title)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopsSection;
