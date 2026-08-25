import type { Metadata } from "next";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { CaseStudyPage } from "@/features/organizations/case-study-page";

export const metadata: Metadata = {
  title: "[PROJECT NAME] — Case Study",
  description: "Reusable YusraSoftwares case study template for web, mobile, AI, design, and business software projects.",
};

export default function Page() {
  return <><SiteHeader /><CaseStudyPage /><SiteFooter /></>;
}
