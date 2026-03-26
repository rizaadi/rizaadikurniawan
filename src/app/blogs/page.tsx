import { Metadata } from 'next';

import { getAllArticles, getTags, sortByDate } from '@/lib/mdx';

import Layout from '@/components/Layout/Layout';

import BlogsSection from '../../components/Content/Blog/BlogsSection';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Exploring coding, design, and more',
  openGraph: {
    title: 'Blog',
    description: 'Exploring coding, design, and more',
    images: [
      {
        url: `/api/og/content?title=Blog&type=Riza+Adi+Kurniawan`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: 'Blog',
    description: 'Exploring coding, design, and more',
    images: [`/api/og/content?title=Blog&type=Riza+Adi+Kurniawan`],
  },
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
