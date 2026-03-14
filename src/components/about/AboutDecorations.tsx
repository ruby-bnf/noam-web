import decorativeVectorA from "../../assets/decoratives/Vector.svg";
import decorativeVectorB from "../../assets/decoratives/Vector (1).svg";
import decorativeVectorC from "../../assets/decoratives/Vector (2).svg";
import decorativeVectorD from "../../assets/decoratives/Vector (3).svg";
import decorativeVectorE from "../../assets/decoratives/Vector (4).svg";

const decorations = [
  {
    src: decorativeVectorA,
    className: "absolute left-[18%] top-[18%] w-10 opacity-70 md:w-12",
  },
  {
    src: decorativeVectorB,
    className:
      "absolute right-[16%] top-[22%] hidden w-8 rotate-12 opacity-75 md:block md:w-10",
  },
  {
    src: decorativeVectorC,
    className:
      "absolute left-[20%] bottom-[20%] w-9 -rotate-6 opacity-70 md:w-11",
  },
  {
    src: decorativeVectorD,
    className:
      "absolute right-[18%] bottom-[18%] hidden w-9 opacity-75 md:block md:w-11",
  },
  {
    src: decorativeVectorE,
    className:
      "absolute left-[10%] top-[34%] hidden w-7 -rotate-12 opacity-65 md:block md:w-9",
  },
  {
    src: decorativeVectorB,
    className: "absolute right-[10%] top-[38%] w-7 rotate-6 opacity-60 md:w-9",
  },
  {
    src: decorativeVectorA,
    className:
      "absolute left-[14%] bottom-[12%] hidden w-7 rotate-12 opacity-60 md:block md:w-9",
  },
  {
    src: decorativeVectorE,
    className:
      "absolute right-[12%] bottom-[28%] w-8 -rotate-6 opacity-65 md:w-10",
  },
  {
    src: decorativeVectorC,
    className:
      "absolute left-[28%] top-[10%] hidden w-6 opacity-55 md:block md:w-8",
  },
  {
    src: decorativeVectorD,
    className:
      "absolute right-[26%] bottom-[10%] hidden w-6 rotate-6 opacity-55 md:block md:w-8",
  },
] as const;

function AboutDecorations() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      {decorations.map(({ src, className }, index) => (
        <img key={`${src}-${index}`} src={src} alt="" className={className} />
      ))}
    </div>
  );
}

export default AboutDecorations;
