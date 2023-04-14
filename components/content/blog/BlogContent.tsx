import dayjs from 'dayjs';
import Link from 'next/link';

import { BlogFrontmatter } from '../../../types/frontmatters';

function BlogContent({
  slug,
  title,
  description,
  publishedAt,
  readingTime,
}: BlogFrontmatter & React.ComponentPropsWithoutRef<'a'>) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <li>
        <div className='pb-9'>
          <p className='text-gray-700 dark:text-white'>
            {dayjs(publishedAt).format('MMMM D YYYY')} &mdash;{' '}
            {readingTime.text}
          </p>
          <h1 className='mt-2'>{title}</h1>
          <p className='mt-3 '>{description}</p>
          <p className='mt-4'>READ MORE</p>
        </div>
      </li>
    </Link>
  );
}

export default BlogContent;
