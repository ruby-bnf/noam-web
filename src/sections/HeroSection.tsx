import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import logoFrame from "../assets/logoFrame.svg";
import background from "../assets/background/background.svg";
import midground from "../assets/background/midground.svg";

function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const logoLayerRef = useRef<HTMLDivElement | null>(null);
  const backgroundLayerRef = useRef<HTMLDivElement | null>(null);
  const midgroundLayerRef = useRef<HTMLDivElement | null>(null);
  const [introVisible, setIntroVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const getScrollParent = (element: HTMLElement): HTMLElement | Window => {
      let current: HTMLElement | null = element.parentElement;

      while (current) {
        const styles = window.getComputedStyle(current);
        const overflowY = styles.overflowY;
        const isScrollable =
          (overflowY === "auto" ||
            overflowY === "scroll" ||
            overflowY === "overlay") &&
          current.scrollHeight > current.clientHeight;

        if (isScrollable) {
          return current;
        }

        current = current.parentElement;
      }

      return window;
    };

    const scrollParent = getScrollParent(section);
    let rafId = 0;
    let ticking = false;

    const applyParallax = () => {
      ticking = false;

      const rect = section.getBoundingClientRect();
      const travelDistance = Math.max(section.offsetHeight, 1);
      const scrolledWithinHero = Math.min(
        Math.max(-rect.top, 0),
        travelDistance,
      );
      const progress = scrolledWithinHero / travelDistance;

      if (logoLayerRef.current) {
        const logoScale = Math.max(0.85, 1 - progress * 0.15);
        logoLayerRef.current.style.transform = `translate3d(0, ${scrolledWithinHero * 1.08}px, 0) scale(${logoScale})`;
      }

      if (backgroundLayerRef.current) {
        backgroundLayerRef.current.style.transform = `translate3d(0, ${scrolledWithinHero * 0.08}px, 0)`;
      }

      if (midgroundLayerRef.current) {
        midgroundLayerRef.current.style.transform = `translate3d(0, ${scrolledWithinHero * 0.52}px, 0)`;
      }
    };

    const queueParallax = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      rafId = window.requestAnimationFrame(applyParallax);
    };

    const scrollTarget = scrollParent === window ? window : scrollParent;
    scrollTarget.addEventListener("scroll", queueParallax, { passive: true });
    window.addEventListener("resize", queueParallax);
    queueParallax();

    return () => {
      scrollTarget.removeEventListener("scroll", queueParallax);
      window.removeEventListener("resize", queueParallax);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setIntroVisible(true);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setIntroVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen snap-start items-center justify-center gap-4 bg-[radial-gradient(circle_at_78%_8%,rgba(var(--colors-Secondary-butter-yello-rgb),0.16),transparent_34%),linear-gradient(180deg,var(--colors-Primary-white)_0%,rgba(var(--colors-Primary-white-rgb),0.96)_58%,rgba(var(--colors-Primary-light-green-rgb),0.26)_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <div
        ref={logoLayerRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <div
          className={`absolute top-[164px] left-1/2 h-[355.93450927734375px] w-[348.8564453125px] -translate-x-1/2 transition-[opacity,transform] duration-700 ease-out ${
            introVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-95 opacity-0"
          }`}
          style={{ transitionDelay: "60ms" }}
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

      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div
          ref={backgroundLayerRef}
          className={`absolute inset-0 z-0 will-change-transform transition-opacity duration-700 ease-out ${
            introVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "460ms" }}
        >
          <div
            className={`absolute inset-0 transition-transform duration-900 ease-[cubic-bezier(0.2,1.1,0.2,1)] ${
              introVisible
                ? "translate-y-0 rotate-0"
                : "-translate-y-20 -rotate-[4deg]"
            }`}
            style={{ transitionDelay: "460ms" }}
          >
            <img
              className="absolute left-1/2 top-[378px] h-[508px] w-[1440px] -translate-x-1/2 rotate-0 object-contain opacity-100"
              src={background}
              alt=""
            />
          </div>
        </div>

        <div
          ref={midgroundLayerRef}
          className={`absolute inset-0 z-[1] will-change-transform transition-opacity duration-700 ease-out ${
            introVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "820ms" }}
        >
          <div
            className={`absolute inset-0 transition-transform duration-900 ease-[cubic-bezier(0.2,1.1,0.2,1)] ${
              introVisible
                ? "translate-y-0 rotate-0"
                : "-translate-y-24 rotate-[5deg]"
            }`}
            style={{ transitionDelay: "820ms" }}
          >
            <img
              className="absolute left-1/2 top-[379px] h-[507px] w-[1440px] -translate-x-1/2 rotate-0 object-contain opacity-100"
              src={midground}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
