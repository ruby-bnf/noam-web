import InfoCard from "../components/InfoCard";
import { commissionSectionContent } from "../constants/content";

function CommissionSection() {
  return (
    <section
      id="commission"
      className="relative flex min-h-screen snap-start flex-col justify-center gap-8 overflow-hidden bg-red px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <h2
        className="section-title relative z-10 text-[clamp(2.2rem,3.6vw,3.8rem)] leading-[0.98] tracking-[0.05em] uppercase"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 900,
          color: "#7fbfe9",
        }}
      >
        {commissionSectionContent.title}
      </h2>

      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <InfoCard className="rounded-lg bg-white/90 p-6 text-dark-green md:p-8">
          <p
            className="max-w-[42ch] text-[clamp(1.08rem,1.3vw,1.28rem)] leading-[1.7]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
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

        <InfoCard className="rounded-lg border border-dark-green/[0.16] bg-white/[0.82] p-6 text-dark-green md:p-8">
          <ul
            className="mt-4 grid gap-3 pl-5 text-[clamp(1.05rem,1.2vw,1.18rem)] leading-[1.6]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
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
