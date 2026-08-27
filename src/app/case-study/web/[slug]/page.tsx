import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWebProject, webProjects } from "@/data/web-project-data";
import { WebCaseStudy } from "../../_components/web-case-study";

export const dynamicParams = false;

export function generateStaticParams() {
  return webProjects.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: PageProps<"/case-study/web/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getWebProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} — Web Case Study`,
    description: project.description,
  };
}

export default async function Page({ params }: PageProps<"/case-study/web/[slug]">) {
  const { slug } = await params;
  const project = getWebProject(slug);

  if (!project) notFound();

  return <WebCaseStudy project={project} />;
}
