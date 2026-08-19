import type { Metadata } from "next";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { BlogArticlePage } from "@/features/organizations/blog-article-page";

export const metadata: Metadata = {
  title: "Building software that is ready to evolve",
  description: "A practical YusraSoftwares guide to making maintainable product architecture decisions without over-engineering the first release.",
};

export default function Page() {
  return <><SiteHeader active="insights" /><BlogArticlePage /><SiteFooter /></>;
}
