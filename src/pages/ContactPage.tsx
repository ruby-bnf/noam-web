import SiteNav from "../components/SiteNav";
import Footer from "../sections/Footer";
import heroBackground from "../assets/HeroSectionComic.png";

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--colors-Primary-white)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-0 text-[var(--ink)]">
      <SiteNav />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10">
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="section-title text-[clamp(2.4rem,4vw,3.8rem)] leading-[0.98] tracking-[0.06em] uppercase text-[var(--colors-Primary-dark-green)]">
              Get in touch!
            </h1>

            <p className="max-w-[75ch] text-[clamp(1.02rem,1.25vw,1.16rem)] leading-[1.7] text-[rgba(var(--ink-rgb),0.88)]">
              Are you interested in a commissioned project or a workshop? You
              can start by filing a commission form.{" "}
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

            <div className="flex flex-col gap-3 text-[clamp(1rem,1.2vw,1.1rem)] leading-[1.7] text-[rgba(var(--ink-rgb),0.9)]">
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

          <div className="flex items-start justify-center lg:justify-end">
            <img
              src={heroBackground}
              alt="Noam studio illustration"
              className="h-full max-h-[34rem] w-full max-w-xl rounded-lg object-cover"
            />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default ContactPage;
