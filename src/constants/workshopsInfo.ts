import drawingScentsThumbnail from "../assets/workshops/DrawingScents/drawingScentsThumbnail.svg";
import comicsFromTheFutureThumbnail from "../assets/workshops/ComicsFromTheFuture/DrawThumbnail.thumb.webp";
import fibbonacciThumbnail from "../assets/workshops/fibbonacci/fibbonacciThumbnail.thumb.webp";
import foxLinoThumbnail from "../assets/workshops/lino/foxLinoTumbnail.thumb.webp";

type WorkshopStatus = "open" | "new" | "closed";

export type WorkshopItem = {
  title: string;
  description: string;
  status: WorkshopStatus;
  thumbnail: string;
};

export const workshopsSectionContent: {
  intro: string;
  workshops: WorkshopItem[];
} = {
  intro:
    "When I’m not drawing, I lead creative educational workshops that translate niche research into collaborative and unconventional drawing experiences.",
  workshops: [
    {
      title: "Introduction to Linocut Printing",
      description:
        "Learn the basics of linocut: design, carve, ink, and print your first handmade prints. No experience needed.",
      status: "new",
      thumbnail: foxLinoThumbnail,
    },
    {
      title: "Comics from the future!",
      description:
        "How do you imagine the future? Discover speculative storytelling through comics",
      status: "open",
      thumbnail: comicsFromTheFutureThumbnail,
    },
    {
      title: "Drawing scents",
      description:
        "What does a smell look like? Explore the connection between smell and visual memory",
      status: "open",
      thumbnail: drawingScentsThumbnail,
    },
    {
      title: "Fibonacci in nature",
      description:
        "explore the intersection of art and science through the study of the Golden Ratio",
      status: "closed",
      thumbnail: fibbonacciThumbnail,
    },
  ],
};
