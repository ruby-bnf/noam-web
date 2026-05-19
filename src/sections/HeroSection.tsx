import { useRef } from "react";
import heroBackground from "../assets/HeroSectionComic.webp";
import { useHeroIntroVisible } from "../components/hero/useHeroMotion";

function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introVisible = useHeroIntroVisible();

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate flex min-h-[92vh] snap-start overflow-hidden bg-black"
    >
      <img
        src={heroBackground}
        alt="Hero illustration background"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.08)_28%,rgba(0,0,0,0.16)_100%)]" />

      <div className="relative z-20 flex min-h-[92vh] w-full items-end justify-start px-[clamp(1.25rem,4vw,5rem)] pb-[4.5rem] md:pb-24">
        <div
          className={`transition-[opacity,transform] duration-[900ms] ease-out ${
            introVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <h1 className="big-title">Noam Hen</h1>
          <p className="body-text mt-2">Comic Artist and Illustrator</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
