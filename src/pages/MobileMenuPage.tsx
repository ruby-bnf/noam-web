import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import closeIcon from "../assets/icons/closeIcon.svg";

const MENU_TRANSITION_MS = 300;

const menuItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Workshops", href: "/workshops" },
  { label: "Commission", href: "/commission" },
  { label: "Contact", href: "/contact" },
];

function MobileMenuPage() {
  const navigate = useNavigate();
  const [isEntering, setIsEntering] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        navigate("/", { replace: true });
      }
    };

    if (!mediaQuery.matches) {
      navigate("/", { replace: true });
      return;
    }

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, [navigate]);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setIsEntering(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const closeWithPushAnimation = (destination: string) => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    setIsEntering(false);

    closeTimeoutRef.current = window.setTimeout(() => {
      navigate(destination);
    }, MENU_TRANSITION_MS);
  };

  return (
    <div className="fixed inset-0 z-[70] h-[100dvh] overflow-hidden text-dark-green lg:hidden">
      <div
        className={`flex h-full w-full flex-col gap-2 bg-white px-5 py-4 transition-transform duration-300 ease-out ${isEntering ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-end pb-2">
          <Link
            to="/"
            aria-label="Close menu"
            className="bg-white p-2"
            onClick={(event) => {
              event.preventDefault();
              closeWithPushAnimation("/");
            }}
          >
            <img
              src={closeIcon}
              alt=""
              aria-hidden="true"
              className="h-6 w-6"
            />
          </Link>
        </div>

        <nav className="flex flex-1 flex-col items-start justify-evenly pb-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(event) => {
                event.preventDefault();
                closeWithPushAnimation(item.href);
              }}
              className="flex w-full flex-1 items-center justify-start px-1 text-left text-[clamp(1rem,2vh,1.18rem)] font-semibold tracking-[0.12em] uppercase text-dark-green/[0.88] transition-colors duration-200 hover:text-red/[0.96]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default MobileMenuPage;
