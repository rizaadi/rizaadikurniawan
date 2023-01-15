import clsx from 'clsx';
import { m } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ButtonLink({
  children,
  className = '',
  href,
}: ButtonLinkProps) {
  return (
    <Link
      href={`${href}`}
      className={clsx('inline-block px-4 py-2 font-semibold', className)}
    >
      <m.div
        whileHover={{
          x: 10,
          transition: { type: 'spring', stiffness: 400, damping: 17 },
        }}
      >
        {children}
      </m.div>
    </Link>
  );
}
