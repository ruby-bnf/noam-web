import type { RefObject } from "react";
import HeroBackgroundLayer from "./HeroBackgroundLayer";
import HeroForegroundLayer from "./HeroForegroundLayer";
import HeroMidgroundLayer from "./HeroMidgroundLayer";

type HeroBackgroundLayersProps = {
  introVisible: boolean;
  backgroundLayerRef: RefObject<HTMLDivElement | null>;
  midgroundLayerRef: RefObject<HTMLDivElement | null>;
};

function HeroBackgroundLayers({
  introVisible,
  backgroundLayerRef,
  midgroundLayerRef,
}: HeroBackgroundLayersProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      <HeroBackgroundLayer
        introVisible={introVisible}
        layerRef={backgroundLayerRef}
      />
      <HeroMidgroundLayer
        introVisible={introVisible}
        layerRef={midgroundLayerRef}
      />
      <HeroForegroundLayer introVisible={introVisible} />
    </div>
  );
}

export default HeroBackgroundLayers;
