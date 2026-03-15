import { Link } from "react-router-dom";
import menuIcon from "../assets/icons/MenuIcon.svg";

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Workshops", href: "/#workshops" },
  { label: "Commission", href: "/commission" },
  { label: "Contact", href: "/#contact" },
];

function SiteNav() {
  const navLinkClassName =
    "shrink-0 rounded-full px-3 py-2 text-xs font-semibold tracking-[0.04em] text-[var(--ink)] uppercase hover:bg-[rgba(var(--sun-rgb),0.2)]";

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 gap-1 rounded-full border border-black/10 bg-[rgba(var(--cream-rgb),0.75)] p-2 whitespace-nowrap backdrop-blur-md lg:flex">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className={navLinkClassName}>
            {item.label}
          </a>
        ))}
      </header>

      <header className="fixed top-4 right-4 z-50 flex lg:hidden">
        <Link
          to="/menu"
          aria-label="Open menu"
          className="p-1 text-[var(--ink)]"
        >
          <img src={menuIcon} alt="" aria-hidden="true" className="h-6 w-6" />
        </Link>
      </header>
    </>
  );
}

export default SiteNav;
