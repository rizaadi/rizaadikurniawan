import React from 'react';

import ButtonLink from '../components/buttons/ButtonLink';
import ProjectCard from '../components/content/projects/ProjectCard';
import Layout from '../components/layout/Layout';
import { getAllArticles, getFeatured } from '../lib/mdx';

export async function getStaticProps() {
  const projects = await getAllArticles('project');
  const featuredProjects = getFeatured(projects, [
    'sinpro',
    'valorantlab',
    'example-project3',
  ]);
  return {
    props: { featuredProjects },
  };
}
export default function Home({ featuredProjects }) {
  return (
    <Layout>
      <main>
        <section className='flex flex-col justify-center mb-20 -mt-20 min-h-main'>
          <article className='layout'>
            <h2 className='text-2xl md:text-4xl 2xl:text-5xl'>Hello!</h2>
            <h1 className='mt-1 text-3xl'>You can call me Riza</h1>
            <p className='max-w-4xl mt-4 md:text-lg 2xl:text-xl'>
              Interested in Web Developer, Mobile Developer, and Design. I also
              like to learn new things about technology, and photography.
            </p>
          </article>
        </section>
        <section className='pt-20 '>
          <article className='layout'>
            <div className='flex items-end'>
              <h2 className='md:text-7.5xl leading-normal pr-6 text-4xl'>
                Featured
                <br />
                Project
              </h2>
              <p className='text-base md:text-2xl'>
                I made some projects that I&#39;m proud of
              </p>
            </div>
            <ul className='grid gap-4 mt-16 lg:grid-cols-3 sm:grid-cols-2'>
              {featuredProjects.map((post) => (
                <ProjectCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  desc={post.description}
                  tags={post.tags}
                />
              ))}
            </ul>

            <ButtonLink href='/projects' className='mt-4'>
              See more Project
            </ButtonLink>
          </article>
        </section>
      </main>
    </Layout>
  );
}
