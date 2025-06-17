import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import type { Metadata } from "next";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = allBlogs.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Softics Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = allBlogs.find((p) => p.slug === params.slug);

  if (!post) notFound();

  return (
    <article className="prose lg:prose-xl mx-auto py-12">
      <h1>{post.title}</h1>
      <p className="text-sm text-muted-foreground mb-6">
        {post.date} • {post.category}
      </p>
      <Mdx code={post.body.code} />
    </article>
  );
}
