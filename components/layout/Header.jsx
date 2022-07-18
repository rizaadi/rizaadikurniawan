import React from "react";
import Link, { LinkProps } from "next/link";
function Header() {
  return (
    <header>
      {/* <div className="bg-gradient-to-b from-gray-500 to-gray-900"> */}
        <nav className="flex items-center justify-between py-5 layout">
          <ul className="flex items-center justify-between space-x-8 text-sm font-semibold font-poppins">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <button className="p-2.5 bg-slate-400 rounded-md"></button>
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
