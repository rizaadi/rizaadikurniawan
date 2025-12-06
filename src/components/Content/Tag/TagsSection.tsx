'use client';

import React from 'react';

import Button from '@/components/Buttons/Button';
import BlogContent from '@/components/Content/Blog/BlogContent';
import BlogContentNotFound from '@/components/Content/Blog/BlogContentNotFound';
import Tag from '@/components/Content/Tag/Tag';

import { BlogFrontmatter } from '@/types/frontmatters';

interface TagsSectionProps {
  posts: BlogFrontmatter[];
  tags: string[];
  slug: string;
}

export default function TagsSection({ posts, tags, slug }: TagsSectionProps) {
  const populatedPosts = posts;

  const [isEnglish, setIsEnglish] = React.useState<boolean>(true);

  //search
  const [search, setSearch] = React.useState('');

  const [filteredPosts, setFilteredPosts] = React.useState(() => [...posts]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => setSearch('');

  React.useEffect(() => {
    const results = populatedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        search
          .toLowerCase()
          .split(' ')
          .every((tag) => post.tags.includes(tag)),
    );
    setFilteredPosts(results);
  }, [search, populatedPosts]);

  const englishPosts = filteredPosts.filter((p) => !p.slug.startsWith('id-'));
  const bahasaPosts = filteredPosts.filter((p) => p.slug.startsWith('id-'));
  const currentPosts = isEnglish ? englishPosts : bahasaPosts;

  return (
    <main className='layout-container'>
      <section className='py-12 layout min-h-main'>
        <h1 className='text-6xl md:text-7.5xl leading-normal'>Blog : {slug}</h1>
        <h2 className='mt-3 text-base font-medium md:text-2xl text-black-secondary dark:text-black-secondary'>
          Exploring coding, design, and more
        </h2>
        <Button
          onClick={() => {
            setIsEnglish((b) => !b);
            clearSearch();
          }}
          className='mt-2'
        >
          Read in {isEnglish ? 'Indonesia' : 'English'}
        </Button>
        <div className='mt-5 md:mt-10 md:flex md:flex-row-reverse'>
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
          <ul className='w-full pt-4 pr-10 mt-5 md:mt-0'>
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <BlogContent key={post.slug} post={post} />
              ))
            ) : (
              <BlogContentNotFound />
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}
