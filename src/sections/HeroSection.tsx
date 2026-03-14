import { useRef } from "react";
import HeroBackgroundLayers from "../components/hero/HeroBackgroundLayers";
import HeroLogoLayer from "../components/hero/HeroLogoLayer";
import {
  useHeroIntroVisible,
  useHeroParallax,
  useHeroSceneScale,
} from "../components/hero/useHeroMotion";

function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const logoLayerRef = useRef<HTMLDivElement | null>(null);
  const backgroundLayerRef = useRef<HTMLDivElement | null>(null);
  const midgroundLayerRef = useRef<HTMLDivElement | null>(null);
  const introVisible = useHeroIntroVisible();
  const sceneScale = useHeroSceneScale();

  useHeroParallax({
    sectionRef,
    logoLayerRef,
    backgroundLayerRef,
    midgroundLayerRef,
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen snap-start items-center justify-center gap-4 overflow-hidden bg-[radial-gradient(circle_at_78%_8%,rgba(var(--colors-Secondary-butter-yello-rgb),0.16),transparent_34%),linear-gradient(180deg,var(--colors-Primary-white)_0%,rgba(var(--colors-Primary-white-rgb),0.96)_58%,rgba(var(--colors-Primary-light-green-rgb),0.26)_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <HeroLogoLayer
        introVisible={introVisible}
        layerRef={logoLayerRef}
        sceneScale={sceneScale}
      />
      <HeroBackgroundLayers
        introVisible={introVisible}
        backgroundLayerRef={backgroundLayerRef}
        midgroundLayerRef={midgroundLayerRef}
      />
    </section>
  );
}

export default HeroSection;
