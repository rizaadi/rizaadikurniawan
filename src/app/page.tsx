import React from 'react';

import { getAllArticles, getFeatured } from '@/lib/mdx';

import Layout from '@/components/layout/Layout';

import HomeClient from './HomeClient';

async function getFeaturedProjects() {
  const projects = await getAllArticles('project');
  const featuredProjects = getFeatured(projects, [
    'sinpro',
    'valorantlab',
    'volusearch',
  ]);
  return featuredProjects;
}

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <Layout>
      <HomeClient featuredProjects={featuredProjects} />
    </Layout>
  );
}
