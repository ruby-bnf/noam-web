import trees from "../assets/background/trees.svg";

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
        className="absolute bottom-0 left-0 h-auto w-full object-contain"
        src={trees}
        alt=""
      />
    </div>
  );
}

export default HeroTrees;
