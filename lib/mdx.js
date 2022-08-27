import fs, { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import countBy from 'lodash/countBy';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import toPairs from 'lodash/toPairs';
import { serialize } from 'next-mdx-remote/serialize';
import path, { join } from 'path';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export async function getFiles(type) {
  return readdirSync(join(process.cwd(), 'pages', 'contents', type));
}

export async function getSlug(type, slug) {
  const source = slug
    ? readFileSync(
        join(process.cwd(), 'pages', 'contents', type, `${slug}.mdx`),
        'utf-8'
      )
    : readFileSync(
        join(process.cwd(), 'pages', 'contents', `${type}.mdx`),
        'utf-8'
      );
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
    scope: data,
  });
  return {
    source: mdxSource,
    frontMatter: { readingTime: readingTime(source), ...data },
  };
}

export async function getAllArticles(type) {
  const articles = fs.readdirSync(
    path.join(process.cwd(), 'pages', 'contents', type)
  );

  return articles.reduce((allArticles, articleSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'pages', 'contents', type, articleSlug),
      'utf-8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace('.mdx', ''),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ];
  }, []);
}
export function getTags(articles) {
  const tags = articles.reduce(
    (accTags, article) => [...accTags, ...article.tags.split(',')],
    []
  );
  return map(sortBy(toPairs(countBy(tags)), 1), 0).reverse();
}

export function getFeatured(articles, features) {
  return features.map((feat) =>
    articles.find((article) => article.slug === feat)
  );
}
