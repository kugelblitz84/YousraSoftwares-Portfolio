import type { Metadata } from "next";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { WebCaseStudyPage } from "@/features/organizations/web-case-study-page";

export const metadata: Metadata = {
  title: "FastGo Travel Web Case Study",
  description: "Explore FastGo Travel, a responsive platform connecting travel discovery, flight and hotel search, supporting services, and secure checkout.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <WebCaseStudyPage />
      <SiteFooter />
    </>
  );
}
