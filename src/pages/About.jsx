import React from "react";

const skills = [
  "Python & SQL for Data Analysis",
  "Investment Insight",
  "Leadership",
  "End-to-End Technical Execution",
];

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] px-2 md:px-0 bg-black/70 backdrop-blur-lg rounded-2xl shadow-xl">
      <div className="w-32 h-32 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden mb-6 shadow-lg border-2 border-white/10">
        <img
          src="/donovan.jpg"
          alt="Donovan Murphy"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <h1 className="text-3xl font-extrabold mb-2 text-center tracking-widest text-white uppercase">
        About Me
      </h1>
      <hr className="w-16 border-white mb-8 mx-auto" />
      <p className="max-w-2xl text-base text-gray-200 text-center mb-8 leading-relaxed">
        I’m a former NCAA Division II basketball captain and summa cum laude
        computer science graduate, driven by a deep interest in investing,
        private equity, and building high-performance systems. I blend the
        discipline of athletics with technical rigor and a long-term investor
        mindset. Whether through entrepreneurial projects or capital allocation
        frameworks, I’m constantly pushing to solve hard problems, improve
        execution, and operate at the intersection of software, strategy, and
        value creation.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-black/80 border border-white/20 rounded-full text-sm font-semibold text-white shadow transition-all duration-300 hover:bg-gray-900 hover:border-white/60 hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.10)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
