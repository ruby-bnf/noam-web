import { aboutSectionContent } from "../../constants/content";

function AboutCard() {
  return (
    <div className="relative z-10 grid h-[543.822998046875px] w-[600px] shrink-0 max-w-full grid-cols-1 gap-[10px] rounded-[40px] bg-[rgba(var(--colors-Primary-white-rgb),0.92)] px-8 py-8 text-[var(--colors-Primary-dark-green)] opacity-100 shadow-[0_18px_40px_rgba(0,0,0,0.16)] md:px-10 md:py-10">
      <div className="mt-4 flex w-full flex-col gap-[10px]">
        <h2 className="text-center text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] font-semibold tracking-[0.08em] uppercase">
          {aboutSectionContent.title}
        </h2>
        <p className="w-full whitespace-pre-line text-center text-[clamp(1.08rem,1.35vw,1.24rem)] leading-[1.7] text-[rgba(var(--colors-Primary-dark-green-rgb),0.88)]">
          {aboutSectionContent.body}
        </p>
      </div>

      <a
        href="#contact"
        className="button-primary absolute left-1/2 bottom-16 -translate-x-1/2"
      >
        Contact
      </a>
    </div>
  );
}

export default AboutCard;
