import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ContentCard from "../../components/ContentCard";
import SiteNav from "../../components/SiteNav";
import Footer from "../../HomePage/Footer";
import WorkshopDetails from "./WorkshopDetails";
import { workshopProjects, type WorkshopProject } from "./workshopProjects";

function WorkshopsPage() {
  const [selectedWorkshop, setSelectedWorkshop] =
    useState<WorkshopProject | null>(null);
  const workshopDetailsRef = useRef<HTMLElement | null>(null);
  const location = useLocation();
  const sortedWorkshops = [...workshopProjects].sort((a, b) => {
    if (a.status === b.status) return 0;
    if (a.status === "new") return -1;
    if (b.status === "new") return 1;
    return 0;
  });

  const handleWorkshopSelect = (workshop: WorkshopProject) => {
    setSelectedWorkshop(workshop);

    window.requestAnimationFrame(() => {
      workshopDetailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selectedTitle = searchParams.get("selected");
    if (!selectedTitle) {
      return;
    }

    const workshop = workshopProjects.find(
      (item) => item.title === selectedTitle,
    );
    if (!workshop) {
      return;
    }

    handleWorkshopSelect(workshop);

    // Clear state so back-navigation doesn't re-select.
    window.history.replaceState({}, "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        workshopDetailsRef.current &&
        !workshopDetailsRef.current.contains(event.target as Node)
      ) {
        const target = event.target as HTMLElement;
        if (!target.closest("#workshops-gallery-grid")) {
          setSelectedWorkshop(null);
        }
      }
    };

    if (selectedWorkshop) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [selectedWorkshop]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-dark-green">
      <SiteNav />

      <main className="mx-auto w-full max-w-7xl flex-1 px-[clamp(1.25rem,4vw,5rem)] pt-8 sm:pt-10">
        <WorkshopDetails
          selectedWorkshop={selectedWorkshop}
          workshopDetailsRef={workshopDetailsRef}
          onClose={() => setSelectedWorkshop(null)}
        />

        <div className="max-w-3xl pt-8 sm:pt-10">
          <p className="subtitle pb-2">Creative Educational Sessions</p>
          <h1 className="header-title m-0">Workshops</h1>
        </div>

        <section
          className="pt-12 pb-12 sm:pt-16 sm:pb-16"
          aria-label="Workshops gallery"
          id="workshops-gallery-grid"
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] justify-center gap-4">
            {sortedWorkshops.map((workshop) => (
              <ContentCard
                key={workshop.title}
                title={workshop.title}
                description={workshop.summary}
                picture={workshop.thumbnail}
                status={workshop.status}
                onActionClick={() => handleWorkshopSelect(workshop)}
                href={`/workshops?selected=${encodeURIComponent(workshop.title)}`}
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default WorkshopsPage;
