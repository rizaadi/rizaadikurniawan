import dayjs from 'dayjs';
import { m } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
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
      <main>
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
          className='py-12 layout-blog'
        >
          <m.section variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <h1 className='text-3xl font-bold text-center md:text-7xl'>
              {frontMatter.title}
            </h1>
          </m.section>
          <m.section variants={FADE_DOWN_ANIMATION_VARIANTS}>
            {/* TODO: fix to center */}
            <ul className='flex flex-wrap justify-center mt-10 list-none md:text-sm gap-y-3 gap-x-7'>
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
