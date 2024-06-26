import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import Button from '../../components/buttons/Button';
import BlogContent from '../../components/content/blog/BlogContent';
import BlogContentNotFound from '../../components/content/blog/BlogContentNotFound';
import Tag from '../../components/content/Tag';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import { getAllArticles, getTags, sortByDate } from '../../lib/mdx';
import { BlogFrontmatter } from '../../types/frontmatters';

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles('blog');
  const tags = new Set(
    articles.map((article) => article.tags.split(',')).flat()
  );
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articles = await getAllArticles('blog');
  const slug = params?.slug as string;
  const posts = articles.filter((article) => article.tags.includes(slug));
  const postsSorted = sortByDate(posts);

  const tags = getTags(articles);

  return {
    props: {
      posts: postsSorted,
      tags: tags,
      slug: slug,
    },
  };
};

export default function TagsPage({
  posts,
  tags,
  slug,
}: {
  posts: BlogFrontmatter[];
  tags: string[];
  slug: string;
}) {
  const populatedPosts = posts;

  const [isEnglish, setIsEnglish] = React.useState<boolean>(true);

  //search
  const [search, setSearch] = React.useState('');

  const [filteredPosts, setFilteredPosts] = React.useState(() => [...posts]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => setSearch('');

  React.useEffect(() => {
    const results = populatedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        search
          .toLowerCase()
          .split(' ')
          .every((tag) => post.tags.includes(tag))
    );
    setFilteredPosts(results);
  }, [search, populatedPosts]);

  const englishPosts = filteredPosts.filter((p) => !p.slug.startsWith('id-'));
  const bahasaPosts = filteredPosts.filter((p) => p.slug.startsWith('id-'));
  const currentPosts = isEnglish ? englishPosts : bahasaPosts;

  return (
    <Layout>
      <Seo
        templateTitle='Blog'
        description='Exploring coding, design, and more'
      />
      <main className='layout-container'>
        <section className='py-12 layout min-h-main'>
          <h1 className='text-6xl md:text-7.5xl leading-normal'>
            Blog : {slug}
          </h1>
          <h2 className='mt-3 text-base font-medium md:text-2xl text-black-secondary dark:text-black-secondary'>
            Exploring coding, design, and more
          </h2>
          <Button
            onClick={() => {
              setIsEnglish((b) => !b);
              clearSearch();
            }}
            className='mt-2'
          >
            Read in {isEnglish ? 'Indonesia' : 'English'}
          </Button>
          <div className='mt-5 md:mt-10 md:flex md:flex-row-reverse'>
            <div className='w-auto md:w-60'>
              <input
                className='w-full p-2 mt-4 font-medium rounded-md outline-none dark:bg-black-primary bg-slate-100'
                type='text'
                placeholder='Search..'
                onChange={handleSearch}
                value={search}
              />
              <h3 className='mt-3 whitespace-nowrap'>Explore Categories</h3>
              <div className='flex flex-wrap gap-2 mt-2'>
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
            <ul className='w-full pt-4 pr-10 mt-5 md:mt-0'>
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <BlogContent key={post.slug} post={post} />
                ))
              ) : (
                <BlogContentNotFound />
              )}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
