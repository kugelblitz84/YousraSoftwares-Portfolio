import type { Metadata } from "next";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { UiUxCaseStudyPage } from "@/features/organizations/ui-ux-case-study-page";

export const metadata: Metadata = {
  title: "UI/UX Design Case Study",
  description: "UI/UX design case-study template covering research, interaction design, visual systems, and handoff.",
};

export default function Page() {
  return (
    <>
      <SiteHeader active="work" />
      <UiUxCaseStudyPage />
      <SiteFooter />
    </>
  );
}
