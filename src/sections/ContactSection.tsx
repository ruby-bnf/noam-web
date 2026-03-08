import emailIcon from "../assets/icons/emailIcon.svg";
import instagramIcon from "../assets/icons/InstegramIcon.svg";
import IconTextLink from "../components/IconTextLink";
import InfoCard from "../components/InfoCard";
import { contactSectionContent } from "../constants/content";

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

function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen snap-start flex-col justify-center gap-8 px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <h2 className="text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] font-semibold tracking-[0.08em] uppercase text-[var(--colors-Primary-dark-green)]">
        {contactSectionContent.title}
      </h2>

      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <InfoCard className="rounded-[28px] bg-[rgba(var(--colors-Primary-white-rgb),0.92)] p-6 text-[var(--colors-Primary-dark-green)] shadow-[0_14px_30px_rgba(0,0,0,0.12)] md:p-8">
          <p className="max-w-[40ch] text-[clamp(1.03rem,1.3vw,1.2rem)] leading-[1.65]">
            {contactSectionContent.commissionPrompt}
          </p>

          <div className="mt-5">
            <a
              href="mailto:noamhen100@gmail.com?subject=Commission%20Form%20Request"
              className="inline-flex items-center justify-center rounded-full bg-[var(--colors-Secondary-bubble-pink)] px-5 py-3 text-sm font-semibold text-[var(--colors-Primary-dark-green)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book Here
            </a>
          </div>
        </InfoCard>

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
      </div>
    </section>
  );
}

export default ContactSection;
