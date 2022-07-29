import React from "react";

import Layout from "../components/layout/Layout";
import BlogCard from "../components/content/blog/BlogCard";
import ButtonLink from "../components/buttons/ButtonLink";
import ProjectCard from "../components/content/projects/ProjectCard";

export default function Home() {
  return (
    <Layout>
      <main>
        <section className="flex flex-col justify-center mb-20 -mt-20 min-h-main">
          <article className="layout">
            <h2 className="text-2xl md:text-4xl 2xl:text-5xl">Hello!</h2>
            <h1 className="mt-1 text-3xl">You can call me Riza</h1>
            <p className="max-w-4xl mt-4 md:text-lg 2xl:text-xl">
              Interested in Web Developer, Mobile Developer, and Design. I also
              like to learn new things about technology, photography, and music.
            </p>
          </article>
        </section>
        <section className="py-20 ">
          <article className="layout">
            <div className="flex items-end">
              <h2 className="md:text-7.5xl leading-normal pr-6 text-4xl">
                Featured
                <br />
                Project
              </h2>
              <p className="text-base md:text-2xl">
                I made some projects that I&#39;m proud of
              </p>
            </div>
            <ul className="grid gap-4 mt-16 xl:grid-cols-3 sm:grid-cols-2">
              {blogs.map(({ desc, title }) => (
                <ProjectCard key={title} title={title} desc={desc} />
              ))}
            </ul>
            <ButtonLink className="mt-4">See more Project</ButtonLink>
          </article>
        </section>
        <section className="py-20">
          <article className="layout">
            <h2 className="md:text-7.5xl leading-normal pr-6 text-4xl text-center">
              Featured Blog
            </h2>
            <p className="max-w-4xl m-auto mt-2 text-base text-center md:text-2xl">
              I write a blog about design, coding, hobbies that I like, and
              random things haha
            </p>
            <ul className="grid gap-4 mt-16 xl:grid-cols-3 sm:grid-cols-2">
              {blogs.map(({ desc, title }) => (
                <BlogCard key={title} title={title} desc={desc} />
              ))}
            </ul>
            <ButtonLink className="mt-4">See more Post</ButtonLink>
          </article>
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
];
