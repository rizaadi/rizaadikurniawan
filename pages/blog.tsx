import { InferGetStaticPropsType } from 'next';
import React from 'react';

import BlogContent from '../components/content/blog/BlogContent';
import Tag from '../components/content/Tag';
import Layout from '../components/layout/Layout';
import { getAllArticles, getTags } from '../lib/mdx';

export async function getStaticProps() {
  const articles = await getAllArticles('blog');

  articles
    .map((article) => article.publishedAt)
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;

      return 0;
    });
  const tags = getTags(articles);

  return {
    props: {
      posts: articles.reverse(),
      tags: tags,
    },
  };
}

function BlogPage({
  posts,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const populatedPosts = posts;

  //search
  const [search, setSearch] = React.useState('');

  const [filteredPosts, setFilteredPosts] = React.useState(() => [...posts]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
  return (
    <Layout>
      <main>
        <p className='p-2 mb-4 font-medium text-center'>
          This blog is still under development
        </p>
        <section>
          <div className='py-12 layout'>
            <h1 className='text-6xl md:text-7.5xl leading-normal'>Blog</h1>
            <p className='mt-3 text-base md: md:text-2xl'>
              I write a blog about design, coding, hobbies that I like, and
              random things haha
            </p>
            <div className='justify-between gap-24 mt-10 md:flex'>
              <ul className='mt-4'>
                {filteredPosts.map((post) => (
                  <BlogContent
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    publishedAt={post.publishedAt}
                    readingTime={post.readingTime}
                    banner={post.banner}
                    tags={post.tags}
                  />
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
                {/* <div className="flex flex-wrap gap-2 mt-2 md:grid-cols-5 md:grid"> */}
                <div className='flex flex-wrap gap-2 mt-2'>
                  {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default BlogPage;
