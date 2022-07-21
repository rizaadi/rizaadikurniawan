import React from "react";

import Layout from "../components/layout/Layout";
import BlogCard from "../components/content/blog/BlogCard";
import ButtonLink from "../components/buttons/ButtonLink";

export default function Home() {
  return (
    <Layout>
      <main>
        <section className="flex flex-col justify-center mb-20 -mt-20 min-h-main">
          <article className="layout">
            <h2 className="text-2xl ">Halo cuk!</h2>
            <h1 className="mt-1 text-3xl">You can call me bwabwa</h1>
            <p className="max-w-4xl mt-4 md:text-lg 2xl:text-xl">
              i work with react ecosystem with anana lwll sfhdsj uin my books
              wich is is very usevully jfdksa u know sometimes life can be hard
              so u need es oyen to make u strong than before
            </p>
          </article>
        </section>
        <section className="py-20 ">
          <article className="layout">
            <h2 className="text-2xl">Featured Project</h2>
            <ul className="mt-4 grid gap-4 xl:grid-cols-3 sm:grid-cols-2">
              {Array(6).fill(<BlogCard />)}
            </ul>
            <ButtonLink className="mt-4">See more Project</ButtonLink>
          </article>
        </section>
        <section className="py-20">
          <article className="layout">
            <h2 className="text-2xl">Featured Post</h2>
            <ul className="mt-4 grid gap-4 xl:grid-cols-3 sm:grid-cols-2">
            {Array(6).fill(<BlogCard />)}
            </ul>
            <ButtonLink className="mt-4">See more Post</ButtonLink>
          </article>
        </section>
      </main>
    </Layout>
  );
}
