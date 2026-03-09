import type { HTMLAttributes, ReactNode } from "react";

type InfoCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
};

function InfoCard({ children, className = "", ...rest }: InfoCardProps) {
  return (
    <article className={className} {...rest}>
      {children}
    </article>
  );
}

export default InfoCard;
