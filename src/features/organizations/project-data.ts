import type { ProjectCategory } from "@/types";
import { mobileProjects } from "./mobile-project-data";
import { webProjects } from "./web-project-data";

export type Project = {
  id: string;
  name: string;
  description: string;
  services: string;
  cover: string;
  gallery: readonly string[];
  detailHref: string;
};

export type ProjectCollection = {
  slug: ProjectCategory;
  label: string;
  shortLabel: string;
  number: string;
  quote: string;
  description: string;
  thumbnail: string;
  projects: readonly Project[];
};

const placeholder = "/assets/projects/project-placeholder.svg";

function placeholderProject(
  category: ProjectCategory,
  id: string,
  name: string,
  description: string,
  services: string,
  galleryCount = 3,
): Project {
  return {
    id,
    name,
    description,
    services,
    cover: placeholder,
    gallery: Array.from({ length: galleryCount }, () => placeholder),
    detailHref: `/case-study/${category}`,
  };
}

export const projectCollections: readonly ProjectCollection[] = [
  {
    slug: "web",
    label: "Web Development",
    shortLabel: "Web",
    number: "01",
    quote: "Built for the browser.",
    description:
      "Purpose-built platforms, products, and business systems designed to perform and scale.",
    thumbnail: "/assets/category_thumbnails/yusrasoftwares_web_category.png",
    projects: webProjects,
  },
  {
    slug: "mobile",
    label: "Mobile Development",
    shortLabel: "Mobile",
    number: "02",
    quote: "Designed to move with your users.",
    description:
      "Cross-platform products that turn complex data and workflows into natural Android and iOS experiences.",
    thumbnail:
      "/assets/category_thumbnails/yusrasoftwares_mobile_category.png",
    projects: mobileProjects,
  },
  {
    slug: "ui-ux",
    label: "UI/UX Design",
    shortLabel: "UI/UX",
    number: "03",
    quote: "Clarity in every interaction.",
    description:
      "Research-led interfaces and design systems that make digital products clear and memorable.",
    thumbnail: "/assets/category_thumbnails/yusrasoftwares_uiux_category.png",
    projects: [
      placeholderProject(
        "ui-ux",
        "uiux-01",
        "[UI/UX PROJECT 01]",
        "A complete product experience that balances brand expression with effortless usability.",
        "Research ? UX ? Interface design",
      ),
      placeholderProject(
        "ui-ux",
        "uiux-02",
        "[UI/UX PROJECT 02]",
        "A flexible design system created to bring consistency and speed to a growing product.",
        "Design system ? Prototyping ? Handoff",
        2,
      ),
      placeholderProject(
        "ui-ux",
        "uiux-03",
        "[UI/UX PROJECT 03]",
        "A focused interface redesign that clarifies important actions and reduces user friction.",
        "UX audit ? Interaction ? Visual design",
        0,
      ),
    ],
  },
] as const;

export function getProjectCollection(category: string) {
  return projectCollections.find((collection) => collection.slug === category);
}
