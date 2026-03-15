import SiteNav from "../components/SiteNav";
import InfoCard from "../components/InfoCard";
import { commissionPageContent } from "../constants/commissionPageContent";
import arrow from "../assets/decoratives/arrow.svg";

function CommissionPage() {
  const stepPathClasses = [
    "md:self-start md:ml-0",
    "md:self-end md:mr-0",
    "md:self-start md:ml-[8%]",
    "md:self-end md:mr-[10%]",
    "md:self-start md:ml-0",
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_15%,rgba(var(--sun-rgb),0.24),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(var(--sea-rgb),0.2),transparent_50%),linear-gradient(135deg,#fff9ef_0%,#f2efe7_40%,#ecf2f3_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12 text-[var(--ink)]">
      <SiteNav />

      <main className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-6xl flex-col gap-8">
        <h1 className="text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] font-semibold tracking-[0.08em] uppercase text-[var(--colors-Primary-dark-green)]">
          {commissionPageContent.title}
        </h1>

        <p className="max-w-[75ch] whitespace-pre-line text-[clamp(1.03rem,1.3vw,1.2rem)] leading-[1.65] text-[var(--colors-Primary-dark-green)]">
          {commissionPageContent.description}
        </p>

        <div className="relative left-1/2 w-screen -translate-x-1/2 py-2 md:py-8">
          <div className="pointer-events-none absolute inset-0 z-0 translate-y-4 bg-[linear-gradient(to_bottom,transparent_0%,transparent_22%,rgb(var(--colors-Primary-mid-green-rgb))_22%,rgb(var(--colors-Primary-mid-green-rgb))_58%,transparent_58%,transparent_100%)] md:translate-y-6" />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-[clamp(1.25rem,4vw,5rem)] md:gap-12">
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-[calc(241px/2)] left-1/2 z-0 h-[calc(100%-264px)] w-[746px] -translate-x-1/2 border-[7px] border-transparent object-contain opacity-100"
            />

            {commissionPageContent.steps.map((step, index) => (
              <InfoCard
                key={step.title}
                className={`relative z-20 flex w-full max-w-[553.405517578125px] flex-col gap-6 rounded-[40px] p-6 opacity-100 shadow-[0_18px_36px_rgba(0,0,0,0.16)] ${index === 0 ? "bg-[var(--colors-Secondary-lilac)] text-[var(--colors-Primary-dark-green)]" : "bg-[var(--colors-Primary-white)] text-[var(--colors-Primary-dark-green)]"} ${index === commissionPageContent.steps.length - 1 ? "md:h-auto" : "md:h-[241px]"} ${stepPathClasses[index] ?? ""}`}
              >
                <h2 className="text-[clamp(1.1rem,1.6vw,1.35rem)] font-semibold uppercase tracking-[0.04em]">
                  {step.title}
                </h2>
                <p className="text-[clamp(1rem,1.2vw,1.08rem)] leading-[1.6]">
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
      </main>
    </div>
  );
}

export default CommissionPage;
