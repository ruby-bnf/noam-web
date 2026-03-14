import foregroundDivider from "../../assets/background/forground.svg";

type AboutForegroundDividerProps = {
  isReady: boolean;
};

function AboutForegroundDivider({ isReady }: AboutForegroundDividerProps) {
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 z-[2] w-[min(100%,1440px)] -translate-x-1/2 -translate-y-[58%]">
      <div
        className={`transition-transform duration-900 ease-[cubic-bezier(0.2,0.95,0.2,1)] ${
          isReady ? "translate-y-0" : "translate-y-[130%]"
        }`}
      >
        <img
          src={foregroundDivider}
          alt=""
          aria-hidden="true"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

export default AboutForegroundDivider;
