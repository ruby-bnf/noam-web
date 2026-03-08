import type { ReactNode } from "react";

type InfoCardProps = {
  children: ReactNode;
  className?: string;
};

function InfoCard({ children, className = "" }: InfoCardProps) {
  return <article className={className}>{children}</article>;
}

export default InfoCard;
