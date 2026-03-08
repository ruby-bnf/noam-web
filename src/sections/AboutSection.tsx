import { aboutSectionContent } from "../constants/content";
import noamProfileIllustration from "../assets/aboutMe/noamProfileIllustration.svg";
import forgroundDivider from "../assets/background/forground.svg";
import decorativeVectorA from "../assets/decoratives/Vector.svg";
import decorativeVectorB from "../assets/decoratives/Vector (1).svg";
import decorativeVectorC from "../assets/decoratives/Vector (2).svg";
import decorativeVectorD from "../assets/decoratives/Vector (3).svg";
import decorativeVectorE from "../assets/decoratives/Vector (4).svg";

function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen snap-start items-center justify-center bg-[var(--colors-Primary-dark-green)] px-[clamp(1.25rem,4vw,5rem)] pt-32 pb-24"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 z-[2] w-[min(100%,1440px)] -translate-x-1/2 -translate-y-[48%]">
        <div>
          <img
            src={forgroundDivider}
            alt=""
            aria-hidden="true"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          src={decorativeVectorA}
          alt=""
          className="absolute left-[18%] top-[18%] w-10 opacity-70 md:w-12"
        />
        <img
          src={decorativeVectorB}
          alt=""
          className="absolute right-[16%] top-[22%] hidden w-8 rotate-12 opacity-75 md:block md:w-10"
        />
        <img
          src={decorativeVectorC}
          alt=""
          className="absolute left-[20%] bottom-[20%] w-9 -rotate-6 opacity-70 md:w-11"
        />
        <img
          src={decorativeVectorD}
          alt=""
          className="absolute right-[18%] bottom-[18%] hidden w-9 opacity-75 md:block md:w-11"
        />
        <img
          src={decorativeVectorE}
          alt=""
          className="absolute left-[10%] top-[34%] hidden w-7 -rotate-12 opacity-65 md:block md:w-9"
        />
        <img
          src={decorativeVectorB}
          alt=""
          className="absolute right-[10%] top-[38%] w-7 rotate-6 opacity-60 md:w-9"
        />
        <img
          src={decorativeVectorA}
          alt=""
          className="absolute left-[14%] bottom-[12%] hidden w-7 rotate-12 opacity-60 md:block md:w-9"
        />
        <img
          src={decorativeVectorE}
          alt=""
          className="absolute right-[12%] bottom-[28%] w-8 -rotate-6 opacity-65 md:w-10"
        />
        <img
          src={decorativeVectorC}
          alt=""
          className="absolute left-[28%] top-[10%] hidden w-6 opacity-55 md:block md:w-8"
        />
        <img
          src={decorativeVectorD}
          alt=""
          className="absolute right-[26%] bottom-[10%] hidden w-6 rotate-6 opacity-55 md:block md:w-8"
        />
      </div>

      <div className="relative z-10 grid h-[543.822998046875px] w-[666.0692138671875px] shrink-0 max-w-full grid-cols-1 gap-[10px] rounded-[40px] bg-[rgba(var(--colors-Primary-white-rgb),0.92)] px-8 py-8 text-[var(--colors-Primary-dark-green)] opacity-100 shadow-[0_18px_40px_rgba(0,0,0,0.16)] md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-10">
        <div className="mt-4 flex flex-col gap-[10px]">
          <h2 className="text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] font-semibold tracking-[0.08em] uppercase">
            {aboutSectionContent.title}
          </h2>
          <p className="whitespace-pre-line text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.65] text-[rgba(var(--colors-Primary-dark-green-rgb),0.88)]">
            {aboutSectionContent.body}
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-end">
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
    </section>
  );
}

export default AboutSection;
