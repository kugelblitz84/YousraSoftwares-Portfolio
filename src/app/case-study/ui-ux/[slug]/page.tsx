import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUiUxProject, uiUxProjects } from "@/data/project-data";
import { UiUxCaseStudy } from "../../_components/ui-ux-case-study";

export const dynamicParams = false;

export function generateStaticParams() {
  return uiUxProjects.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: PageProps<"/case-study/ui-ux/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getUiUxProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} — UI/UX Case Study`,
    description: project.description,
  };
}

export default async function Page({ params }: PageProps<"/case-study/ui-ux/[slug]">) {
  const { slug } = await params;
  const project = getUiUxProject(slug);

  if (!project) notFound();

  return <UiUxCaseStudy project={project} />;
}
