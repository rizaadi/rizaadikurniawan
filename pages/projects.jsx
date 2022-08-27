import React from 'react';

import ProjectCard from '../components/content/projects/ProjectCard';
import Layout from '../components/layout/Layout';
import { getAllArticles } from '../lib/mdx';

export async function getStaticProps() {
  const articles = await getAllArticles('project');

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
function Projects({ posts }) {
  return (
    <Layout>
      <main>
        <section>
          <div className='py-12 layout'>
            <h1 className='text-6xl md:text-7.5xl leading-normal text-center'>
              Projects
            </h1>
            <p className='mt-3 text-base text-center md:text-2xl'>
              I made some projects that I&#39;m proud of
            </p>
            <ul className='grid gap-4 mt-14 sm:grid-cols-2 lg:grid-cols-3'>
              {posts.map((post) => (
                <ProjectCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  desc={post.description}
                  tags={post.tags}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Projects;
