import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectCollection, projectCollections } from "@/data/project-data";
import { ProjectList } from "../_components/project-list";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectCollections.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[category]">): Promise<Metadata> {
  const { category } = await params;
  const collection = getProjectCollection(category);

  if (!collection) return {};

  return {
    title: `${collection.label} Projects`,
    description: collection.description,
  };
}

export default async function Page({ params }: PageProps<"/projects/[category]">) {
  const { category } = await params;
  const collection = getProjectCollection(category);

  if (!collection) notFound();

  return <ProjectList collection={collection} />;
}
