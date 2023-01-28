import Link from 'next/link';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
function Footer() {
  return (
    <footer className='pb-2 text-center transition-all duration-500 ease-in-out border-t dark:border-black-primary dark:bg-gradient-to-b dark:from-black-tertiary dark:to-black md:text-start'>
      <div className='items-center md:flex md:flex-row-reverse layout md:justify-between md:items-start md:mt-14'>
        <div className='flex flex-row justify-center mt-6 space-x-4 text-sm md:mt-0'>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className='dark:hover:text-white-primary hover:text-black-primary'
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className='flex flex-col '>
          <h4 className='mt-8 font-medium md:mt-0'>Riza Adi Kurniawan</h4>
          <p className='mt-1 text-sm'>
            Interested in Web Developer, Mobile Developer, and Design.
          </p>
          <div className='flex justify-center mt-3 space-x-4 md:justify-start'>
            {sosmed.map((sosmed) => (
              <Link
                href={sosmed.href}
                key={sosmed.href}
                className='items-center justify-center inline dark:hover:text-white-primary'
              >
                <sosmed.icon className='w-4 h-4 my-auto align-middle' />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className='my-8 text-xs text-center '>
        © Riza Adi Kurniawan {new Date().getFullYear()}
      </p>
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
const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default Footer;
