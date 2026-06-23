import { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  // Use the English description for SEO by default
  return {
    title: project.title,
    description: project.shortSummary.EN,
    openGraph: {
      title: `${project.title} | Bilal Al Ihsan Portfolio`,
      description: project.shortSummary.EN,
      images: project.imageAssets && project.imageAssets.length > 0 ? [project.imageAssets[0]] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Bilal Al Ihsan Portfolio`,
      description: project.shortSummary.EN,
      images: project.imageAssets && project.imageAssets.length > 0 ? [project.imageAssets[0]] : [],
    },
  };
}

export default function Page() {
  return <ProjectDetailClient />;
}
