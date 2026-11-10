import type { IconName } from "@/components/ui/Icons";
import { site } from "@/data/site";

export interface Initiative {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: IconName;
  accent: "blue" | "violet" | "cyan" | "pink";
  href?: string;
  linkText?: string;
}

export const initiatives: Initiative[] = [
  {
    id: "nextzen-technos",
    eyebrow: "Founder-led · 2026",
    title: "Building NextZen Technos",
    description:
      "Founded in 2026, NextZen Technos is the technology-focused company I am building around technology, learning, products, community, and opportunities.",
    icon: "globe",
    accent: "blue",
    href: site.nextzenWebsite,
    linkText: "Visit NextZen Technos",
  },
  {
    id: "agentic-ai-idea",
    eyebrow: "Participation · Google Cloud Agentic AI Day",
    title: "Exploring Agentic AI for real-world problems",
    description:
      "I participated in Google Cloud Agentic AI Day, powered by Hack2skill, with an innovative idea focused on using Agentic AI to address real-world problems.",
    icon: "spark",
    accent: "violet",
  },
  {
    id: "technical-exploration",
    eyebrow: "Learning through experimentation",
    title: "Exploring technology",
    description:
      "I am learning and experimenting across C, Python, SQL, Microsoft SQL, Transact-SQL, Generative AI, large language models, and Agentic AI.",
    icon: "code",
    accent: "cyan",
  },
  {
    id: "products-and-community",
    eyebrow: "Long-term direction",
    title: "Products, learning & community",
    description:
      "My ambition is to build meaningful technology products and opportunities that solve real problems and help people learn, build, and grow.",
    icon: "bulb",
    accent: "pink",
  },
];
