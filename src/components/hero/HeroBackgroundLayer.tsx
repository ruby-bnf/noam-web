import type { RefObject } from "react";
import background from "../../assets/background/background.svg";

type HeroBackgroundLayerProps = {
  introVisible: boolean;
  layerRef: RefObject<HTMLDivElement | null>;
};

function HeroBackgroundLayer({
  introVisible,
  layerRef,
}: HeroBackgroundLayerProps) {
  return (
    <div
      ref={layerRef}
      className={`absolute inset-0 z-0 will-change-transform transition-opacity duration-700 ease-out ${
        introVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDuration: "820ms", transitionDelay: "560ms" }}
    >
      <div
        className={`absolute inset-0 transition-transform duration-900 ease-[cubic-bezier(0.2,1.1,0.2,1)] ${
          introVisible
            ? "translate-y-0 rotate-0"
            : "-translate-y-20 -rotate-[4deg]"
        }`}
        style={{ transitionDuration: "1040ms", transitionDelay: "560ms" }}
      >
        <img
          className="absolute left-1/2 top-[378px] h-[508px] w-[1440px] -translate-x-1/2 rotate-0 object-contain opacity-100"
          src={background}
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroBackgroundLayer;
