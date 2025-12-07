import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

export const SOCIAL_MEDIA = [
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
] as const;

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
] as const;
