import type { MetadataRoute } from 'next';

import { getAllArticles } from '@/lib/mdx';

import { baseUrl } from '@/types/env';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllArticles('blog');
  const projects = await getAllArticles('project');

  const blogEntries = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: new Date(project.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...blogEntries,
    ...projectEntries,
  ];
}
