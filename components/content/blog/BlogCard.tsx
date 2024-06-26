import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Tag from '../Tag';
import { BlogFrontmatter } from '../../../types/frontmatters';

function BlogCard({
  slug,
  title,
  description,
  tags,
}: BlogFrontmatter & React.ComponentPropsWithoutRef<'a'>) {
  return (
    <Link href={`blog/${slug}}`} passHref>
      <li className='w-full border rounded-xl'>
        <a href=''>
          <div className='p-4'>
            <h4 className='mt-3'>{title}</h4>
            <figure className='block mt-3 overflow-hidden rounded-xl'>
              <Image
                layout='responsive'
                src='https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
                width={400}
                height={170}
                alt='test'
              />
            </figure>
            <div className='flex flex-wrap justify-start w-full py-2 mt-2 text-sm gap-y-1 gap-x-2'>
              {tags.split(',').map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <p className='mt-2 text-sm font-semibold'>19 Mei 2020</p>
            <p className='mt-2 text-sm text-gray-700 dark:text-white'>
              {description}
            </p>
          </div>
        </a>
      </li>
    </Link>
  );
}

export default BlogCard;
