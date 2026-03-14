import type { RefObject } from "react";
import midground from "../../assets/background/midground.svg";

type HeroMidgroundLayerProps = {
  introVisible: boolean;
  layerRef: RefObject<HTMLDivElement | null>;
};

function HeroMidgroundLayer({
  introVisible,
  layerRef,
}: HeroMidgroundLayerProps) {
  return (
    <div
      ref={layerRef}
      className={`absolute inset-0 z-[1] will-change-transform transition-opacity duration-700 ease-out ${
        introVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDuration: "820ms", transitionDelay: "980ms" }}
    >
      <div
        className={`absolute inset-0 transition-transform duration-900 ease-[cubic-bezier(0.2,1.1,0.2,1)] ${
          introVisible
            ? "translate-y-0 rotate-0"
            : "-translate-y-24 rotate-[5deg]"
        }`}
        style={{ transitionDuration: "1040ms", transitionDelay: "980ms" }}
      >
        <img
          className="absolute bottom-0 left-0 h-auto w-full rotate-0 object-contain opacity-100"
          src={midground}
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroMidgroundLayer;
