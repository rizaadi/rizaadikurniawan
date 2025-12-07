import React from 'react';

import { getAllArticles } from '@/lib/mdx';

import Layout from '@/components/Layout/Layout';

import ProjectsSection from '../../components/Content/Project/ProjectsSection';

export const metadata = {
  title: 'Projects - Riza Adi Kurniawan',
  description: "I made some projects that I'm proud of.",
};

async function getProjects() {
  const articles = await getAllArticles('project');

  articles
    .map((article) => article.publishedAt)
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;

      return 0;
    });

  return articles.reverse();
}

export default async function Projects() {
  const posts = await getProjects();

  return (
    <Layout>
      <ProjectsSection posts={posts} />
    </Layout>
  );
}
