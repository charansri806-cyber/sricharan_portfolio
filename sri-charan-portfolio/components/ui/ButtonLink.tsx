import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icons";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary" | "text";
  icon?: IconName;
  iconBefore?: boolean;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  icon = "arrow-up-right",
  iconBefore = false,
  children,
  className = "",
  target,
  rel,
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("https://") || href.startsWith("http://");
  const safeTarget = target ?? (isExternal ? "_blank" : undefined);
  const safeRel = rel ?? (isExternal ? "noopener noreferrer" : undefined);

  return (
    <a
      className={`button-link button-link--${variant} ${className}`.trim()}
      href={href}
      target={safeTarget}
      rel={safeRel}
      {...props}
    >
      {iconBefore && <Icon className="button-link__icon" name={icon} />}
      <span>{children}</span>
      {!iconBefore && icon && <Icon className="button-link__icon" name={icon} />}
    </a>
  );
}
