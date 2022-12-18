import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

import ButtonLink from '../components/buttons/ButtonLink';
import ProjectCard from '../components/content/projects/ProjectCard';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import { getAllArticles, getFeatured } from '../lib/mdx';

export async function getStaticProps() {
  const projects = await getAllArticles('project');
  const featuredProjects = getFeatured(projects, [
    'sinpro',
    'valorantlab',
    'volusearch',
  ]);
  return {
    props: { featuredProjects },
  };
}
export default function Home({
  featuredProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo />
      <main>
        <section className='flex flex-col justify-center mb-20 min-h-main'>
          <article className='layout'>
            <h1 className='text-2xl md:text-4xl'>Riza Adi Kurniawan</h1>
            <p className='max-w-4xl mt-2 text-base md:text-xl text-black-fourth dark:text-gray-300'>
              Interested in Web Developer, Mobile Developer, and Design.
            </p>
            <div className='flex mt-2 space-x-4'>
              {sosmed.map((sosmed) => (
                <Link href={sosmed.href} key={sosmed.href} target='_blank'>
                  <sosmed.icon className='w-4 h-4 md:h-5 md:w-5 text-black-fourth dark:text-gray-300 hover:text-black-third hover:dark:text-white' />
                </Link>
              ))}
            </div>
          </article>
        </section>
        <section className='pt-20'>
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
                  description={post.description}
                  tags={post.tags}
                  banner={post.banner}
                  publishedAt={post.publishedAt}
                  readingTime={post.readingTime}
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
const sosmed = [
  {
    name: 'Github',
    href: 'https://github.com/rizaadi',
    icon: SiGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rizaadikurniawan/',
    icon: SiLinkedin,
  },
  {
    name: 'Email',
    href: 'mailto:rizaadi890@gmail.com',
    icon: SiGmail,
  },
];
