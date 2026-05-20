type IconTextLinkProps = {
  href: string;
  iconSrc: string;
  text: string;
  external?: boolean;
};

function IconTextLink({
  href,
  iconSrc,
  text,
  external = false,
}: IconTextLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex w-fit items-center gap-3 text-dark-green underline-offset-4 transition-opacity hover:opacity-75"
    >
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className="h-5 w-5 object-contain"
      />
      <span>{text}</span>
    </a>
  );
}

export default IconTextLink;
