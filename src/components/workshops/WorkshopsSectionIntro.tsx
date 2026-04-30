import { workshopsSectionContent } from "../../constants/workshopsInfo";

function WorkshopsSectionIntro() {
  return (
    <>
      <h2 className="section-title text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] tracking-[0.08em] uppercase">
        Workshops
      </h2>
      <p className="max-w-[70ch] text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.65] text-[rgba(var(--colors-Primary-dark-green-rgb),0.88)]">
        {workshopsSectionContent.intro}
      </p>
    </>
  );
}

export default WorkshopsSectionIntro;
