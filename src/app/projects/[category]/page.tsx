import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { ProjectsPage } from "@/features/organizations/projects-page";
import { getProjectCollection, projectCollections } from "@/features/organizations/project-data";

type Props = {
  params: Promise<{ category: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectCollections.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const collection = getProjectCollection(category);

  if (!collection) return {};

  return {
    title: `${collection.label} Projects`,
    description: collection.description,
  };
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const collection = getProjectCollection(category);

  if (!collection) notFound();

  return (
    <>
      <SiteHeader active="work" />
      <ProjectsPage category={collection.slug} />
      <SiteFooter />
    </>
  );
}
