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

      {/* HERO */}
      <section className="py-28 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
            Journal of Health Synapse
          </h1>
          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            JHS is an International, peer-reviewed, open-access scholarly journal committed to
            advancing high-quality multidisciplinary and integrative research across the full
            spectrum of health sciences.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services."target="_blank">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition">
                Submit Article
              </button>
            </Link>
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
              <button className="px-8 py-4 rounded-xl border-2 border-purple-500 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition">
                Visit Journal Website
              </button>
            </Link>
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

      {/* EDITOR IN CHIEF */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Editor-in-Chief
          </h2>
          <div className="group bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex-shrink-0">
              <img
                src="/team_01.png"
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
                <a href="#" className="text-blue-600 hover:underline mr-3">Official Website</a>
                <a href="#" className="text-blue-600 hover:underline mr-3">Google Scholar</a>
                <a href="#" className="text-blue-600 hover:underline mr-3">ResearchGate</a>
                <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
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

      {/* SUBMISSION PROCESS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Submission Process</h2>
          <div className="grid md:grid-cols-5 gap-6 text-sm">
            {[
              "Manuscript Submission",
              "Editorial Screening",
              "Peer Review",
              "Revision & Acceptance",
              "Online Publication",
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 font-bold text-lg mb-2">{index + 1}</div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="https:///917068507857" >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition">
                Submit Your Manuscript
              </button>
            </Link>
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
              <button className="px-8 py-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                Get a Free Consultation
              </button>
            </Link>
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

      <Footer />
    </>
  );
}
