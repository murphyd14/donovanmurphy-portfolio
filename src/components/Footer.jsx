import React from "react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="fixed bottom-3 right-2 z-50">
      <div className="px-8 py-3 bg-black/90 border border-gray-800 text-gray-400 text-sm rounded-full shadow-lg flex items-center justify-center backdrop-blur-lg min-w-[260px] max-w-xs">
        <span className="whitespace-nowrap text-center">
          © {year} Donovan Murphy. All rights reserved.
        </span>
      </div>
    </div>
  );
}
