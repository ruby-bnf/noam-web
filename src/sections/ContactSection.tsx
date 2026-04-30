import emailIcon from "../assets/icons/emailIcon.svg";
import instagramIcon from "../assets/icons/InstegramIcon.svg";
import IconTextLink from "../components/IconTextLink";
import InfoCard from "../components/InfoCard";
import { contactSectionContent } from "../constants/content";

const sectionClasses =
  "flex min-h-screen snap-start flex-col justify-center gap-8 bg-[radial-gradient(circle_at_78%_8%,rgba(var(--red-default-rgb),0.16),transparent_34%),linear-gradient(180deg,var(--colors-Primary-white)_0%,rgba(var(--colors-Primary-white-rgb),0.96)_58%,rgba(var(--secondary-blue-rgb),0.26)_100%)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12";

const titleClasses =
  "section-title text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] tracking-[0.08em] uppercase";

const infoCardGridClasses = "grid gap-4 md:grid-cols-2 md:gap-6";

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

function ContactSectionHeading() {
  return <h2 className={titleClasses}>{contactSectionContent.title}</h2>;
}

function CommissionPromptCard() {
  return (
    <InfoCard className="rounded-[28px] bg-[rgba(var(--colors-Primary-white-rgb),0.92)] p-6 text-[var(--colors-Primary-dark-green)] shadow-[0_14px_30px_rgba(0,0,0,0.12)] md:p-8">
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
    <InfoCard className="rounded-[28px] border border-[rgba(var(--colors-Primary-dark-green-rgb),0.16)] bg-[rgba(var(--colors-Primary-white-rgb),0.82)] p-6 text-[var(--colors-Primary-dark-green)] shadow-[0_10px_24px_rgba(0,0,0,0.08)] md:p-8">
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
      <ContactSectionHeading />

      <div className={infoCardGridClasses}>
        <CommissionPromptCard />
        <ContactLinksCard />
      </div>
    </section>
  );
}

export default ContactSection;
