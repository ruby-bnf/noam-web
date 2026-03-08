import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import WorkshopsSection, { workshopImages } from "./sections/WorkshopsSection";
import { workshopsSectionContent } from "./constants/workshopsInfo";

function App() {
  const navLinkClassName =
    "rounded-full px-3 py-2 text-xs font-semibold tracking-[0.04em] text-[var(--ink)] uppercase hover:bg-[rgba(var(--sun-rgb),0.2)]";

  const featuredProjects = [
    {
      title: "Brand Story Website",
      description: "Editorial-style website crafted around a brand narrative.",
      imageAlt: "Placeholder cover for Brand Story Website",
      imageSrc: "",
      year: "2026",
      medium: "Web Design + Illustration",
      detail:
        "A one-page storytelling experience where each section is paced like a chapter. Focus was on rhythm, visual hierarchy, and smooth transitions between content blocks.",
    },
    {
      title: "Photography Portfolio",
      description: "Minimal portfolio layout built to keep imagery in control.",
      imageAlt: "Placeholder cover for Photography Portfolio",
      imageSrc: "",
      year: "2025",
      medium: "UI/UX + Frontend",
      detail:
        "A clean, responsive gallery-first structure. The design system keeps typography quiet and spacing intentional, so the photography becomes the hero across every breakpoint.",
    },
    {
      title: "Local Business Landing Page",
      description: "Conversion-focused landing page with strong section flow.",
      imageAlt: "Placeholder cover for Local Business Landing Page",
      imageSrc: "",
      year: "2025",
      medium: "Brand + Landing Page",
      detail:
        "A structured landing page designed around trust signals and clear calls to action. Messaging, illustration accents, and layout are tuned for quick scan and immediate contact conversion.",
    },
  ];

  const workshopCards = workshopsSectionContent.workshops.map(
    (workshop, index) => ({
      title: workshop.title,
      description: workshop.description,
      picture: workshopImages[index % workshopImages.length],
      status: workshop.status,
    }),
  );

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
        <WorkshopsSection workshopCards={workshopCards} />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
