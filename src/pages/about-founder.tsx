import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Linkedin, GraduationCap } from "lucide-react";

export default function AboutFounder() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#0b2a4a] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mt-10">
            Our Founder & Chairperson
          </h1>
          <p className="text-gray-300 mt-8">
            Leadership, Innovation and Vision behind Scientistic Era Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-gray-800 leading-relaxed text-lg">

            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Dr. Sudhanshu Kumar Jha
            </h2>

            <p className="italic text-gray-600">
              (M.Pharm in Medicinal Chemistry; Ph.D. in Pharmaceutical Sciences)
            </p>

            <p>
              Dr. Sudhanshu Kumar Jha (M.Pharm in Medicinal Chemistry; Ph.D. in Pharmaceutical Sciences) is the Founder and Director of Scientistic Era Pvt. Ltd., a Research and Development firm officially inaugurated by Hon’ble Shri Shripad Yesso Naik, Minister of State for New and Renewable Energy, Government of India.
            </p>

            <p>
              He is currently serving as a Scientist at the All India Institute of Ayurveda under the Department of Centre for Integrative Oncology, New Delhi, Government of India. Simultaneously, he holds the position of Editor-in-Chief of the Journal of Health Synapse (an international multidisciplinary peer-reviewed journal) and serves as the Research and Development Director at Hubs Ayurveda.
            </p>

            <p>
              Dr. Jha has contributed as a Researcher in the Pharma Department on a collaborative IMR project titled “Profiling of Phytochemicals in Ayurvedic Medicinal Formulations and Understanding Their Aggregation Behavior,” jointly undertaken by the Central Ayurveda Research Institute (Ministry of AYUSH, Government of India) and Indian Institute of Technology Gandhinagar.
            </p>

            <p>
              He is also currently serving as a Visiting Assistant Professor in the Department of Pharmaceutical Sciences at Major SD College of Education.
            </p>

            <p>
              Dr. Jha was honored with the prestigious Young Researcher Award – 2024 (Volume 9, Issue 3) by the Institute of Scholars (INSC) (Membership ID: 20248YRA69). He also received the Nobel Scientist Award 2025 at the International Scientific Awards 2025 by Scientific Laurels and was conferred the Young Scientist Award 2025 by the KTK Outstanding Achievers and Education Foundation.
            </p>

            <p>
              He has served as the Organizing Secretary for 10 national and international webinars hosted by Scientistic Era Pvt. Ltd.
            </p>

            <p>
              Beyond his research career, Dr. Jha is a former actor and model, with over 4 million views on a music video published on YouTube. He has previously held several professional roles, including Production Head (Pharma), Research Supervisor, Formulation Scientist, and Assistant Professor/Researcher.
            </p>

            <p>
              His core domain expertise lies in Medicinal Chemistry, with special emphasis on synthetic (wet lab) chemistry, advanced analytical techniques, and molecular docking studies of conventional drugs and medicinal plants. He is proficient in modern analytical instruments such as HPTLC, HPLC, LC-MS, and GC-MS, and actively conducts in-silico analyses. His research encompasses in-vitro and in-vivo pharmacological studies, molecular docking mechanisms, and network pharmacology.
            </p>

            <p>
              Dr. Jha has authored over 60 research and review articles in reputed journals, including publications under Nature (Scientific Reports), Wiley (Chemistry & Biodiversity), and Elsevier (Pharmacological Research – Natural Products). He has also contributed to 10 book chapters, authored five books on international platforms, and published one book on Amazon.
            </p>

            <p>
              In addition, he holds 10 published patents, four copyrights, 15 Indian design grants, and four international design patents from the United Kingdom. His academic impact includes 539 citations with an h-index of 16 on Google Scholar and 548 citations with an h-index of 14 on ResearchGate.
            </p>

            <p>
              His active involvement in more than 70 national and international conferences, seminars, and workshops reflects his strong commitment to scientific advancement, societal development, and national sustainable growth.
            </p>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="space-y-6 text-center">

            <Image
              src="/og-image.png"
              alt="Dr. Sudhanshu Kumar Jha"
              width={450}
              height={720}
              className="rounded-xl shadow-lg mx-auto"
            />

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-4">

              <a
                href="https://www.linkedin.com/company/scientisticera/"
                target="_blank"
                className="bg-blue-600 p-3 rounded-full text-white hover:scale-110 transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="#"
                target="_blank"
                className="bg-green-600 p-3 rounded-full text-white hover:scale-110 transition"
              >
                <GraduationCap size={22} />
              </a>

              <a
                href="#"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full text-white hover:scale-110 transition"
              >
                <GraduationCap size={22} />
              </a>

            </div>
            <div className="bg-white shadow-xl rounded-xl p-6 mt-6 border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mt-10">

  <h3 className="text-xl font-semibold text-gray-900 mb-3">
    Founder Profile
  </h3>

  <ul className="space-y-2 text-gray-700 text-sm">

    <li>
      <span className="font-semibold">Name:</span> Dr. Sudhanshu Kumar Jha
    </li>

    <li>
      <span className="font-semibold">Specialization:</span> Medicinal Chemistry
    </li>

    <li>
      <span className="font-semibold">Publications:</span> 60+ Research Papers
    </li>

    <li>
      <span className="font-semibold">Patents:</span> 10 Published Patents
    </li>

    <li>
      <span className="font-semibold">Books:</span> 5 International Books
    </li>

    <li>
      <span className="font-semibold">Citations:</span> 539+ (Google Scholar)
    </li>

  </ul>

</div>

<div className="grid grid-cols-2 gap-4 mt-6">

  <div className="bg-blue-50 p-4 rounded-lg">
    <p className="text-2xl font-bold text-blue-600">60+</p>
    <p className="text-sm text-gray-600">Publications</p>
  </div>

  <div className="bg-purple-50 p-4 rounded-lg">
    <p className="text-2xl font-bold text-purple-600">10</p>
    <p className="text-sm text-gray-600">Patents</p>
  </div>

  <div className="bg-green-50 p-4 rounded-lg">
    <p className="text-2xl font-bold text-green-600">5</p>
    <p className="text-sm text-gray-600">Books</p>
  </div>

  <div className="bg-yellow-50 p-4 rounded-lg">
    <p className="text-2xl font-bold text-yellow-600">539+</p>
    <p className="text-sm text-gray-600">Citations</p>
  </div>

</div>
          </div>

          

        </div>
      </section>

      <Footer />
    </>
  );
}