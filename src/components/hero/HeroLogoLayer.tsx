import type { ReactNode, RefObject } from "react";
import logo from "../../assets/logo.png";
import logoFrame from "../../assets/logoFrame.svg";

const BASE_LOGO_DIMENSIONS = {
  frameWidth: 348.8564453125,
  frameHeight: 355.93450927734375,
  logoWidth: 220.1671600341797,
  logoHeight: 250.58836364746094,
} as const;

const MIN_LOGO_SCALE = 0.95;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const getScaledLogoMetrics = (sceneScale: number) => ({
  frameWidth: BASE_LOGO_DIMENSIONS.frameWidth * sceneScale,
  frameHeight: BASE_LOGO_DIMENSIONS.frameHeight * sceneScale,
  logoWidth: BASE_LOGO_DIMENSIONS.logoWidth * sceneScale,
  logoHeight: BASE_LOGO_DIMENSIONS.logoHeight * sceneScale,
  verticalOffset: clamp(30 * sceneScale, 22, 44),
});

const logoMotionClass =
  "transition-[opacity,transform] duration-[820ms] delay-[120ms] ease-out";

type ScaledLogoMetrics = ReturnType<typeof getScaledLogoMetrics>;

type HeroLogoCenterProps = {
  verticalOffset: number;
  children: ReactNode;
};

function HeroLogoCenter({ verticalOffset, children }: HeroLogoCenterProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{ transform: `translate(-50%, calc(-50% - ${verticalOffset}px))` }}
    >
      {children}
    </div>
  );
}

type HeroLogoAnimatedContainerProps = {
  introVisible: boolean;
  metrics: ScaledLogoMetrics;
};

function HeroLogoAnimatedContainer({
  introVisible,
  metrics,
}: HeroLogoAnimatedContainerProps) {
  return (
    <div
      className={`${logoMotionClass} ${
        introVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-4 scale-95 opacity-0"
      }`}
      style={{
        width: `${metrics.frameWidth}px`,
        height: `${metrics.frameHeight}px`,
      }}
    >
      <HeroLogoImage metrics={metrics} />
      <HeroLogoFrame />
    </div>
  );
}

type HeroLogoImageProps = {
  metrics: ScaledLogoMetrics;
};

function HeroLogoImage({ metrics }: HeroLogoImageProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        className="rotate-0 object-contain opacity-100"
        src={logo}
        alt="Logo"
        style={{
          width: `${metrics.logoWidth}px`,
          height: `${metrics.logoHeight}px`,
        }}
      />
    </div>
  );
}

function HeroLogoFrame() {
  return (
    <img
      className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-100 motion-safe:animate-[spin_45s_linear_infinite_reverse]"
      src={logoFrame}
      alt=""
      aria-hidden="true"
    />
  );
}

type HeroLogoLayerProps = {
  introVisible: boolean;
  layerRef: RefObject<HTMLDivElement | null>;
  sceneScale: number;
};

function HeroLogoLayer({
  introVisible,
  layerRef,
  sceneScale,
}: HeroLogoLayerProps) {
  const metrics = getScaledLogoMetrics(Math.max(sceneScale, MIN_LOGO_SCALE));

  return (
    <div ref={layerRef} className="absolute inset-0 z-0 will-change-transform">
      <HeroLogoCenter verticalOffset={metrics.verticalOffset}>
        <HeroLogoAnimatedContainer
          introVisible={introVisible}
          metrics={metrics}
        />
      </HeroLogoCenter>
    </div>
  );
}

export default HeroLogoLayer;
