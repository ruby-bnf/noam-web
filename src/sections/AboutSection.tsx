import AboutCard from "../components/about/AboutCard";
import AboutDecorations from "../components/about/AboutDecorations";
import AboutForegroundDivider from "../components/about/AboutForegroundDivider";
import useAboutForegroundReady from "../components/about/useAboutForegroundReady";

function AboutSection() {
  const foregroundReady = useAboutForegroundReady();

  return (
    <section
      id="about"
      className="relative flex min-h-screen snap-start items-center justify-center bg-[var(--colors-Primary-dark-green)] px-[clamp(1.25rem,4vw,5rem)] pt-32 pb-24"
    >
      <AboutForegroundDivider isReady={foregroundReady} />
      <AboutDecorations />
      <AboutCard />
    </section>
  );
}

export default AboutSection;
