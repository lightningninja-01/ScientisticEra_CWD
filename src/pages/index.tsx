import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React, { useState, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react"; // Make sure to import or use your own custom arrow svg icons
import {
  BookOpen,
  Users,
  Award,
  CheckCircle2,
  Star,
  Globe,
  Microscope,
  GraduationCap,
  FileText,
  Lightbulb,
  Video,
  Sparkles,
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Target,
  BookMarked,
  Calendar,
  User
} from "lucide-react";

function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  const logos = [
    "/MOU_saraswati.jpg",
    "/MOU_College.jpg",
    "/MOU_HAryuveda.jpg",
    "/MOU_HHDaiwik.jpg",
    "/gogo logo.png",
  ];

  const tripledLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    let position = 0;
    const speed = 0.8;

    const animate = () => {
      position -= speed;
      const singleSetWidth = slider.scrollWidth / 3;

      if (Math.abs(position) >= singleSetWidth) {
        position = 0;
      }

      slider.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      setIsReady(true);
      animationFrame = requestAnimationFrame(animate);
    }, 50);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden max-w-full py-2 bg-transparent">
      <div
        ref={sliderRef}
        className="flex gap-6 sm:gap-12 items-center"
        style={{
          width: "max-content",
          display: "flex",
          flexWrap: "nowrap",
          visibility: isReady ? "visible" : "hidden",
          willChange: "transform",
        }}
      >
        {tripledLogos.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-24 sm:w-56 sm:h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Partner Logo ${index}`}
              className="w-full h-full object-contain max-w-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [galleryIndex, setGalleryIndex] = useState(0);

  const gallerySlides = [
    { src: "/Gallery-1.jpg", alt: "Gallery Exhibition 1" },
    { src: "/about1.png", alt: "founder with Naik ji" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % gallerySlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [gallerySlides.length]);

  const nextSlide = () => setGalleryIndex((prev) => (prev + 1) % gallerySlides.length);
  const prevSlide = () => setGalleryIndex((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Assistant Professor, IIT Delhi",
      rating: 5,
      text: "ScientisticEra helped me publish 3 papers in Scopus-indexed journals within 6 months. Their guidance throughout the process was invaluable. Highly recommended for research scholars!"
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "PhD Guide, Anna University",
      rating: 5,
      text: "The PhD guidance program is exceptional. My students received mentorship from industry experts, and their thesis quality improved significantly. Thank you, ScientisticEra!"
    },
    {
      name: "Ms. Anita Desai",
      role: "Research Scholar, NIT Trichy",
      rating: 5,
      text: "I attended their webinar on research methodology and it completely transformed my approach. The practical tips and personalized feedback were game-changers for my work."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);



  return (
    <>
      <SEO
        title="ScientisticEra - Premier Research Publication & Academic Services"
        description="Inaugurated by Hon. Shripad Yesso Naik Ji. Leading research publication house with 100+ papers published, 10+ webinars hosted, serving 500+ researchers globally."
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
        
{/* Hero Section */}
<section className="w-full pt-28 bg-[#020b14]">
  {/* Banner Image: 'block' removes the bottom white-space gap inherent to images */}
  <img
    src="/new_hero_img.png"
    alt="Scientistic Era Banner"
    className="w-full h-full max-h-[calc(100vh-7rem)] object-contain object-top block mx-auto"
  />

  {/* Welcome Content: Immediately follows the image */}
  {/* <div className="w-full bg-white px-6 pt-12 pb-12">
    <div className="max-w-7xl mx-auto">
      
      <p className="text-lg md:text-3xl font-bold text-blue-500 uppercase tracking-wide pb-1">
   
      </p>

      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#072F4A] leading-normal mt-1 pb-2">
        
      </h1>
      
     
      <h2 className="mt-2 text-xl md:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-relaxed pb-2">
       
      </h2>
    </div>
  </div> */}
</section>

{/* Introduction line Section */}
{/* Changed py-10 to pt-12 pb-20 to maintain the large gap after the text */}
<section className="w-full pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 via-[#B0D9E7]/20 to-purple-50/50 border-y border-blue-50">
  <div className="max-w-7xl mx-auto">
    <p
      className="text-gray-800 text-lg md:text-2xl font-medium leading-relaxed text-center"
      style={{ textAlign: "justify" }}
    >
      <strong className="text-[#072F4A]">
        ScientisticEra Pvt. Ltd.
      </strong>{" "}
      is dedicated to promoting scientific excellence by supporting
      researchers, academicians, startups, healthcare professionals,
      and innovators through quality-driven consultancy services,
      training programs, publication assistance, and IPR facilitation.
    </p>
  </div>
</section>
        {/* Inauguration Highlight Section */}
        {/* <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-2 border-cyan-300 shadow-2xl bg-white/95 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 text-base">
                    <Award className="w-5 h-5 mr-2 inline" />
                    OFFICIALLY INAUGURATED
                  </Badge>
                  
                  <div className="space-y-2">
                    <p className="text-lg md:text-xl text-gray-600 font-medium">
                      Inaugurated by
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                      Honourable Shripad Yesso Naik Ji
                    </h2>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
                    <Sparkles className="w-6 h-6 text-cyan-500" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400"></div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg md:text-xl font-semibold text-gray-800">
                      Minister of State for New & Renewable Energy
                    </p>
                    <p className="text-base md:text-lg text-gray-600">
                      Government of India
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                      A proud moment for ScientisticEra, recognized and inaugurated by the Government of India, 
                      marking our commitment to advancing research and innovation in alignment with national objectives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Long Rectangle Slider Section */}
        <section className="py-16 px-4 bg-[#B0D9E7] overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
            
            {/* Slider Column */}
            <div className="md:w-1/2 w-full flex justify-center">
              {/* THE FIX: max-w-[380px] keeps it narrow, creating a vertical rectangle */}
              <div className="relative w-full max-w-[380px] group bg-white p-3 rounded-2xl shadow-xl flex flex-col">
                
                {/* h-[550px] makes it tall */}
                <div className="overflow-hidden relative rounded-xl h-[550px] w-full flex-grow">
                  {gallerySlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        galleryIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover rounded-xl object-top" 
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition shadow-md backdrop-blur-sm"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition shadow-md backdrop-blur-sm"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {gallerySlides.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setGalleryIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all shadow shadow-black/40 ${
                        galleryIndex === index ? "bg-white scale-110" : "bg-white/50"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Typography Column */}
            <div 
              className="md:w-1/2 w-full text-center md:text-left flex flex-col justify-center" 
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-[#072F4A] mb-4 leading-tight">
                Who We Are:
              </h2>

              <p className="font-semibold text-lg mb-6 text-gray-800">
                Inaugurated by “Honourable Shripad Yesso Naik Ji” Minister of State for New & Renewable Energy, Government of India
              </p>

              <p 
                className="text-gray-700 text-lg mb-4" 
                style={{ textAlign: 'justify', textJustify: 'inter-word' }}
              >
                <strong>ScientisticEra Pvt. Ltd.</strong> is a multidisciplinary research and innovation organization committed to advancing scientific knowledge, healthcare innovation, and intellectual development through collaborative research, consultancy, and educational initiatives.
              </p>

              <p 
                className="text-gray-700 text-lg mb-4"
                style={{ textAlign: 'justify', textJustify: 'inter-word' }}
              >
                We work closely with researchers, universities, healthcare institutions, startups, and industries to provide professional guidance in:
              </p>

              <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6 md:text-left inline-block text-left pl-2">
                <li>Research & Development</li>
                <li>Scientific Writing & Publication</li>
                <li>Intellectual Property Rights (IPR)</li>
                <li>Clinical & Preclinical Research Support</li>
                <li>Academic Training & Workshops</li>
                <li>Research Consultancy Services</li>
                <li>Innovation & Startup Support</li>
              </ul>

              <p 
                className="text-gray-700 text-lg"
                style={{ textAlign: 'justify', textJustify: 'inter-word' }}
              >
                Our mission is to create a strong ecosystem where science and innovation contribute meaningfully to society and global development.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="py-20 px-4">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

   
    <div className="space-y-6 text-center md:text-left">
      <div className="flex justify-center md:justify-start">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/about1.png"
            alt="Scientistic Era"
            className="w-full max-w-md h-[450px] object-cover"
          />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
        Webinar, Journal, Academician & Researcher Awards and E-Magazine
      </h1>

      <p className="font-semibold text-lg text-gray-800">
        Inaugurated by “Honourable Shripad Yesso Naik Ji” Minister of State for New & Renewable Energy, Government of India
      </p>
    </div>

   
    <div>
      <Card className="border-2 border-cyan-300 shadow-2xl bg-white/95 backdrop-blur">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-6">
            <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 text-base">
              <Award className="w-5 h-5 mr-2 inline" />
              OFFICIALLY INAUGURATED
            </Badge>

            <div className="space-y-2">
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                Inaugurated by
              </p>
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Honourable Shripad Yesso Naik Ji
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <Sparkles className="w-6 h-6 text-cyan-500" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>

            <div className="space-y-2">
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                Minister of State for New & Renewable Energy
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Government of India
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              A proud moment for ScientisticEra, recognized and inaugurated by the Government of India,
              marking our commitment to advancing research and innovation in alignment with national objectives.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>

  </div>
</section> */}


        {/* Stats Section */}
        {/* <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white"> */}
        {/* <div className="container mx-auto max-w-6xl px-4"> */}
        {/* <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-blue-100">Driving research excellence across the globe</p>
            </div> */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8"> */}
        {/* <div className="flex justify-center"> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"> */}

        {/* <div className="w-[260px] h-[260px] flex flex-col justify-center items-center text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <div className="text-5xl font-bold">100+</div>
                  <div className="text-lg text-blue-100">Research Papers Published</div>
                </div> */}
        {/* <div className="w-[260px] h-[260px] flex flex-col justify-center items-center text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <Video className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                  <div className="text-5xl font-bold">10+</div>
                  <div className="text-lg text-purple-100">Webinars Hosted</div>
                </div> */}
        {/* <div className="text-center space-y-2 bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-pink-200" />
                <div className="text-5xl font-bold">6+</div>
                <div className="text-lg text-pink-100">Premium Services</div>
              </div> */}
        {/* <div className="w-[260px] h-[260px] flex flex-col justify-center items-center text-center bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <Users className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
                  <div className="text-5xl font-bold">500+</div>
                  <div className="text-lg text-yellow-100">Researchers Served</div>
                </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* // </div> */}
        {/* // </section> */}

        {/* Why Choose Us Section */}
        {/* <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-4xl mb-4">
                Why us will come
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                We don’t just assist
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                We combine government recognition, ethical practices, and expert guidance to accelerate your research journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-gray-900">Government Recognized</CardTitle>
                  <CardDescription className="text-gray-700">
                    Inaugurated by Hon. Minister Shripad Yesso Naik Ji, ensuring credibility and trust in every publication
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <Target className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle className="text-gray-900">100% Ethical Publishing</CardTitle>
                  <CardDescription className="text-gray-700">
                    Strict adherence to international publishing standards, zero tolerance for plagiarism or unethical practices
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-pink-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <Zap className="w-12 h-12 text-pink-600 mb-4" />
                  <CardTitle className="text-gray-900">Fast Turnaround</CardTitle>
                  <CardDescription className="text-gray-700">
                    Quick peer review process with expert feedback, helping you publish faster without compromising quality
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-green-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <Globe className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle className="text-gray-900">Global Indexing</CardTitle>
                  <CardDescription className="text-gray-700">
                    Publications indexed in prestigious databases including Google Scholar, ResearchGate, and international journals
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-indigo-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <GraduationCap className="w-12 h-12 text-indigo-600 mb-4" />
                  <CardTitle className="text-gray-900">Expert Guidance</CardTitle>
                  <CardDescription className="text-gray-700">
                    PhD-qualified mentors and subject experts to guide you through research methodology, writing, and publication
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-gray-900">Comprehensive Support</CardTitle>
                  <CardDescription className="text-gray-700">
                    End-to-end research services from topic selection to final publication, with ongoing support at every stage
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Awards & Recognition Section */}
        {/* <section className="py-20 px-4 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 relative overflow-hidden"> */}
        {/* Decorative background elements */}
        {/* <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
          </div> */}

        {/* <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-white/20 backdrop-blur text-white border-white/30 px-4 py-2 text-sm mb-4">
                <Award className="w-4 h-4 mr-2 inline" />
                Achievements & Accolades
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Awards & Recognition
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
                Celebrating excellence in research publication and academic innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Government Inaugurated</h3>
                  <p className="text-gray-700">
                    Officially inaugurated by Hon. Shripad Yesso Naik Ji, Minister of State, Government of India
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ISO Certified</h3>
                  <p className="text-gray-700">
                    ISO certification ensuring highest quality standards in research publication services
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Global Recognition</h3>
                  <p className="text-gray-700">
                    Recognized by international research bodies and indexed in prestigious global databases
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence in Publishing</h3>
                  <p className="text-gray-700">
                    100+ successful publications in high-impact journals with rigorous peer review
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-fuchsia-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted by 500+</h3>
                  <p className="text-gray-700">
                    Over 500 researchers and scholars trust us for their publication needs
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Leader</h3>
                  <p className="text-gray-700">
                    Leading the way in digital transformation of research publication processes
                  </p>
                </CardContent>
              </Card>
            </div>
          </div> */}
        {/* </section> */}

        {/* Services Overview Section */}
<section className="pt-16 pb-8 px-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
  <div className="max-w-6xl mx-auto">
    
    {/* Section Heading Badge */}
    <div className="text-center mb-12">
      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-6 py-2.5 text-lg font-bold uppercase tracking-wide rounded-full shadow-sm">
        Our Services
      </Badge>
    </div>

    {/* Responsive Services Box Layout Grid (2x2 layout for 4 items) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
      
      {/* Service Box 1 */}
      <Card className="flex flex-col justify-center h-full group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500 bg-white overflow-hidden p-6 rounded-2xl">
        <CardHeader className="p-0 flex flex-row items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <CardTitle className="text-lg md:text-xl font-semibold text-gray-900 m-0 leading-snug transition-colors duration-200 group-hover:text-blue-600">
            Research Development, Methodology Guidance & Publication Support.
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Service Box 2 */}
      <Card className="flex flex-col justify-center h-full group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500 bg-white overflow-hidden p-6 rounded-2xl">
        <CardHeader className="p-0 flex flex-row items-center gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <CardTitle className="text-lg md:text-xl font-semibold text-gray-900 m-0 leading-snug transition-colors duration-200 group-hover:text-purple-600">
            Research Mentorship, Thesis & Dissertation Consultancy.
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Service Box 3 */}
      <Card className="flex flex-col justify-center h-full group hover:shadow-2xl transition-all duration-300 border-2 hover:border-green-500 bg-white overflow-hidden p-6 rounded-2xl">
        <CardHeader className="p-0 flex flex-row items-center gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <CardTitle className="text-lg md:text-xl font-semibold text-gray-900 m-0 leading-snug transition-colors duration-200 group-hover:text-green-600">
            IPR Support (National & International).
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Service Box 4 */}
      <Card className="flex flex-col justify-center h-full group hover:shadow-2xl transition-all duration-300 border-2 hover:border-indigo-500 bg-white overflow-hidden p-6 rounded-2xl">
        <CardHeader className="p-0 flex flex-row items-center gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <CardTitle className="text-lg md:text-xl font-semibold text-gray-900 m-0 leading-snug transition-colors duration-200 group-hover:text-indigo-600">
            Research Training & Scholarly Programs.
          </CardTitle>
        </CardHeader>
      </Card>

    </div>
  </div>
</section>

<section className="pt-8 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-6xl test-bold font-semibold text-gray-900">
        Our Process
      </h2>
      <p className="mt-4 text-lg text-black-600 italic">
        A Structured Pathway from Concept to Credibility
      </p>
    </div>

    {/* Timeline */}
    <div className="relative">

      {/* Horizontal Line (Desktop Only) */}
      <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

        {/* Step 1 */}
        <div className="text-center relative">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold relative z-10">
            01
          </div>
          <h3 className="mt-6 font-bold text-black-900 text-xl">
            Discovery & Consultation
          </h3>
          <p className="mt-3 text-black-600 text-m leading-relaxed">
            {/* Initial assessment of research goals, innovation stage, and publication needs. */}
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center relative">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold relative z-10">
            02
          </div>
          <h3 className="mt-6 font-bold text-black-900 text-xl">
            Strategic Planning & Structuring
          </h3>
          <p className="mt-3 text-black-600 text-m leading-relaxed">
            {/* Tailored strategy for drafting, patent planning, or journal targeting. */}
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center relative">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold relative z-10">
            03
          </div>
          <h3 className="mt-6 font-bold text-black-900 text-xl">
            Expert Execution & Quality Review
          </h3>
          <p className="mt-3 text-black-600 text-m leading-relaxed">
            {/* Drafting, editing, and rigorous review by our subject experts. */}
          </p>
        </div>

        {/* Step 4 */}
        <div className="text-center relative">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold relative z-10">
            04
          </div>
          <h3 className="mt-6 font-bold text-black-900 text-xl">
            Submission & Dissemination
          </h3>
          <p className="mt-3 text-black-600 text-m leading-relaxed">
            {/* Journal submission, patent filing, and knowledge sharing. */}
          </p>
        </div>

      </div>
    </div>

    {/* Bottom Statement */}
    <div className="mt-20 border-t pt-8 text-center">
      <p className="text-black-700">
        Every project is handled with strict <span className="font-semibold">confidentiality</span>,
        <span className="font-semibold"> ethical transparency</span>, and
        <span className="font-semibold"> academic compliance</span>.
      </p>
    </div>

  </div>
</section>

        {/* Testimonials Section */}
        {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
        </section> */}

        {/* Team Preview Section */}
        {/* <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Dedicated professionals committed to your research success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12 justify-items-center">
              <Card className="overflow-hidden border-2 border-white/20 hover:border-blue-400 transition-all w-[320px]">
                <div className="relative">
                  <img
                    src="/Team_01.png"
                    alt="Dr. Sudhanshu Kumar Jha"
                    className="w-full h-[450px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 p-4 text-white w-full text-center">
                    <h3 className="text-xl font-bold">Dr. Sudhanshu Kumar Jha</h3>
                    <p className="text-blue-300 mb-1">Founder & Director</p>
                    <p className="text-sm">
                      Visionary leader with extensive experience in academic research and publication
                    </p>
                  </div>
                </div>
              </Card>


              <Card className="overflow-hidden border-2 border-white/20 hover:border-blue-400 transition-all w-[320px]">
                <div className="relative">
                  <img
                    src="/manshi.jpeg"
                    alt="Ms. Mansi Negi"
                    className="w-full h-[450px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 p-4 text-white w-full text-center">
                    <h3 className="text-xl font-bold">Ms. Mansi Negi</h3>
                    <p className="text-blue-300 mb-1">Co-Founder & Head BD</p>
                    <p className="text-sm">
                      Strategic business development leader driving partnerships and growth
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-2 border-white/20 hover:border-blue-400 transition-all w-[320px]">
                <div className="relative">
                  <img
                    src="/vishwajeet.png"
                    alt="Mr. Vishwajeet"
                    className="w-full h-[450px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 p-4 text-white w-full text-center">
                    <h3 className="text-xl font-bold">Mr. Vishwajeet</h3>
                    <p className="text-blue-300 mb-1">Chief Technology Officer</p>
                    <p className="text-sm">
                      Technology innovator transforming research processes through digital solutions
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/about#team">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Meet the Full Team
                </Button>
              </Link>
            </div>
          </div>
        </section> */}

        {/* Latest Updates Section */}
   <section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3]">
        Our Key Verticals
      </h2>
    </div>

    {/* Responsive Grid Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
      
      {/* Vertical 1 */}
      <Card className="w-full flex flex-col justify-between bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 p-5 hover:border-purple-400 transition-all hover:shadow-xl sm:col-span-2 lg:col-span-2">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Journal of Health Synapse</h3>
          <p className="text-gray-700 text-sm mb-4">
            Peer-reviewed journal publishing research and review articles in health sciences and interdisciplinary fields.
          </p>
        </div>
        <Link href="https://healthsynapse.org" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" className="text-sm font-semibold text-purple-600 hover:text-purple-700 p-0 w-fit flex items-center gap-1.5 mt-auto">
            Explore More <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </Card>

      {/* Vertical 2 */}
      <Card className="w-full flex flex-col justify-between bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 p-5 hover:border-purple-400 transition-all hover:shadow-xl sm:col-span-2 lg:col-span-2">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">International Journal of Research and Development in Pharmacy & Life Sciences (IJRDPL)</h3>
          <p className="text-gray-700 text-sm mb-4">
            International scholarly journal promoting original research and advancements in pharmacy and life sciences.
          </p>
        </div>
        <Link href="https://www.ijrdpl.com/index.php/ijrdpl" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" className="text-sm font-semibold text-purple-600 hover:text-purple-700 p-0 w-fit flex items-center gap-1.5 mt-auto">
            Explore More <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </Card>

      {/* Vertical 3 */}
      <Card className="w-full flex flex-col justify-between bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 p-5 hover:border-purple-400 transition-all hover:shadow-xl sm:col-span-2 lg:col-span-2">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Scriptoria Publications</h3>
          <p className="text-gray-700 text-sm mb-4">
            Academic publishing platform offering peer review, ISBN allocation, and end-to-end scholarly book publication support.
          </p>
        </div>
        <Link href="https://scriptoriapublicationhouse.com/" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" className="text-sm font-semibold text-purple-600 hover:text-purple-700 p-0 w-fit flex items-center gap-1.5 mt-auto">
            Explore More <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </Card>

      {/* Vertical 4 */}
      <Card className="w-full flex flex-col justify-between bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 p-5 hover:border-purple-400 transition-all hover:shadow-xl sm:col-span-2 lg:col-span-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">ScientisticEra Awards</h3>
          <p className="text-gray-700 text-sm mb-4">
            Recognition initiative honoring excellence and contributions of researchers and academicians.
          </p>
        </div>
        <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" className="text-sm font-semibold text-purple-600 hover:text-purple-700 p-0 w-fit flex items-center gap-1.5 mt-auto">
            Explore More <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </Card>

      {/* Vertical 5 */}
      <Card className="w-full flex flex-col justify-between bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 p-5 hover:border-purple-400 transition-all hover:shadow-xl sm:col-span-2 lg:col-span-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Universal E-Magazine</h3>
          <p className="text-gray-700 text-sm mb-4">
            Digital magazine showcasing research highlights, innovations, expert insights, and academic achievements.
          </p>
        </div>
        <Link href="https://scriptoriapublicationhouse.com/magazine" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" className="text-sm font-semibold text-purple-600 hover:text-purple-700 p-0 w-fit flex items-center gap-1.5 mt-auto">
            Explore More <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </Card>

    </div>
  </div>
</section>


    <section className="py-12 bg-white border-y border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
      Supported by
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
      
      {/* DPIIT Logo Container */}
      <div className="flex h-40 w-full max-w-md items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md cursor-pointer">
        <img 
          src="/dpiit_logo.png" 
          alt="DPIIT supporting organization logo" 
          className="max-h-32 max-w-full object-contain" 
        />
      </div>
      
      {/* MSME Logo Container */}
      <div className="flex h-40 w-full max-w-md items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md cursor-pointer">
        <img 
          src="/msme_logo.jpeg" 
          alt="MSME supporting organization logo" 
          className="max-h-32 max-w-full object-contain" 
        />
      </div>

    </div>
  </div>
</section>

    {/* Testimonials Section */}
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Badge className="bg-purple-100 text-purple-700 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider mb-6 rounded-full">
          Testimonials
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          What Researchers Say About Us
        </h2>

        <Card className="border-none shadow-2xl bg-white/80 backdrop-blur p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-4 left-6 text-7xl text-gray-200/50 font-serif pointer-events-none select-none">“</div>
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed mb-8 transition-all duration-500">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="flex justify-center gap-1.5 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold mb-3 shadow-md">
                {testimonials[currentIndex].name[0]}
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm text-gray-500 font-medium mt-1">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </Card>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? "bg-purple-600 scale-125 shadow-md shadow-purple-600/30" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="mb-6">
      <h2 className="text-4xl font-bold text-gray-900">
        Our <span className="text-black">Impact</span>
      </h2>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">

      {/* Card 1 */}
      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4 border border-gray-100">
        <div className="text-4xl flex-shrink-0">📄</div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">200+</h3>
          <p className="text-gray-600 text-sm leading-snug">
            Research / Review Articles (SCI / Scopus / UGC Care)
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4 border border-gray-100">
        <div className="text-4xl flex-shrink-0">💡</div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">100+</h3>
          <p className="text-gray-600 text-sm leading-snug">
            Patents (International / National / Utility / Design)
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4 border border-gray-100">
        <div className="text-4xl flex-shrink-0">📚</div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">70+</h3>
          <p className="text-gray-600 text-sm leading-snug">
            Peer Reviewed Books (ISBN)
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4 border border-gray-100">
        <div className="text-4xl flex-shrink-0">©️</div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">50+</h3>
          <p className="text-gray-600 text-sm leading-snug">
            Copyrights
          </p>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4 border border-gray-100">
        <div className="text-4xl flex-shrink-0">™️</div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">25+</h3>
          <p className="text-gray-600 text-sm leading-snug">
            Trademarks
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

                    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-gray-900 leading-tight">
        <span className="block text-2xl font-bold text-black-600">MoU Partners</span>
         Collaborations
      </h2>
    </div>

    {/* Slider */}
    <Slider />

  </div>
</section>

        {/* <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}

            {/* Heading */}
            {/* <div className="text-center mb-16">
              <h2 className="text-6xl test-bold font-semibold text-gray-900">
                Our Process
              </h2>
              <p className="mt-4 text-lg text-black-600 italic">
                A Structured Pathway from Concept to Credibility
              </p>
              <p className="mt-4 text-black max-w-2xl mx-auto">
                We follow a transparent, methodical framework to ensure your research and innovation journey
                is guided with integrity, precision, and impact.
              </p>
            </div> */}

            {/* Timeline */}
            {/* <div className="relative"> */}

              {/* Horizontal Line (Desktop Only) */}
              {/* <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative"> */}

                {/* Step 1 */}
                {/* <div className="text-center relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold relative z-10">
                    01
                  </div>
                  <h3 className="mt-6 font-bold text-black-900 text-xl">
                    Discovery & Consultation
                  </h3>
                  <p className="mt-3 text-black-600 text-m leading-relaxed">
                    Initial assessment of research goals, innovation stage, and publication needs.
                  </p>
                </div> */}

                {/* Step 2 */}
                {/* <div className="text-center relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold relative z-10">
                    02
                  </div>
                  <h3 className="mt-6 font-bold text-black-900 text-xl">
                    Strategic Planning & Structuring
                  </h3>
                 <p className="mt-3 text-black-600 text-m leading-relaxed">
                    Tailored strategy for drafting, patent planning, or journal targeting.
                  </p>
                </div> */}

                {/* Step 3 */}
                {/* <div className="text-center relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold relative z-10">
                    03
                  </div>
                  <h3 className="mt-6 font-bold text-black-900 text-xl">
                    Expert Execution & Quality Review
                  </h3>
                  <p className="mt-3 text-black-600 text-m leading-relaxed">
                    Drafting, editing, and rigorous review by our subject experts.
                  </p>
                </div> */}

                {/* Step 4 */}
                {/* <div className="text-center relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold relative z-10">
                    04
                  </div>
                  <h3 className="mt-6 font-bold text-black-900 text-xl">
                    Submission & Dissemination
                  </h3>
                  <p className="mt-3 text-black-600 text-m leading-relaxed">
                    Journal submission, patent filing, and knowledge sharing.
                  </p>
                </div> */}
{/* </div>
            </div> */}

            {/* Bottom Statement */}
            {/* <div className="mt-20 border-t pt-8 text-center">
              <p className="text-black-700">
                Every project is handled with strict <span className="font-semibold">confidentiality</span>,
                <span className="font-semibold"> ethical transparency</span>, and
                <span className="font-semibold"> academic compliance</span>.
              </p>
            </div> */}

          {/* </div>
        </section> */}




        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-none shadow-2xl">
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-4xl md:text-5xl font-bold text-white">
                  Ready to Elevate Your Research?
                </CardTitle>
                <CardDescription className="text-xl text-white/90 max-w-2xl mx-auto">
                  Join hundreds of researchers who trust ScientisticEra for their publication needs
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100">
                      Get Started Today
                    </Button>
                  </Link>
                  {/* <Link href="/services">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10">
                      Explore Services
                    </Button>
                  </Link> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}