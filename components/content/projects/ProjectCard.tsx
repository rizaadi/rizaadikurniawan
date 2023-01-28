import { m } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import TechIcons, { TechListType } from '../TechIcons';
import CloudinaryImg from '../../image/CloudinaryImg';
import { FADE_UP_ANIMATION_VARIANTS } from '../../../lib/framer';
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
      <m.div
        whileHover={{
          y: -5,
          transition: { type: 'spring', stiffness: 400, damping: 17 },
        }}
      >
        <m.li
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='transition-colors border rounded-xl md:w-full dark:border-gray-800'
        >
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
            <div className='mt-1 '>
              <TechIcons techs={tags.split(',') as Array<TechListType>} />
            </div>
            <h4 className='mt-2 '>{title}</h4>
            <p className='mb-auto text-sm '>{description}</p>
          </div>
        </m.li>
      </m.div>
    </Link>
  );
}

export default ProjectCard;
