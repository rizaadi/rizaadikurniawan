import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllArticles, getSlug } from '@/lib/mdx';

import Layout from '@/components/Layout/Layout';

import ProjectSection from '../../../components/Content/Project/ProjectSection';

import { ProjectFrontmatter } from '@/types/frontmatters';

interface ProjectProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getProject(slug: string) {
  try {
    const post = await getSlug('project', slug);
    return {
      ...post,
      frontMatter: post.frontMatter as ProjectFrontmatter,
    };
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const projects = await getAllArticles('project');
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const { slug } = await params;
  const { frontMatter } = await getProject(slug);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      type: 'website',
      images: [
        {
          url: `/api/og/content?title=${encodeURIComponent(frontMatter.title)}&type=Project`,
          width: 1200,
          height: 630,
          alt: frontMatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontMatter.title,
      description: frontMatter.description,
      images: [
        `/api/og/content?title=${encodeURIComponent(frontMatter.title)}&type=Project`,
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectProps) {
  const { slug } = await params;
  const { frontMatter, source } = await getProject(slug);

  return (
    <Layout>
      <ProjectSection frontMatter={frontMatter} source={source} />
    </Layout>
  );
}
