'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import { memo } from 'react';

import { FADE_UP_ANIMATION_VARIANTS } from '@/lib/framer';

import CloudinaryImg from '@/components/Image/CloudinaryImg';

import TechIcons, { TechListType } from '../TechIcons';

import { ProjectFrontmatter } from '@/types/frontmatters';

const ProjectCard = memo(function ProjectCard({
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
          className='bg-white border rounded-xl md:w-full dark:border-black-primary dark:bg-black'
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
});

export default ProjectCard;
