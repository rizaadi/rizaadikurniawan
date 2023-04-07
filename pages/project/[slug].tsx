import buildUrl from 'cloudinary-build-url';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { m, useScroll, useTransform } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

import MDXComponents from '../../components/content/MDXComponents';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import useContentMeta from '../../hooks/useContentMeta';
import { FADE_DOWN_ANIMATION_VARIANTS } from '../../lib/framer';
import { getFiles, getSlug } from '../../lib/mdx';
import { ProjectFrontmatter } from '../../types/frontmatters';

export default function ProjectPage({
  frontMatter,
  source,
}: {
  frontMatter: ProjectFrontmatter;
  source: MDXRemoteSerializeResult;
}) {
  const meta = useContentMeta(frontMatter.slug);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [5, -200]);
  const url = buildUrl(`rizaadikurniawan/${frontMatter.mockup}`, {
    cloud: {
      cloudName: 'rizaadi',
    },
  });

  return (
    <Layout>
      <Seo
        templateTitle={frontMatter.title}
        description={frontMatter.description}
        // TODO: make banner OG
        // banner={}
        date={new Date(
          frontMatter.lastModifiedAt ?? frontMatter.publishedAt
        ).toISOString()}
      />
      <main className='dark:border-black-primary dark:bg-gradient-to-b dark:from-black-primary/50 dark:to-black md:text-start layout-container'>
        <m.article
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
          className='py-24 layout-blog'
        >
          <section
            className={clsx(
              'overflow-hidden',
              frontMatter.mockup && 'h-[28rem]'
            )}
          >
            <m.section variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <h1 className='text-3xl font-bold text-center md:text-7xl'>
                {frontMatter.title}
              </h1>
            </m.section>
            {frontMatter.mockup && (
              <m.div
                className='relative flex justify-center drop-shadow-mobile dark:drop-shadow-mobile_dark'
                style={{ y }}
              >
                <Image src={url} alt='iphone' width={250} height={100} />
              </m.div>
            )}
          </section>

          <m.section
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className={clsx(
              'z-10 pt-10 ',
              frontMatter.mockup &&
                'bg-white drop-shadow-mobile_only_top dark:bg-black dark:drop-shadow-mobile_only_top_dark'
            )}
          >
            {/* TODO: fix to center */}
            <ul className='flex flex-wrap justify-center list-none md:text-sm gap-y-3 gap-x-7'>
              <li>
                Published at{' '}
                {dayjs(frontMatter.publishedAt).format('D MMM YYYY')}
              </li>
              {frontMatter.lastModifiedAt && (
                <li>
                  Last modified at{' '}
                  {dayjs(frontMatter.lastModifiedAt).format('D MMM YYYY')}
                </li>
              )}
              <li>{frontMatter.readingTime.text}</li>
              <li>{`${
                meta?.contentViews ? meta?.contentViews : '–––'
              } Views`}</li>
            </ul>
          </m.section>
          <m.section
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='items-center prose-sm prose text-justify mdx md:prose-base mt-14 dark:prose-invert'
          >
            <MDXRemote {...source} components={MDXComponents} />
          </m.section>
        </m.article>
      </main>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('project');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getSlug('project', params?.slug as string);
  return {
    props: { ...post },
  };
};
