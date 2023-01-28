import { m } from 'framer-motion';
import { InferGetStaticPropsType } from 'next';
import React from 'react';

import ProjectCard from '../components/content/projects/ProjectCard';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import { FADE_DOWN_ANIMATION_VARIANTS } from '../lib/framer';
import { getAllArticles } from '../lib/mdx';

export async function getStaticProps() {
  const articles = await getAllArticles('project');

  articles
    .map((article) => article.publishedAt)
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}
function Projects({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description="I made some projects that I'm proud of."
      />
      <main className='layout-container dark:bg-gradient-radial dark:from-[#01102D] dark:to-black'>
        <section>
          <m.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className='pt-12 layout'
          >
            <m.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='text-6xl md:text-7.5xl leading-normal text-center'
            >
              Projects
            </m.h1>
            <m.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='mt-3 text-base text-center md:text-2xl'
            >
              I made some projects that I&#39;m proud of
            </m.p>
            <m.ul
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 'some' }}
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className='grid gap-4 mt-14 sm:grid-cols-2 lg:grid-cols-3'
            >
              {posts.map((post) => (
                <ProjectCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  tags={post.tags}
                  banner={post.banner}
                  publishedAt={post.publishedAt}
                  readingTime={post.readingTime}
                />
              ))}
            </m.ul>
          </m.div>
        </section>
      </main>
    </Layout>
  );
}

export default Projects;
