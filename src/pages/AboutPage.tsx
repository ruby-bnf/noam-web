import SiteNav from "../components/SiteNav";
import Footer from "../sections/Footer";
import { Link } from "react-router-dom";
import {
  aboutSectionContent,
  aboutWorkExperienceContent,
} from "../constants/content";
import NoamAboutImage from "../assets/Noam-about-me.webp";

function HeroSection() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col gap-8">
        <p className="subtitle">About me</p>

        <h1 className="header-title">{aboutSectionContent.title}</h1>

        <p className="body-text max-w-[75ch] whitespace-pre-line">
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
    <div className="flex flex-col gap-3 pb-6 border-b border-[rgba(var(--colors-Primary-dark-green-rgb),0.08)] last:border-b-0 last:pb-0">
      <div className="flex flex-col gap-1">
        <h3 className="sm-text font-semibold">{role}</h3>
        <p className="body-text font-semibold">{period}</p>
      </div>
      <p className="body-text">{description}</p>
    </div>
  );
}

function WorkExperienceSection() {
  return (
    <div className="flex flex-col gap-8 border-t border-[rgba(var(--colors-Primary-dark-green-rgb),0.12)] pt-12">
      <h2 className="header-title">{aboutWorkExperienceContent.title}</h2>

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
    <div className="flex min-h-screen flex-col bg-[var(--colors-Primary-white)] px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-0 text-[var(--colors-Primary-dark-green)]">
      <SiteNav />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12">
        <HeroSection />
        <WorkExperienceSection />

        <Footer />
      </main>
    </div>
  );
}

export default AboutPage;
