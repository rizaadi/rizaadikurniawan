import dayjs from 'dayjs';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

import TechIcons from '../../components/content/TechIcons';
import Layout from '../../components/layout/Layout';
import { getFiles, getSlug } from '../../lib/mdx';

export default function Project({ frontMatter, source }) {
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
                <TechIcons key={tag} techs={tag.split(',')} />
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
