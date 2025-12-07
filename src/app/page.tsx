import React from 'react';

import { getAllArticles, getFeatured } from '@/lib/mdx';

import Layout from '@/components/Layout/Layout';

import HomeSection from '../components/Content/Home/HomeSection';

async function getFeaturedProjects() {
  const projects = await getAllArticles('project');
  const featuredProjects = getFeatured(projects, [
    'balitaku',
    'valorantlab',
    'tradify',
  ]);
  return featuredProjects;
}

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <Layout>
      <HomeSection featuredProjects={featuredProjects} />
    </Layout>
  );
}
