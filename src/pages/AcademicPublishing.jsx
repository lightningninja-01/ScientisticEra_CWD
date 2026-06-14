import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

/* ── inline styles injected once ── */
const marqueeStyle = `
  @keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-scroll 28s linear infinite;
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

/* 7 journal cards — swap src="" with real image paths when ready */
const journals = [
  { label: "Journal of Health Synapse", bg: "from-blue-600 to-cyan-500", abbr: "JHS" },
  { label: "Int. Journal of Research & Development in Pharmacy & Life Sciences", bg: "from-purple-600 to-pink-500", abbr: "IJRDPLS" },
  { label: "Asian Journal of Pharmaceutical Research", bg: "from-emerald-600 to-teal-400", abbr: "AJPR" },
  { label: "Journal of Clinical & Diagnostic Research", bg: "from-rose-600 to-orange-400", abbr: "JCDR" },
  { label: "International Journal of Ayurveda & Integrative Medicine", bg: "from-amber-500 to-yellow-400", abbr: "IJAIM" },
  { label: "Journal of Biomedical & Life Sciences", bg: "from-sky-600 to-blue-400", abbr: "JBLS" },
  { label: "Global Journal of Medical Innovation", bg: "from-violet-600 to-indigo-400", abbr: "GJMI" },
];

/* duplicate for seamless loop */
const journalLoop = [...journals, ...journals];

/* ─── BOOK CARD ─────────────────────────────── */
function BookCard({ book, index }) {
  return (
    <div className="flex items-stretch gap-0 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      {/* spine */}
      <div className={`${book.spine} w-4 flex-shrink-0`} />

      {/* cover */}
      <div className={`bg-gradient-to-br ${book.color} p-4 flex-1 flex flex-col justify-between min-h-[90px]`}>
        <span className="text-white/70 text-xs font-mono">#{String(index + 1).padStart(2, "0")}</span>
        <p className="text-white text-sm font-semibold leading-snug mt-2 group-hover:text-white/90 transition">
          {book.title}
        </p>
      </div>

      {/* page-edge illusion */}
      <div className="flex flex-col gap-[2px] justify-center px-1 bg-gray-100">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-3 h-[2px] bg-gray-300 rounded-full" />
        ))}
      </div>
    </div>
  );
}

/* ─── JOURNAL CARD (marquee item) ─────────────── */
function JournalCard({ j }) {
  return (
    <div
      className={`flex-shrink-0 w-44 h-60 rounded-xl bg-gradient-to-br ${j.bg}
        flex flex-col items-center justify-between p-4 shadow-lg mx-3
        hover:scale-105 transition-transform duration-300 cursor-default`}
    >
      {/* top stripe */}
      <div className="w-full h-1.5 bg-white/30 rounded-full" />

      {/* abbreviation badge */}
      <div className="bg-white/20 rounded-lg px-3 py-2 text-center">
        <span className="text-white font-black text-lg tracking-wide leading-none">{j.abbr}</span>
      </div>

      {/* label */}
      <p className="text-white/90 text-[10px] font-medium text-center leading-snug px-1">
        {j.label}
      </p>

      {/* bottom bar */}
      <div className="w-full h-1 bg-white/20 rounded-full" />
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────── */
export default function AcademicPublishing() {
  return (
    <>
      <style>{marqueeStyle}</style>
      <Header />

      {/* HERO */}
      <section className="py-28 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Academic Publishing Services
          </h1>
          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            Supporting researchers and academicians in publishing high-quality scholarly work through
            peer-reviewed journals and academic books.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition">
                Submit Research Article
              </button>
            </Link>
            <Link href="/contact">
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

          {/* LEFT */}
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
            <Link href="/contact">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Explore Our Publishing House →
              </button>
            </Link>
          </div>

          {/* RIGHT — BOOK CARDS */}
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

          {/* LEFT — MARQUEE */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 py-8 shadow-xl">
            <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-6 font-semibold">
              Our Journal Portfolio
            </p>

            {/* Row 1 — scroll left */}
            <div className="overflow-hidden mb-4">
              <div className="marquee-track">
                {journalLoop.map((j, i) => (
                  <JournalCard key={i} j={j} />
                ))}
              </div>
            </div>

            {/* Row 2 — scroll right (reverse) */}
            <div className="overflow-hidden">
              <div
                className="marquee-track"
                style={{ animationDirection: "reverse", animationDuration: "22s" }}
              >
                {[...journalLoop].reverse().map((j, i) => (
                  <JournalCard key={i} j={j} />
                ))}
              </div>
            </div>
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
            <Link href="/contact">
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
          <Link href="/contact">
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
