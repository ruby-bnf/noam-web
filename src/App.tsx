import { useEffect, useRef } from "react";
import CommissionPage from "./pages/CommissionPage.tsx";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import WorkshopsSection from "./sections/WorkshopsSection";
import MobileMenuPage from "./pages/MobileMenuPage";
import SiteNav from "./components/SiteNav";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutSection from "./sections/AboutSection.tsx";
import PortfolioSection from "./sections/PortfolioSection";
import PortfolioPage from "./pages/Portfolio/PortfolioPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

function HomePage() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);

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
    <div className="min-h-screen bg-white text-dark-green">
      <SiteNav />

      <main
        ref={mainRef}
        className="h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
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
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
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
