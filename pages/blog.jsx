import Tag from "../components/content/Tag";
import Layout from "../components/layout/Layout";
import BlogContent from "../components/content/blog/BlogContent";
import { getAllArticles } from "../lib/mdx";

export async function getStaticProps() {
  const articles = await getAllArticles("blog");

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}

function BlogPage({ posts }) {
  return (
    <Layout>
      <main>
        <section>
          <div className="py-12 layout">
            <h1 className="text-6xl md:text-7.5xl leading-normal">Blog</h1>
            <p className="mt-3 text-base md: md:text-2xl">
              I write a blog about design, coding, hobbies that I like, and
              random things haha
            </p>
            <div className="gap-24 mt-10 md:flex">
              <ul className="mt-4">
                {posts.map((post) => (
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
              <div className="w-auto">
                <input
                  className="w-full p-1 mt-4 border rounded-md"
                  type="text"
                  placeholder="Search.."
                />
                <h3 className="mt-3 whitespace-nowrap">Explore Categories</h3>
                <div className="flex flex-wrap gap-2 mt-2 md:grid-cols-5 md:grid">
                  {Array(11).fill(<Tag />)}
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
