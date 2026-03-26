import { Metadata } from 'next';

import { getAllArticles, getTags, sortByDate } from '@/lib/mdx';

import Layout from '@/components/Layout/Layout';

import TagsSection from '../../../components/Content/Tag/TagsSection';

interface TagsProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getTagData(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  const articles = await getAllArticles('blog');
  const filteredPosts = articles.filter((article) =>
    article.tags.includes(decodedSlug),
  );
  const postsSorted = sortByDate(filteredPosts);
  const allTags = getTags(articles);

  return {
    posts: postsSorted,
    tags: allTags,
    decodedSlug,
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
  const decodedSlug = decodeURIComponent(slug);
  const tagName = decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1);

  return {
    title: `${tagName} - Blog Tags`,
    description: `Browse all blog posts tagged with ${tagName}`,
    openGraph: {
      title: `${tagName} - Blog Tags`,
      description: `Browse all blog posts tagged with ${tagName}`,
      images: [
        {
          url: `/api/og/content?title=${encodeURIComponent(tagName)}&type=Blog+Tags`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: `${tagName} - Blog Tags`,
      description: `Browse all blog posts tagged with ${tagName}`,
      images: [
        `/api/og/content?title=${encodeURIComponent(tagName)}&type=Blog+Tags`,
      ],
    },
  };
}

export default async function TagsPage({ params }: TagsProps) {
  const { slug } = await params;
  const { posts, tags, decodedSlug } = await getTagData(slug);

  return (
    <Layout>
      <TagsSection posts={posts} tags={tags} slug={decodedSlug} />
    </Layout>
  );
}
