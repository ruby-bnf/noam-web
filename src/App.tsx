import AboutSection from "./sections/AboutSection";
import CommissionPage from "./pages/CommissionPage.tsx";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import WorkshopsSection from "./sections/WorkshopsSection";
import { workshopsSectionContent } from "./constants/workshopsInfo";
import SiteNav from "./components/SiteNav";
import { workshopImages } from "./components/workshops/workshopImages";
import { Route, Routes } from "react-router-dom";

function HomePage() {
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
      <SiteNav />

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/commission" element={<CommissionPage />} />
    </Routes>
  );
}

export default App;
