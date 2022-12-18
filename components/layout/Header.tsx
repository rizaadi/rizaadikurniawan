import clsx from 'clsx';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className='sticky top-0 z-50 transition-shadow backdrop-blur-md'>
      <nav className='grid items-center grid-cols-3 py-5 layout'>
        <div className='justify-self-start'></div>
        <ul className='flex items-center self-center space-x-3 text-base font-medium justify-self-center md:space-x-11 dark:text-black-fifth '>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className='dark:hover:text-white'>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <button
          className={clsx(
            'rounded-md p-2.5 focus:outline-none justify-self-end',
            'border dark:border-black-fifth',
            'hover:border-black-second hover:text-black-second dark:hover:border-white dark:hover:text-white'
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
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default Header;
