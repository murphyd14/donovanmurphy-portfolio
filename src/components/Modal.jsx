import React, { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      style={{ background: "transparent" }}
    >
      {/* Backdrop - now fully transparent for clear home page view */}
      <div
        className="absolute inset-0 transition-all duration-500"
        onClick={onClose}
        style={{ background: "transparent" }}
      />
      {/* Modal content - translucent black background */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-black/70 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden animate-modalIn flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200 hover:text-white hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.15)] hover:scale-110"
          aria-label="Close modal"
        >
          ×
        </button>
        <div className="overflow-y-auto max-h-[90vh] p-8 w-full flex flex-col items-center">
          {children}
        </div>
      </div>
      <style>{`
        @keyframes modalIn {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        .animate-modalIn {
          animation: modalIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
