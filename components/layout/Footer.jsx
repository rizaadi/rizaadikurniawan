import React from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
function Footer() {
  return (
    <footer className='pb-2 mt-4'>
      <main className='flex flex-col items-center border-t layout dark:border-gray-600'>
        <h4 className='mt-10 font-semibold '>Reach me out</h4>
        <div className='flex mt-3 space-x-4'>
          {sosmed.map((sosmed) => (
            <a
              href={sosmed.href}
              key={sosmed.href}
              className='items-center justify-center inline'
            >
              <sosmed.icon className='w-6 h-6 my-auto align-middle' />
            </a>
          ))}
        </div>
        <p className='mt-6 text-sm'>
          © Riza Adi Kurniawan {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  );
}

const sosmed = [
  {
    name: 'Github',
    href: 'https://github.com/rizaadi',
    icon: SiGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: SiLinkedin,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: SiInstagram,
  },
];

export default Footer;
