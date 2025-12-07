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
    if (!isProd) return;

    // Delay increment by 3 seconds to avoid counting bots and quick exits
    const timer = setTimeout(() => {
      incrementViews(slug).then((meta) => {
        mutate({ ...meta }, false);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [slug, mutate]);

  return data;
}
async function incrementViews(slug: string) {
  const res = await axios.post<SingleContentMeta>(`/api/content/${slug}`);

  return res.data;
}
