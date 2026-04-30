import { projectsSectionContent } from "../../constants/content";

function PortfolioSectionIntro() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <h2 className="section-title text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] tracking-[0.08em] uppercase">
        Recent projects
      </h2>
      <p className="mt-3 max-w-[70ch] text-[clamp(0.9rem,1vw,1rem)] leading-[1.65] text-[rgba(var(--colors-Primary-dark-green-rgb),0.88)]">
        {projectsSectionContent.body}
      </p>
    </div>
  );
}

export default PortfolioSectionIntro;
