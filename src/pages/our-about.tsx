import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
import { Linkedin, Mail, GraduationCap, Target, Eye, ChevronLeft, ChevronRight,Globe, Users, ShieldCheck,Star } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";



import{
Zap
} from "lucide-react";




export default function OurStory() {
  const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3
});
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#0b2a4a] text-white overflow-hidden">

        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: "url('/our_story_banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-28 mb-10">

          {/* <h1 className="text-3xl md:text-5xl font-extrabold leading-tight pt-10">
            Pioneering Research Excellence
            <span className="text-blue-400">
              <br /> Since Inception
            </span>
          </h1> */}

          {/* <p className="mt-6 text-lg text-gray-300 max-w-3xl">
           We are India’s premier research publication house, dedicated to empowering researchers worldwide with ethical publication practices, expert guidance, and comprehensive academic services.
          </p> */}

        </div>

      </section>

{/* Story Section - Keep Justified for readability */}
{/* <section className="py-16 max-w-4xl mx-auto px-6 text-center">
  <p className="text-gray-800 leading-relaxed text-xl text-justify">
    Scientistic Era Pvt. Ltd. is one of India’s leading research publication and academic consultancy organizations, committed to empowering researchers globally through ethical publication practices, expert mentorship, innovative research support, and comprehensive academic services.
  </p>
</section> */}

{/* Mission & Vision Section */}
<section className="py-10 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900">Our Mission & Vision</h2>
      <p className="text-gray-600 mt-3">Guiding principles that drive ScientisticEra forward.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Vision Card */}
      <Card className="border-2 border-purple-200 hover:shadow-xl transition-all bg-gradient-to-br from-purple-50 to-white flex flex-col h-full">
        <CardHeader className="items-center text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Eye className="w-10 h-10 text-purple-600" />
            <CardTitle className="text-3xl text-gray-900">Our Vision</CardTitle>
          </div>
          <CardDescription className="text-xl text-gray-900 leading-relaxed text-justify">
            To become a globally recognized platform for scientific innovation, research excellence, and intellectual property advancement.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Mission Card - List kept Left-Aligned for bullets */}
      <Card className="border-2 border-purple-200 hover:shadow-xl transition-all bg-gradient-to-br from-purple-50 to-white flex flex-col h-full">
        <CardHeader className="items-center text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Target className="w-10 h-10 text-blue-600" />
            <CardTitle className="text-3xl text-gray-900">Our Mission</CardTitle>
          </div>
          <CardDescription className="text-xl text-gray-900 leading-relaxed text-left">
            <ul className="list-disc pl-6 space-y-3">
              <li>To empower young researchers and innovators</li>
              <li>To promote ethical and quality research practices</li>
              <li>To support scientific publication and commercialization</li>
              <li>To strengthen industry–academia collaboration</li>
              <li>To encourage innovation through IPR awareness and protection</li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  </div>
</section>


<section className="py-20 px-4 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Why Choose Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  {/* <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-10 h-10 text-white" />
                  </div> */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Research Integrity</h3>
                  <p className="text-gray-700">
                    We uphold the highest standards of academic ethics, originality, and compliance. Every manuscript, patent draft, and submission is handled with precision and responsibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expert-Led Academic & IPR Consultancy</h3>
                  <p className="text-gray-700">
                    Our team of experienced researchers, editors, and intellectual property professionals provides domain-specific guidance aligned with current scholarly and regulatory standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Research & Patent Support</h3>
                  <p className="text-gray-700">
                    From idea refinement and manuscript development to patent drafting, filing assistance, and publication strategy — we offer complete lifecycle support under one roof.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">

                  <h3 className="text-xl font-bold text-gray-900 mb-3">Journal Targeting & Indexing Advisory</h3>
                  <p className="text-gray-700">
                    We assist in identifying suitable indexed journals and credible publication platforms to enhance research visibility and academic impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">

                  <h3 className="text-xl font-bold text-gray-900 mb-3">Structured & Transparent Workflow</h3>
                  <p className="text-gray-700">
                    Clear timelines, milestone-based execution, and consistent communication ensure accountability and clarity at every stage of engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">

                  <h3 className="text-xl font-bold text-gray-900 mb-3">Time-Bound Delivery with Expert Review</h3>
                  <p className="text-gray-700">
                    Efficient turnaround supported by professional review and expert feedback, enabling timely submissions without compromising quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      {/* Origin & Road Ahead */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Title Side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Our Origin <br /> & Road Ahead
            </h2>

            <div className="w-20 h-1 bg-blue-600 mt-4"></div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-6 text-gray-700 text-lg leading-relaxed">

            <p>
              ScientisticEra Private Limited was founded in 2023 with a bold vision to redefine how research is supported, protected, and positioned globally. Inaugurated by <span className="font-semibold">Shripad Yesso Naik</span>, Minister of State for New & Renewable Energy, Government of India, the organization emerged from a deep understanding of the challenges faced by researchers in publication compliance, intellectual property protection, and global visibility.
            </p>

            <p>
              Our origin lies in bridging these critical gaps and building a structured ecosystem where innovation meets integrity.
            </p>

            <p>
              Looking ahead, we envision becoming a globally trusted academic and innovation partner, enabling seamless research dissemination, strengthening intellectual property governance, and fostering international collaborations across disciplines.
            </p>

            <p>
              Our roadmap is centered on building scalable research infrastructure, advancing publication excellence, and creating a future where every idea is not only published, but protected and positioned for global impact.
            </p>

          </div>

        </div>

      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Our Founder & Chairperson
          </h2>
          <p className="text-gray-800 mt-8 text-xl">
            Leadership, Innovation and Vision behind ScientisticEra Pvt. Ltd.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-gray-800 leading-relaxed text-lg text-justify">

            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Dr. Sudhanshu Kumar Jha
            </h2>

            <p className="italic text-gray-600">
              (M.Pharm in Medicinal Chemistry; Ph.D. in Pharmaceutical Sciences)
            </p>

            <p>
              Dr. Sudhanshu Kumar Jha (M.Pharm in Medicinal Chemistry; Ph.D. in Pharmaceutical Sciences) is the Founder and Director of ScientisticEra Pvt. Ltd., a Research and Development firm officially inaugurated by Hon’ble Shri Shripad Yesso Naik, Minister of State for New and Renewable Energy, Government of India.
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
          </div>

            <div className="overflow-hidden rounded-xl">
  <Image
    src="/og-image.png"
    alt="Dr. Sudhanshu Kumar Jha"
    width={550}
    height={720}
    className="rounded-xl shadow-lg mx-auto transition-transform duration-500 hover:scale-105 mb-5"
  />

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-4">

              <a
                href="https://www.linkedin.com/in/sudhanshu-kumar-jha-ph-d-549472199/?originalSubdomain=in"
                target="_blank"
                className="bg-blue-600 p-3 rounded-full text-white hover:scale-110 transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://scholar.google.com/citations?user=T4dI270AAAAJ&hl=en"
                target="_blank"
                className="bg-green-600 p-3 rounded-full text-white hover:scale-110 transition"
              >
                <GraduationCap size={22} />
              </a>

              <a
                href="https://www.researchgate.net/profile/Sudhanshu-Kumar-Jha-2"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full text-white hover:scale-110 transition"
              >
                <GraduationCap size={22} />
              </a>

            </div>
            

          </div>
          
        </div>
             <div className="max-w-7xl mx-auto px-6 text-left mt-8 space-y-6 text-gray-800 leading-relaxed text-lg text-justify">
            <p>
              Dr. Jha was honored with the prestigious Young Researcher Award – 2024 (Volume 9, Issue 3) by the Institute of Scholars (INSC) (Membership ID: 20248YRA69). He also received the Nobel Scientist Award 2025 at the International Scientific Awards 2025 by Scientific Laurels and was conferred the Young Scientist Award 2025 by the KTK Outstanding Achievers and Education Foundation.
            </p>

            <p>
              He has served as the Organizing Secretary for 10 national and international webinars hosted by ScientisticEra Pvt. Ltd.
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

      </section>

{/* Achievements Section */}
<section className="py-10 bg-gray-50 overflow-hidden">

<div className="max-w-7xl mx-auto px-6 text-center">

     {/* <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center">
      His Achievements
    </h2> */}

    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-3xl md:text-5xl mb-6">
            His Achievements
            </Badge>

    <div className="overflow-hidden relative">

      <div className="flex w-max animate-marquee gap-8">

        {/* First Set */}
        <img src="/Gallery-1.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-2.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-3.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-1.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-2.jpg" className="h-full w-96 rounded-xl shadow-lg" />

        {/* Duplicate Set */}
        <img src="/Gallery-3.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-1.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-2.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-3.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-1.jpg" className="h-full w-96 rounded-xl shadow-lg" />

      </div>
    </div>
  </div>

</section>


<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading + Arrows */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-12">

      <div className="text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Leadership Team
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-3 max-w-xl text-base sm:text-lg md:text-xl">
          Meet the experts driving innovation in research and publication
        </p>
      </div>

      {/* Arrows */}
      <div className="flex gap-3 justify-center sm:justify-end shrink-0">
        <button className="team-prev w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400 transition">
          <ChevronLeft size={20} />
        </button>
        <button className="team-next w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#0f1f3d] text-white hover:bg-[#162a4d] transition">
          <ChevronRight size={20} />
        </button>
      </div>

    </div>

    {/* Slider */}
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation={{
        nextEl: ".team-next",
        prevEl: ".team-prev",
      }}
      onInit={(swiper) => {
        // @ts-expect-error: ignore type issue temporarily
        swiper.params.navigation.prevEl = ".team-prev";
        // @ts-expect-error: ignore type issue temporarily
        swiper.params.navigation.nextEl = ".team-next";
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      breakpoints={{
        480:  { slidesPerView: 1, spaceBetween: 16 },
        640:  { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
    >
      {[
        { src: "/Team_01.png", name: "Dr. Sudhanshu Kumar Jha", role: "Founder & Director", linkedin: "sudhanshu-kumar-jha-ph-d-549472199" },
        { src: "/Team_02.png", name: "Ms. Mansi Negi", role: "Co-Founder & Head BD", linkedin: "mansi-negi-a6143614a" },
        { src: "/Team_03.png", name: "Mr. Vishwajeet", role: "Chief Technology Officer", linkedin: "techyvishwajeet" },
        { src: "/Team_04.png", name: "Mr. Jaydeep S. Baghel", role: "Research Head Operations", linkedin: "jaydeep-baghel" },
        { src: "/Team_05.png", name: "Ms. Ishika Antil", role: "Research Specialist (Intern)", linkedin: "ishika-antil-486966285" },
        { src: "/Team_06.png", name: "Ms. Himani Raj", role: "Research (Intern)", linkedin: "himani-raj-034a27276" },
      ].map((member, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

            <Image
              src={member.src}
              alt={member.name}
              width={250}
              height={250}
              className="w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-[260px] object-contain"
            />

            <div className="p-4 sm:p-5 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-base sm:text-lg leading-snug">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                  {member.role}
                </p>
              </div>

              {/* Action Trigger Elements Box */}
              <div className="flex gap-2 shrink-0">
                {/* Cleaned Dynamic LinkedIn Anchoring */}
                <a
                  href={`https://www.linkedin.com/in/${member.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-white hover:bg-blue-600 p-2 rounded-full transition flex items-center justify-center border border-transparent hover:border-blue-100"
                  title={`View ${member.name}'s professional profile`}
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}

    </Swiper>
  </div>
</section>

{/* ============== */}


<section className="py-24 bg-white">
  <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center mb-5"> Partners</h2>
<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
Strategic Partnerships & Academic Collaborations
</h2>

<p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
Building a strong global research ecosystem through institutional, publishing, and industry alliances.
</p>
<Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
<button className="mt-8 bg-[#0f1f3d] text-white px-8 py-3 rounded-lg hover:bg-[#162a4d] transition">
Become a Partner
</button></Link>

</div>
</section>

{/* <section className="py-16 bg-gray-50">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

<div>
<h3 className="text-4xl font-bold text-blue-600">5+</h3>
<p className="text-gray-600 mt-2">MOU Partners</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">3+</h3>
<p className="text-gray-600 mt-2">Countries</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">15+</h3>
<p className="text-gray-600 mt-2">Joint Projects</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">2+</h3>
<p className="text-gray-600 mt-2">Years of Partnership</p>
</div>

</div>
</section> */}

<section ref={ref} className="py-20 bg-gray-50">
  

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

{/* Card 1 */}

<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition text-center">

<h3 className="text-4xl font-bold text-blue-600">

{inView && <CountUp end={5} duration={0} />}+

</h3>

<p className="text-gray-600 mt-2">MOU Partners</p>

</div>

{/* Card 2 */}

<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition text-center">

<h3 className="text-4xl font-bold text-blue-600">

{inView && <CountUp end={3} duration={0} />}+

</h3>

<p className="text-gray-600 mt-2">Countries</p>

</div>

{/* Card 3 */}

<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition text-center">

<h3 className="text-4xl font-bold text-blue-600">

{inView && <CountUp end={15} duration={2} />}+

</h3>

<p className="text-gray-600 mt-2">Joint Projects</p>

</div>

{/* Card 4 */}

<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition text-center">

<h3 className="text-4xl font-bold text-blue-600">

{inView && <CountUp end={2} duration={0} />}+

</h3>

<p className="text-gray-600 mt-2">Years of Partnership</p>

</div>

</div>

</section>


<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">Academic & Institutional Partners
</h2>

<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
Collaborations with academic institutions and research bodies allow us to support scholars, faculty members, and students with structured guidance.
</p>

<div className="mt-12 flex justify-center items-center gap-10 flex-wrap">

<img src="/MOU_College.jpg" className="h-full w-96 object-contain transition duration-300 hover:scale-105 hover:shadow-xl"/>

</div>

</div>
</section>


<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">Publishing & Journal Platforms
</h2>

<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
These platforms facilitate peer-reviewed publication, ISBN allocation and academic dissemination across interdisciplinary domains.
</p>

<div className="mt-12 grid md:grid-cols-3 gap-10 items-center">

<img src="/synapse.png" className="h-44 mx-auto object-contain grayscale hover:grayscale-0 transition"/>

<img src="/IJRD.png" className="h-44 mx-auto object-contain grayscale hover:grayscale-0 transition"/>

<img src="/scriptoria.png" className="h-44 mx-auto object-contain grayscale hover:grayscale-0 transition"/>

</div>
</div>
</section>


<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">

<h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
Industry & Innovation Partners
</h3>

<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
Our industry partnerships support innovation translation, patent filing assistance, and commercialization strategy.
</p>

<div className="mt-12 grid md:grid-cols-4 gap-10 items-center">

<img src="/MOU_01.png" className="h-44 mx-auto object-contain "/>

<img src="/MOU_saraswati.jpg" className="h-44 mx-auto object-contain "/>

<img src="/MOU_HAryuveda.jpg" className="h-44 mx-auto object-contain "/>

<img src="/MOU_HHDaiwik.jpg" className="h-44 mx-auto object-contain"/>

</div>

</div>
</section>

<section className="py-24 bg-gray-50 px-4">

<div className="max-w-6xl mx-auto">

<div className="text-center mb-16">

<h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
Impact Enabled Through Strategic Collaborations
</h3>

<p className="text-gray-700 max-w-4xl mx-auto">
At ScientisticEra Private Limited, collaboration is architected as a performance-driven ecosystem designed to advance research excellence, intellectual property governance, and global academic visibility.
</p>

<p className="text-gray-700 mt-4 max-w-4xl mx-auto">
We operate at the intersection of academia, innovation, and regulatory frameworks integrating institutional partnerships, peer-review publishing networks, and industry stakeholders to deliver measurable scholarly and IP outcomes aligned with international standards.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all">
<CardHeader>
<Zap className="w-12 h-12 text-blue-600 mb-4" />
<CardTitle>200+ Research Publications</CardTitle>
<CardDescription className="text-gray-700">
Indexed research and review publications across SCI, Scopus, and UGC-accredited journals.
</CardDescription>
</CardHeader>
</Card>

<Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all">
<CardHeader>
<Zap className="w-12 h-12 text-purple-600 mb-4" />
<CardTitle>100+ Patent Filings</CardTitle>
<CardDescription className="text-gray-700">
Patent filings and grants across domestic and international jurisdictions including utility and design protections.
</CardDescription>
</CardHeader>
</Card>

<Card className="border-2 hover:border-pink-500 hover:shadow-xl transition-all">
<CardHeader>
<Zap className="w-12 h-12 text-pink-600 mb-4" />
<CardTitle>70+ Scholarly Books</CardTitle>
<CardDescription className="text-gray-700">
Peer-reviewed scholarly books published with global ISBN accreditation.
</CardDescription>
</CardHeader>
</Card>

<Card className="border-2 hover:border-green-500 hover:shadow-xl transition-all">
<CardHeader>
<Zap className="w-12 h-12 text-green-600 mb-4" />
<CardTitle>50+ Copyright Registrations</CardTitle>
<CardDescription className="text-gray-700">
Safeguarding original intellectual assets through registered copyright protections.
</CardDescription>
</CardHeader>
</Card>

<Card className="border-2 hover:border-orange-500 hover:shadow-xl transition-all">
<CardHeader>
<Zap className="w-12 h-12 text-orange-600 mb-4" />
<CardTitle>25+ Trademark Filings</CardTitle>
<CardDescription className="text-gray-700">
Strengthening brand identity protection and innovation ownership.
</CardDescription>
</CardHeader>
</Card>

</div>

</div>

</section>

<section className="py-24 bg-white px-6">

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div className="text-center mb-16">

<h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
Partnership Benefits
</h2>

<p className="text-gray-800 max-w-2xl mx-auto text-xl">
Key advantages institutions and organizations gain through collaboration with ScientisticEra.
</p>

</div>


{/* Cards */}

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


{/* Card 1 */}

<div className="group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-blue-400 transition-all duration-300">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-5 group-hover:scale-110 transition">
<Globe size={22}/>
</div>

<h4 className="font-semibold text-lg mb-2">
Research Visibility
</h4>

<p className="text-gray-600 text-sm leading-relaxed">
Showcase institutional research through journals, digital platforms and academic initiatives.
</p>

</div>


{/* Card 2 */}

<div className="group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-purple-400 transition-all duration-300">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-5 group-hover:scale-110 transition">
<Users size={22}/>
</div>

<h4 className="font-semibold text-lg mb-2">
Expert Academic Network
</h4>

<p className="text-gray-600 text-sm leading-relaxed">
Access experienced researchers, editors and IPR professionals for collaborative growth.
</p>

</div>


{/* Card 3 */}

<div className="group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-green-400 transition-all duration-300">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-5 group-hover:scale-110 transition">
<ShieldCheck size={22}/>
</div>

<h4 className="font-semibold text-lg mb-2">
Publication & IPR Support
</h4>

<p className="text-gray-600 text-sm leading-relaxed">
Structured assistance for research publication and intellectual property facilitation.
</p>

</div>


{/* Card 4 */}

<div className="group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-pink-400 transition-all duration-300">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-pink-100 text-pink-600 mb-5 group-hover:scale-110 transition">
<GraduationCap size={22}/>
</div>

<h4 className="font-semibold text-lg mb-2">
Co-Branded Academic Programs
</h4>

<p className="text-gray-600 text-sm leading-relaxed">
Joint webinars, workshops and scholarly initiatives to enhance institutional credibility.
</p>

</div>


</div>

</div>

</section>

{/* <section className="py-24 bg-[#0f1f3d] text-white text-center">

<div className="max-w-4xl mx-auto px-6">

<h3 className="text-4xl font-bold">
Partner With Us
</h3>

<p className="mt-6 text-gray-300">
We invite academic institutions, journals, research bodies, startups, and industry professionals to collaborate in advancing research excellence and innovation-driven impact.
</p>

<button className="mt-8 bg-white text-[#0f1f3d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
Start Partnership
</button>

</div>

</section> */}


<section className="relative py-28 bg-gradient-to-r from-[#0f1f3d] via-blue-700 to-purple-700 overflow-hidden">

{/* Background Image */}

<div className="absolute inset-0 opacity-20">
<img
src="/partners-bg.png"   // same image use kar sakte ho
className="w-full h-full object-cover"
/>
</div>

{/* Content */}

<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

<h2 className="text-4xl md:text-5xl font-bold text-white">
Partner With Us
</h2>

<p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
We invite academic institutions, journals, research bodies, startups, and industry professionals to collaborate in advancing research excellence and innovation-driven impact.
</p>

<p className="mt-4 text-blue-200 max-w-3xl mx-auto">
Together we can strengthen global research visibility, protect intellectual property, and create meaningful academic collaborations worldwide.
</p>

{/* Glass Card */}

{/* <div className="mt-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl"> */}
<div className="mt-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">

<p className="text-white text-lg mb-6">
Join our growing network of academic institutions, journals, and innovation partners shaping the future of global research.
</p>

<Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services.">
<button className="bg-white text-[#0f1f3d] font-semibold px-10 py-4 rounded-xl shadow-xl hover:scale-110 hover:bg-gray-100 transition duration-300 flex items-center gap-2 mx-auto">

Start Partnership →

</button>
</Link>


</div>

</div>

</section>
<div className="w-32 h-[2px] bg-white/30 mx-auto mt-12"></div>

 {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 ml-5 mr-5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">What Researchers Say</h2>
              <p className="text-xl text-gray-600">
                Trusted by researchers worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white border-2 border-gray-200 hover:border-blue-400 transition-all">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4">
                  "ScientisticEra helped me publish my research in a reputed journal. Their guidance throughout the process was invaluable."
                </p>
                <div className="font-bold text-gray-900">Dr. Priya Sharma</div>
                <div className="text-sm text-gray-600">Assistant Professor, IIT Delhi</div>
              </Card>

              <Card className="p-8 bg-white border-2 border-gray-200 hover:border-blue-400 transition-all">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4">
                  "The webinars conducted by ScientisticEra are highly informative and practical. They've enhanced my research skills significantly."
                </p>
                <div className="font-bold text-gray-900">Rahul Verma</div>
                <div className="text-sm text-gray-600">PhD Scholar, JNU</div>
              </Card>

              <Card className="p-8 bg-white border-2 border-gray-200 hover:border-blue-400 transition-all">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4">
                  "Professional, efficient, and supportive. ScientisticEra made my conference participation seamless and productive."
                </p>
                <div className="font-bold text-gray-900">Dr. Anil Kumar</div>
                <div className="text-sm text-gray-600">Senior Researcher, CSIR</div>
              </Card>
            </div>
          </div>
        </section>

      <Footer />
    </>
  );
}