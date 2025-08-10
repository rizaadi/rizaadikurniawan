import axios from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

import { SingleContentMeta } from '@/types/content';
import { isProd } from '@/types/env';

export default function useContentMeta(slug: string) {
  const { data, mutate } = useSWR<SingleContentMeta>(
    isProd ? `/api/content/${slug}` : null,
    fetcher,
  );

  useEffect(() => {
    if (isProd) {
      incrementViews(slug).then((meta) => {
        mutate({ ...meta });
      });
    }
  }, [mutate, slug]);

  return data;
}
async function incrementViews(slug: string) {
  const res = await axios.post<SingleContentMeta>(`/api/content/${slug}`);

  return res.data;
}
