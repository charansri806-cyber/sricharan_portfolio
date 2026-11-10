export interface JourneyEntry {
  title: string;
  year?: string;
  description: string;
  marker: string;
}

export const journey: JourneyEntry[] = [
  {
    title: "Exploring Technology",
    description:
      "I began exploring technology and learning how software and technology can be used to solve practical problems.",
    marker: "01",
  },
  {
    title: "Learning & Experimenting",
    description:
      "I continued developing my technical foundation through programming, databases, AI-related learning, and hands-on experimentation.",
    marker: "02",
  },
  {
    title: "Starting NextZen Technos",
    year: "2026",
    description:
      "I started NextZen Technos as a technology-focused company and platform.",
    marker: "03",
  },
  {
    title: "Growing as a Founder",
    description:
      "I am continuing to develop as a founder while exploring technology, education, products, community, and new opportunities.",
    marker: "04",
  },
];
