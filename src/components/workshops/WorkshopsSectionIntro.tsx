import { workshopsSectionContent } from "../../constants/workshopsInfo";

function WorkshopsSectionIntro() {
  return (
    <>
      <h2 className="header-title ">Workshops</h2>
      <p className="body-text max-w-[70ch]">{workshopsSectionContent.intro}</p>
    </>
  );
}

export default WorkshopsSectionIntro;
