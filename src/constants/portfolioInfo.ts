import botanicalGardensImage from "../assets/Projects/Illustrations/BotanicalGardens.display.webp";
import botanicalGardensThumbnail from "../assets/Projects/Illustrations/BotanicalGardens.thumb.webp";
import groeneSchattenImage from "../assets/Projects/Illustrations/GroeneSchattenTreasureHuntMap.display.webp";
import groeneSchattenThumbnail from "../assets/Projects/Illustrations/GroeneSchattenTreasureHuntMap.thumb.webp";
import kanguroThumbnail from "../assets/Projects/Illustrations/Kangurothumbnail.png";
import rainyRotterdamNoordImage from "../assets/Projects/Illustrations/RainyRotterdamNoord.display.webp";
import rainyRotterdamNoordThumbnail from "../assets/Projects/Illustrations/RainyRotterdamNoord.thumb.webp";
import tomatoThumbnail from "../assets/Projects/Illustrations/tomatothumbnail.png";
import type { ProjectItem } from "../components/portfolio/types";

export const selectedProjects: ProjectItem[] = [
  {
    type: "image",
    title: "Kanguro",
    imageAlt: "Kanguro thumbnail",
    imageSrc: kanguroThumbnail,
    thumbnailSrc: kanguroThumbnail,
  },
  {
    type: "image",
    title: "Tomato",
    imageAlt: "Tomato thumbnail",
    imageSrc: tomatoThumbnail,
    thumbnailSrc: tomatoThumbnail,
  },
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
