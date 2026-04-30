import foreground from "../assets/background/forground.svg";

type HeroTreesProps = {
  introVisible: boolean;
};

function HeroTrees({ introVisible }: HeroTreesProps) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] translate-y-[18%] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`transition-transform duration-900 ease-[cubic-bezier(0.2,0.95,0.2,1)] ${
          introVisible ? "translate-y-0" : "translate-y-[130%]"
        }`}
        style={{ transitionDelay: "1240ms" }}
      >
        <img
          className="block h-auto w-full -translate-y-px object-contain"
          src={foreground}
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroTrees;
