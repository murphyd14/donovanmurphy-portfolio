import React from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/95 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          Donovan Murphy
        </a>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors duration-200 py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-2 bg-black/95 border-t border-gray-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block py-2 text-lg hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
