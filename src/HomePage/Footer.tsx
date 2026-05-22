import type { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== "/") {
      return;
    }

    event.preventDefault();

    const homeScrollContainer =
      document.querySelector<HTMLElement>("main.h-screen");

    if (homeScrollContainer) {
      homeScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative left-1/2 right-1/2 mt-auto ml-[-50dvw] mr-[-50dvw] w-[100dvw] bg-white border-t border-dark-green/[0.12] px-[clamp(1.25rem,4vw,5rem)] pt-6 pb-6">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 text-[0.82rem] text-dark-green/[0.78] md:grid-cols-2 md:gap-8">
        <div className="flex flex-col gap-2">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="subtitle font-semibold tracking-[0.06em] text-dark-green hover:text-dark-green"
          >
            Noam Hen
          </Link>
          <p className="max-w-[30ch] leading-[1.6]">
            Illustrator, comic artist, and workshop facilitator based in
            Rotterdam.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href="mailto:Noamhen.illustration@gmail.com"
            className="hover:text-dark-green"
          >
            Noamhen.illustration@gmail.com
          </a>
          <a
            href="https://www.instagram.com/noam.illustration/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dark-green"
          >
            @Noam.illustration
          </a>
          <a
            href="https://noamhen-newsletter.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dark-green"
          >
            Newsletter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
