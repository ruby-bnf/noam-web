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
      className="button-unstyled inline-flex h-8 w-8 items-center justify-center self-center rounded-full border border-[rgba(var(--ink-rgb),0.25)] bg-[rgba(var(--cream-rgb),0.94)] text-base font-semibold text-[var(--ink)]"
      aria-label={label}
    >
      {direction === "previous" ? "<" : ">"}
    </button>
  );
}

export default ProjectCarouselNavButton;
