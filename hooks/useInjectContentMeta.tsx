import { useEffect, useState } from 'react';
import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import { ContentMeta } from '../types/content';
import { isProd } from '../types/env';
import {
  ContentType,
  InjectedMeta,
  PickFrontmatter,
} from '../types/frontmatters';

export default function useInjectContentMeta<T extends ContentType>(
  frontMatter: Array<PickFrontmatter<T>>
) {
  const { data: contentMeta, error } = useSWR<Array<ContentMeta>>(
    isProd ? '/api/content' : null,
    fetcher
  );

  const isLoading = !error && !contentMeta;

  type PopulatedContent = Array<PickFrontmatter<T> & InjectedMeta>;

  const [populatedContent, setPopulateContent] = useState<PopulatedContent>(
    () => [...frontMatter] as PopulatedContent
  );

  useEffect(() => {
    if (contentMeta) {
      const mapped = frontMatter.map((fm) => {
        const views = contentMeta.find((meta) => meta.slug === fm.slug)?.views;

        return { ...fm, views };
      });

      setPopulateContent(mapped);
    }
  }, [contentMeta, isLoading, frontMatter]);

  return populatedContent;
}
