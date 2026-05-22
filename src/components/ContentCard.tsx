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

  const cardClassName = `group mx-auto flex h-[20rem] min-h-[18rem] w-full max-w-[19rem] flex-col overflow-hidden rounded-lg bg-white/90 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:rotate-[-0.35deg] hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2 ${
    isFeatured ? "-translate-y-1 rotate-[-0.35deg] shadow-xl" : ""
  }`;

  const statusStyles: Record<WorkshopStatus, string> = {
    open: "bg-white/90 text-dark-green",
    new: "bg-blue/95 text-dark-green",
    closed: "bg-red/90 text-white",
  };
  const ctaLabel =
    normalizedStatus === "closed" ? "Show interest" : "More info";
  const isInternalHref = Boolean(
    href && (href.startsWith("/") || href.startsWith("#")),
  );

  const cardContent = (
    <>
      <div className="relative h-36 overflow-hidden">
        <img
          src={picture}
          alt={pictureAlt ?? title}
          className={`h-full w-full bg-white/50 object-cover transition-transform duration-300 group-hover:scale-[1.04] ${
            isFeatured ? "scale-[1.04]" : ""
          }`}
          loading="lazy"
        />
        <span
          className={`pointer-events-none absolute top-3 left-3 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.05em] uppercase shadow-md ${statusStyles[normalizedStatus]}`}
        >
          {normalizedStatus}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3 text-left">
        <h3 className="subtitle whitespace-pre-line">{title}</h3>
        <p className="sm-text m-0 line-clamp-4 text-dark-green/85">
          {description}
        </p>
        {href ? (
          isInternalHref ? (
            <Link
              to={href}
              className={`button-secondary mt-auto w-fit self-start group-hover:-translate-y-0.5 group-hover:bg-red/10 ${
                isFeatured ? "-translate-y-0.5" : ""
              }`}
              aria-label={`${ctaLabel} for ${title}`}
            >
              {ctaLabel}
            </Link>
          ) : (
            <a
              href={href}
              className={`button-secondary mt-auto w-fit self-start group-hover:-translate-y-0.5 group-hover:bg-red/10 ${
                isFeatured ? "-translate-y-0.5" : ""
              }`}
              aria-label={`${ctaLabel} for ${title}`}
            >
              {ctaLabel}
            </a>
          )
        ) : (
          <span
            className={`button-secondary mt-auto w-fit self-start group-hover:-translate-y-0.5 group-hover:bg-red/10 ${
              isFeatured ? "-translate-y-0.5" : ""
            }`}
          >
            {ctaLabel}
          </span>
        )}
      </div>
    </>
  );

  return <article className={cardClassName}>{cardContent}</article>;
}

export type { ContentCardProps };
export default ContentCard;
