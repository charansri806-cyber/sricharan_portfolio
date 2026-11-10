import type { SVGProps } from "react";

export type IconName =
  | "arrow-up-right"
  | "arrow-right"
  | "arrow-down"
  | "arrow-up"
  | "mail"
  | "github"
  | "linkedin"
  | "instagram"
  | "spark"
  | "code"
  | "database"
  | "bulb"
  | "globe"
  | "close"
  | "check";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, ...props }: IconProps) {
  const shared = {
    "aria-hidden": true as const,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    ...props,
  };

  switch (name) {
    case "arrow-up-right":
      return <svg {...shared}><path d="M7 17 17 7M8 7h9v9" /></svg>;
    case "arrow-right":
      return <svg {...shared}><path d="M4 12h15m-6-6 6 6-6 6" /></svg>;
    case "arrow-down":
      return <svg {...shared}><path d="M12 4v15m6-6-6 6-6-6" /></svg>;
    case "arrow-up":
      return <svg {...shared}><path d="M12 20V5m-6 6 6-6 6 6" /></svg>;
    case "mail":
      return <svg {...shared}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>;
    case "github":
      return <svg {...shared} fill="currentColor" stroke="none"><path d="M12 .9a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.71.78 1.15 1.78 1.15 3 0 4.29-2.6 5.24-5.08 5.51.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .9Z" /></svg>;
    case "linkedin":
      return <svg {...shared} fill="currentColor" stroke="none"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.88H4.97V9.35h2.96v9.53ZM6.45 8.05a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12.43 10.83h-2.95v-4.64c0-1.11-.02-2.53-1.54-2.53-1.55 0-1.79 1.2-1.79 2.45v4.72H9.65V9.35h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 2.99 0 3.56 1.96 3.56 4.51v5.24Z" /></svg>;
    case "instagram":
      return <svg {...shared}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>;
    case "spark":
      return <svg {...shared}><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></svg>;
    case "code":
      return <svg {...shared}><path d="m8 7-5 5 5 5M16 7l5 5-5 5m-2-13-4 16" /></svg>;
    case "database":
      return <svg {...shared}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" /></svg>;
    case "bulb":
      return <svg {...shared}><path d="M9 18h6m-5 3h4m-2-19a7 7 0 0 0-4 12.74c.55.38 1 1.1 1 1.76h6c0-.66.45-1.38 1-1.76A7 7 0 0 0 12 2Z" /></svg>;
    case "globe":
      return <svg {...shared}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18m0-18a14 14 0 0 0 0 18" /></svg>;
    case "close":
      return <svg {...shared}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    case "check":
      return <svg {...shared}><path d="m5 12 4 4L19 6" /></svg>;
  }
}
