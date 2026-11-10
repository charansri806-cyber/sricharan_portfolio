export interface SkillGroup {
  title: string;
  marker: string;
  items: { name: string; label: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    marker: "01",
    items: [
      { name: "C", label: "Learning" },
      { name: "Python", label: "Learning" },
    ],
  },
  {
    title: "Databases",
    marker: "02",
    items: [
      { name: "SQL", label: "Learning" },
      { name: "Microsoft SQL", label: "Learning" },
      { name: "Transact-SQL", label: "Learning" },
    ],
  },
  {
    title: "Artificial Intelligence",
    marker: "03",
    items: [
      { name: "Generative AI", label: "Learning" },
      { name: "Large Language Models", label: "Learning" },
      { name: "Agentic AI", label: "Exploring" },
    ],
  },
  {
    title: "Entrepreneurship",
    marker: "04",
    items: [
      { name: "Startup Building", label: "Exploring" },
      { name: "Product Exploration", label: "Exploring" },
      { name: "Technology Entrepreneurship", label: "Learning" },
    ],
  },
];
