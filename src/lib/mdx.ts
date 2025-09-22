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
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import {
  ContentType,
  Frontmatter,
  FrontmatterWithDate,
  PickFrontmatter,
} from './../types/frontmatters';
import { rehypePrettyCodeOptions } from './rehypePrettyCode';

export async function getFiles(type: ContentType) {
  return readdirSync(join(process.cwd(), 'src', 'contents', type));
}

export async function getSlug(type: ContentType, slug: string) {
  const source = slug
    ? readFileSync(
        join(process.cwd(), 'src', 'contents', type, `${slug}.mdx`),
        'utf-8',
      )
    : readFileSync(
        join(process.cwd(), 'src', 'contents', `${type}.mdx`),
        'utf-8',
      );
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
        [rehypePrettyCode, rehypePrettyCodeOptions],
      ],
      format: 'mdx',
    },
    scope: data,
  });
  return {
    source: mdxSource,
    frontMatter: {
      readingTime: readingTime(source),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllArticles<T extends ContentType>(type: T) {
  const articles = fs.readdirSync(
    path.join(process.cwd(), 'src', 'contents', type),
  );

  return articles.reduce(
    (allArticles: Array<PickFrontmatter<T>>, articleSlug) => {
      const source = fs.readFileSync(
        path.join(process.cwd(), 'src', 'contents', type, articleSlug),
        'utf-8',
      );
      const { data } = matter(source);

      return [
        {
          ...(data as PickFrontmatter<T>),
          slug: articleSlug.replace('.mdx', ''),
          readingTime: readingTime(source),
        },
        ...allArticles,
      ];
    },
    [],
  );
}
export function getTags<T extends Array<Frontmatter>>(articles: T) {
  const tags = articles.reduce(
    (accTags: string[], article) => [...accTags, ...article.tags.split(',')],
    [],
  );
  return map(sortBy(toPairs(countBy(tags)), 1), 0).reverse();
}

export function getFeatured<T extends Frontmatter>(
  articles: Array<T>,
  features: string[],
) {
  return features.map(
    (feat) => articles.find((article) => article.slug === feat) as T,
  );
}

export function sortByDate<T extends FrontmatterWithDate>(content: Array<T>) {
  return content.sort(sortByDateFn);
}

export function sortByDateFn<T extends FrontmatterWithDate>(
  contentA: T,
  contentB: T,
) {
  return (
    new Date(contentA.lastModifiedAt ?? contentA.publishedAt).valueOf() -
    new Date(contentB.lastModifiedAt ?? contentB.publishedAt).valueOf()
  );
}
