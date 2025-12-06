'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_RIGHT_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
} from '@/lib/framer';

import ButtonLink from '@/components/Buttons/ButtonLink';
import ProjectCard from '@/components/Content/Project/ProjectCard';

import { SOCIAL_MEDIA } from '@/constants/socials';

import { ProjectFrontmatter } from '@/types/frontmatters';

interface HomeSectionProps {
  featuredProjects: ProjectFrontmatter[];
}

export default function HomeSection({ featuredProjects }: HomeSectionProps) {
  return (
    <main className='layout-container'>
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
            className='text-2xl text-transparent md:text-4xl from-black-primary to-stone-500 bg-gradient-to-br bg-clip-text'
          >
            I'm Riza
          </m.h1>
          <m.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='max-w-4xl mt-2 text-sm md:text-base'
          >
            Mobile Developer at{' '}
            <a
              href='https://www.pupuk-indonesia.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-black-primary hover:dark:text-white-primary'
            >
              Pupuk Indonesia
            </a>
            .
          </m.p>
          <m.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='max-w-4xl mt-2 text-base font-medium md:text-xl'
          >
            I craft mobile experiences shaped by design and grounded in
            engineering.
          </m.p>
          <m.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='flex mt-2 space-x-4'
          >
            {SOCIAL_MEDIA.map((social) => (
              <Link
                href={social.href}
                key={social.href}
                target='_blank'
                aria-label={`Visit my ${social.name}`}
              >
                <social.icon className='w-4 h-4 md:h-5 md:w-5 hover:text-black-primary hover:dark:text-white-primary' />
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
              className='md:text-7.5xl leading-normal pr-6 text-4xl text-transparent from-black-primary to-stone-500 bg-gradient-to-br bg-clip-text'
            >
              Featured
              <br />
              Project
            </m.h2>
            <m.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className='text-base dark:text-white md:text-2xl'
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
    </main>
  );
}
