import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import closeIcon from "../assets/icons/closeIcone.svg";

const MENU_TRANSITION_MS = 300;

const menuItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Workshops", href: "/#workshops" },
  { label: "Commission", href: "/commission" },
  { label: "Contact", href: "/#contact" },
];

function MobileMenuPage() {
  const navigate = useNavigate();
  const [isEntering, setIsEntering] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

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
    <div className="fixed inset-0 z-[70] h-[100dvh] overflow-hidden text-[var(--ink)] md:hidden">
      <div
        className={`flex h-full w-full flex-col gap-4 bg-[var(--colors-Primary-white)] px-6 py-4 transition-transform duration-300 ease-out ${isEntering ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-end">
          <Link
            to="/"
            aria-label="Close menu"
            className="p-1"
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

        <nav className="mt-2 flex flex-1 flex-col justify-start gap-[clamp(0.25rem,1.2vh,0.8rem)] overflow-y-auto pb-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(event) => {
                event.preventDefault();
                closeWithPushAnimation(item.href);
              }}
              className="px-1 py-[clamp(0.6rem,1.5vh,1rem)] text-[clamp(0.95rem,1.9vh,1.1rem)] font-semibold tracking-[0.08em] uppercase hover:text-[rgba(var(--sun-rgb),0.95)]"
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
