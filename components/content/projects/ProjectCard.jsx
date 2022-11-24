import Link from 'next/link';

import TechIcons from '../TechIcons';
import CloudinaryImg from '../../image/CloudinaryImg';
function ProjectCard({ title, desc, tags, slug, banner }) {
  return (
    <Link href={`project/${slug}`} passHref>
      <a>
        <li className='transition-colors border rounded-xl md:w-full dark:border-gray-800'>
          <CloudinaryImg
            publicId={`rizaadikurniawan/${banner}`}
            className={'rounded-t-xl'}
            title={title}
            alt={title}
            width={1440}
            height={1440}
          />
          <div className='flex flex-col items-start h-full p-4'>
            <div className='mt-1 dark:text-white'>
              <TechIcons techs={tags.split(',')} />
            </div>
            <h4 className='mt-2 dark:text-white'>{title}</h4>
            <p className='mb-auto text-sm text-black-fourth dark:text-gray-300'>
              {desc}
            </p>
          </div>
        </li>
      </a>
    </Link>
  );
}

export default ProjectCard;
