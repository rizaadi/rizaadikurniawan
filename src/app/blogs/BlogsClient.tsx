'use client';

import { m } from 'framer-motion';
import React from 'react';

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/framer';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';

import Button from '@/components/buttons/Button';
import BlogContent from '@/components/content/blog/BlogContent';
import BlogContentNotFound from '@/components/content/blog/BlogContentNotFound';
import Tag from '@/components/content/Tag';

import { BlogFrontmatter } from '@/types/frontmatters';

interface BlogsClientProps {
  posts: BlogFrontmatter[];
  tags: string[];
}

export default function BlogsClient({ posts, tags }: BlogsClientProps) {
  const populatedContent = useInjectContentMeta(posts);

  const [isEnglish, setIsEnglish] = React.useState<boolean>(true);

  //search
  const [search, setSearch] = React.useState('');

  const [filteredPosts, setFilteredPosts] = React.useState(() => [...posts]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const clearSearch = () => setSearch('');

  React.useEffect(() => {
    const results = populatedContent.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        search
          .toLowerCase()
          .split(' ')
          .every((tag) => post.tags.includes(tag)),
    );
    setFilteredPosts(results);
  }, [search, populatedContent]);

  const englishPosts = filteredPosts.filter((p) => !p.slug.startsWith('id-'));
  const bahasaPosts = filteredPosts.filter((p) => p.slug.startsWith('id-'));
  const currentPosts = isEnglish ? englishPosts : bahasaPosts;

  return (
    <main className='layout-container'>
      <m.section
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className='pt-12 layout min-h-main'
      >
        <m.h1
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='text-6xl md:text-7.5xl leading-normal'
        >
          Blog
        </m.h1>
        <m.h2
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='mt-3 text-base font-medium md:text-2xl text-black-secondary dark:text-black-secondary'
        >
          Exploring coding, design, and more
        </m.h2>
        <Button
          onClick={() => {
            setIsEnglish((b) => !b);
            clearSearch();
          }}
          className='mt-2'
        >
          Read in {isEnglish ? 'Indonesia' : 'English'}
        </Button>
        <m.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='mt-5 md:mt-10 md:flex md:flex-row-reverse '
        >
          <div className='w-auto md:w-60'>
            <input
              className='w-full p-2 mt-4 font-medium rounded-md outline-none dark:bg-black-primary bg-slate-100'
              type='text'
              placeholder='Search..'
              onChange={handleSearch}
              value={search}
            />
            <h3 className='mt-3 whitespace-nowrap'>Explore Categories</h3>
            <div className='flex flex-wrap gap-2 mt-2'>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <m.ul
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 'some' }}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className='w-full pt-4 pr-10'
          >
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <BlogContent key={post.slug} post={post} />
              ))
            ) : (
              <BlogContentNotFound />
            )}
          </m.ul>
        </m.div>
      </m.section>
    </main>
  );
}
