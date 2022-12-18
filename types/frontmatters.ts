import { ReadTimeResults } from 'reading-time';

export type ProjectFrontmatter = {
  title: string;
  banner: string;
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
  readingtime: ReadTimeResults;
};

export type ContentType = 'project' | 'blog';

export type PickFrontmatter<T extends ContentType> = T extends 'project'
  ? ProjectFrontmatter
  : BlogFrontmatter;

export type Frontmatter = ProjectFrontmatter | BlogFrontmatter;
