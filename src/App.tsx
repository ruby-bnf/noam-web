import { useEffect, useRef } from "react";
import CommissionPage from "./pages/CommissionPage.tsx";
import ContactSection from "./sections/ContactSection";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import PortfolioGallery from "./components/portfolio/PortfolioGallery";
import WorkshopsSection from "./sections/WorkshopsSection";
import MobileMenuPage from "./pages/MobileMenuPage";
import SiteNav from "./components/SiteNav";
import { selectedProjects } from "./constants/portfolioInfo";
import { Route, Routes, useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);
  const portfolioGalleryImages = selectedProjects
    .filter((project) => Boolean(project.thumbnailSrc ?? project.imageSrc))
    .map((project) => ({
      src: project.thumbnailSrc ?? project.imageSrc ?? "",
      alt: project.imageAlt ?? project.title,
    }));

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const targetId = location.hash.slice(1);
    if (!targetId) {
      return;
    }

    const targetElement = mainRef.current?.querySelector<HTMLElement>(
      `#${CSS.escape(targetId)}`,
    );

    if (!targetElement) {
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_15%,rgba(var(--sun-rgb),0.24),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(var(--sea-rgb),0.2),transparent_50%),linear-gradient(135deg,#fff9ef_0%,#f2efe7_40%,#ecf2f3_100%)] text-[var(--ink)]">
      <SiteNav />

      <main
        ref={mainRef}
        className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth"
      >
        <HeroSection />
        <AboutSection />
        <PortfolioGallery images={portfolioGalleryImages} />
        <WorkshopsSection />
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
      <Route
        path="/menu"
        element={
          <>
            <HomePage />
            <MobileMenuPage />
          </>
        }
      />
    </Routes>
  );
}

export default App;
