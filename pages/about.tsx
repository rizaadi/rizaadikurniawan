import React from 'react';

import CloudinaryImg from '../components/image/CloudinaryImg';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
function About() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main>
        <section>
          <div className='layout'>
            <h2 className='pt-20 text-2xl font-semibold text-center md:text-3xl'>
              Hello im
            </h2>
            <h1 className='pt-8 text-5xl text-center md:text-8xl'>
              Riza Adi Kurniawan
            </h1>
            <div className='md:flex md:justify-between md:gap-3 mt-28'>
              <CloudinaryImg
                className='float-left w-1/2 mt-12 mb-3 mr-3 md:mt-20 md:w-96 md:h-fit'
                publicId='rizaadikurniawan/About/photoprofile-riza.jpg'
                title='Photo Profile'
                alt='Photo Profile'
                width={3024}
                height={4032}
              />

              <div className='w-auto md:w-1/2'>
                <h1 className='text-4xl font-semibold md:text-7xl'>BIO</h1>
                <p className='mt-2 text-base text-justify md:text-2xl '>
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
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='py-6 layout'>
            <h2 className='text-2xl font-semibold md:text-3xl'>EXPERIENCE</h2>
            <div className='flex justify-between mt-2 text-base border-b md:text-2xl dark:border-gray-600'>
              <p className='pr-4'>Mobile Developer at Pupuk Indonesia</p>
              <p className='text-end'>2022 - Present</p>
            </div>
            <div className='flex justify-between mt-2 text-base border-b md:text-2xl dark:border-gray-600'>
              <p className='pr-4'>Fullstack Web Intership at CV. Linas Media</p>
              <p className='text-end'>2021</p>
            </div>
          </div>
        </section>
        <section>
          <div className='pt-6 layout'>
            <h2 className='text-2xl font-semibold md:text-3xl'>EDUCATION</h2>
            <div className='flex justify-between mt-2 text-base border-b md:text-2xl dark:border-gray-600'>
              <p className='pr-4'>
                Universitas Internasional Semen Indonesia - Informatics
              </p>
              <p className='text-end'>2018 - 2022</p>
            </div>
            <div className='flex justify-between mt-2 text-base border-b md:text-2xl dark:border-gray-600'>
              <p className='pr-4'>Bangkit 2022 - Android Learning Path</p>
              <p className='text-end'>2022</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;
