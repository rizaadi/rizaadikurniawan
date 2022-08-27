import React from 'react';
import Tag from '../../components/content/Tag';
import Layout from '../../components/layout/Layout';
import BlogContent from '../../components/content/blog/BlogContent';
import { getAllArticles, getTags } from '../../lib/mdx';

export async function getStaticPaths() {
  const articles = await getAllArticles('blog');
  const tags = new Set(
    articles.map((article) => article.tags.split(',')).flat()
  );
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await getAllArticles('blog');
  const { slug } = params;
  const posts = articles.filter((article) => article.tags.includes(slug));

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });
  const tags = getTags(articles);

  return {
    props: {
      posts: posts.reverse(),
      tags: tags,
      slug: slug,
    },
  };
}

function TagsPage({ posts, tags, slug }) {
  const populatedPosts = posts;

  //search
  const [search, setSearch] = React.useState('');

  const [filteredPosts, setFilteredPosts] = React.useState(() => [...posts]);
  const handleSearch = (e) => {
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
        <section>
          <div className='py-12 layout'>
            <h1 className='text-6xl md:text-7.5xl leading-normal'>
              Blog : {slug}
            </h1>
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
                    desc={post.excerpt}
                    publishedAt={post.publishedAt}
                    readingTime={post.readingTime}
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

export default TagsPage;
