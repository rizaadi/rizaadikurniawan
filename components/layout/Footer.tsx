import React from 'react';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
function Footer() {
  return (
    <footer className='pb-2 mt-32'>
      <main className='flex flex-col items-center border-t layout dark:border-gray-800'>
        <h4 className='mt-10 font-medium dark:text-white'>Reach me out</h4>
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
        <p className='mt-6 text-sm font-medium'>
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
    href: 'https://www.linkedin.com/in/rizaadikurniawan/',
    icon: SiLinkedin,
  },
  {
    name: 'Email',
    href: 'mailto:rizaadi890@gmail.com',
    icon: SiGmail,
  },
];

export default Footer;
