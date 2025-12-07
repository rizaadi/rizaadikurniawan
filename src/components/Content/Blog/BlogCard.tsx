import dayjs from 'dayjs';
import Link from 'next/link';
import { memo } from 'react';

import CloudinaryImg from '@/components/Image/CloudinaryImg';

import Tag from '../Tag/Tag';

import { BlogFrontmatter } from '@/types/frontmatters';

const BlogCard = memo(function BlogCard({
  slug,
  title,
  description,
  tags,
  banner,
  publishedAt,
  readingTime,
}: BlogFrontmatter) {
  return (
    <li className='w-full border rounded-xl overflow-hidden hover:shadow-lg transition-shadow dark:border-gray-700'>
      <Link href={`/blog/${slug}`} className='block'>
        <figure className='overflow-hidden'>
          <CloudinaryImg
            publicId={`rizaadikurniawan/${banner}`}
            className='rounded-t-xl'
            title={title}
            alt={title}
            width={400}
            height={170}
            aspect={undefined}
          />
        </figure>
        <div className='p-4'>
          <h4 className='text-xl font-semibold'>{title}</h4>

          <div className='flex flex-wrap justify-start w-full py-2 mt-2 text-sm gap-y-1 gap-x-2'>
            {tags.split(',').map((tag) => (
              <Tag key={tag.trim()}>{tag.trim()}</Tag>
            ))}
          </div>

          <p className='mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400'>
            {dayjs(publishedAt).format('D MMMM YYYY')} · {readingTime.text}
          </p>

          <p className='mt-2 text-sm text-gray-700 dark:text-white'>
            {description}
          </p>
        </div>
      </Link>
    </li>
  );
});

export default BlogCard;
