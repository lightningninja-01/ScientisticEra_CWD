import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Award, Lightbulb, Play, Calendar, Presentation } from "lucide-react";

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
  // Webinars Data Array
  const webinarsData = [
    {
      title: "1st International Webinar",
      image: "/1st_International_webinar.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ejGoyTRv3QY",
      date: "Past Event",
      brief: "An insightful international session discussing global advancements in research, scientific publishing, and interdisciplinary collaborations.",
    },
    {
      title: "1st National Webinar",
      image: "/1st_national_webinar.png",
      youtubeUrl: "https://www.youtube.com/watch?v=x0hiSJ9Nfu0",
      date: "Past Event",
      brief: "Our inaugural national webinar focusing on foundational research methodologies and the future of scientific writing in India.",
    },
    {
      title: "2nd National Webinar",
      image: "/2nd_national_webinar.png",
      youtubeUrl: "https://www.youtube.com/watch?v=1ffkf5PuOkc",
      date: "Past Event",
      brief: "Deep dive into intellectual property rights (IPR) and how researchers can protect their innovative ideas and patents.",
    },
    {
      title: "3rd National Webinar",
      image: "/3rd_national_webinar.png",
      youtubeUrl: "https://www.youtube.com/watch?v=ram1t9DcWkQ",
      date: "Past Event",
      brief: "A comprehensive guide on navigating high-impact journal submissions and understanding the peer-review process.",
    },
    {
      title: "4th National Webinar",
      image: "/4th_national_webinar.png",
      youtubeUrl: "https://www.youtube.com/watch?v=PQ_eat5vxQA",
      date: "Past Event",
      brief: "Expert strategies for securing research grants and institutional funding for early-career researchers.",
    },
    {
      title: "5th National Webinar",
      image: "/5th_national_webinar.png",
      youtubeUrl: "https://www.youtube.com/watch?v=DdAhc77HrJQ",
      date: "Past Event",
      brief: "Exploring the intersection of technology and healthcare research, featuring guest speakers from leading institutes.",
    },
    {
      title: "6th National Webinar",
      image: "/6th_national_webinar.png",
      youtubeUrl: "https://www.youtube.com/watch?v=PFxzaA1r-88",
      date: "Past Event",
      brief: "Advanced manuscript drafting techniques: How to structure your thesis and research papers for maximum impact.",
    },
    {
      title: "7th National Webinar",
      image: "/7th_national_webinar.png",
      youtubeUrl: "https://www.youtube.com/watch?v=T6siDMFFc8c",
      date: "Past Event",
      brief: "Understanding research ethics, plagiarism avoidance, and maintaining academic integrity in global publications.",
    },
    {
      title: "8th National Webinar",
      image: "/8th_national_webinar.png",
      youtubeUrl: "https://www.youtube.com/watch?v=_S9OTvThBJ0",
      date: "Past Event",
      brief: "Bridging the gap between academic research and industry application. Real-world case studies and outcomes.",
    },
    {
      title: "9th National Webinar",
      image: "/9th_national_webinar.png",
      youtubeUrl: "https://youtube.com/channel/UCafFU8VdRfXxuH7vNoSxCaQ",
      date: "Past Event",
      brief: "Latest trends in scientific research, data analysis methodologies, and utilizing modern knowledge platforms.",
    }
  ];

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
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
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

      {/* WEBINARS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              <Presentation className="w-4 h-4" />
              <span>Knowledge Series</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Webinars</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our extensive archive of academic webinars. We bring together industry experts and researchers to share knowledge, discuss methodologies, and foster innovation.
            </p>
          </div>

          {/* Webinar List */}
          <div className="space-y-8">
            {webinarsData.map((webinar, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-300"
              >
                {/* Left Side: Poster Image */}
                <div className="relative w-full md:w-1/3 lg:w-1/4 h-72 md:h-auto bg-gray-100 overflow-hidden shrink-0">
                  <Image
                    src={webinar.image}
                    alt={webinar.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Side: Content & Brief */}
                <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{webinar.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {webinar.brief}
                  </p>

                  {/* Call to Action Button */}
                  <div className="mt-auto">
                    <a
                      href={webinar.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors w-fit shadow-md"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}