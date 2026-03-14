import { projectsSectionContent } from "../../constants/content";

function ProjectsSectionIntro() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <h2 className="text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] font-semibold tracking-[0.08em] uppercase">
        Projects
      </h2>
      <p className="mt-3 max-w-[70ch] text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.65] text-[rgba(var(--colors-Primary-dark-green-rgb),0.88)]">
        {projectsSectionContent.body}
      </p>
    </div>
  );
}

export default ProjectsSectionIntro;