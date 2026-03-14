import { useEffect, useState, type RefObject } from "react";

type ParallaxRef = RefObject<HTMLDivElement | null>;

type UseHeroParallaxParams = {
  sectionRef: RefObject<HTMLElement | null>;
  logoLayerRef: ParallaxRef;
  backgroundLayerRef: ParallaxRef;
  midgroundLayerRef: ParallaxRef;
};

export function useHeroParallax({
  sectionRef,
  logoLayerRef,
  backgroundLayerRef,
  midgroundLayerRef,
}: UseHeroParallaxParams) {
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

    const clamp = (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max);

    const setLayerTransform = (
      layerRef: ParallaxRef,
      translateY: number,
      scale?: number,
    ) => {
      if (!layerRef.current) {
        return;
      }

      const translate = `translate3d(0, ${translateY}px, 0)`;
      layerRef.current.style.transform =
        scale === undefined ? translate : `${translate} scale(${scale})`;
    };

    const applyParallax = () => {
      ticking = false;

      const rect = section.getBoundingClientRect();
      const travelDistance = Math.max(section.offsetHeight, 1);
      const scrolledWithinHero = clamp(-rect.top, 0, travelDistance);
      const progress = scrolledWithinHero / travelDistance;
      const logoScale = Math.max(0.85, 1 - progress * 0.15);

      setLayerTransform(logoLayerRef, scrolledWithinHero * 1.08, logoScale);
      setLayerTransform(backgroundLayerRef, scrolledWithinHero * 0.08);
      setLayerTransform(midgroundLayerRef, scrolledWithinHero * 0.52);
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
  }, [sectionRef, logoLayerRef, backgroundLayerRef, midgroundLayerRef]);
}

export function useHeroIntroVisible() {
  const [introVisible, setIntroVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (introVisible) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setIntroVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [introVisible]);

  return introVisible;
}
