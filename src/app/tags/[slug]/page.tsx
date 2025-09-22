import React from 'react';

import { getAllArticles, getTags, sortByDate } from '@/lib/mdx';

import Layout from '@/components/layout/Layout';

import TagsClient from './TagsClient';

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

export default async function TagsPage({ params }: TagsProps) {
  const { slug } = await params;
  const { posts, tags } = await getTagData(slug);

  return (
    <Layout>
      <TagsClient posts={posts} tags={tags} slug={slug} />
    </Layout>
  );
}
