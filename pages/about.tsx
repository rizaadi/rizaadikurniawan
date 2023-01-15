import { m } from 'framer-motion';
import React from 'react';

import CloudinaryImg from '../components/image/CloudinaryImg';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import { FADE_DOWN_ANIMATION_VARIANTS } from '../lib/framer';

function About() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main>
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
            <m.h2
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='pt-20 text-2xl font-semibold text-center md:text-3xl'
            >
              Hello im
            </m.h2>
            <m.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='pt-8 text-5xl text-center md:text-8xl'
            >
              Riza Adi Kurniawan
            </m.h1>
            <m.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='md:flex md:justify-between md:gap-3 mt-28'
            >
              <CloudinaryImg
                className='float-left w-1/2 mt-12 mb-3 mr-3 md:mt-20 md:w-96 md:h-fit'
                publicId='rizaadikurniawan/About/photoprofile-riza.jpg'
                title='Photo Profile'
                alt='Photo Profile'
                width={3024}
                height={4032}
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
                  className='text-4xl font-semibold md:text-7xl'
                >
                  BIO
                </m.h1>
                <m.p
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className='mt-2 text-base text-justify md:text-2xl '
                >
                  I&#39;m a web developer and mobile developer. i love design,
                  but i also love coding and photography. <br />
                  <br />
                  I enjoy making websites and apps that are easy to use and
                  beautiful. I have an eye for detail and try to make everything
                  I create as intuitive as possible for the end user. <br />
                  <br />
                  I&#39;ve been designing and building websites for the past
                  three years, and building apps for the past two. I love
                  designing websites because it allows me my creative outlet,
                  and designing apps is a great way to learn how to build
                  something that people will use daily. <br />
                  <br />
                  My hobbies include writing blog posts, listening to music and
                  singing along with it, reading books, watching movies, and
                  making things (like this one).
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
              <p className='pr-4'>Fullstack Web Intership at CV. Linas Media</p>
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

export default About;
