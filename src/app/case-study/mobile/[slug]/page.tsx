import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { MobileCaseStudyPage } from "@/features/organizations/mobile-case-study-page";
import { getMobileProject, mobileProjects } from "@/features/organizations/mobile-project-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return mobileProjects.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getMobileProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} — Mobile App Case Study`,
    description: project.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getMobileProject(slug);

  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <MobileCaseStudyPage project={project} />
      <SiteFooter />
    </>
  );
}