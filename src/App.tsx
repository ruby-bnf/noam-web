import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import WorkshopsSection from "./sections/WorkshopsSection";

function App() {
  const navLinkClassName =
    "rounded-full px-3 py-2 text-xs font-semibold tracking-[0.04em] text-[var(--ink)] uppercase hover:bg-[rgba(var(--sun-rgb),0.2)]";

  const featuredProjects = [
    {
      title: "Brand Story Website",
      description:
        "A modern one-page experience focused on clean narrative and visuals.",
    },
    {
      title: "Photography Portfolio",
      description:
        "Responsive gallery layout designed to let imagery lead the experience.",
    },
    {
      title: "Local Business Landing Page",
      description:
        "Conversion-first structure with clear messaging and strong call to action.",
    },
  ];

  const upcomingWorkshops = [
    "Intro To Personal Branding",
    "Build Your First Portfolio Website",
    "Creative Workflow For Freelancers",
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_15%,rgba(var(--sun-rgb),0.24),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(var(--sea-rgb),0.2),transparent_50%),linear-gradient(135deg,#fff9ef_0%,#f2efe7_40%,#ecf2f3_100%)] text-[var(--ink)]">
      <header className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 flex-wrap gap-1 rounded-full border border-black/10 bg-[rgba(var(--cream-rgb),0.75)] p-2 backdrop-blur-md">
        <a href="#hero" className={navLinkClassName}>
          Home
        </a>
        <a href="#about" className={navLinkClassName}>
          About
        </a>
        <a href="#projects" className={navLinkClassName}>
          Projects
        </a>
        <a href="#workshops" className={navLinkClassName}>
          Workshops
        </a>
        <a href="#contact" className={navLinkClassName}>
          Contact
        </a>
      </header>

      <main className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
        <HeroSection />
        <AboutSection />
        <ProjectsSection featuredProjects={featuredProjects} />
        <WorkshopsSection upcomingWorkshops={upcomingWorkshops} />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
