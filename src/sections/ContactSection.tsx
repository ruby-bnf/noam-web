import Footer from "./Footer";

const textLinkClasses = "underline decoration-[1.5px] underline-offset-4";
const contactLinkClasses = `body-text w-fit ${textLinkClasses}`;

const commissionFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeBOhSKgrusVzXPkv_uLjEjqTuvg0mHJdK0JS4lF6ZTQWcaQA/viewform?usp=header";

const contactLinks = [
  {
    href: "mailto:Noamhen.illustration@gmail.com",
    label: "Noamhen.illustration@gmail.com",
    isExternal: false,
  },
  {
    href: "https://www.instagram.com/noam.illustration/",
    label: "@Noam.illustration",
    isExternal: true,
  },
  {
    href: "https://noamhen-newsletter.beehiiv.com/",
    label: "Subscribe to my studio&apos;s Newsletter",
    isExternal: true,
  },
] as const;

type ContactLinkProps = {
  href: string;
  label: string;
  className: string;
  isExternal?: boolean;
};

function ContactLink({
  href,
  label,
  className,
  isExternal = true,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="snap-start bg-white px-5 pt-24 md:px-10 xl:px-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 pb-12 lg:grid-cols-2 lg:gap-12 md:pb-16">
        <div className="flex min-h-0 flex-col gap-4">
          <h2 className="header-title">Get in touch!</h2>

          <p className="body-text max-w-[75ch]">
            Are you interested in a commissioned project or a workshop? You can
            start by filing a commission form.{" "}
            <ContactLink
              href={commissionFormUrl}
              label="Commission form"
              className={textLinkClasses}
            />
            .
          </p>
        </div>

        <div className="flex min-h-0 flex-col gap-3 lg:justify-self-end lg:max-w-[30rem]">
          <p className="body-text">
            I am also available via mail and on social media:
          </p>
          {contactLinks.map((link) => (
            <ContactLink
              key={link.href}
              href={link.href}
              label={link.label}
              className={contactLinkClasses}
              isExternal={link.isExternal}
            />
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default ContactSection;
