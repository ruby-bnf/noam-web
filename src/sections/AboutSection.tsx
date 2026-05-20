import PortfolioGallery from "../components/portfolio/PortfolioGallery";
import { Link } from "react-router-dom";
import {
  aboutSectionContent,
  projectsSectionContent,
} from "../constants/content";

import ComicCat from "../assets/PortfolioThumbnails/Comic/cat-p1.webp";
import ComicKangaroo from "../assets/PortfolioThumbnails/Comic/Kangarp-2.webp";
import ComicOliver from "../assets/PortfolioThumbnails/Comic/oliver.webp";
import ComicTomato from "../assets/PortfolioThumbnails/Comic/Tomato-factory.webp";

const portfolioGalleryImages = [
  ComicKangaroo,
  ComicCat,
  ComicOliver,
  ComicTomato,
];

function AboutSection() {
  return (
    <section
      id="portfolio"
      className="relative w-full flex min-h-screen snap-start items-center bg-white px-[clamp(1.25rem,4vw,5rem)] pt-20 pb-10"
    >
      <div className="mx-auto grid min-h-[calc(100vh-7.5rem)] w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="order-1 flex flex-col justify-center lg:order-1">
          <div className="max-w-xl space-y-6">
            <p className="subtitle">About me</p>

            <h2 className="header-title">
              <span className="block"> {aboutSectionContent.title}</span>
            </h2>

            <p className="body-text m-0 pt-6">
              {aboutSectionContent.body}

              {projectsSectionContent.body}
            </p>

            <div className="pt-6">
              <Link to="/about" className="button-primary">
                More about me
              </Link>
            </div>
          </div>
        </div>

        <div className="order-2 min-h-[24rem] lg:order-2 lg:min-h-full">
          <PortfolioGallery
            images={portfolioGalleryImages}
            projectTitles={[
              "Kangaroo",
              "Cat story",
              "Oliver",
              "Tomato Factory",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
