"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { CheckCircle, X, ZoomIn } from "lucide-react";
import { useState } from "react";

/* ── inline styles ── */
const marqueeStyle = `
  @keyframes article-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .article-marquee {
    display: flex;
    width: max-content;
    animation: article-scroll 20s linear infinite;
  }
  .article-marquee:hover {
    animation-play-state: paused;
  }
`;

/* ─── DATA ─── */
const articles = [
  { id: 1, src: "/Article_01.png", alt: "Article 1" },
  { id: 2, src: "/Article_02.png", alt: "Article 2" },
  { id: 3, src: "/Article_03.png", alt: "Article 3" },
  { id: 4, src: "/Article_04.png", alt: "Article 4" },
  { id: 5, src: "/Article_05.png", alt: "Article 5" },
];

/* duplicate for seamless loop */
const articleLoop = [...articles, ...articles];

/* ─── LIGHTBOX ─── */
function Lightbox({ src, alt, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition"
        >
          <X size={32} />
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
export default function JournalHealthSynapse() {
  const [zoomed, setZoomed] = useState(null); // { src, alt }

  return (
    <>
      <style>{marqueeStyle}</style>
      {zoomed && (
        <Lightbox src={zoomed.src} alt={zoomed.alt} onClose={() => setZoomed(null)} />
      )}

      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0b1528] via-[#020b14] to-[#12071e] text-white overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Text & Buttons */}
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="inline-block bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
              Official Journal
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Journal of Health Synapse
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              JHS is an International, peer-reviewed, open-access scholarly journal committed to
              advancing high-quality multidisciplinary and integrative research across the full
              spectrum of health sciences.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="https://healthsynapse.org/index.php/files/user/register" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-purple-600/20 transition shadow-lg">
                  Register
                </button>
              </Link>
              <Link href="https://healthsynapse.org/index.php/files" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 rounded-xl border-2 border-purple-400/60 text-purple-300 font-semibold hover:bg-purple-600 hover:text-white hover:border-purple-600 transition shadow-md">
                  Visit Journal Website
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md md:max-w-none group rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/JournalOfHealthSynapse.jpeg"
                alt="Journal of Health Synapse Cover"
                className="w-full h-auto object-contain rounded-xl shadow-inner"
              />
            </div>
          </div>

        </div>
      </section>

      {/* AIM & SCOPE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
            Aim & Scope
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The Journal of Health Synapse (JHS) publishes original, high-impact scholarly work that
            advances understanding of health and disease from preventive, diagnostic, therapeutic,
            and rehabilitative perspectives, with a strong emphasis on translational,
            interdisciplinary, and integrative research.
          </p>
        </div>
      </section>

      {/* KEY AREAS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-5">
            Key Areas Include
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Biomedical Sciences",
              "Pharmaceutical Research",
              "Public Health",
              "Traditional and Integrative Healthcare Systems",
              "Emerging Health Technologies",
              "Preventive, Lifestyle & Environmental Health",
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST ISSUES / ARTICLES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
            Latest Issues / Articles
          </h2>
          <p className="text-gray-500 mb-12">
            Click on any article to view it in full size
          </p>

          {/* Marquee wrapper */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 py-10 px-2 shadow-xl">
            <div className="article-marquee">
              {articleLoop.map((article, i) => (
                <div
                  key={i}
                  onClick={() => setZoomed({ src: article.src, alt: article.alt })}
                  className="flex-shrink-0 mx-4 w-56 md:w-64 cursor-zoom-in group relative rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-xl"
                >
                  <img
                    src={article.src}
                    alt={article.alt}
                    className="w-full h-80 object-cover"
                    draggable={false}
                  />

                  {/* zoom icon overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white w-10 h-10 drop-shadow-lg" />
                  </div>

                  {/* article number badge */}
                  <div className="absolute top-2 left-2 bg-blue-600/90 text-white text-xs font-bold px-2 py-1 rounded-full">
                    #{article.id}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDITOR IN CHIEF */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Editor-in-Chief
          </h2>
          <div className="group bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex-shrink-0">
              <img
                src="/founder_img.jpeg"
                alt="Editor"
                className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-full border-4 border-white shadow-xl group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="text-center md:text-left space-y-4 text-lg">
              <p>
                <span className="font-semibold text-gray-900 text-xl">Name:</span>{" "}
                <span className="text-gray-700">Dr. Sudhanshu Kumar Jha</span>
              </p>
              <p>
                <span className="font-semibold text-gray-900 text-xl">Affiliation:</span>{" "}
                <span className="text-gray-700">Founder, ScientisticEra Private Limited</span>
              </p>
              <p>
                <span className="font-semibold text-gray-900 text-xl">Email:</span>{" "}
                <a href="mailto:contact@scientisticera.com" className="text-blue-600 hover:underline">
                  contact@scientisticera.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900 text-xl">Profile:</span>{" "}
                <Link href="/about-founder" className="text-blue-600 hover:underline mr-3">Official Website</Link>
                <a href="https://scholar.google.com/citations?user=T4dI270AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-3">Google Scholar</a>
                <a href="https://www.researchgate.net/profile/Sudhanshu-Kumar-Jha-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-3">ResearchGate</a>
                <a href="https://www.linkedin.com/in/sudhanshu-kumar-jha-ph-d-549472199/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Journal of Health Synapse
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Peer-Reviewed Publication Process ensuring academic quality and research integrity",
              "Open Access Publishing Model allowing global access and wider visibility",
              "ISSN-Registered Journal ensuring official recognition",
              "Indexed in Reputable Databases for better discoverability",
              "Multidisciplinary Scope across healthcare and medical disciplines",
              "Transparent Editorial and Review Process",
              "Platform for Researchers to share innovative ideas",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-green-600 mt-1" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
