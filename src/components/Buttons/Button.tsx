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
        'dark:bg-black-primary ',
      )}
    >
      {children}
    </button>
  );
}
