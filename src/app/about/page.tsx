'use client';

import { m } from 'framer-motion';
import React from 'react';

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/framer';

import CloudinaryImg from '@/components/Image/CloudinaryImg';
import Layout from '@/components/Layout/Layout';

export default function About() {
  return (
    <Layout>
      <main className='layout-container'>
        <section>
          <m.div
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
            className='layout'
          >
            <m.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='pt-8 text-5xl text-center md:text-8xl'
            >
              About Me
            </m.h1>
            <m.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='md:flex md:justify-center md:gap-3 mt-28'
            >
              <CloudinaryImg
                className='float-left w-1/2 mb-3 mr-3 md:w-72 md:h-fit'
                publicId='rizaadikurniawan/About/photoprofile-riza.jpg'
                title='Photo Profile'
                alt='Photo Profile'
                width={3000}
                height={4000}
              />

              <m.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                variants={{
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className='w-auto md:w-1/2'
              >
                <m.h1
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className='text-2xl font-semibold md:text-3xl'
                >
                  Riza Adi Kurniawan
                </m.h1>
                <m.p
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className='mt-2 text-base text-justify'
                >
                  Hello! You can call me Riza. I'm a Mobile Developer focused on
                  building clean, scalable, and visually intentional products
                  across Flutter, Android, and iOS.
                  <br />
                  <br />
                  This website serves as a platform to showcase the projects
                  I've worked on since my college days. Additionally, I'll be
                  sharing some random thoughts in this blog.
                  <br />
                  <br />
                  I believe that one of the best ways to remember things and
                  gain a deeper understanding is through writing and sharing
                  knowledge.
                  <br />
                  <br />
                  In my free time, I explore{' '}
                  <a
                    href='https://www.instagram.com/rzavisuals/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline hover:text-black-secondary dark:hover:text-white-secondary'
                  >
                    photography
                  </a>
                  , write,{' '}
                  <a
                    href='https://www.goodreads.com/zephysus'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline hover:text-black-secondary dark:hover:text-white-secondary'
                  >
                    read books
                  </a>
                  , enjoy{' '}
                  <a
                    href='https://open.spotify.com/user/21swnnxqa5bz4djnp2tyrl7eq'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline hover:text-black-secondary dark:hover:text-white-secondary'
                  >
                    music
                  </a>{' '}
                  and films, and work on hands-on DIY projects like this one.
                </m.p>
              </m.div>
            </m.div>
          </m.div>
        </section>
        <section>
          <m.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 'all' }}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className='py-6 layout'
          >
            <m.h2
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='text-2xl font-semibold md:text-3xl'
            >
              EXPERIENCE
            </m.h2>
            <m.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='flex justify-between mt-2 text-base border-b md:text-2xl dark:border-gray-600'
            >
              <p className='pr-4'>Mobile Developer at Pupuk Indonesia</p>
              <p className='text-end'>2022 - Present</p>
            </m.div>
            <m.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='flex justify-between mt-2 text-base border-b md:text-2xl dark:border-gray-600'
            >
              <p className='pr-4'>
                Web Developer Intership at Linas Media Informatika
              </p>
              <p className='text-end'>2021</p>
            </m.div>
          </m.div>
        </section>
        <section>
          <m.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 'all' }}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className='pt-6 layout'
          >
            <m.h2
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='text-2xl font-semibold md:text-3xl'
            >
              EDUCATION
            </m.h2>
            <m.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='flex justify-between mt-2 text-base border-b md:text-2xl dark:border-gray-600'
            >
              <p className='pr-4'>Bangkit 2022 - Android Learning Path</p>
              <p className='text-end'>2022</p>
            </m.div>
            <m.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='flex justify-between mt-2 text-base border-b md:text-2xl dark:border-gray-600'
            >
              <p className='pr-4'>
                Universitas Internasional Semen Indonesia - Informatics
              </p>
              <p className='text-end'>2018 - 2022</p>
            </m.div>
          </m.div>
        </section>
      </main>
    </Layout>
  );
}
