import clsx from 'clsx';
import { m } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

function Tag({
  children,
  className = '',
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <Link href={`/tags/${children}`}>
      <m.button
        whileHover={{
          scale: 1.05,
          transition: { type: 'spring', stiffness: 400, damping: 17 },
        }}
        className={clsx(
          className,
          'inline-block rounded-md bg-slate-100 px-1.5 py-0.5 font-medium  w-fit dark:bg-black-tertiary dark:hover:bg-black-primary'
        )}
      >
        {children}
      </m.button>
    </Link>
  );
}

export default Tag;
