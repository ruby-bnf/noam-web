import { useEffect, useState } from "react";

const FOREGROUND_DELAY_MS = 1550;
let aboutForegroundPlayedInAppLifecycle = false;

function getInitialForegroundReady() {
  return Boolean(
    typeof window !== "undefined" &&
    (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      aboutForegroundPlayedInAppLifecycle),
  );
}

function useAboutForegroundReady() {
  const [foregroundReady, setForegroundReady] = useState(
    getInitialForegroundReady,
  );

  useEffect(() => {
    if (foregroundReady) {
      aboutForegroundPlayedInAppLifecycle = true;
      return;
    }

    let timeoutId = 0;
    const frame = window.requestAnimationFrame(() => {
      timeoutId = window.setTimeout(() => {
        setForegroundReady(true);
      }, FOREGROUND_DELAY_MS);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeoutId);
    };
  }, [foregroundReady]);

  return foregroundReady;
}

export default useAboutForegroundReady;
