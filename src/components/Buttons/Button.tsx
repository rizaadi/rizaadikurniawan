import clsx from 'clsx';
import React from 'react';

export default function Button({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        'inline-block rounded-md bg-slate-100 font-medium px-1.5 py-0.5',
        'dark:bg-black-primary',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-black-secondary dark:focus-visible:ring-white-secondary focus-visible:ring-offset-2',
      )}
    >
      {children}
    </button>
  );
}
