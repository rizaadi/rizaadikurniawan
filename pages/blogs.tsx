import { GetStaticProps } from 'next';
import React from 'react';

import BlogContent from '../components/content/blog/BlogContent';
import Tag from '../components/content/Tag';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import useInjectContentMeta from '../hooks/useInjectContentMeta';
import { getAllArticles, getTags, sortByDate } from '../lib/mdx';
import { BlogFrontmatter } from '../types/frontmatters';

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllArticles('blog');
  const articlesSorted = sortByDate(articles);

  const tags = getTags(articlesSorted);

  return {
    props: {
      posts: articlesSorted.reverse(),
      tags: tags,
    },
  };
};

function BlogPage({
  posts,
  tags,
}: {
  posts: BlogFrontmatter[];
  tags: string[];
}) {
  const populatedContent = useInjectContentMeta(posts);

  //search
  const [search, setSearch] = React.useState('');

  const [filteredPosts, setFilteredPosts] = React.useState(() => [...posts]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    const results = populatedContent.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        search
          .toLowerCase()
          .split(' ')
          .every((tag) => post.tags.includes(tag))
    );
    setFilteredPosts(results);
  }, [search, populatedContent]);

  return (
    <Layout>
      <Seo
        templateTitle='Blog'
        description='I write a blog about design, coding, hobbies that I like, and random things'
      />
      <main className='layout-container'>
        <section className='pt-12 layout'>
          <h1 className='text-6xl md:text-7.5xl leading-normal'>Blog</h1>
          <p className='mt-3 text-base md:text-2xl'>
            I write a blog about design, coding, hobbies that I like, and random
            things haha
          </p>
          <div className='justify-between gap-24 mt-10 md:flex'>
            <ul className='mt-4'>
              {filteredPosts.map((post) => (
                <BlogContent key={post.slug} post={post} />
              ))}
            </ul>
            <div className='w-auto md:w-60'>
              <input
                className='w-full p-1 mt-4 border rounded-md'
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
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default BlogPage;
