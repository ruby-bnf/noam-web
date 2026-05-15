import ContentCard from "../components/ContentCard";
import { workshopsSectionContent } from "../constants/workshopsInfo";

function WorkshopsSection() {
  return (
    <section
      id="workshops"
      className="relative flex min-h-screen snap-start flex-col justify-center gap-6 overflow-hidden bg-[var(--red-default)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-5">
        <h2
          className="section-title text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] tracking-[0.08em] uppercase"
          style={{ color: "var(--secondary-blue)" }}
        >
          Workshops
        </h2>
        <p className="max-w-[70ch] text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.65] text-[var(--colors-Primary-dark-green)]">
          {workshopsSectionContent.intro}
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,17rem))] justify-center gap-4">
          {workshopsSectionContent.workshops.map((workshop) => (
            <ContentCard
              key={workshop.title}
              title={workshop.title}
              description={workshop.description}
              picture={workshop.thumbnail}
              status={workshop.status}
              href="/contact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopsSection;
