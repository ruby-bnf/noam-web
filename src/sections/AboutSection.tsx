import kangarooImage from "../assets/Projects/comics/Kangaroo/Kangaroo-p-1.png";
import { aboutSectionContent } from "../constants/content";

function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen snap-start items-center bg-white px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src={kangarooImage}
            alt="Kangaroo comic artwork"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="p-6 md:p-8">
          <h2 className="section-title text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] tracking-[0.08em] uppercase">
            {aboutSectionContent.title}
          </h2>
          <p className="mt-4 whitespace-pre-line text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.7] text-[var(--ink)]">
            {aboutSectionContent.body}
          </p>

          <div className="mt-20">
            <h3 className="section-title text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.05] tracking-[0.08em] uppercase">
              {aboutSectionContent.whatIDoTitle}
            </h3>
            <p className="mt-3 text-[1rem] leading-[1.7] text-[var(--ink)]">
              {aboutSectionContent.whatIDoItems.map((item) => (
                <span key={item} className="block">
                  {item}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
