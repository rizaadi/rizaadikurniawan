import { Metadata } from 'next';
import React from 'react';

import { getAllArticles, getTags, sortByDate } from '@/lib/mdx';

import Layout from '@/components/Layout/Layout';

import TagsSection from '../../../components/Content/Tag/TagsSection';

interface TagsProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getTagData(slug: string) {
  const articles = await getAllArticles('blog');
  const filteredPosts = articles.filter((article) =>
    article.tags.includes(slug),
  );
  const postsSorted = sortByDate(filteredPosts);
  const allTags = getTags(articles);

  return {
    posts: postsSorted,
    tags: allTags,
  };
}

export async function generateStaticParams() {
  const articles = await getAllArticles('blog');
  const tags = getTags(articles);

  return tags.map((tag) => ({
    slug: tag,
  }));
}

export async function generateMetadata({
  params,
}: TagsProps): Promise<Metadata> {
  const { slug } = await params;
  const tagName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return {
    title: `${tagName} - Blog Tags - Riza Adi Kurniawan`,
    description: `Browse all blog posts tagged with ${tagName}`,
  };
}

export default async function TagsPage({ params }: TagsProps) {
  const { slug } = await params;
  const { posts, tags } = await getTagData(slug);

  return (
    <Layout>
      <TagsSection posts={posts} tags={tags} slug={slug} />
    </Layout>
  );
}
