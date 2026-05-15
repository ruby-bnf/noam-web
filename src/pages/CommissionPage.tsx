import SiteNav from "../components/SiteNav";
import InfoCard from "../components/InfoCard";
import { commissionPageContent } from "../constants/commissionPageContent";
import arrow from "../assets/decoratives/arrow.svg";
import Footer from "../sections/Footer";

function CommissionPage() {
  const stepPathClasses = [
    "md:self-start md:ml-0",
    "md:self-end md:mr-0",
    "md:self-start md:ml-0",
    "md:self-end md:mr-0",
    "md:self-start md:ml-0",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[var(--red-default)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-0 text-[var(--colors-Primary-dark-green)]">
      <SiteNav />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8">
        <h1
          className="section-title text-[clamp(2.5rem,4.2vw,4rem)] leading-[0.95] tracking-[0.06em] uppercase"
          style={{
            fontFamily: "var(--title-font)",
            fontWeight: 900,
            color: "var(--secondary-blue)",
          }}
        >
          {commissionPageContent.title}
        </h1>

        <p className="max-w-[75ch] whitespace-pre-line text-[clamp(1.08rem,1.4vw,1.28rem)] leading-[1.7] text-[var(--colors-Primary-dark-green)] font-normal">
          {commissionPageContent.description}
        </p>

        <div className="relative flex w-full flex-col gap-8 md:gap-12">
          <div className="relative z-10 flex w-full flex-col gap-8 md:gap-12">
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-[calc(241px/2)] left-1/2 z-0 h-[calc(100%-264px)] w-[746px] -translate-x-1/2 border-[7px] border-transparent object-contain opacity-100"
            />

            {commissionPageContent.steps.map((step, index) => (
              <InfoCard
                key={step.title}
                className={`relative z-20 flex w-full max-w-[553.405517578125px] flex-col gap-6 rounded-lg p-6 opacity-100 md:h-auto ${index === commissionPageContent.steps.length - 1 ? "bg-[var(--secondary-blue)]" : "bg-[var(--colors-Primary-white)]"} text-[var(--colors-Primary-dark-green)] ${stepPathClasses[index] ?? ""}`}
              >
                <h2
                  className="text-[clamp(1.15rem,1.7vw,1.5rem)] font-bold uppercase tracking-[0.05em]"
                  style={{ fontFamily: "var(--title-font)" }}
                >
                  {step.title}
                </h2>
                <p className="text-[clamp(1.03rem,1.2vw,1.15rem)] leading-[1.65] text-[var(--colors-Primary-dark-green)]">
                  {step.body}
                </p>

                {step.ctaLabel && step.ctaHref ? (
                  <div className="mt-2">
                    <a href={step.ctaHref} className="button-primary">
                      {step.ctaLabel}
                    </a>
                  </div>
                ) : null}

                {index === commissionPageContent.steps.length - 1 ? (
                  <div className="mt-2">
                    <a
                      href={commissionPageContent.finalCtaHref}
                      className="button-primary"
                    >
                      {commissionPageContent.finalCtaLabel}
                    </a>
                  </div>
                ) : null}
              </InfoCard>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default CommissionPage;
