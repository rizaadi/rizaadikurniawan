import clsx from 'clsx';
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
      className={clsx(
        'bg-slate-300 rounded py-2 px-4 font-bold inline-block dark:bg-dark',
        className
      )}
    >
      {children}
    </Link>
  );
}
