import { useMemo } from 'react';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import { cleanBlogPrefix } from '@/lib/helper';

import { ContentMeta } from '@/types/content';
import { isProd } from '@/types/env';
import {
  ContentType,
  InjectedMeta,
  PickFrontmatter,
} from '@/types/frontmatters';

export default function useInjectContentMeta<T extends ContentType>(
  frontMatter: Array<PickFrontmatter<T>>,
) {
  const { data: contentMeta } = useSWR<Array<ContentMeta>>(
    isProd ? '/api/content' : null,
    fetcher,
  );

  type PopulatedContent = Array<PickFrontmatter<T> & InjectedMeta>;

  const populatedContent = useMemo(() => {
    if (!contentMeta) {
      return frontMatter as PopulatedContent;
    }

    return frontMatter.map((fm) => ({
      ...fm,
      views: contentMeta.find((meta) => meta.slug === cleanBlogPrefix(fm.slug))
        ?.views,
    })) as PopulatedContent;
  }, [contentMeta, frontMatter]);

  return populatedContent;
}
