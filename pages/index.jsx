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
            <div className="flex items-end">
              <h2 className="text-7.5xl leading-normal pr-6">
                Featured
                <br />
                Project
              </h2>
              <p className="text-xl ">
                Deserunt ullam laudantium omnis fugit. Dolor autem quibusdam
                laudantium voluptate. Numquam culpa dignissimos recusandae.
                Perferendis sed animi aut quas pariatur perferendis velit sint.
                Fugiat voluptas quis id.
              </p>
            </div>
            <ul className="grid gap-4 mt-16 xl:grid-cols-3 sm:grid-cols-2">
              {Array(3).fill(<BlogCard />)}
            </ul>
            <ButtonLink className="mt-4">See more Project</ButtonLink>
          </article>
        </section>
        <section className="py-20">
          <article className="layout">
            <h2 className="text-7.5xl leading-normal pr-6 text-center">
              Featured Blog
            </h2>
            <p className="max-w-4xl m-auto mt-2 text-xl text-center">
              Deserunt ullam laudantium omnis fugit. Dolor autem quibusdam
              laudantium voluptate. Numquam culpa dignissimos recusandae.
              Perferendis sed animi aut quas pariatur perferendis velit sint.
              Fugiat voluptas quis id.
            </p>
            <ul className="grid gap-4 mt-16 xl:grid-cols-3 sm:grid-cols-2">
              {Array(3).fill(<BlogCard />)}
            </ul>
            <ButtonLink className="mt-4">See more Post</ButtonLink>
          </article>
        </section>
      </main>
    </Layout>
  );
}
