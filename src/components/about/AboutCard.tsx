import noamProfileIllustration from "../../assets/aboutMe/noamProfileIllustration.svg";
import { aboutSectionContent } from "../../constants/content";

function AboutCard() {
  return (
    <div className="relative z-10 grid h-[543.822998046875px] w-[666.0692138671875px] shrink-0 max-w-full grid-cols-1 gap-[10px] rounded-[40px] bg-[rgba(var(--colors-Primary-white-rgb),0.92)] px-8 py-8 text-[var(--colors-Primary-dark-green)] opacity-100 shadow-[0_18px_40px_rgba(0,0,0,0.16)] md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-10">
      <div className="mt-4 flex flex-col gap-[10px]">
        <h2 className="text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] font-semibold tracking-[0.08em] uppercase">
          {aboutSectionContent.title}
        </h2>
        <p className="whitespace-pre-line text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.65] text-[rgba(var(--colors-Primary-dark-green-rgb),0.88)]">
          {aboutSectionContent.body}
        </p>
      </div>

      <div className="hidden items-center justify-center md:flex md:justify-end">
        <img
          src={noamProfileIllustration}
          alt="Noam profile illustration"
          className="max-h-full w-[220px] max-w-full object-contain md:w-[240px]"
        />
      </div>

      <a
        href="#contact"
        className="absolute left-1/2 bottom-16 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-[var(--colors-Secondary-bubble-pink)] px-5 py-3 text-sm font-semibold text-[var(--colors-Primary-dark-green)] transition-transform duration-200 hover:-translate-y-0.5"
      >
        Contact
      </a>
    </div>
  );
}

export default AboutCard;
