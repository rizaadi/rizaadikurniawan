import React from 'react';

import { getSlug } from '@/lib/mdx';

import Layout from '@/components/layout/Layout';

import BlogClient from './BlogClient';

import { BlogFrontmatter } from '@/types/frontmatters';

interface BlogProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogPost(slug: string) {
  const post = await getSlug('blog', slug);
  return {
    ...post,
    frontMatter: post.frontMatter as BlogFrontmatter,
  };
}

export default async function Blog({ params }: BlogProps) {
  const { slug } = await params;
  const { frontMatter, source } = await getBlogPost(slug);

  return (
    <Layout>
      <BlogClient frontMatter={frontMatter} source={source} />
    </Layout>
  );
}
