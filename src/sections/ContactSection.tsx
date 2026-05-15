import Footer from "./Footer";

const sectionClasses =
  "flex min-h-screen snap-start flex-col bg-[var(--colors-Primary-white)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-0";

const containerClasses =
  "mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12";

function ContactSection() {
  return (
    <section id="contact" className={sectionClasses}>
      <div className={containerClasses}>
        <div className="flex min-h-0 flex-col gap-4">
          <h2 className="section-title text-[clamp(2.4rem,4vw,3.8rem)] leading-[0.98] tracking-[0.06em] uppercase text-[var(--colors-Primary-dark-green)]">
            Get in touch!
          </h2>

          <p className="max-w-[75ch] text-[clamp(1.02rem,1.25vw,1.16rem)] leading-[1.7] text-[rgba(var(--ink-rgb),0.88)]">
            Are you interested in a commissioned project or a workshop? You can
            start by filing a commission form.{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeBOhSKgrusVzXPkv_uLjEjqTuvg0mHJdK0JS4lF6ZTQWcaQA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[1.5px] underline-offset-4"
            >
              Commission form
            </a>
            .
          </p>
        </div>

        <div className="flex min-h-0 flex-col gap-3 text-[clamp(1rem,1.2vw,1.1rem)] leading-[1.7] text-[rgba(var(--ink-rgb),0.9)] lg:justify-self-end lg:max-w-[30rem]">
          <p>I am also available via mail and on social media:</p>
          <a
            href="mailto:Noamhen.illustration@gmail.com"
            className="w-fit underline decoration-[1.5px] underline-offset-4"
          >
            Noamhen.illustration@gmail.com
          </a>
          <a
            href="https://www.instagram.com/noam.illustration/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit underline decoration-[1.5px] underline-offset-4"
          >
            @Noam.illustration
          </a>
          <a
            href="https://noamhen-newsletter.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit underline decoration-[1.5px] underline-offset-4"
          >
            Subscribe to my studio&apos;s Newsletter
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default ContactSection;
