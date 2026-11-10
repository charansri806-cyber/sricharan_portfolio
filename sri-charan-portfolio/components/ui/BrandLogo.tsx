import Image from "next/image";
import { site } from "@/data/site";

interface BrandLogoProps {
  kind: "personal" | "nextzen";
  priority?: boolean;
  className?: string;
}

export function BrandLogo({ kind, priority = false, className = "" }: BrandLogoProps) {
  const personal = kind === "personal";
  const src = personal ? site.personalLogo : site.nextzenLogo;
  const alt = personal ? "Sri Charan personal logo" : "NextZen Technos logo";

  return (
    <Image
      className={`brand-logo brand-logo--${kind} ${className}`.trim()}
      src={src}
      alt={alt}
      width={personal ? 2172 : 500}
      height={personal ? 724 : 500}
      sizes={personal ? "(max-width: 560px) 132px, 180px" : "(max-width: 560px) 72px, 100px"}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      unoptimized
    />
  );
}
