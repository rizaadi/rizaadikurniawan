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
    <div id='toc-container'>
      <h4 className='mb-3'>Table Of Contents</h4>
      <div className='hidden max-h-[calc(100vh-15rem)] overflow-auto lg:block'>
        <div className='flex flex-col space-y-1'>
          {toc
            ? toc.map(({ id, text }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className='dark:hover:text-white-primary hover:text-black-primary'
                >
                  {text}
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
