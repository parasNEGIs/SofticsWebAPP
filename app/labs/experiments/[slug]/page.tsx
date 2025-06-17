import { notFound } from "next/navigation";
import { allExperiments } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import type { Metadata } from "next";

interface ExperimentPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allExperiments.map((exp) => ({ slug: exp.slug }));
}

export function generateMetadata({ params }: ExperimentPageProps): Metadata {
  const exp = allExperiments.find((e) => e.slug === params.slug);
  if (!exp) return {};
  return {
    title: `${exp.title} | Softics Labs`,
    description: exp.description,
  };
}

export default function ExperimentPage({ params }: ExperimentPageProps) {
  const exp = allExperiments.find((e) => e.slug === params.slug);
  if (!exp) notFound();

  return (
    <article className="prose lg:prose-xl mx-auto py-12">
      <h1>{exp.title}</h1>
      {/* optional image */}
      {exp.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={exp.image} alt={exp.title} className="rounded-xl my-4" />
      )}
      <p className="text-sm text-muted-foreground mb-6">
        {exp.status}
        {exp.tags && exp.tags.length > 0 && ` • ${exp.tags.join(", ")}`}
      </p>
      <Mdx code={exp.body.code} />
    </article>
  );
}