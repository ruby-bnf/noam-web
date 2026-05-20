import { useRef } from "react";
import heroBackground from "../assets/HeroSectionEdited.webp";

function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate flex min-h-[92vh] snap-start overflow-hidden "
    >
      <img
        src={heroBackground}
        alt="Hero illustration background"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-10" />

      <div className="relative z-20 flex min-h-[92vh] w-full items-end justify-start px-[clamp(1.25rem,4vw,5rem)] pb-[4.5rem] md:pb-24">
        <div className="transition-[opacity,transform] duration-[900ms] ease-out translate-y-0 opacity-100">
          <h1 className="big-title">Noam Hen</h1>
          <p className="subtitle mt-4 !text-[0.9rem] !tracking-[0.2em] [word-spacing:0.2em]">
            Comic Artist and Illustrator
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
