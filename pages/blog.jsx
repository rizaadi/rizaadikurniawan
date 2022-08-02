import Tag from "../components/content/Tag";
import Layout from "../components/layout/Layout";
import BlogCard from "../components/content/blog/BlogCard";
import BlogContent from "../components/content/blog/BlogContent";

function BlogPage() {
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
                {blogs.map(({ desc, title }) => (
                  <BlogContent key={title} title={title} desc={desc} />
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

const blogs = [
  {
    title: "title",
    desc: "description Deserunt ullam laudantium omnis fugit. Dolor autem quibusdam laudantium voluptate. Numquam culpa dignissimos recusandae. Perferendis sed animi aut quas pariatur ",
  },
  {
    title: "title2",
    desc: "description Deserunt ullam laudantium omnis fugit. Dolor autem quibusdam laudantium voluptate. Numquam culpa dignissimos recusandae. Perferendis sed animi aut quas pariatur ",
  },
  {
    title: "title3",
    desc: "description Deserunt ullam laudantium omnis fugit. Dolor autem quibusdam laudantium voluptate. Numquam culpa dignissimos recusandae. Perferendis sed animi aut quas pariatur ",
  },
  {
    title: "title4",
    desc: "description Deserunt ullam laudantium omnis fugit. Dolor autem quibusdam laudantium voluptate. Numquam culpa dignissimos recusandae. Perferendis sed animi aut quas pariatur ",
  },
];
export default BlogPage;
