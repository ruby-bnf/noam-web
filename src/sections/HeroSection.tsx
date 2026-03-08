import logo from "../assets/logo.png";
import logoFrame from "../assets/logoFrame.svg";
import background from "../assets/background/background.svg";
import midground from "../assets/background/midground.svg";
import forground from "../assets/background/forground.svg";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen snap-start items-center justify-center gap-4 bg-[radial-gradient(circle_at_78%_8%,rgba(var(--colors-Secondary-butter-yello-rgb),0.16),transparent_34%),linear-gradient(180deg,var(--colors-Primary-white)_0%,rgba(var(--colors-Primary-white-rgb),0.96)_58%,rgba(var(--colors-Primary-light-green-rgb),0.26)_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <div className="absolute top-[164px] left-1/2 z-10 h-[355.93450927734375px] w-[348.8564453125px] -translate-x-1/2 opacity-100">
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

      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          className="absolute left-1/2 top-[378px] z-0 h-[508px] w-[1440px] -translate-x-1/2 rotate-0 object-contain opacity-100"
          src={background}
          alt=""
        />
        <img
          className="absolute left-1/2 top-[379px] z-[1] h-[507px] w-[1440px] -translate-x-1/2 rotate-0 object-contain opacity-100"
          src={midground}
          alt=""
        />
        <img
          className="absolute left-1/2 top-[579px] z-[2] h-[378px] w-[1440px] -translate-x-1/2 rotate-0 object-contain opacity-100"
          src={forground}
          alt=""
        />
      </div>
    </section>
  );
}

export default HeroSection;
