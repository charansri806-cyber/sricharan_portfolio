import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  children,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow"><span aria-hidden="true" className="eyebrow__dot" />{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
      {children}
    </div>
  );
}
