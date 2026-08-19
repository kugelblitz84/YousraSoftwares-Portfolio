import type { Metadata } from "next";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { ProjectsPage } from "@/features/organizations/projects-page";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Explore digital products, platforms, mobile applications, and technical solutions built by the YusraSoftwares team.",
};

export default function Page() {
  return <><SiteHeader active="work" /><ProjectsPage /><SiteFooter /></>;
}
