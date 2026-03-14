import foregroundDivider from "../../assets/background/forground.svg";

type AboutForegroundDividerProps = {
  isReady: boolean;
};

function AboutForegroundDivider({ isReady }: AboutForegroundDividerProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] -translate-y-[58%] overflow-hidden">
      <div
        className={`transition-transform duration-900 ease-[cubic-bezier(0.2,0.95,0.2,1)] ${
          isReady ? "translate-y-0" : "translate-y-[130%]"
        }`}
      >
        <img
          src={foregroundDivider}
          alt=""
          aria-hidden="true"
          className="block h-auto w-full -translate-y-px object-contain"
        />
      </div>
    </div>
  );
}

export default AboutForegroundDivider;
