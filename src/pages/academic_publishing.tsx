"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

/* ── inline styles ── */
const marqueeStyle = `
  @keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-scroll 35s linear infinite;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }
`;

/* ─── DATA ─────────────────────────────────── */
const books = [
  {
    id: 1,
    title: "Gastrointestinal Disorder: Ayurvedic Clinical Protocols & Evidence-Based Medicine",
    color: "from-emerald-500 to-teal-700",
    spine: "bg-emerald-800",
  },
  {
    id: 2,
    title: "Ayurvedic Principles and Modern Medicine in Pulmonary Health: Integrative Strategies for Prevention and Therapy",
    color: "from-sky-500 to-blue-700",
    spine: "bg-blue-900",
  },
  {
    id: 3,
    title: "Integrative Oncology: An Ayurveda Clinician's Perspective",
    color: "from-violet-500 to-purple-700",
    spine: "bg-purple-900",
  },
  {
    id: 4,
    title: "Disease Prediction and Healthcare Innovation: The Impact of AI, ML, and DL",
    color: "from-orange-400 to-rose-600",
    spine: "bg-rose-900",
  },
  {
    id: 5,
    title: "Integrative Oncology: Perspectives from Modern and Traditional Sciences",
    color: "from-amber-400 to-orange-600",
    spine: "bg-orange-900",
  },
];

const journals = [
  { label: "Journal of Health Synapse",                                               img: "/SE_01.jpeg" },
  { label: "Int. Journal of Research & Development in Pharmacy & Life Sciences",      img: "/SE_02.jpeg" },
  { label: "Asian Journal of Pharmaceutical Research",                                img: "/SE_03.jpeg" },
  { label: "Journal of Clinical & Diagnostic Research",                               img: "/SE_04.jpeg" },
  { label: "International Journal of Ayurveda & Integrative Medicine",                img: "/SE_05.jpeg" },
  { label: "Journal of Biomedical & Life Sciences",                                   img: "/SE_06.jpeg" },
  { label: "Global Journal of Medical Innovation",                                    img: "/SE_07.jpeg" },
];

const journalLoop = [...journals, ...journals];

/* ─── LIGHTBOX ──────────────────────────────── */
function Lightbox({ journal, onClose }) {
  if (!journal) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={journal.img}
          alt={journal.label}
          className="w-full object-contain max-h-[75vh]"
        />

        {/* Label */}
        <div className="px-5 py-4 bg-white">
          <p className="text-gray-800 font-semibold text-sm text-center">{journal.label}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── BOOK CARD ─────────────────────────────── */
function BookCard({ book, index }) {
  return (
    <div className="flex items-stretch gap-0 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className={`${book.spine} w-4 flex-shrink-0`} />
      <div className={`bg-gradient-to-br ${book.color} p-4 flex-1 flex flex-col justify-between min-h-[90px]`}>
        <span className="text-white/70 text-xs font-mono">#{String(index + 1).padStart(2, "0")}</span>
        <p className="text-white text-sm font-semibold leading-snug mt-2 group-hover:text-white/90 transition">
          {book.title}
        </p>
      </div>
      <div className="flex flex-col gap-[2px] justify-center px-1 bg-gray-100">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-3 h-[2px] bg-gray-300 rounded-full" />
        ))}
      </div>
    </div>
  );
}

/* ─── JOURNAL CARD ──────────────────────────── */
function JournalCard({ j, onClick }) {
  return (
    <div
      className="flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden shadow-lg mx-3 hover:scale-105 transition-transform duration-300 cursor-pointer relative group"
      onClick={() => onClick(j)}
    >
      <img
        src={j.img}
        alt={j.label}
        className="w-full h-full object-cover"
      />

      {/* hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
        <span className="text-white text-2xl">🔍</span>
        <p className="text-white text-[10px] font-medium leading-snug text-center">
          {j.label}
        </p>
      </div>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────── */
export default function AcademicPublishing() {
  const [selectedJournal, setSelectedJournal] = useState(null);

  return (
    <>
      <style>{marqueeStyle}</style>
      <Header />

      {/* LIGHTBOX */}
      <Lightbox journal={selectedJournal} onClose={() => setSelectedJournal(null)} />

      {/* HERO */}
      <section className="py-28 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
            Academic Publishing Services
          </h1>
          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            Supporting researchers and academicians in publishing high-quality scholarly work through
            peer-reviewed journals and academic books.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition">
                Submit Research Article
              </button>
            </Link>
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
              <button className="px-8 py-4 rounded-xl border-2 border-purple-500 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition">
                Publish Book
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* PART 1 — BOOK PUBLISHING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Scholarly Book Publishing</h2>
            <p className="text-gray-600 mb-6">
              Supporting researchers, academicians, and subject experts in publishing high-quality
              scholarly books and edited volumes through a professional academic publishing process.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Academic book publishing for researchers and faculty</li>
              <li>✔ Edited volumes and multi-author books</li>
              <li>✔ Conference proceedings publication</li>
              <li>✔ ISBN allocation and copyright support</li>
              <li>✔ Professional editing, formatting, and typesetting</li>
              <li>✔ Print and digital publication options</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              Our books are published through our dedicated academic publishing division, ensuring
              professional editorial standards and global academic visibility.
            </p>
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Explore Our Publishing House →
              </button>
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
              Our Published Titles
            </p>
            {books.map((book, i) => (
              <BookCard key={book.id} book={book} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PART 2 — JOURNALS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — SINGLE ROW MARQUEE */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 py-10 shadow-xl">
            <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-6 font-semibold">
              Our Journal Portfolio
            </p>
            <div className="overflow-hidden">
              <div className="marquee-track">
                {journalLoop.map((j, i) => (
                  <JournalCard key={i} j={j} onClick={setSelectedJournal} />
                ))}
              </div>
            </div>
            <p className="text-center text-white/30 text-xs mt-5">Click any journal to view</p>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Academic Journal Platforms</h2>
            <p className="text-gray-600 mb-6">
              Facilitating publication of research articles in peer-reviewed academic journals across
              diverse disciplines.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Support for publishing in reputed peer-reviewed journals</li>
              <li>✔ Guidance for Scopus, Web of Science, UGC-CARE indexed journals</li>
              <li>✔ Manuscript preparation and submission support</li>
              <li>✔ Editorial and peer-review coordination</li>
            </ul>
            <p className="mt-6 text-gray-600 text-sm">We also host our own scholarly journals:</p>
            <ul className="mt-3 text-sm text-gray-700 space-y-1">
              <li>• Journal of Health Synapse</li>
              <li>• International Journal of Research and Development in Pharmacy &amp; Life Sciences</li>
            </ul>
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
              <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                View Our Journals →
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* PART 3 — PRE-PUBLICATION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Pre-Publication Support</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive support to prepare manuscripts according to international publishing standards.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Manuscript editing and proofreading",
              "Reference formatting (APA / MLA / Vancouver)",
              "Plagiarism check & improvement",
              "Journal formatting & submission",
              "Research article structuring",
            ].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                ✔ {item}
              </div>
            ))}
          </div>
          <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
            <button className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition">
              Get Publishing Support →
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
