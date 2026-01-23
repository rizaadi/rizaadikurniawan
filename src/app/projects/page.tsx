import React from 'react';

import { getAllArticles, sortByDate } from '@/lib/mdx';

import Layout from '@/components/Layout/Layout';

import ProjectsSection from '../../components/Content/Project/ProjectsSection';

export const metadata = {
  title: 'Projects - Riza Adi Kurniawan',
  description: "I made some projects that I'm proud of.",
};

async function getProjects() {
  const articles = await getAllArticles('project');
  const articlesSorted = sortByDate(articles);

  return articlesSorted.reverse();
}

export default async function Projects() {
  const posts = await getProjects();

  return (
    <Layout>
      <ProjectsSection posts={posts} />
    </Layout>
  );
}
