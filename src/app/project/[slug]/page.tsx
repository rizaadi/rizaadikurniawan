import React from 'react';

import { getSlug } from '@/lib/mdx';

import Layout from '@/components/layout/Layout';

import ProjectClient from './ProjectClient';

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

export default async function ProjectPage({ params }: ProjectProps) {
  const { slug } = await params;
  const { frontMatter, source } = await getProject(slug);

  return (
    <Layout>
      <ProjectClient frontMatter={frontMatter} source={source} />
    </Layout>
  );
}
