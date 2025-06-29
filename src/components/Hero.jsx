import React from "react";
import Spline from "@splinetool/react-spline";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    icon: <FaPhone />,
    href: "tel:4074681711",
    label: "Phone",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:vanmurphy50@outlook.com",
    label: "Email",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/donovan-murphy-426274259/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/murphyd14/",
    label: "GitHub",
  },
];

export default function Hero() {
  return (
    <main className="absolute inset-0 flex flex-col items-center justify-center pt-8 pb-16 select-none">
      {/* Black background for fallback and contrast */}
      <div className="absolute inset-0 bg-black z-0" />
      <Spline
        scene="https://prod.spline.design/aGTt9MsSW5ATG72b/scene.splinecode"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-2">Donovan Murphy</h1>
        <p className="text-xl mb-8 text-white">
          Ex-Athlete. Builder. Future Investor.
        </p>
        <hr className="w-64 border-gray-700 mb-8" />
        <div className="flex flex-row flex-wrap justify-center gap-4 mb-8">
          {navLinks.map((link) =>
            link.href.startsWith("/resume") ? (
              <a
                key={link.name}
                href="/Donovan_Murphy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-900 border border-gray-700 rounded-full text-white font-semibold text-base shadow transition-all duration-300 hover:bg-gray-800 hover:border-white/60 hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.12)] hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="px-6 py-2 bg-gray-900 border border-gray-700 rounded-full text-white font-semibold text-base shadow transition-all duration-300 hover:bg-gray-800 hover:border-white/60 hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.12)] hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
        <div className="flex flex-row justify-center gap-4 mt-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 text-white text-xl shadow transition-all duration-300 hover:bg-gray-800 hover:border-white/60 hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.15)] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
