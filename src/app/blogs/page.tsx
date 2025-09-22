import React from 'react';

import { getAllArticles, getTags, sortByDate } from '@/lib/mdx';

import Layout from '@/components/layout/Layout';

import BlogsClient from './BlogsClient';

export const metadata = {
  title: 'Blog - Riza Adi Kurniawan',
  description: 'Exploring coding, design, and more',
};

async function getBlogData() {
  const articles = await getAllArticles('blog');
  const articlesSorted = sortByDate(articles);
  const blogTags = getTags(articlesSorted);

  return {
    posts: articlesSorted.reverse(),
    tags: blogTags,
  };
}

export default async function BlogPage() {
  const { posts, tags } = await getBlogData();

  return (
    <Layout>
      <BlogsClient posts={posts} tags={tags} />
    </Layout>
  );
}
