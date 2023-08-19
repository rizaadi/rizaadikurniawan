import dayjs from 'dayjs';
import { m } from 'framer-motion';
import Link from 'next/link';

import { FADE_RIGHT_ANIMATION_VARIANTS } from '../../../lib/framer';
import { BlogFrontmatter, InjectedMeta } from '../../../types/frontmatters';

type BlogContentProps = {
  post: BlogFrontmatter & InjectedMeta;
} & React.ComponentPropsWithoutRef<'a'>;

function BlogContent({ post }: BlogContentProps) {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <m.div
        whileHover={{
          x: 5,
          transition: { type: 'spring', stiffness: 400, damping: 17 },
        }}
      >
        <m.li variants={FADE_RIGHT_ANIMATION_VARIANTS} className='pb-9'>
          <p>
            {dayjs(post.publishedAt).format('MMMM D YYYY')} &#183;{' '}
            {post.readingTime.text} &#183;{' '}
            {post.views?.toLocaleString() ?? '–––'} views
          </p>
          <h1 className='mt-2'>{post.title}</h1>
          <p className='mt-3'>{post.description}</p>
        </m.li>
      </m.div>
    </Link>
  );
}

export default BlogContent;
