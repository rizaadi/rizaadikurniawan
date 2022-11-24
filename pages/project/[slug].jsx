import dayjs from 'dayjs';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

import MDXComponents from '../../components/content/MDXComponents';
import Layout from '../../components/layout/Layout';
import { getFiles, getSlug } from '../../lib/mdx';

export default function Project({ frontMatter, source }) {
  return (
    <Layout>
      <main>
        <article className='py-12 layout-blog'>
          <section>
            <h1 className='text-3xl font-bold text-center md:text-7xl'>
              {frontMatter.title}
            </h1>
          </section>
          <section>
            {/* TODO: fix to center */}
            <ul className='flex flex-wrap justify-center mt-10 text-gray-500 list-none md:text-sm gap-y-3 gap-x-7'>
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
            </ul>
          </section>
          <section className='items-center prose-sm prose text-justify mdx md:prose-base mt-14 dark:prose-invert'>
            <MDXRemote {...source} components={MDXComponents} />
          </section>
        </article>
      </main>
    </Layout>
  );
}
export async function getStaticPaths() {
  const posts = await getFiles('project');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps(params) {
  const post = await getSlug('project', params.params.slug);
  return {
    props: { ...post },
  };
}
