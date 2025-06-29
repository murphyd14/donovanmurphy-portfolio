import React, { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    window.open("/Donovan_Murphy_Resume.pdf", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] px-2 md:px-0 bg-black/70 backdrop-blur-lg rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Resume</h1>
      <div className="bg-gray-800 border border-gray-600 rounded-xl shadow-lg p-8 max-w-md text-center">
        <p className="mb-6 text-gray-300 leading-relaxed">
          Your resume should have opened in a new tab. If not,{" "}
          <a
            href="/Donovan_Murphy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-white transition px-2 py-1 rounded border border-transparent hover:border-white/60 hover:bg-gray-800 hover:shadow-[0_0_8px_1px_rgba(255,255,255,0.10)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            click here to view or download it
          </a>
          .
        </p>
        <div className="text-sm text-gray-400">
          The resume will open in a new browser tab for easy viewing and
          downloading.
        </div>
      </div>
    </div>
  );
}
