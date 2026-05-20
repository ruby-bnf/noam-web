import { workshopsSectionContent } from "../../constants/workshopsInfo";

function WorkshopsSectionIntro() {
  return (
    <>
      <h2 className="header-title">Workshops</h2>
      <p className="max-w-[70ch] text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.65] text-dark-green/[0.88]">
        {workshopsSectionContent.intro}
      </p>
    </>
  );
}

export default WorkshopsSectionIntro;
