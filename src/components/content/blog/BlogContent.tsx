'use client';

import dayjs from 'dayjs';
import { m } from 'framer-motion';
import Link from 'next/link';

import { BlogFrontmatter, InjectedMeta } from '@/types/frontmatters';

type BlogContentProps = {
  post: BlogFrontmatter & InjectedMeta;
} & React.ComponentPropsWithoutRef<'a'>;

function BlogContent({ post }: BlogContentProps) {
  return (
    <li className='pb-9'>
      <Link href={`/blog/${post.slug}`} passHref>
        <m.div
          whileHover={{
            x: 5,
            transition: { type: 'spring', stiffness: 400, damping: 17 },
          }}
        >
          <p>
            {dayjs(post.publishedAt).format('MMMM D YYYY')} &#183;{' '}
            {post.readingTime.text} &#183;{' '}
            {post.views?.toLocaleString() ?? '–––'} views
          </p>
          <h1 className='mt-2'>{post.title}</h1>
          <p className='mt-3'>{post.description}</p>
        </m.div>
      </Link>
    </li>
  );
}

export default BlogContent;
