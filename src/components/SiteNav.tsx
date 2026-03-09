function SiteNav() {
  const navLinkClassName =
    "rounded-full px-3 py-2 text-xs font-semibold tracking-[0.04em] text-[var(--ink)] uppercase hover:bg-[rgba(var(--sun-rgb),0.2)]";

  return (
    <header className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 flex-wrap gap-1 rounded-full border border-black/10 bg-[rgba(var(--cream-rgb),0.75)] p-2 backdrop-blur-md">
      <a href="/#hero" className={navLinkClassName}>
        Home
      </a>
      <a href="/#about" className={navLinkClassName}>
        About
      </a>
      <a href="/#projects" className={navLinkClassName}>
        Projects
      </a>
      <a href="/#workshops" className={navLinkClassName}>
        Workshops
      </a>
      <a href="/commission" className={navLinkClassName}>
        Commission
      </a>
      <a href="/#contact" className={navLinkClassName}>
        Contact
      </a>
    </header>
  );
}

export default SiteNav;
