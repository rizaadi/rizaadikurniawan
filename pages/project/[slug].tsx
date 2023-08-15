import buildUrl from 'cloudinary-build-url';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { m, useScroll, useTransform } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

import MDXComponents from '../../components/content/MDXComponents';
import TableOfContents, {
  HeadingScrollSpy,
} from '../../components/content/TableOfContents';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import useContentMeta from '../../hooks/useContentMeta';
import useScrollSpy from '../../hooks/useScrollSpy';
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
  const activeSection = useScrollSpy();

  const url = buildUrl(`rizaadikurniawan/${frontMatter.mockup}`, {
    cloud: {
      cloudName: 'rizaadi',
    },
  });

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
      <main className='layout-container'>
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
          <section className='overflow-hidden'>
            <m.section variants={FADE_DOWN_ANIMATION_VARIANTS} className='mx-4'>
              <h1 className='text-5xl font-bold text-center md:text-7xl'>
                {frontMatter.title}
              </h1>
            </m.section>
            {frontMatter.mockup && (
              <div className='h-[28rem]'>
                <m.div
                  className='relative flex justify-center drop-shadow-mobile dark:drop-shadow-mobile_dark'
                  style={{ y }}
                >
                  <Image src={url} alt='iphone' width={250} height={100} />
                </m.div>
              </div>
            )}
          </section>

          <m.section
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className={clsx(
              'z-10 pt-10',
              frontMatter.mockup &&
                'bg-white drop-shadow-mobile_only_top dark:bg-black dark:drop-shadow-mobile_only_top_dark'
            )}
          >
            <ul className='flex flex-wrap justify-center list-none md:text-sm gap-y-3 gap-x-7 mb-14'>
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
          <section className='lg:grid lg:grid-cols-[1fr,auto,1fr] lg:gap-7 flex justify-center lg:px-0 px-4'>
            <aside />
            <m.article
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='prose-sm prose text-justify mdx md:prose-base dark:prose-invert'
            >
              <MDXRemote {...source} components={MDXComponents} />
            </m.article>
            <aside>
              <div className='sticky top-36'>
                <TableOfContents
                  toc={toc}
                  minLevel={minLevel}
                  activeSection={activeSection}
                />
              </div>
            </aside>
          </section>
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
