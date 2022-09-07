import Image from 'next/image';
import React from 'react';

import Layout from '../components/layout/Layout';
function About() {
  return (
    <Layout>
      <main>
        <section>
          <div className='layout'>
            <h2 className='pt-20 text-3xl font-semibold text-center'>
              Hi my name is
            </h2>
            <h1 className='pt-8 text-center text-8xl'>Riza Adi Kurniawan</h1>
            <div className='flex justify-between gap-3 mt-28'>
              <figure className='w-1/2'>
                <Image
                  alt='Photo Profile'
                  src='https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
                  width={400}
                  height={400}
                />
              </figure>
              <div className='w-1/2'>
                <h1 className='font-semibold text-7xl'>BIO</h1>
                <p className='mt-2 text-2xl font-medium text-justify'>
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
            <h2 className='text-3xl font-semibold'>EXPERIENCE</h2>
            <div className='flex justify-between mt-2 text-2xl font-medium border-b dark:border-gray-600'>
              <p>Fullstack Web Intership at CV. Linas Media</p>
              <p>2021</p>
            </div>
          </div>
        </section>
        <section>
          <div className='pt-6 pb-24 layout'>
            <h2 className='text-3xl font-semibold'>EDUCATION</h2>
            <div className='flex justify-between mt-2 text-2xl font-medium border-b dark:border-gray-600'>
              <p>Universitas Internasional Semen Indonesia - Informatics</p>
              <p>2018 - 2022</p>
            </div>
            <div className='flex justify-between mt-2 text-2xl font-medium border-b dark:border-gray-600'>
              <p>Bangkit 2022 - Android Learning Path</p>
              <p>2022</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;
