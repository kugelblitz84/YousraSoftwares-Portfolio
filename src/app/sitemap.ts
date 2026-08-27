import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/data/blog-data";
import { projectCollections } from "@/data/project-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = (path: string) => new URL(path, siteConfig.url).toString();

  return [
    { url: url("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: url("/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...projectCollections.map((collection) => ({
      url: url(`/projects/${collection.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projectCollections.flatMap((collection) =>
      collection.projects.map((project) => ({
        url: url(project.detailHref),
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.6,
      })),
    ),
    ...blogPosts.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
