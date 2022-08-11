import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { getFiles, getSlug } from "../../lib/mdx";
import Layout from "../../components/layout/Layout";
import dayjs from "dayjs";

export default function Blog({ frontMatter, source }) {
  console.log(frontMatter.readingTime);
  return (
    <Layout>
      <main>
        <section>
          <div className="py-12 layout">
            <h1 className="text-3xl leading-normal text-center md:text-5xl">
              {frontMatter.title}
            </h1>
            <ul className="flex justify-center gap-7 pt-7">
              <li>
                Published At{" "}
                {dayjs(frontMatter.publishedAt).format("D MMMM YYYY")}
              </li>
              <li>{frontMatter.readingTime.text}</li>
            </ul>
            <div>
              <MDXRemote {...source} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export async function getStaticPaths() {
  const posts = await getFiles("blog");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps(params) {
  const post = await getSlug("blog", params.params.slug);
  return {
    props: { ...post },
  };
}
