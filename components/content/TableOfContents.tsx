import clsx from 'clsx';
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
}: TableOfContentsProps) {
  return (
    <div id='toc-container' className='hidden overflow-auto lg:block'>
      <h4 className='mb-3'>Table Of Contents</h4>
      <div className='flex flex-col space-y-1 text-sm max-h-[calc(100vh-15rem)]'>
        {toc
          ? toc.map(({ id, text }) => (
              <Link
                key={id}
                href={`#${id}`}
                className={clsx(
                  'dark:hover:text-white-primary hover:text-black-primary font-medium',
                  activeSection === id
                    ? 'text-black-primary dark:text-white-primary'
                    : 'text-black-secondary dark:text-gray-500'
                )}
              >
                {text}
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
