import comicsFromTheFutureImage from "../../assets/workshops/ComicsFromTheFuture/DrawThumbnail.webp";
import comicsFromTheFutureThumbnail from "../../assets/workshops/ComicsFromTheFuture/DrawThumbnail.thumb.webp";

import drawingScentsDraw from "../../assets/workshops/DrawingScents/Draw.webp";
import drawingScentsHome from "../../assets/workshops/DrawingScents/Home.webp";
import drawingScentsPeople from "../../assets/workshops/DrawingScents/People.webp";
import drawingScentsThumbnail from "../../assets/workshops/DrawingScents/Draw.thumb.webp";

import colorAnalysisImage1 from "../../assets/workshops/colorAnalysis/20251122_193424.jpg";
import colorAnalysisImage2 from "../../assets/workshops/colorAnalysis/20251122_193429.jpg";
import colorAnalysisImage3 from "../../assets/workshops/colorAnalysis/20251122_193431.jpg";

import fibonacciImage from "../../assets/workshops/fibbonacci/fibbonacciThumbnail.webp";
import fibonacciThumbnail from "../../assets/workshops/fibbonacci/fibbonacciThumbnail.thumb.webp";

import linoFoxImage from "../../assets/workshops/lino/foxLinoTumbnail.webp";
import linoTogetherImage from "../../assets/workshops/lino/totogether.webp";
import linoThumbnail from "../../assets/workshops/lino/foxLinoTumbnail.thumb.webp";

export type WorkshopStatus = "open" | "new" | "closed";

export type WorkshopProject = {
  category: string;
  title: string;
  summary: string;
  thumbnail: string;
  status: WorkshopStatus;
  images: string[];
};

export const workshopProjects: WorkshopProject[] = [
  {
    title: "Introduction to Linocut Printing",
    category: "Printmaking Workshop",
    summary:
      "Learn the full linocut workflow from sketch to print. In this beginner-friendly session, participants design, carve, ink, and hand-print their own linocut image while exploring composition and texture.",
    thumbnail: linoThumbnail,
    status: "open",
    images: [linoFoxImage, linoTogetherImage],
  },
  {
    title: "Comics from the future!",
    category: "Speculative Storytelling",
    summary:
      "How do you imagine tomorrow? This workshop combines world-building and visual narrative to create short speculative comics, with practical prompts that help participants turn ideas into scenes.",
    thumbnail: comicsFromTheFutureThumbnail,
    status: "open",
    images: [comicsFromTheFutureImage],
  },
  {
    title: "Drawing scents",
    category: "Sensory Drawing",
    summary:
      "What does a smell look like? Participants use memory, association, and observation exercises to translate scent into image, building personal visual language through guided drawing tasks.",
    thumbnail: drawingScentsThumbnail,
    status: "open",
    images: [drawingScentsDraw, drawingScentsHome, drawingScentsPeople],
  },
  {
    title: "Find your colors - color analysis!",
    category: "Color Theory Workshop",
    summary:
      "Discover more about your personal relationship with colors. During this workshop, you will create your own personal color-map to trace the colors that currently play a role in your life. You'll leave with a better understanding of color theory and your personalized color palette. It's a fun workshop to do with friends where you get to know each other (and yourself) better!",
    thumbnail: colorAnalysisImage1,
    status: "new",
    images: [colorAnalysisImage1, colorAnalysisImage2, colorAnalysisImage3],
  },
  {
    title: "Fibonacci in nature",
    category: "Art and Science",
    summary:
      "Explore the Golden Ratio and recurring natural patterns through drawing. This session blends playful geometry with botanical observation to connect mathematical structure and creative interpretation.",
    thumbnail: fibonacciThumbnail,
    status: "open",
    images: [fibonacciImage],
  },
];
