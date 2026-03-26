import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllArticles, getSlug } from '@/lib/mdx';

import Layout from '@/components/Layout/Layout';

import BlogSection from '../../../components/Content/Blog/BlogSection';

import { BlogFrontmatter } from '@/types/frontmatters';

interface BlogProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogPost(slug: string) {
  try {
    const post = await getSlug('blog', slug);
    return {
      ...post,
      frontMatter: post.frontMatter as BlogFrontmatter,
    };
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const posts = await getAllArticles('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const { slug } = await params;
  const { frontMatter } = await getBlogPost(slug);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      type: 'article',
      publishedTime: frontMatter.publishedAt,
      modifiedTime: frontMatter.lastModifiedAt,
      images: [
        {
          url: `/api/og/content?title=${encodeURIComponent(frontMatter.title)}&type=Blog`,
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
        `/api/og/content?title=${encodeURIComponent(frontMatter.title)}&type=Blog`,
      ],
    },
  };
}

export default async function Blog({ params }: BlogProps) {
  const { slug } = await params;
  const { frontMatter, source } = await getBlogPost(slug);

  return (
    <Layout>
      <BlogSection frontMatter={frontMatter} source={source} />
    </Layout>
  );
}
