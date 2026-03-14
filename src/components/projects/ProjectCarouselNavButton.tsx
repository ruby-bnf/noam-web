type ProjectCarouselNavButtonProps = {
  label: string;
  direction: "previous" | "next";
  onClick: () => void;
};

function ProjectCarouselNavButton({
  label,
  direction,
  onClick,
}: ProjectCarouselNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="button-unstyled inline-flex h-10 w-10 items-center justify-center self-center rounded-full border border-[rgba(var(--ink-rgb),0.25)] bg-[rgba(var(--cream-rgb),0.94)] text-lg font-semibold text-[var(--ink)] transition-transform duration-200 hover:-translate-y-0.5"
      aria-label={label}
    >
      {direction === "previous" ? "<" : ">"}
    </button>
  );
}

export default ProjectCarouselNavButton;