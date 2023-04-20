import dayjs from 'dayjs';
import Link from 'next/link';

import { BlogFrontmatter, InjectedMeta } from '../../../types/frontmatters';

type BlogContentProps = {
  post: BlogFrontmatter & InjectedMeta;
} & React.ComponentPropsWithoutRef<'a'>;

function BlogContent({ post }: BlogContentProps) {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <li>
        <div className='pb-9'>
          <p className='text-gray-700 dark:text-white'>
            {dayjs(post.publishedAt).format('MMMM D YYYY')} &mdash;{' '}
            {post.readingTime.text} &mdash;{' '}
            {post.views?.toLocaleString() ?? '–––'}
          </p>
          <h1 className='mt-2'>{post.title}</h1>
          <p className='mt-3 '>{post.description}</p>
          <p className='mt-4'>READ MORE</p>
        </div>
      </li>
    </Link>
  );
}

export default BlogContent;
