import clsx from 'clsx';
import Link from 'next/link';

function Tag({ children, className = '' }) {
  return (
    <Link href={`/tags/${children}`}>
      <button
        className={clsx(
          className,
          'inline-block rounded-md bg-slate-100 px-1.5 py-0.5 font-medium  w-fit dark:bg-dark'
        )}
      >
        {children}
      </button>
    </Link>
  );
}

export default Tag;
