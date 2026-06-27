import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Copyright,
  FileText,
  GraduationCap,
  Linkedin,
  Lightbulb,
  Palette,
  Presentation,
  Trophy,
} from "lucide-react";

const founderAchievements = [
  {
    title: "Appreciations & Recognitions",
    description:
      "Certificates of Appreciation, Letters of Recognition, and Honors received from Government organizations, academic institutions, research organizations, and professional bodies.",
    href: "/gallery?category=appreciations-recognitions",
    icon: Award,
    color: "text-blue-600",
    hover: "hover:border-blue-500",
  },
  {
    title: "Research Publications",
    description:
      "Research articles and review papers published in national and international peer-reviewed journals.",
    href: "/gallery?category=research-publications",
    icon: FileText,
    color: "text-purple-600",
    hover: "hover:border-purple-500",
  },
  {
    title: "Books & Book Chapters",
    description:
      "Authored books, edited volumes, and contributed book chapters published by national and international publishers.",
    href: "/gallery?category=books-book-chapters",
    icon: BookOpen,
    color: "text-pink-600",
    hover: "hover:border-pink-500",
  },
  {
    title: "Intellectual Property",
    description:
      "Patents (National & International), including published and granted patents demonstrating innovation and technological advancement.",
    href: "/gallery?category=intellectual-property",
    icon: Lightbulb,
    color: "text-green-600",
    hover: "hover:border-green-500",
  },
  {
    title: "Copyrights",
    description:
      "Registered copyrights recognizing original scholarly, literary, and scientific works.",
    href: "/gallery?category=copyrights",
    icon: Copyright,
    color: "text-orange-600",
    hover: "hover:border-orange-500",
  },
  {
    title: "Design Registrations",
    description:
      "Indian Design Registrations and International Design Patents reflecting innovation in product and industrial design.",
    href: "/gallery?category=design-registrations",
    icon: Palette,
    color: "text-cyan-600",
    hover: "hover:border-cyan-500",
  },
  {
    title: "Awards & Honors",
    description:
      "National and international awards recognizing excellence in research, innovation, scientific leadership, and academic contributions.",
    href: "/gallery?category=awards-honors",
    icon: Trophy,
    color: "text-yellow-600",
    hover: "hover:border-yellow-500",
  },
  {
    title: "Conferences & Scientific Engagements",
    description:
      "Participation as a speaker, session chair, organizer, or delegate in national and international conferences, seminars, workshops, and scientific events.",
    href: "/gallery?category=conferences-scientific-engagements",
    icon: Presentation,
    color: "text-red-600",
    hover: "hover:border-red-500",
  },
];
export default function AboutFounder() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 lg:pt-28">
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Dr. Sudhanshu Kumar Jha
            </h1>
            <p className="text-2xl text-gray-900 font-semibold">
              Founder & Director, ScientisticEra Private Limited
            </p>
            <p className="text-gray-700 mt-4 text-xl">
              M.Pharm. (Medicinal Chemistry) | Ph.D. (Pharmaceutical Sciences)
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-gray-800 leading-relaxed text-lg text-justify">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-5">
                  Leadership Profile
                </h2>
                <p>
                  Dr. Sudhanshu Kumar Jha is the Founder and Director of ScientisticEra Private Limited, a Research and Development organization dedicated to advancing scientific research, innovation, publication excellence, intellectual property protection, and global academic collaboration.
                </p>
                <p className="mt-4">
                  With extensive experience spanning academia, pharmaceutical research, scientific publishing, and innovation management, Dr. Jha has established ScientisticEra with a mission to empower researchers and institutions by providing comprehensive research support, intellectual property services, publication assistance, and strategic scientific collaborations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-5">
                  Professional Biography
                </h2>
                <p>
                  Dr. Sudhanshu Kumar Jha is currently serving as a Scientist at the All India Institute of Ayurveda (AIIA) under the Centre for Integrative Oncology, New Delhi, Government of India. He also serves as the Editor-in-Chief of the Journal of Health Synapse, an international multidisciplinary peer-reviewed journal, and as a Visiting Assistant Professor in the Department of Pharmaceutical Sciences at Major S.D. College of Education.
                </p>
                <p className="mt-4">
                  He has contributed as a Researcher in the Pharmaceutical Department for the collaborative IMR project titled "Profiling of Phytochemicals in Ayurvedic Medicinal Formulations and Understanding Their Aggregation Behavior," jointly undertaken by the Central Ayurveda Research Institute (CARI), Ministry of AYUSH, Government of India, and the Indian Institute of Technology Gandhinagar (IIT Gandhinagar).
                </p>
                <p className="mt-4">
                  Dr. Jha has received several prestigious recognitions for his scientific contributions, including the Young Researcher Award - 2024 from the Institute of Scholars (INSC), the Nobel Scientist Award - 2025 presented at the International Scientific Awards 2025 by Scientific Laurels, and the Young Scientist Award - 2025 conferred by the KTK Outstanding Achievers and Education Foundation.
                </p>
                <p className="mt-4">
                  As an academic leader, he has served as the Organizing Secretary for 10 national and international scientific webinars organized by ScientisticEra Private Limited, fostering interdisciplinary collaboration and scientific knowledge exchange.
                </p>
              </div>
            </div>

            <div className="md:sticky md:top-36">
              <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                <Image
                  src="/founder_img.jpeg"
                  alt="Dr. Sudhanshu Kumar Jha"
                  width={550}
                  height={720}
                  className="w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              <div className="flex justify-center gap-5 pt-6">
                <a
                  href="https://www.linkedin.com/in/sudhanshu-kumar-jha-ph-d-549472199/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
                  aria-label="LinkedIn profile"
                >
                  <img
                    src="/linkedin_logo.webp"
                    alt="LinkedIn"
                    className="h-6 w-6 object-contain"
                  />
                </a>

                <a
                  href="https://scholar.google.com/citations?user=T4dI270AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
                  aria-label="Google Scholar profile"
                >
                  <img
                    src="/Google_Scholar_logo.png"
                    alt="Google Scholar"
                    className="h-7 w-7 object-contain"
                  />
                </a>

                <a
                  href="https://www.researchgate.net/profile/Sudhanshu-Kumar-Jha-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
                  aria-label="ResearchGate profile"
                >
                  <img
                    src="/ResearchGate_logo.png"
                    alt="ResearchGate"
                    className="h-7 w-7 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-10 space-y-8 text-gray-800 leading-relaxed text-lg text-justify">
            <div>
              <p>
                Prior to his academic career, Dr. Jha worked as an actor and model, with one of his music videos receiving more than 4 million views on YouTube. His professional journey also includes leadership roles as Production Head (Pharmaceuticals), Research Supervisor, Formulation Scientist, and Assistant Professor/Researcher, providing him with multidisciplinary expertise across pharmaceutical industry, academia, and research.
              </p>
              <p className="mt-4">
                His research specialization lies in Medicinal Chemistry, with expertise in synthetic (wet-laboratory) chemistry, computer-aided drug discovery, molecular docking, network pharmacology, advanced analytical sciences, and translational pharmaceutical research. He is proficient in modern analytical techniques, including HPTLC, HPLC, LC-MS, and GC-MS, and actively conducts in-silico, in-vitro, and in-vivo pharmacological investigations involving conventional drugs and medicinal plants.
              </p>
              <p className="mt-4">
                Dr. Jha has authored more than 60 research and review articles published in internationally reputed journals, including Nature Portfolio (Scientific Reports), Wiley (Chemistry & Biodiversity), and Elsevier (Pharmacological Research - Natural Products). His academic contributions also include 10 book chapters, five internationally published books, and one book published through Amazon.
              </p>
              <p className="mt-4">
                His innovation portfolio includes 10 published patents, 4 copyrights, 25 Indian design registrations, and 4 international design patents granted in the United Kingdom. His scholarly work has received more than 700 citations, with an h-index of 18 across Google Scholar and ResearchGate.
              </p>
              <p className="mt-4">
                Dr. Jha has actively participated in more than 70 national and international conferences, seminars, workshops, and scientific events, reflecting his commitment to advancing pharmaceutical sciences, strengthening research ecosystems, promoting innovation, and contributing to sustainable national and global development.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-5 text-left">
                Founder's Vision
              </h2>
              <p>
                ScientisticEra Private Limited was established in 2023 under the visionary leadership of Dr. Sudhanshu Kumar Jha with a bold mission to redefine how research is supported, protected, and positioned on the global stage. The organization was officially inaugurated by Hon'ble Shri Shripad Yesso Naik, Minister of State for New and Renewable Energy, Government of India, marking the beginning of a transformative journey in advancing research and innovation.
              </p>
              <p className="mt-4">
                ScientisticEra was founded to address the critical challenges faced by researchers in publication compliance, intellectual property protection, research commercialization, and global academic visibility. Guided by the principles of integrity, innovation, quality, and scientific excellence, the organization has developed a structured ecosystem that supports researchers, academicians, innovators, healthcare professionals, and institutions throughout the research lifecycle - from concept development and scientific publication to intellectual property protection and international recognition.
              </p>
              <p className="mt-4">
                Looking ahead, ScientisticEra aspires to become a globally trusted partner in research, innovation, and academic excellence. The organization is committed to enabling seamless research dissemination, strengthening intellectual property governance, fostering interdisciplinary and international collaborations, and accelerating the translation of research into meaningful societal impact.
              </p>
              <p className="mt-4">
                Its long-term roadmap focuses on developing scalable research infrastructure, promoting publication excellence, advancing innovation management, and ensuring that every research idea is not only published, but also protected, recognized, and positioned for global impact.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-5 text-left">
                Leading Research Beyond Boundaries
              </h2>
              <p>
                Through ScientisticEra Private Limited, Dr. Sudhanshu Kumar Jha continues to lead initiatives that empower researchers, strengthen intellectual property ecosystems, promote high-quality scientific publishing, and foster meaningful national and international research collaborations. His vision is to build a research ecosystem where every innovation is scientifically validated, strategically protected, globally recognized, and translated into meaningful societal impact.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-3xl md:text-5xl mb-6">
                Founder&apos;s Achievements
              </Badge>
              {/* <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Explore the founder&apos;s recognitions, research contributions, intellectual property, and scientific engagements.
              </p> */}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {founderAchievements.map((achievement) => {
                const Icon = achievement.icon;

                return (
                  <Link key={achievement.title} href={achievement.href} className="group block h-full">
                    <Card className={`h-full border-2 ${achievement.hover} hover:shadow-xl transition-all duration-300 bg-white`}>
                      <CardHeader>
                        <Icon className={`w-12 h-12 ${achievement.color} mb-4 group-hover:scale-110 transition-transform`} />
                        <CardTitle className="text-xl leading-tight text-gray-900">
                          {achievement.title}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-700 leading-relaxed">
                          {achievement.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span className="font-semibold text-blue-600 group-hover:text-purple-600 transition-colors">
                          View Pictures
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}