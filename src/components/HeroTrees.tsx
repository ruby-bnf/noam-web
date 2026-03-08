import treeNoam2 from "../assets/heroSection/Treenoam2.png";
import treeNoam3 from "../assets/heroSection/Treenoam3.png";

type HeroTreesProps = {
  introVisible: boolean;
};

function HeroTrees({ introVisible }: HeroTreesProps) {
  return (
    <div
      className={`absolute inset-0 z-[2] transition-opacity duration-700 ease-out ${
        introVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDuration: "820ms", transitionDelay: "1240ms" }}
    >
      <img
        className="absolute top-[20px] left-[calc(50%-730px)] w-[350px] object-contain md:w-[465px]"
        src={treeNoam3}
        alt=""
      />

      <img
        className="absolute top-[332px] left-[calc(50%-405px)] w-[245px] object-contain md:w-[300px]"
        src={treeNoam2}
        alt=""
      />

      <img
        className="absolute top-[20px] left-[calc(50%+380px)] w-[325px] object-contain md:w-[440px]"
        src={treeNoam3}
        alt=""
        style={{ transform: "scaleX(-1)" }}
      />
    </div>
  );
}

export default HeroTrees;
