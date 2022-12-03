import Link from 'next/link';
import React from 'react';

import TechIcons, { TechListType } from '../TechIcons';
import CloudinaryImg from '../../image/CloudinaryImg';
import { ProjectFrontmatter } from '../../../types/frontmatters';

function ProjectCard({
  title,
  description,
  tags,
  slug,
  banner,
}: ProjectFrontmatter & React.ComponentPropsWithoutRef<'a'>) {
  return (
    <Link href={`project/${slug}`} passHref>
      <a>
        <li className='transition-colors border rounded-xl md:w-full dark:border-gray-800'>
          <CloudinaryImg
            publicId={`rizaadikurniawan/${banner}`}
            className='rounded-t-xl'
            title={title}
            alt={title}
            width={1440}
            height={1440}
            aspect={undefined}
          />
          <div className='flex flex-col items-start h-full p-4'>
            <div className='mt-1 dark:text-white'>
              <TechIcons techs={tags.split(',') as Array<TechListType>} />
            </div>
            <h4 className='mt-2 dark:text-white'>{title}</h4>
            <p className='mb-auto text-sm text-black-fourth dark:text-gray-300'>
              {description}
            </p>
          </div>
        </li>
      </a>
    </Link>
  );
}

export default ProjectCard;
