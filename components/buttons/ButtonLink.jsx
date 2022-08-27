import clsx from 'clsx';
import Link from 'next/link';
function ButtonLink({ children, className = '', href }) {
  return (
    <Link href={`${href}`}>
      <a
        className={clsx(
          'bg-slate-300 rounded py-2 px-4 font-bold inline-block dark:bg-dark',
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default ButtonLink;
