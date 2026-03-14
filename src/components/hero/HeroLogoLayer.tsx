import type { RefObject } from "react";
import logo from "../../assets/logo.png";
import logoFrame from "../../assets/logoFrame.svg";

type HeroLogoLayerProps = {
  introVisible: boolean;
  layerRef: RefObject<HTMLDivElement | null>;
};

function HeroLogoLayer({ introVisible, layerRef }: HeroLogoLayerProps) {
  return (
    <div ref={layerRef} className="absolute inset-0 z-0 will-change-transform">
      <div
        className={`absolute top-[164px] left-1/2 h-[355.93450927734375px] w-[348.8564453125px] -translate-x-1/2 transition-[opacity,transform] duration-[820ms] delay-[120ms] ease-out ${
          introVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="h-[250.58836364746094px] w-[220.1671600341797px] rotate-0 object-contain opacity-100"
            src={logo}
            alt="Logo"
          />
        </div>

        <img
          className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-100 motion-safe:animate-[spin_45s_linear_infinite_reverse]"
          src={logoFrame}
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default HeroLogoLayer;
