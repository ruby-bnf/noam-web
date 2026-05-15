import cat1 from "../../assets/portfolio/Cat-story/cat1.png";
import cat2 from "../../assets/portfolio/Cat-story/cat2.png";
import cat3 from "../../assets/portfolio/Cat-story/cat3.png";
import cat4 from "../../assets/portfolio/Cat-story/cat4.png";
import cat5 from "../../assets/portfolio/Cat-story/cat5.png";

import oliver1 from "../../assets/portfolio/Oliver/oliver1.png";
import oliver2 from "../../assets/portfolio/Oliver/oliver2.png";

import kangaroo1 from "../../assets/portfolio/Kangaroo/kangaroo1.png";
import kangaroo2 from "../../assets/portfolio/Kangaroo/kangaroo2.png";

import Tomato1 from "../../assets/portfolio/Tomato-factory/tomato1.png";
import Tomato2 from "../../assets/portfolio/Tomato-factory/tomato2.png";
import Tomato3 from "../../assets/portfolio/Tomato-factory/tomato3.png";
import Tomato4 from "../../assets/portfolio/Tomato-factory/tomato4.png";

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
  {
    title: "Tomato Factory",
    category: "Comic",
    summary:
      "A short comic about my temporary job working in a tomato factory in rural Australia.",
    image: [Tomato1, Tomato2, Tomato3, Tomato4],
  },
  {
    title: "Kangaroo",
    category: "Comic",
    summary:
      "A slightly morbid story about a night in one of Australia’s endless roads.",
    image: [kangaroo1, kangaroo2],
  },
];
