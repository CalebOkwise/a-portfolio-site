export type Project = {
  title: string;
  description: string;
  results: string;
  imageLabel: string;
  link?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Lead Funnel Revamp for B2B SaaS",
    description:
      "Redesigned landing flow, tightened copy, and simplified form UX to reduce friction at every step.",
    results: "Lifted qualified demo requests by 38% in 8 weeks.",
    imageLabel: "SaaS conversion dashboard preview",
    link: "#"
  },
  {
    title: "E-commerce CRO Sprint",
    description:
      "Built rapid A/B test variants for product pages and checkout microcopy with a lightweight analytics setup.",
    results: "Increased checkout conversion by 22% month-over-month.",
    imageLabel: "E-commerce growth experiment board",
    link: "#"
  },
  {
    title: "Local Service Brand Rebuild",
    description:
      "Developed a fast, SEO-first website and aligned ad traffic to intent-focused service pages.",
    results: "Doubled organic leads in under 90 days.",
    imageLabel: "Local business website redesign concept",
    link: "#"
  }
];
