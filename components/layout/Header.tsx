import clsx from 'clsx';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

import useScroll from '../../hooks/useScroll';
function Header() {
  const { theme, setTheme } = useTheme();
  const scrolled = useScroll(50);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md'>
      <nav
        className={clsx(
          'grid items-center grid-cols-3 py-5 layout border-gray-200 dark:border-white/10 ',
          scrolled && 'border-b'
        )}
      >
        <div className='justify-self-start'></div>
        <ul className='flex items-center self-center space-x-3 text-base justify-self-center md:space-x-11'>
          {links.map(({ href, label }) => (
            <li
              key={`${href}${label}`}
              className='dark:hover:text-white-primary hover:text-black-primary'
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <button
          className={clsx(
            'rounded-md p-2.5 focus:outline-none justify-self-end',
            'border dark:border-black-secondary',
            'hover:border-black-secondary hover:text-black-secondary dark:hover:border-white dark:hover:text-white-primary'
          )}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </nav>
    </header>
  );
}
const links = [
  { href: '/', label: 'Home' },
  { href: '/blogs', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default Header;
