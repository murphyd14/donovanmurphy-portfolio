import React from "react";

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] px-2 md:px-0 bg-black/70 backdrop-blur-lg rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold mb-4 text-center w-full max-w-2xl tracking-wider uppercase">
        Experience
      </h1>
      <hr className="w-16 border-white mb-8 mx-auto" />
      <div className="flex flex-col items-center">
        <img
          src="/Northrop.png"
          alt="Northrop Grumman Logo"
          className="h-16 mb-4 object-contain"
        />
        <h2 className="text-2xl font-semibold text-white mb-4">
          Northrop Grumman
        </h2>
        <p className="max-w-2xl text-base text-gray-200 text-center mb-6 leading-relaxed">
          At Northrop Grumman, I worked on mission-critical software and data
          systems for advanced defense and aerospace applications. My work
          included:
        </p>
        <ul className="max-w-2xl text-base text-gray-200 mb-6 leading-relaxed list-disc list-inside">
          <li>
            Developed and ran large-scale simulations on a High Performance
            Compute (HPC) cluster.
          </li>
          <li>
            Assisted in deploying containerized Large Language Models (LLMs) and
            supporting infrastructure.
          </li>
          <li>
            Built and maintained full stack Power BI automations for the Lab
            Access Tool, including:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Designed and implemented the frontend and backend for the tool.
              </li>
              <li>
                Integrated Power Automate and Excel VBA for seamless workflow
                automation and reporting.
              </li>
            </ul>
          </li>
          <li>
            Worked with Python, Power BI, Power Automate, Excel VBA, Docker, and
            modern web technologies.
          </li>
        </ul>
        <p className="max-w-2xl text-base text-gray-400 text-center">
          My experience at Northrop Grumman strengthened my skills in cloud and
          cluster computing, automation, and full stack development for
          high-impact, real-world systems.
        </p>
      </div>
    </div>
  );
}
