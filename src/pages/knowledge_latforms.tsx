import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Award, Lightbulb } from "lucide-react";

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

export default function KnowledgePlatforms() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="py-28 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
            Other Pivotal Services
          </h1>
          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            Empowering knowledge sharing, academic excellence, and innovation through our dedicated platforms for researchers, scholars, and professionals.
          </p>
        </div>
      </section>

      {/* BOOK PUBLISHING SECTION - 1st Position */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Academic Publishing House
            </span>
            <h2 className="text-3xl font-bold mt-6 mb-6 text-gray-900">Scholarly Book Publishing</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Supporting researchers, academicians, and subject experts in publishing high-quality
              scholarly books and edited volumes through a professional academic publishing process.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>✔ Academic book publishing for researchers and faculty</li>
              <li>✔ Edited volumes and multi-author books</li>
              <li>✔ Conference proceedings publication</li>
              <li>✔ ISBN allocation and copyright support</li>
              <li>✔ Professional editing, formatting, and typesetting</li>
              <li>✔ Print and digital publication options</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              Our books are published through our dedicated academic publishing division (Scriptoria Publications), ensuring
              professional editorial standards and global academic visibility.
            </p>
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
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

      {/* UNIVERSAL E-MAGAZINE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Digital Publication Platform
            </span>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Universal E-Magazine
            </h2>
            <p className="mt-4 text-gray-600">
              The Universal E-Magazine is a digital platform showcasing research highlights, academic insights, innovations, and thought leadership from scholars and professionals across disciplines.
            </p>
            <h4 className="mt-6 font-semibold text-gray-800">
              Inside the Magazine:
            </h4>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>• Research articles and perspectives</li>
              <li>• Innovation and startup stories</li>
              <li>• Academic insights and commentary</li>
              <li>• Knowledge sharing across disciplines</li>
            </ul>
            <Link href="https://scriptoriapublicationhouse.com/magazine" target="_blank">
              <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Read the Magazine →
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center text-gray-400">
            Magazine Preview (Add Image/Slider)
          </div>
        </div>
      </section>

      {/* SCIENTISTIC ERA AWARDS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center text-gray-400">
            Awards Showcase (Add Image/Slider)
          </div>

          {/* RIGHT */}
          <div>
            <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
              Recognition & Excellence
            </span>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              ScientisticEra Awards
            </h2>
            <p className="mt-4 text-gray-600">
              The ScientisticEra Awards recognize outstanding contributions in research, innovation, and academic excellence. The initiative celebrates researchers, scholars, and professionals who are advancing knowledge and creating meaningful impact across disciplines.
            </p>
            <h4 className="mt-6 font-semibold text-gray-800">
              Key Recognitions:
            </h4>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>• Recognition for outstanding research contributions</li>
              <li>• Awards for innovation and academic excellence</li>
              <li>• Opportunities for emerging researchers and scholars</li>
              <li>• Global visibility within the academic community</li>
            </ul>
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services.">
              <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                Explore the Awards →
              </button>
            </Link>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}