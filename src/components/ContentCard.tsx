import { Link } from "react-router-dom";

type WorkshopStatus = "open" | "new" | "closed";

type ContentCardProps = {
  title: string;
  description: string;
  picture: string;
  pictureAlt?: string;
  href?: string;
  status?: WorkshopStatus;
  isFeatured?: boolean;
};

function ContentCard({
  title,
  description,
  picture,
  pictureAlt,
  href,
  status,
  isFeatured,
}: ContentCardProps) {
  const normalizedStatus = status ?? "open";

  const cardClassName = `group mx-auto flex w-full max-w-[19rem] h-[26rem] flex-col overflow-hidden rounded-lg bg-[rgba(var(--colors-Primary-white-rgb),0.88)] shadow-[0_10px_20px_rgba(var(--colors-Primary-dark-green-rgb),0.12)] transition-all duration-300 hover:-translate-y-1 hover:rotate-[-0.35deg] hover:shadow-[0_16px_28px_rgba(var(--colors-Primary-dark-green-rgb),0.2)] focus-visible:-translate-y-1 focus-visible:shadow-[0_16px_28px_rgba(var(--colors-Primary-dark-green-rgb),0.2)] focus-visible:outline-2 focus-visible:outline-[var(--red-default)] focus-visible:outline-offset-2 ${
    isFeatured
      ? "-translate-y-1 rotate-[-0.35deg] shadow-[0_16px_28px_rgba(var(--colors-Primary-dark-green-rgb),0.2)]"
      : ""
  }`;

  const statusStyles: Record<WorkshopStatus, string> = {
    open: "bg-[rgba(var(--colors-Primary-white-rgb),0.92)] text-[var(--colors-Primary-dark-green)]",
    new: "bg-[rgba(var(--secondary-blue-rgb),0.95)] text-[var(--colors-Primary-dark-green)]",
    closed:
      "bg-[rgba(var(--red-default-rgb),0.92)] text-[var(--colors-Primary-white)]",
  };
  const ctaLabel = normalizedStatus === "closed" ? "Show interest" : "Book now";
  const isInternalHref = Boolean(
    href && (href.startsWith("/") || href.startsWith("#")),
  );

  const cardContent = (
    <>
      <div className="relative h-44 overflow-hidden">
        <img
          src={picture}
          alt={pictureAlt ?? title}
          className={`h-full w-full bg-[rgba(var(--colors-Primary-white-rgb),0.5)] object-cover transition-transform duration-300 group-hover:scale-[1.04] ${
            isFeatured ? "scale-[1.04]" : ""
          }`}
          loading="lazy"
        />
        <span
          className={`pointer-events-none absolute top-3 right-3 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.05em] uppercase shadow-[0_4px_10px_rgba(var(--colors-Primary-dark-green-rgb),0.2)] ${statusStyles[normalizedStatus]}`}
        >
          {normalizedStatus}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="sm-text whitespace-pre-line">{title}</h3>
        <p className="body-text m-0 line-clamp-4">{description}</p>
        <span
          className={`button-secondary mt-auto w-fit self-start group-hover:-translate-y-0.5 group-hover:bg-[rgba(var(--red-default-rgb),0.1)] ${
            isFeatured ? "-translate-y-0.5" : ""
          }`}
        >
          {ctaLabel}
        </span>
      </div>
    </>
  );

  if (href) {
    if (isInternalHref) {
      return (
        <Link to={href} className={cardClassName}>
          {cardContent}
        </Link>
      );
    }

    return (
      <a href={href} className={cardClassName}>
        {cardContent}
      </a>
    );
  }

  return (
    <article className={`${cardClassName} cursor-pointer`}>
      {cardContent}
    </article>
  );
}

export type { ContentCardProps };
export default ContentCard;
