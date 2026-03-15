import InfoCard from "../components/InfoCard";
import { commissionSectionContent } from "../constants/content";

function CommissionSection() {
  return (
    <section
      id="commission"
      className="relative flex min-h-screen snap-start flex-col justify-center gap-8 overflow-hidden bg-[linear-gradient(165deg,rgba(var(--colors-Primary-white-rgb),0.92)_0%,rgba(var(--colors-Secondary-butter-yello-rgb),0.26)_48%,rgba(var(--colors-Primary-light-green-rgb),0.24)_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <h2 className="relative z-10 text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] font-semibold tracking-[0.08em] uppercase text-[var(--colors-Primary-dark-green)]">
        {commissionSectionContent.title}
      </h2>

      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <InfoCard className="rounded-[28px] bg-[rgba(var(--colors-Primary-white-rgb),0.9)] p-6 text-[var(--colors-Primary-dark-green)] shadow-[0_14px_30px_rgba(0,0,0,0.12)] md:p-8">
          <p className="max-w-[42ch] text-[clamp(1.03rem,1.3vw,1.2rem)] leading-[1.65]">
            {commissionSectionContent.description}
          </p>

          <div className="mt-5">
            <a
              href="mailto:noamhen100@gmail.com?subject=Commission%20Request"
              className="button-primary"
            >
              {commissionSectionContent.ctaLabel}
            </a>
          </div>
        </InfoCard>

        <InfoCard className="rounded-[28px] border border-[rgba(var(--colors-Primary-dark-green-rgb),0.16)] bg-[rgba(var(--colors-Primary-white-rgb),0.82)] p-6 text-[var(--colors-Primary-dark-green)] shadow-[0_10px_24px_rgba(0,0,0,0.08)] md:p-8">
          <ul className="mt-4 grid gap-3 pl-5 text-[clamp(1rem,1.2vw,1.1rem)] leading-[1.5]">
            {commissionSectionContent.steps.map((step) => (
              <li key={step.title}>{step.title}</li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </section>
  );
}

export default CommissionSection;
