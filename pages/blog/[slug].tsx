import dayjs from 'dayjs';
import { m } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

import MDXComponents from '../../components/content/MDXComponents';
import Tag from '../../components/content/Tag';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import useContentMeta from '../../hooks/useContentMeta';
import { FADE_DOWN_ANIMATION_VARIANTS } from '../../lib/framer';
import { getFiles, getSlug } from '../../lib/mdx';
import { BlogFrontmatter } from '../../types/frontmatters';

export default function Blog({
  frontMatter,
  source,
}: {
  frontMatter: BlogFrontmatter;
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
          <m.section variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <h1 className='text-3xl text-center md:text-5xl'>
              {frontMatter.title}
            </h1>
          </m.section>
          <m.section variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <ul className='flex flex-wrap justify-center mt-10 list-none md:text-sm gap-y-3 gap-x-7'>
              <li>
                Published At{' '}
                {dayjs(frontMatter.publishedAt).format('D MMMM YYYY')}
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
          <m.section variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <ul className='flex justify-center gap-2 mt-3'>
              {frontMatter.tags.split(',').map((tag) => (
                <li key={tag}>
                  <Tag key={tag} className='gap-6'>
                    {tag}
                  </Tag>
                </li>
              ))}
            </ul>
          </m.section>
          <m.section variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <section className='items-center prose-sm prose text-justify mdx md:prose-base mt-14 dark:prose-invert'>
              <MDXRemote {...source} components={MDXComponents} />
            </section>
          </m.section>
        </m.article>
      </main>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('blog');
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
  const post = await getSlug('blog', params?.slug as string);
  return {
    props: { ...post },
  };
};
