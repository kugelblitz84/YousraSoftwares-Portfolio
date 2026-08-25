import type { Metadata } from "next";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { BlogPage } from "@/features/organizations/blog-page";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical ideas on software engineering, product development, design, mobile applications, AI, and building technology for businesses.",
};

export default function Page() {
  return <><SiteHeader active={null} /><BlogPage /><SiteFooter /></>;
}
