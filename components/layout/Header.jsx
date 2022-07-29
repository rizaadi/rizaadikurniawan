import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header>
      {/* <div className="bg-gradient-to-b from-gray-500 to-gray-900"> */}
      <nav className="flex items-center justify-center py-5 layout">
        <ul className="flex items-center ml-auto space-x-3 text-xs md:text-base font-semibold font-poppins md:space-x-11">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <button
          className="p-2.5 bg-slate-400 rounded-md ml-auto"
          onClick={() => setTheme(theme === "dark " ? "light" : "dark")}
        >
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </nav>
      {/* </div> */}
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
