import Image from 'next/image';
import Link from 'next/link';

import TechIcons from '../TechIcons';
function ProjectCard({ title, desc, tags, slug }) {
  return (
    <Link href={`project/${slug}`} passHref>
      <a>
        <li className='border rounded-xl md:w-full'>
          <figure className='block w-full overflow-hidden rounded-t-xl'>
            <Image
              layout='responsive'
              src='https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
              width={400}
              height={200}
              alt='test'
            />
          </figure>
          <div className='flex flex-col items-start h-full p-4'>
            <div className='mt-1'>
              <TechIcons techs={tags.split(',')} />
            </div>
            <h4 className='mt-2'>{title}</h4>
            <p className='mb-auto text-sm text-gray-700 dark:text-white'>
              {desc}
            </p>
          </div>
        </li>
      </a>
    </Link>
  );
}

export default ProjectCard;
