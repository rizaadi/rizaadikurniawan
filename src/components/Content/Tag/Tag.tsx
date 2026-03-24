'use client';

import clsx from 'clsx';
import { m } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

function Tag({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={`/tags/${children}`}
      className='rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black-secondary dark:focus-visible:ring-white-secondary focus-visible:ring-offset-2'
    >
      <m.span
        whileHover={{
          scale: 1.05,
          transition: { type: 'spring', stiffness: 400, damping: 17 },
        }}
        className={clsx(
          className,
          'inline-block rounded-md bg-slate-100 px-1.5 py-0.5 font-medium w-fit dark:bg-black-tertiary dark:hover:bg-black-primary',
        )}
      >
        {children}
      </m.span>
    </Link>
  );
}

export default Tag;
