import { Metadata } from 'next';
import React from 'react';

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
  const post = await getSlug('project', slug);
  return {
    ...post,
    frontMatter: post.frontMatter as ProjectFrontmatter,
  };
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
    title: `${frontMatter.title} - Riza Adi Kurniawan`,
    description: frontMatter.description,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      type: 'website',
      images: [
        {
          url: `https://res.cloudinary.com/rizaadi/image/upload/f_auto,q_auto/rizaadikurniawan/${frontMatter.banner}`,
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
        `https://res.cloudinary.com/rizaadi/image/upload/f_auto,q_auto/rizaadikurniawan/${frontMatter.banner}`,
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
