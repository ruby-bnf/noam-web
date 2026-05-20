import SiteNav from "../components/SiteNav";
import InfoCard from "../components/InfoCard";
import { commissionPageContent } from "../constants/commissionPageContent";
import Footer from "../sections/Footer";

function CommissionPage() {
  const lastIndex = commissionPageContent.steps.length - 1;

  return (
    <div className="flex min-h-screen flex-col bg-red px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-0 text-dark-green">
      <SiteNav />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8">
        <h1 className="header-title !text-blue">
          {commissionPageContent.title}
        </h1>

        <p className="body-text max-w-[75ch] whitespace-pre-line">
          {commissionPageContent.description}
        </p>

        <div className="commission-timeline pb-8">
          {commissionPageContent.steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === lastIndex;
            const bgClass = isLast ? "bg-blue" : "bg-white";
            const arrowClass = isLeft
              ? "commission-arrow-left"
              : "commission-arrow-right";
            const arrowColorClass = isLast ? "blue" : "";

            return (
              <div
                key={step.title}
                className={`commission-container ${isLeft ? "commission-left" : "commission-right"}`}
              >
                <InfoCard
                  className={`commission-textbox ${bgClass} text-dark-green`}
                >
                  <h2 className="subtitle">{step.title}</h2>
                  <p className="sm-text mt-2">{step.body}</p>

                  {step.ctaLabel && step.ctaHref ? (
                    <div className="mt-6">
                      <a href={step.ctaHref} className="button-secondary">
                        {step.ctaLabel}
                      </a>
                    </div>
                  ) : null}

                  {isLast ? (
                    <div className="mt-4">
                      <a
                        href={commissionPageContent.finalCtaHref}
                        className="button-primary"
                      >
                        {commissionPageContent.finalCtaLabel}
                      </a>
                    </div>
                  ) : null}

                  <span className={`${arrowClass} ${arrowColorClass}`} />
                </InfoCard>
              </div>
            );
          })}
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default CommissionPage;
