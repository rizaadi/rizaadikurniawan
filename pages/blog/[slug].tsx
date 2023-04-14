import dayjs from 'dayjs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

import Tag from '../../components/content/Tag';
import Layout from '../../components/layout/Layout';
import { getFiles, getSlug } from '../../lib/mdx';
import { BlogFrontmatter } from '../../types/frontmatters';

export default function Blog({
  frontMatter,
  source,
}: {
  frontMatter: BlogFrontmatter;
  source: MDXRemoteSerializeResult;
}) {
  return (
    <Layout>
      <main>
        <section>
          <div className='py-12 layout'>
            <h1 className='text-3xl leading-normal text-center md:text-5xl'>
              {frontMatter.title}
            </h1>
            <ul className='flex justify-center mt-10 gap-7'>
              <li>
                Published At{' '}
                {dayjs(frontMatter.publishedAt).format('D MMMM YYYY')}
              </li>
              <li>{frontMatter.readingTime.text}</li>
            </ul>
            <ul className='flex justify-center gap-2 mt-3'>
              {frontMatter.tags.split(',').map((tag) => (
                <li key={tag}>
                  <Tag key={tag} className='gap-6'>
                    {tag}
                  </Tag>
                </li>
              ))}
            </ul>
            <div className='mt-14'>
              <MDXRemote {...source} />
            </div>
          </div>
        </section>
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
