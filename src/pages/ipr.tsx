import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Shield, 
  Award, 
  FileText, 
  Target, 
  ArrowRight,
  Users,
  Search, 
  Palette, 
  TrendingUp, 
  CheckCircle 
} from "lucide-react";

export default function Partners() {

  const partners = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
  ];

  const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3,
});

const iprServices = [
  {
    icon: Shield,
    title: "Patent Drafting & Filing",
    description:
      "Comprehensive support for protecting innovative ideas through structured patent drafting and filing.",
    features: [
      "Patentability & Prior Art Search",
      "Provisional & Complete Specification Drafting",
      "National & International Filing (PCT)",
      "Office Action & Examination Response",
      "Grant & Post-Grant Support",
    ],
  },
  {
    icon: FileText,
    title: "Copyright Registration",
    description:
      "Legal protection for original academic, creative, and digital works.",
    features: [
      "Research Thesis & Publications",
      "Software & Digital Content",
      "Literary & Artistic Works",
      "Application Filing & Certification",
    ],
  },
  {
    icon: Award,
    title: "Trademark Registration",
    description:
      "Protect your brand identity and commercial presence.",
    features: [
      "Trademark Search & Class Identification",
      "Application Filing",
      "Objection & Opposition Handling",
      "Renewal & Portfolio Monitoring",
    ],
  },
  {
    icon: Search,
    title: "IP Search & Strategic Analysis",
    description:
      "Ensure novelty and reduce infringement risks through structured IP intelligence.",
    features: [
      "Prior Art Search",
      "Freedom to Operate (FTO)",
      "Patent Landscape Analysis",
      "Competitor IP Monitoring",
    ],
  },
  {
    icon: Palette,
    title: "Design Registration",
    description:
      "Protect the aesthetic and visual uniqueness of your product innovations.",
    features: [
      "Design Search",
      "Application Drafting & Filing",
      "Registration & Certification",
      "Renewal Management",
    ],
  },
  {
    icon: TrendingUp,
    title: "IP Commercialization & Technology Transfer",
    description:
      "Transform intellectual property into business value.",
    features: [
      "IP Valuation",
      "Licensing Agreements",
      "Technology Transfer Support",
      "Commercial Strategy Advisory",
    ],
  },
];


  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
                <div className="max-w-7xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                     Intellectual Property Protection & Commercialization Services
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">  
                  Intellectual Property Protection & Commercialization Services                   </p>
                  <p className="text-m mb-5">Securing innovation for researchers, startups and institutions.</p>
                  <Link href="https://wa.me/917068507857"target="_blank">
                    <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8">
                      Get IPR Consultation
                    </Button>
                  </Link>
                </div>
              </section>

          <section ref={ref} className="py-20 px-4 bg-white dark:bg-slate-900">

  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
      Our Impact in Numbers
    </h2>

    <p className="text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
      Delivering measurable results through innovation, research excellence, and intellectual property protection.
    </p>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        { icon: Shield, value: 100, label: "Patents Filed" },
        { icon: Award, value: 50, label: "Trademarks Registered" },
        { icon: FileText, value: 25, label: "Copyrights Secured" },
        { icon: Users, value: 350, label: "Satisfied Clients" }
      ].map((item, i) => (

        <div 
          key={i}
          className="group border border-slate-200 dark:border-slate-700 rounded-2xl p-8 bg-white dark:bg-slate-800 
          hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-teal-50 dark:bg-slate-700 group-hover:scale-110 transition">
              <item.icon className="h-7 w-7 text-teal-600 dark:text-teal-400" />
            </div>
          </div>

          {/* Number */}
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {inView && <CountUp end={item.value} duration={2} />}+
          </h3>

          {/* Label */}
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {item.label}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
<section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
      Our IPR Services
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Comprehensive intellectual property protection services tailored for researchers, innovators, and businesses
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {iprServices.map((service, idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >

        
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
            <service.icon className="w-8 h-8 text-white" />
          </div>

       
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {service.title}
          </h3>

     
          <p className="text-gray-600 mb-6">
            {service.description}
          </p>

         
          <div className="space-y-2">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 mr-2 text-teal-600 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

        </div>
      ))}

    </div>

  </div>
</section>
      <section className="py-12 bg-gray-50 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
      Our Publication And IPR Services
    </h2>

    {/* Slider */}
    <div className="overflow-hidden relative group">

      <div className="flex w-max gap-8 animate-marquee group-hover:[animation-play-state:paused]">

        {/* Images */}
        {[
          "Ipr_service_01.png",
          "Ipr_service_02.png",
          "Ipr_service_03.png",
          "Ipr_service_04.png",
          "Ipr_service_05.png",
          // "Ipr_service_06.png",
          "Ipr_service_07.png",
          // "Ipr_service_08.png"
        ].map((img, i) => (

          <div 
            key={i}
            className="w-95 h-80 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
          >
            <img 
              src={`/${img}`} 
              className="w-full h-full object-cover"
              alt={`IPR Service ${i + 1}`}
            />
          </div>

        ))}

        {/* Duplicate for smooth infinite scroll */}
        {[
          "Ipr_service_01.png",
          "Ipr_service_02.png",
          "Ipr_service_03.png",
          "Ipr_service_04.png",
          "Ipr_service_05.png",
          "Ipr_service_06.png",
          "Ipr_service_07.png",
          "Ipr_service_08.png"
        ].map((img, i) => (

          <div 
            key={`dup-${i}`}
            className="w-95 h-80 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
          >
            <img 
              src={`/${img}`} 
              className="w-full h-full object-cover"
              alt={`IPR Service ${i + 1}`}
            />
          </div>

        ))}

      </div>

    </div>

  </div>

</section>



{/* <section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Why Choose Our 
        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          {" "}IPR Services
        </span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        We combine research expertise with strategic intellectual property solutions to deliver reliable and high-quality outcomes.
      </p>
    </div>

   
    <div className="grid md:grid-cols-2 gap-6">

      {[
        "Research-Driven IP Approach",
        "Structured Drafting & Compliance Framework",
        "Integrated Research & IP Ecosystem",
        "Interdisciplinary Expertise",
        "Confidential & Ethical Handling",
        "Post-Filing Strategic Support"
      ].map((item, i) => (

        <div 
          key={i}
          className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:shadow-md transition bg-gray-50"
        >

         
          <div className="min-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold">
            ✓
          </div>

         
          <p className="text-gray-800 font-medium">
            {item}
          </p>

        </div>

      ))}

    </div>

  </div>
</section> */}

{/* <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Our IPR 
        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          {" "}Process
        </span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        A structured and strategic approach to protect and maximize the value of your intellectual property.
      </p>
    </div>

  
    <div className="grid md:grid-cols-5 gap-6">

      {[
        {
          title: "Innovation Assessment",
          desc: "Evaluating novelty and commercial potential."
        },
        {
          title: "Search & Feasibility Analysis",
          desc: "Assessing uniqueness and infringement risks."
        },
        {
          title: "Drafting & Documentation",
          desc: "Preparing legally sound documentation."
        },
        {
          title: "Filing & Examination Support",
          desc: "Managing filing and objection responses."
        },
        {
          title: "Grant & Post-Registration Advisory",
          desc: "Supporting renewals and commercialization strategy."
        }
      ].map((step, i) => (

        <div key={i} className="text-center relative">

       
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold text-lg shadow-lg hover:scale-110 transition">
            {i + 1}
          </div>

          {i !== 4 && (
            <div className="hidden md:block absolute top-7 left-full w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
          )}

     
          <h4 className="mt-4 font-semibold text-slate-900 text-sm md:text-base">
            {step.title}
          </h4>

          <p className="text-sm text-gray-600 mt-2">
            {step.desc}
          </p>

        </div>

      ))}

    </div>

  </div>
</section> */}

<section className="py-20 px-4 bg-gray-50 text-center">
  <div className="max-w-4xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
      Ready to Protect Your Innovation?
    </h2>

    {/* Subtext */}
    <p className="text-gray-600 mb-8">
      Get expert IPR consultation and start securing your intellectual property today
    </p>

    {/* Button */}
    <div className="flex justify-center">
      <Link href="https://wa.me/917068507857" target="_blank">
      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg rounded-lg shadow-md">
        Schedule a Free Consultation
      </Button>
      </Link>
    </div>
      
  </div>
</section>


</main>
      <Footer />
    </>
  );
}