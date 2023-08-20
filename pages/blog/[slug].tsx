import dayjs from 'dayjs';
import { m } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

import MDXComponents from '../../components/content/MDXComponents';
import TableOfContents, {
  HeadingScrollSpy,
} from '../../components/content/TableOfContents';
import Tag from '../../components/content/Tag';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import useContentMeta from '../../hooks/useContentMeta';
import useScrollSpy from '../../hooks/useScrollSpy';
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
} from '../../lib/framer';
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
  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });
    setToc(headingArr);
  }, [frontMatter.slug]);

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
          className='py-24'
        >
          <m.section variants={FADE_DOWN_ANIMATION_VARIANTS} className='mx-4'>
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
          <section className='lg:grid lg:grid-cols-[1fr,auto,1fr] lg:gap-7 flex justify-center lg:px-0 px-4'>
            <aside />
            <m.section
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='items-center prose-sm prose text-justify mdx md:prose-base mt-14 dark:prose-invert'
            >
              <MDXRemote {...source} components={MDXComponents} />
            </m.section>
            <aside>
              <m.div
                variants={FADE_LEFT_ANIMATION_VARIANTS}
                className='sticky top-36'
              >
                <TableOfContents
                  toc={toc}
                  minLevel={minLevel}
                  activeSection={activeSection}
                />
              </m.div>
            </aside>
          </section>
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
