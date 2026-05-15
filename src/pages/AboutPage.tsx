import SiteNav from "../components/SiteNav";
import Footer from "../sections/Footer";
import { Link } from "react-router-dom";
import {
  aboutSectionContent,
  aboutWorkExperienceContent,
} from "../constants/content";
import NoamAboutImage from "../assets/Noam-about-me.jpg";

const sectionTitleStyle = {
  fontFamily: "var(--title-font)",
  fontWeight: 600,
  color: "var(--colors-Primary-dark-green)",
};

const heroTitleStyle = {
  fontFamily: "var(--title-font)",
  fontWeight: 900,
  color: "var(--secondary-blue)",
};

function HeroSection() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col gap-8">
        <p className="m-0 inline-flex pb-1 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[rgba(var(--ink-rgb),0.72)]">
          About me
        </p>

        <h1
          className="section-title text-[clamp(2.5rem,4.2vw,4rem)] leading-[0.95] tracking-[0.06em] uppercase"
          style={heroTitleStyle}
        >
          {aboutSectionContent.title}
        </h1>

        <p className="max-w-[75ch] whitespace-pre-line text-[clamp(1.08rem,1.4vw,1.28rem)] leading-[1.7] text-[var(--colors-Primary-dark-green)] font-normal">
          {aboutSectionContent.body}
        </p>

        <div className="pt-2">
          <Link to="/contact" className="button-primary">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={NoamAboutImage}
          alt="Noam illustration"
          className="w-full max-w-md rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

function WorkExperienceItem({
  role,
  period,
  description,
}: {
  role: string;
  period: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 pb-6 border-b border-[rgba(var(--ink-rgb),0.08)] last:border-b-0 last:pb-0">
      <div className="flex flex-col gap-1">
        <h3 className="text-[clamp(1.15rem,1.5vw,1.3rem)] font-semibold text-[var(--colors-Primary-dark-green)]">
          {role}
        </h3>
        <p className="text-[0.85rem] font-semibold tracking-[0.08em] uppercase text-[rgba(var(--ink-rgb),0.6)]">
          {period}
        </p>
      </div>
      <p className="text-[clamp(1rem,1.1vw,1.1rem)] leading-[1.6] text-[rgba(var(--ink-rgb),0.8)]">
        {description}
      </p>
    </div>
  );
}

function WorkExperienceSection() {
  return (
    <div className="flex flex-col gap-8 border-t border-[rgba(var(--ink-rgb),0.12)] pt-12">
      <h2
        className="text-[clamp(1.8rem,3.2vw,3.2rem)] leading-[0.98] tracking-[0.05em] uppercase"
        style={sectionTitleStyle}
      >
        {aboutWorkExperienceContent.title}
      </h2>

      <div className="flex flex-col gap-8">
        {aboutWorkExperienceContent.experiences.map((exp) => (
          <WorkExperienceItem
            key={exp.role}
            role={exp.role}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12 text-[var(--ink)]">
      <SiteNav />

      <main className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-6xl flex-col gap-12">
        <HeroSection />
        <WorkExperienceSection />

        <Footer />
      </main>
    </div>
  );
}

export default AboutPage;
