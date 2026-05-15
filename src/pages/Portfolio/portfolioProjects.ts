import cat1 from "../../assets/portfolio/Cat-story/cat1.png";
import cat2 from "../../assets/portfolio/Cat-story/cat2.png";
import cat3 from "../../assets/portfolio/Cat-story/cat3.png";
import cat4 from "../../assets/portfolio/Cat-story/cat4.png";
import cat5 from "../../assets/portfolio/Cat-story/cat5.png";
import oliver1 from "../../assets/portfolio/Cat-story/Oliver/oliver1.png";
import oliver2 from "../../assets/portfolio/Cat-story/Oliver/oliver2.png";

export type PortfolioProject = {
  category: string;
  title: string;
  summary: string | null;
  image: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Cat story",
    category: "Comic",
    summary:
      "A short story about the time I looked after my neighbor's cat and ended up in a garden-to-garden chase.",
    image: [cat1, cat2, cat3, cat4, cat5],
  },
  {
    title: "Oliver",
    category: "Comic",
    summary: "A short story about my first job as a dog-walker.",
    image: [oliver1, oliver2],
  },
];
