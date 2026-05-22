import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menuIcon from "../assets/icons/MenuIcon.svg";

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Workshops", href: "/workshops" },
  { label: "Commission", href: "/commission" },
  { label: "Contact", href: "/contact" },
];

function SiteNav() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const location = useLocation();

  // Determine if current page has a dark background
  const isDarkBackgroundPage = location.pathname === "/commission";

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsNavVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

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
    activeSectionId === "workshops" || isDarkBackgroundPage;

  const navLinkClassName = `subtitle inline-flex shrink-0 items-center border-b border-transparent px-2 py-[0.75rem] !transition-colors !duration-75 ${
    isDarkBackground
      ? "!text-white/90 hover:border-white/75 hover:bg-white/20 hover:text-white"
      : "!text-dark-green/80 hover:border-red/70 hover:bg-white/45 hover:text-dark-green"
  }`;

  const mobileTriggerClassName = `bg-transparent p-2 ${
    isDarkBackground ? "text-white" : "text-dark-green"
  }`;

  const mobileIconClassName = `h-6 w-6 ${isDarkBackground ? "invert" : ""}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 hidden lg:block transition-[opacity,transform] duration-500 ease-out ${
          isNavVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <nav
          className={`flex w-full items-center justify-start gap-4 bg-transparent text-left whitespace-nowrap ${
            isDarkBackground ? "text-white" : "text-dark-green"
          }`}
        >
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} className={navLinkClassName}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <header
        className={`fixed top-4 right-4 z-50 flex transition-[opacity,transform] duration-500 ease-out lg:hidden ${
          isNavVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
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
