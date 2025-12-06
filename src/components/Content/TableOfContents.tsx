'use client';

import clsx from 'clsx';
import { m } from 'framer-motion';
import Link from 'next/link';

export type HeadingScrollSpy = Array<{
  id: string;
  level: number;
  text: string;
}>;
type TableOfContentsProps = {
  toc?: HeadingScrollSpy;
  activeSection: string | null;
  minLevel: number;
};

export default function TableOfContents({
  toc,
  activeSection,
  minLevel,
}: TableOfContentsProps) {
  return (
    <div id='toc-container' className='hidden overflow-auto lg:block'>
      <h4 className='mb-2'>Table Of Contents</h4>
      <div className='flex flex-col space-y-1 text-sm max-h-[calc(100vh-15rem)]'>
        {toc
          ? toc.map(({ id, text, level }) => (
              <m.div
                whileHover={{
                  x: 2.5,
                  transition: { type: 'spring', stiffness: 400, damping: 17 },
                }}
                key={id}
                className={clsx(
                  'dark:hover:text-white-primary hover:text-black-primary font-medium w-fit',
                  activeSection === id
                    ? 'text-black-primary dark:text-white-primary'
                    : 'text-black-secondary dark:text-gray-500',
                )}
                style={{ marginLeft: (level - minLevel) * 15 }}
              >
                <Link key={id} href={`#${id}`} replace scroll={false}>
                  {text}
                </Link>
              </m.div>
            ))
          : null}
      </div>
    </div>
  );
}
