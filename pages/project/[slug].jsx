import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getSlug } from '../../lib/mdx';
import Layout from '../../components/layout/Layout';
import Tag from '../../components/content/Tag';
import dayjs from 'dayjs';

export default function Project({ frontMatter, source }) {
  return (
    <Layout>
      <main>
        <section>
          <div className='py-12 layout'>
            <h1 className='text-3xl leading-normal text-center md:text-5xl'>
              {frontMatter.title}
            </h1>
            <ul className='flex justify-center gap-7 mt-10'>
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
