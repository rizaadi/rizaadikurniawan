import { ReadTimeResults } from 'reading-time';

export type ProjectFrontmatter = {
  title: string;
  banner: string;
  mockup?: string;
  publishedAt: string;
  lastModifiedAt?: string;
  description: string;
  tags: string;
  slug: string;
  readingTime: ReadTimeResults;
};
export type BlogFrontmatter = {
  title: string;
  banner: string;
  publishedAt: string;
  lastModifiedAt?: string;
  description: string;
  tags: string;
  slug: string;
  readingTime: ReadTimeResults;
};
export type InjectedMeta = { views?: number; likes?: number };

export type ContentType = 'project' | 'blog';

export type PickFrontmatter<T extends ContentType> = T extends 'project'
  ? ProjectFrontmatter
  : BlogFrontmatter;

export type Frontmatter = ProjectFrontmatter | BlogFrontmatter;
export type FrontmatterWithDate = ProjectFrontmatter | BlogFrontmatter;
