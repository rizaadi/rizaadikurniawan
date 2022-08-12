import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 transition-shadow shadow-sm">
      <script>(function () {})</script>
      <div className="transition-colors bg-white dark:bg-dark dark:text-white">
        <nav className="flex items-center justify-center py-5 layout">
          <ul className="flex items-center ml-auto space-x-3 text-xs font-semibold md:text-base font-poppins md:space-x-11">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <button
            className={clsx(
              "rounded-md p-2.5 focus:outline-none ml-auto",
              "border dark:border-gray-600",
              "hover:border-primary-300 hover:text-primary-300 dark:hover:border-primary-300 dark:hover:text-primary-300",
              "focus-visible:border-primary-300 focus-visible:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300"
            )}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default Header;
