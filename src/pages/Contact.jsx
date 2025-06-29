import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMedium,
} from "react-icons/fa";

const socials = [
  { icon: <FaPhone />, href: "tel:+1234567890", label: "Phone" },
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

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    setError("");
    setSuccess(false);

    fetch("https://formcarry.com/s/3P0wNWf-pAR", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message);
        }
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
      });
  }

  function onReset() {
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setSuccess(false);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] px-2 md:px-0 bg-black/70 backdrop-blur-lg rounded-2xl shadow-xl">
      <h1 className="text-3xl font-extrabold mb-2 text-center w-full max-w-md tracking-widest text-white uppercase">
        Contact
      </h1>
      <hr className="w-16 border-white mb-8 mx-auto" />
      <form
        onSubmit={onSubmit}
        className="relative bg-transparent border-none shadow-none p-0 w-full max-w-xl flex flex-col gap-8"
      >
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="name"
              className="text-xs font-bold tracking-widest uppercase text-white mb-1"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Your first and last name"
              className="px-4 py-3 rounded bg-transparent border border-white/40 text-white focus:border-white focus:outline-none transition placeholder-gray-400"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="email"
              className="text-xs font-bold tracking-widest uppercase text-white mb-1"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="user@example.com"
              className="px-4 py-3 rounded bg-transparent border border-white/40 text-white focus:border-white focus:outline-none transition placeholder-gray-400"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="message"
            className="text-xs font-bold tracking-widest uppercase text-white mb-1"
          >
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            placeholder="Enter your message..."
            rows={5}
            className="px-4 py-3 rounded bg-transparent border border-white/40 text-white focus:border-white focus:outline-none transition placeholder-gray-400"
            required
          ></textarea>
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <button
            type="submit"
            className="px-6 py-3 bg-white text-black rounded font-bold border border-white shadow transition-all duration-200 hover:bg-black hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-white uppercase tracking-widest"
          >
            Send Message
          </button>
          <button
            type="button"
            onClick={onReset}
            className="px-6 py-3 bg-transparent text-white rounded font-bold border border-white shadow transition-all duration-200 hover:bg-white hover:text-black hover:border-white focus:outline-none focus:ring-2 focus:ring-white uppercase tracking-widest"
          >
            Reset
          </button>
        </div>
        {success && (
          <p className="text-green-400 text-center">Message sent! Thank you.</p>
        )}
        {error && <p className="text-red-400 text-center">{error}</p>}
        <div className="flex flex-row gap-4 justify-center mt-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white text-xl shadow transition-all duration-200 hover:bg-white hover:text-black hover:border-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </form>
    </div>
  );
}
