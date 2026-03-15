import botanicalGardensImage from "../assets/Projects/Illustrations/BotanicalGardens.jpg";
import botanicalGardensThumbnail from "../assets/Projects/Illustrations/BotanicalGardens.thumb.webp";
import groeneSchattenImage from "../assets/Projects/Illustrations/GroeneSchattenTreasureHuntMap.png";
import groeneSchattenThumbnail from "../assets/Projects/Illustrations/GroeneSchattenTreasureHuntMap.thumb.webp";
import rainyRotterdamNoordImage from "../assets/Projects/Illustrations/RainyRotterdamNoord.jpg";
import rainyRotterdamNoordThumbnail from "../assets/Projects/Illustrations/RainyRotterdamNoord.thumb.webp";
import type { ProjectItem } from "../components/portfolio/types";

export const selectedProjects: ProjectItem[] = [
  {
    type: "image",
    title: "Botanical Gardens",
    imageAlt: "Botanical Gardens",
    imageSrc: botanicalGardensImage,
    thumbnailSrc: botanicalGardensThumbnail,
  },
  {
    type: "project",
    title: "Groene Schatten Treasure Hunt Map",
    imageAlt: "Groene Schatten Treasure Hunt Map",
    imageSrc: groeneSchattenImage,
    thumbnailSrc: groeneSchattenThumbnail,
    shortDescription:
      "An interactive map guiding visitors through the Groene Schatten park in Rotterdam, highlighting points of interest and hidden gems.",
    pagePath: "/portfolio/groene-schatten-treasure-hunt-map",
  },
  {
    type: "image",
    title: "Rainy Rotterdam Noord",
    imageAlt: "Rainy Rotterdam Noord",
    imageSrc: rainyRotterdamNoordImage,
    thumbnailSrc: rainyRotterdamNoordThumbnail,
  },
];
