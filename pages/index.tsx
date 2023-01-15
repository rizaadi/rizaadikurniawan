import { m } from 'framer-motion';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

import ButtonLink from '../components/buttons/ButtonLink';
import ProjectCard from '../components/content/projects/ProjectCard';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_RIGHT_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
} from '../lib/framer';
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
      <m.main>
        <m.section
          initial='hidden'
          whileInView='show'
          animate='show'
          viewport={{ once: true }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className='flex flex-col justify-center mb-20 min-h-main'
        >
          <article className='layout'>
            <m.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='text-2xl md:text-4xl'
            >
              Riza Adi Kurniawan
            </m.h1>
            <m.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='max-w-4xl mt-2 text-base md:text-xl text-black-fourth dark:text-gray-300'
            >
              Interested in Web Developer, Mobile Developer, and Design.
            </m.p>
            <m.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='flex mt-2 space-x-4'
            >
              {sosmed.map((sosmed) => (
                <Link href={sosmed.href} key={sosmed.href} target='_blank'>
                  <sosmed.icon className='w-4 h-4 md:h-5 md:w-5 text-black-fourth dark:text-gray-300 hover:text-black-third hover:dark:text-white' />
                </Link>
              ))}
            </m.div>
          </article>
        </m.section>
        <section className='pt-20'>
          <article className='layout'>
            <m.div
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 'all' }}
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className='flex items-end'
            >
              <m.h2
                variants={FADE_RIGHT_ANIMATION_VARIANTS}
                className='md:text-7.5xl leading-normal pr-6 text-4xl'
              >
                Featured
                <br />
                Project
              </m.h2>
              <m.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className='text-base md:text-2xl'
              >
                I made some projects that I&#39;m proud of
              </m.p>
            </m.div>

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
              className='grid gap-4 mt-16 lg:grid-cols-3 sm:grid-cols-2'
            >
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
            </m.ul>
            <ButtonLink href='/projects' className='mt-4'>
              See more Project
            </ButtonLink>
          </article>
        </section>
      </m.main>
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
