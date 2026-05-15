import cat1 from "../../assets/portfolio/Cat-story/cat1.png";
import cat2 from "../../assets/portfolio/Cat-story/cat2.png";
import cat3 from "../../assets/portfolio/Cat-story/cat3.png";
import cat4 from "../../assets/portfolio/Cat-story/cat4.png";
import cat5 from "../../assets/portfolio/Cat-story/cat5.png";

import oliver1 from "../../assets/portfolio/Oliver/oliver1.png";
import oliver2 from "../../assets/portfolio/Oliver/oliver2.png";

import kangaroo1 from "../../assets/portfolio/Kangaroo/Kangaroo1.png";
import kangaroo2 from "../../assets/portfolio/Kangaroo/Kangaroo2.png";

import Tomato1 from "../../assets/portfolio/Tomato-factory/Tomato1.png";
import Tomato2 from "../../assets/portfolio/Tomato-factory/Tomato2.png";
import Tomato3 from "../../assets/portfolio/Tomato-factory/Tomato3.png";
import Tomato4 from "../../assets/portfolio/Tomato-factory/Tomato4.png";

import window1 from "../../assets/portfolio/Window-Christmas-illustrations/Window-1.png";
import window2 from "../../assets/portfolio/Window-Christmas-illustrations/Window-2.jpg";
import window3 from "../../assets/portfolio/Window-Christmas-illustrations/Window-3.jpg";
import window4 from "../../assets/portfolio/Window-Christmas-illustrations/Window-4.jpg";
import window5 from "../../assets/portfolio/Window-Christmas-illustrations/Window-5.jpg";
import window6 from "../../assets/portfolio/Window-Christmas-illustrations/Window-6.jpg";
import window7 from "../../assets/portfolio/Window-Christmas-illustrations/Window-7.png";

import DrawingScentsBooklet from "../../assets/portfolio/Drawing-scents/booklet.png";
import DrawingScentsExample from "../../assets/portfolio/Drawing-scents/example.png";
import DrawingScentsFlowers from "../../assets/portfolio/Drawing-scents/flowers.png";
import DrawingScentsLandscape from "../../assets/portfolio/Drawing-scents/landscapes.png";
import DrawingScentsPots from "../../assets/portfolio/Drawing-scents/pots.png";
import DrawingScentsSpread from "../../assets/portfolio/Drawing-scents/spread.png";
import DrawingScentsTuinHuisje from "../../assets/portfolio/Drawing-scents/Tuin-huisje.png";

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
  {
    title: "Window Christmas illustration",
    category: "Window Doodling",
    summary:
      "Commissioned holiday window illustrations for a local indian restaurant.",
    image: [window1, window2, window3, window4, window5, window6, window7],
  },
  {
    title: "Drawing scents",
    category: "Booklet",
    summary:
      "2024, Digital, oil pastels and ink Hortus Leiden The booklet was created in collaboration with Hortus Leiden to support my workshop “Drawing Scents”. Illustrated with images inspired by the garden and its visitors, the booklet contains exercises designed to encourage readers to explore their memories and associations related to scent. The booklet was created in collaboration with Hortus Leiden to support my workshop “Drawing Scents”. Illustrated with images inspired by the garden and its visitors, the booklet contains exercises designed to encourage readers to explore their memories and associations related to scent. You can take the booklet with you out the garden, on a vacation or a trip with a friend, and explore your visual relationship with smells.",
    image: [
      DrawingScentsBooklet,
      DrawingScentsExample,
      DrawingScentsFlowers,
      DrawingScentsLandscape,
      DrawingScentsPots,
      DrawingScentsSpread,
      DrawingScentsTuinHuisje,
    ],
  },
];
