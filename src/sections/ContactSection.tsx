import emailIcon from "../assets/icons/emailIcon.svg";
import instagramIcon from "../assets/icons/InstegramIcon.svg";
import IconTextLink from "../components/IconTextLink";
import InfoCard from "../components/InfoCard";
import { contactSectionContent } from "../constants/content";
import Footer from "./Footer";

const sectionClasses =
  "flex h-auto snap-start flex-col justify-between bg-[var(--colors-Primary-white)] px-[clamp(1.25rem,4vw,5rem)] py-12";

const containerClasses =
  "mx-auto flex w-full max-w-5xl items-center gap-8 lg:gap-12";

const contactLinks = [
  {
    href: "mailto:noamhen100@gmail.com",
    iconSrc: emailIcon,
    text: "Email: noamhen100@gmail.com",
    external: false,
  },
  {
    href: "https://instagram.com/noam.illustration",
    iconSrc: instagramIcon,
    text: "Instagram: noam.illustration",
    external: true,
  },
] as const;

function CommissionPromptCard() {
  return (
    <InfoCard className="rounded-lg p-6 text-[var(--colors-Primary-dark-green)] md:p-8">
      <p className="max-w-[40ch] text-[clamp(1.03rem,1.3vw,1.2rem)] leading-[1.65]">
        {contactSectionContent.commissionPrompt}
      </p>

      <div className="mt-5">
        <a
          href="mailto:noamhen100@gmail.com?subject=Commission%20Form%20Request"
          className="button-primary"
        >
          Book Here
        </a>
      </div>
    </InfoCard>
  );
}

function ContactLinksCard() {
  return (
    <InfoCard className="rounded-lg border border-[rgba(var(--colors-Primary-dark-green-rgb),0.16)] p-6 text-[var(--colors-Primary-dark-green)] md:p-8">
      <p className="text-[clamp(1.03rem,1.3vw,1.2rem)] leading-[1.65]">
        {contactSectionContent.availabilityText}
      </p>

      <div className="mt-4 grid gap-3 text-[clamp(1rem,1.2vw,1.1rem)]">
        {contactLinks.map((item) => (
          <IconTextLink
            key={item.text}
            href={item.href}
            iconSrc={item.iconSrc}
            text={item.text}
            external={item.external}
          />
        ))}
      </div>
    </InfoCard>
  );
}

function ContactSection() {
  return (
    <section id="contact" className={sectionClasses}>
      <div className={containerClasses}>
        {/* Left Column */}
        <div className="flex min-h-0 flex-col gap-3 flex-1">
          <h2 className="section-title text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] tracking-[0.08em] uppercase">
            {contactSectionContent.title}
          </h2>
          <CommissionPromptCard />
        </div>

        {/* Right Column */}
        <div className="hidden lg:flex items-center flex-1">
          <ContactLinksCard />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}

export default ContactSection;
