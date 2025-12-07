import React from 'react';

import { getAllArticles, getTags, sortByDate } from '@/lib/mdx';

import Layout from '@/components/Layout/Layout';

import BlogsSection from '../../components/Content/Blog/BlogsSection';

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
      <BlogsSection posts={posts} tags={tags} />
    </Layout>
  );
}
