import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/icons/MenuIcon.svg";

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Recent projects", href: "/#portfolio" },
  { label: "Workshops", href: "/#workshops" },
  { label: "Commission", href: "/commission" },
  { label: "Contact", href: "/#contact" },
];

function SiteNav() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const mainScroller = document.querySelector("main");
    if (!(mainScroller instanceof HTMLElement)) {
      return;
    }

    const updateActiveSection = () => {
      const sections = Array.from(
        mainScroller.querySelectorAll<HTMLElement>("section[id]"),
      );
      if (sections.length === 0) {
        setActiveSectionId(null);
        return;
      }

      // Probe directly under the fixed nav area to avoid delayed color flips.
      const probePosition = mainScroller.scrollTop + 24;

      let activeSection = sections.find(
        (section) =>
          probePosition >= section.offsetTop &&
          probePosition < section.offsetTop + section.offsetHeight,
      );

      if (!activeSection) {
        activeSection =
          probePosition < sections[0].offsetTop
            ? sections[0]
            : sections[sections.length - 1];
      }

      setActiveSectionId((previousId) => {
        const nextId = activeSection?.id ?? null;
        return previousId === nextId ? previousId : nextId;
      });
    };

    let frame = 0;
    const onScroll = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();
    mainScroller.addEventListener("scroll", onScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
      mainScroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const isDarkBackground =
    activeSectionId === "workshops" || activeSectionId === "about";

  const navLinkClassName = `shrink-0 border-b border-transparent px-2 py-1 text-[0.7rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-75 ${
    isDarkBackground
      ? "text-[rgba(var(--cream-rgb),0.9)] hover:border-[rgba(var(--cream-rgb),0.75)] hover:text-[var(--cream)]"
      : "text-[rgba(var(--ink-rgb),0.82)] hover:border-[rgba(var(--sun-rgb),0.7)] hover:text-[var(--ink)]"
  }`;

  const mobileTriggerClassName = `bg-transparent p-2 ${
    isDarkBackground ? "text-[var(--cream)]" : "text-[var(--ink)]"
  }`;

  const mobileIconClassName = `h-6 w-6 ${isDarkBackground ? "invert" : ""}`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 hidden lg:block">
        <nav
          className={`flex w-full items-center justify-start gap-4 bg-transparent px-5 py-3 text-left whitespace-nowrap ${
            isDarkBackground ? "text-[var(--cream)]" : "text-[var(--ink)]"
          }`}
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={navLinkClassName}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <header className="fixed top-4 right-4 z-50 flex lg:hidden">
        <Link
          to="/menu"
          aria-label="Open menu"
          className={mobileTriggerClassName}
        >
          <img
            src={menuIcon}
            alt=""
            aria-hidden="true"
            className={mobileIconClassName}
          />
        </Link>
      </header>
    </>
  );
}

export default SiteNav;
