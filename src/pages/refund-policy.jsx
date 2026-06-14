import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Maximize2, RefreshCw } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function RefundPolicyPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Reopens the modal container if it was fully closed
  const handleOpenModal = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
        <div className="flex-grow flex items-center justify-center p-4">
          <button 
            onClick={handleOpenModal}
            className="bg-[#0b248c] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5 animate-spin-slow" /> Open Refund Policy Modal
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800 antialiased relative">
      
      {/* Backdrop Overlay Blur (Hidden when Minimized) */}
      {!isMinimized && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300" />
      )}

      {/* ================= MODAL WINDOW STRUCTURE ================= */}
      <div 
        className={`fixed z-50 transition-all duration-500 ease-in-out bg-white border border-gray-200 shadow-2xl flex flex-col
          ${isMinimized 
            ? "bottom-6 right-6 w-80 h-14 rounded-xl overflow-hidden cursor-pointer" 
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[85vh] sm:h-[75vh] rounded-2xl"
          }`}
        onClick={() => isMinimized && setIsMinimized(false)}
      >
        
        {/* Modal Header Control Strip Bar */}
        <div className="bg-[#072F4A] text-white px-4 py-3 flex items-center justify-between shrink-0 select-none rounded-t-xl">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-semibold text-sm tracking-wide truncate max-w-[180px] sm:max-w-none">
              Refund Policy - ScientisticEra
            </span>
          </div>
          
          {/* Action Window Controls (Minimize / Expand / Close) */}
          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/10 rounded transition-colors text-gray-300 hover:text-white"
              title={isMinimized ? "Expand Window" : "Minimize Window"}
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-red-500 rounded transition-colors text-gray-300 hover:text-white"
              title="Close Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Window Inner Layout Document Box */}
        <div className={`flex-grow overflow-y-auto p-6 md:p-10 ${isMinimized ? "hidden" : "block"}`}>
          
          {/* Document Header Panel */}
          <div className="border-b border-gray-100 pb-4 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0b248c]">
              Refund & Cancellation Policy
            </h1>
            <p className="text-gray-400 mt-1 text-xs">
              Last updated: June 2026
            </p>
          </div>

          {/* Section 1: Consultancy & Service Refunds */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-[#0b248c] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#6e0f89] rounded-full inline-block"></span>
              Consultancy & Service Refunds
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3 pl-2 text-sm md:text-base" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <li>Payments once processed are generally non-refundable after initiation of services.</li>
              <li>Refund requests may be considered in exceptional circumstances.</li>
              <li>Any approved refund will be processed within <span className="font-semibold text-gray-900">7–14 working days</span>.</li>
            </ul>
          </section>

          {/* Section 2: Cancellation Policy Box */}
          <section className="bg-[#F4F7F9] rounded-xl p-5 border-l-4 border-blue-600 shadow-sm mt-4">
            <h3 className="text-lg font-bold text-[#0b248c] mb-2">
              Cancellation Policy
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              Clients must notify cancellation requests officially through email or authorized organizational communication channels.
            </p>
          </section>

        </div>
      </div>

      {/* Main Structural Layout Backing */}
      <div className="flex-grow" />
      <Footer />

    </div>
  );
}