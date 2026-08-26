import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMobileProject, mobileProjects } from "@/data/mobile-project-data";
import { MobileCaseStudy } from "../../_components/mobile-case-study";

export const dynamicParams = false;

export function generateStaticParams() {
  return mobileProjects.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: PageProps<"/case-study/mobile/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getMobileProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} — Mobile App Case Study`,
    description: project.description,
  };
}

export default async function Page({ params }: PageProps<"/case-study/mobile/[slug]">) {
  const { slug } = await params;
  const project = getMobileProject(slug);

  if (!project) notFound();

  return <MobileCaseStudy project={project} />;
}
