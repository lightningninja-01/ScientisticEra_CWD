import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import React, { useState, useEffect } from "react";
import { 
  Video, 
  Trophy, 
  BookOpen, 
  FileText, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Shield, 
  Zap,
  Microscope,
  BookMarked,
  Star,
  Lightbulb,
  Target,
  Clock,
  Search,
  Edit3,
  MessageSquare,
  BarChart3
} from "lucide-react";

export default function Services() {
//  const certificateSlides = [
//   "/Ipr_service_01.png",
//   "/Ipr_service_02.png",
//   "/Ipr_service_03.png",
//   "/Ipr_service_04.png",
//   "/Ipr_service_05.png",
//   "/Ipr_service_06.png",
//   "/Ipr_service_07.png",
//   "/Ipr_service_08.png"
// ];

// const [currentCertSlide, setCurrentCertSlide] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentCertSlide((prev) => (prev + 1) % certificateSlides.length);
//   }, 4000);

//   return () => clearInterval(interval);
// }, []);


  return (
    <>
      <SEO 
        title="Our Services - Research Publication & Academic Excellence | ScientisticEra"
        description="Comprehensive research solutions including paper publication, thesis guidance, webinars, IPR services, and institutional partnerships. Expert support for every stage of your research journey."
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />

        {/* Hero Section */}
        <section className="pt-36 pb-8 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Every Service Your Research Needs
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              From publication to recognition, from guidance to protection—we provide end-to-end support 
              that transforms your research from concept to global impact.
            </p>
          </div>
        </section>

       
        <section className="py-12 px-4">
           <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center pb-2">
             We Provide Best Services
            </h1>
  <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">

    {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
      {/* <img src="/Service_01.png" alt="" className="w-full h-60 object-cover rounded-xl mb-6" /> */}

      <div className="overflow-hidden rounded-xl mb-6 bg-white flex items-center justify-center">
  <img
    src="/Service_01.png"
    alt=""
    className="w-full max-h-64 object-contain transition-transform duration-500 ease-in-out hover:scale-110"
  />
</div>

      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
        ScientisticEra (Webinar)
      </h2>
      <p className="text-gray-700">
        A webinar is an online presentation enabling real-time interaction. Utilizing live video, audio, and interactive features like chat and polls, it facilitates communication with a broad audience. Commonly used for education, training, product demos, and virtual conferences. Webinars can be recorded for later viewing, and organizers can conduct polls and Q&A sessions.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
      {/* <img src="/Service_02.png" alt="" className="w-full h-60 object-cover rounded-xl mb-6" /> */}
      <div className="overflow-hidden rounded-xl mb-6 bg-white flex items-center justify-center">
  <img
    src="/Service_02.png"
    alt=""
    className="w-full max-h-64 object-contain transition-transform duration-500 ease-in-out hover:scale-110"
  />
</div>

      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 text-center">
        ScientisticEra (Academician & Researcher Awards)
      </h2>
      <p className="text-gray-700">
        The ScientisticEra award recognizes distinguished academicians and researchers for their outstanding contributions to science, technology, and innovation. It honors individuals who have made significant advancements, fostering scientific progress and global impact.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
      {/* <img src="/Service_03.png" alt="" className="w-full h-60 object-cover rounded-xl mb-6" /> */}

      <div className="overflow-hidden rounded-xl mb-6 bg-white flex items-center justify-center">
  <img
    src="/Service_03.png"
    alt=""
    className="w-full max-h-64 object-contain transition-transform duration-500 ease-in-out hover:scale-110"
  />
</div>

      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
        ScientisticEra Universal (E-Magazine)
      </h2>
      <p className="text-gray-700">
        ScientisticEra Universal is an upcoming monthly open-access e-magazine providing a platform for scientists, researchers, and students to share insights and discoveries across diverse scientific fields, including pharmaceutical and life sciences.
      </p>
    </div>

  </div>
</section>


        {/* Research Paper Publication Service */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="overflow-hidden border-2 border-blue-200 shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white flex flex-col justify-center">
                  <BookOpen className="w-20 h-20 mb-6 text-blue-200" />
                  <Badge className="bg-white/20 text-white px-3 py-1 text-sm w-fit mb-4">
                    Most Popular Service
                  </Badge>
                  <h2 className="text-4xl font-bold mb-4">Article Paper</h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    We provide end-to-end manuscript writing assistance for research articles, reviews, case reports, and book chapters. Our experts help improve scientific quality, readability, and journal compliance, enabling researchers to communicate their work effectively.
                  </p>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-300" />
                      <span className="text-blue-100">100+ Manuscripts Prepared</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-300" />
                      <span className="text-blue-100">Global Journal Database Access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-300" />
                      <span className="text-blue-100">100% Ethical & Transparent Process</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-12 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Search className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Journal Selection & Recommendation</h4>
                        <p className="text-gray-600 text-sm">
                          We analyze your research and recommend the most suitable journals based on scope, 
                          impact factor, indexing, and publication timeline.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Edit3 className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Manuscript Preparation & Formatting</h4>
                        <p className="text-gray-600 text-sm">
                          Professional editing, formatting according to journal guidelines, reference management, 
                          and quality checks before submission.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Peer Review Coordination</h4>
                        <p className="text-gray-600 text-sm">
                          We manage the entire peer review process, helping you address reviewer comments 
                          and revise your manuscript effectively.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Global Indexing & Promotion</h4>
                        <p className="text-gray-600 text-sm">
                          Ensure your published work is indexed in Google Scholar, ResearchGate, and other 
                          international databases for maximum visibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-600">Average Publication Time:</span>
                      <span className="font-bold text-blue-600">1 month to 1 year</span>
                    </div>
                    <Link href="/contact">
                      <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                        Start Your Publication Journey
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            {/* Sliding Journals Marquee */}
            <div className="mt-12 overflow-hidden relative rounded-2xl bg-gray-50 py-10 px-4 shadow-inner border border-gray-100">
              <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-bold mb-6">
                Supporting Publications in Reputed Journals
              </p>
              <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused]">
                {[
                  "/SE_01.jpeg",
                  "/SE_02.jpeg",
                  "/SE_03.jpeg",
                  "/SE_04.jpeg",
                  "/SE_05.jpeg",
                  "/SE_06.jpeg",
                  "/SE_07.jpeg"
                ].map((img, i) => (
                  <div key={i} className="w-40 h-52 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105 bg-white p-2 flex-shrink-0">
                    <img src={img} className="w-full h-full object-contain" alt={`Journal Cover ${i + 1}`} />
                  </div>
                ))}
                {/* Duplicate for infinite scroll */}
                {[
                  "/SE_01.jpeg",
                  "/SE_02.jpeg",
                  "/SE_03.jpeg",
                  "/SE_04.jpeg",
                  "/SE_05.jpeg",
                  "/SE_06.jpeg",
                  "/SE_07.jpeg"
                ].map((img, i) => (
                  <div key={`dup-${i}`} className="w-40 h-52 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105 bg-white p-2 flex-shrink-0">
                    <img src={img} className="w-full h-full object-contain" alt={`Journal Cover ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Guidance & Mentorship */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-sm mb-4">
                Expert Mentorship
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Research Guidance & Mentorship
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate your research journey with confidence under the guidance of PhD scholars and subject matter experts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle>Research Topic Selection</CardTitle>
                  <CardDescription className="text-base">
                    Discover impactful research topics aligned with current trends, your interests, and feasibility. 
                    Our experts help you identify gaps in existing literature and formulate research questions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Gap analysis in your field</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Research question formulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Feasibility assessment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <BookMarked className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle>Literature Review Support</CardTitle>
                  <CardDescription className="text-base">
                    Comprehensive assistance in conducting systematic literature reviews, identifying key papers, 
                    synthesizing information, and building a strong theoretical foundation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Database search strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Critical analysis techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Synthesis and organization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <Microscope className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle>Methodology Development</CardTitle>
                  <CardDescription className="text-base">
                    Design robust research methodologies with appropriate sampling, data collection instruments, 
                    and analytical approaches that ensure reliable and valid results.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Research design selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Sampling strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Data collection tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <BarChart3 className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle>Data Analysis & Interpretation</CardTitle>
                  <CardDescription className="text-base">
                    Expert assistance with statistical analysis, qualitative data coding, software guidance (SPSS, R, NVivo), 
                    and meaningful interpretation of results.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Statistical test selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Software training & support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Results interpretation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <Edit3 className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle>Academic Writing Support</CardTitle>
                  <CardDescription className="text-base">
                    Improve your academic writing skills with guidance on structure, clarity, argumentation, 
                    and adherence to academic conventions and citation styles.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Writing workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Manuscript review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Citation style mastery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <MessageSquare className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle>One-on-One Mentorship</CardTitle>
                  <CardDescription className="text-base">
                    Personalized mentorship sessions with PhD scholars who understand your specific research challenges 
                    and provide tailored guidance throughout your journey.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Weekly consultation calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Customized roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>24/7 email support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Thesis & Dissertation Support */}
        <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-green-100 text-green-700 px-4 py-2 text-sm mb-4">
                  PhD & Master's Students
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Thesis & Dissertation Complete Support
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Your thesis or dissertation is the culmination of years of hard work. We provide comprehensive support 
                  from proposal development to final defense, ensuring your research meets the highest academic standards.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-green-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Proposal Development & Defense</h4>
                      <p className="text-gray-600 text-sm">
                        Craft compelling research proposals with clear objectives, robust methodology, and convincing rationale. 
                        Prepare for your proposal defense with mock presentations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Chapter-by-Chapter Review</h4>
                      <p className="text-gray-600 text-sm">
                        Detailed feedback on each chapter ensuring logical flow, academic rigor, proper formatting, 
                        and alignment with your research objectives and committee expectations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-green-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Statistical Analysis & Software Help</h4>
                      <p className="text-gray-600 text-sm">
                        Expert guidance on selecting appropriate statistical tests, using analysis software (SPSS, R, SAS, Stata), 
                        interpreting results, and creating publication-quality tables and figures.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-green-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Defense Preparation</h4>
                      <p className="text-gray-600 text-sm">
                        Build confidence for your final defense with mock presentations, anticipated questions preparation, 
                        visual aids review, and strategies for handling challenging queries from committee members.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Get Thesis Support
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-green-50 to-teal-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Packages</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-gray-900">Basic Support</h4>
                      <Badge className="bg-green-100 text-green-700">Popular</Badge>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>3 chapters review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Methodology guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Email support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-gray-900">Premium Support</h4>
                      <Badge className="bg-purple-100 text-purple-700">Best Value</Badge>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Complete thesis review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Data analysis support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Defense preparation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Weekly consultation calls</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-gray-900">VIP Support</h4>
                      <Badge className="bg-amber-100 text-amber-700">Comprehensive</Badge>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All Premium features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dedicated mentor assignment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Priority support (24/7)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Publication assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Webinars & Workshops */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 order-2 md:order-1">
                <div className="aspect-video bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6">
                  <Video className="w-24 h-24 text-blue-600" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Upcoming Webinars</h3>
                  
                  <div className="bg-white rounded-xl p-4 shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Video className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm mb-1">Research Methodology Masterclass</h4>
                        <p className="text-xs text-gray-600 mb-2">Learn advanced research design techniques</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>Next Session: January 25, 2026</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Video className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm mb-1">Getting Published: A Complete Guide</h4>
                        <p className="text-xs text-gray-600 mb-2">From manuscript to acceptance</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>Next Session: February 5, 2026</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Video className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm mb-1">Data Analysis with SPSS</h4>
                        <p className="text-xs text-gray-600 mb-2">Hands-on workshop for beginners</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>Next Session: February 15, 2026</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="order-1 md:order-2">
                <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm mb-4">
                  Professional Development
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Global Webinars & Interactive Workshops
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Learn from world-class researchers, industry experts, and accomplished academics through our 
                  comprehensive webinar series. Each session is designed to enhance your research skills and 
                  accelerate your academic career.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">10+ Webinars Hosted Annually</h4>
                      <p className="text-gray-600 text-sm">
                        Regular sessions covering research trends, publication strategies, statistical methods, and career development
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Expert Speakers from Top Institutions</h4>
                      <p className="text-gray-600 text-sm">
                        Learn from professors, journal editors, and successful researchers from prestigious universities worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Interactive Q&A Sessions</h4>
                      <p className="text-gray-600 text-sm">
                        Direct access to speakers for personalized advice, networking opportunities, and collaborative discussions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Certificates of Participation</h4>
                      <p className="text-gray-600 text-sm">
                        Earn recognized certificates for every webinar attended to strengthen your academic profile and CV
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">On-Demand Access & Resources</h4>
                      <p className="text-gray-600 text-sm">
                        Lifetime access to webinar recordings, presentation slides, and supplementary materials
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Register for Upcoming Webinars
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

       {/* <section className="py-16 px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
    Here's Some Certification of Our IPR Services
  </h2>

  <div className="relative w-full max-w-7xl mx-auto h-[600px]">
    
    {certificateSlides.map((src, index) => (
      <img
        key={index}
        src={src}
        className={`absolute w-full h-full object-contain bg-[#E4FFF6] p-6 rounded-xl shadow-xl transition-opacity duration-1000 ${
          index === currentCertSlide ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    
  </div>
  <div className="flex justify-center gap-3 mt-6">
  {certificateSlides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentCertSlide(index)}
      className={`w-5 h-5 rounded-full transition-all duration-300 ${
        currentCertSlide === index
          ? "bg-cyan-500 scale-110"
          : "bg-gray-300 hover:bg-gray-400"
      }`}
    />
  ))}
</div>

</section> */}


        {/* IPR Services */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="bg-orange-100 text-orange-700 px-4 py-2 text-sm mb-4">
                Intellectual Property Protection
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Comprehensive IPR Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your innovations, secure your intellectual property rights, and maximize the commercial 
                value of your research discoveries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-2xl transition-all border-2 hover:border-orange-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Patent Filing & Prosecution</h3>
                    <p className="text-gray-600">Complete patent application support from novelty search to grant</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Prior Art & Novelty Search</span>
                      <p className="text-sm text-gray-600">Comprehensive search to establish invention novelty and patentability</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Patent Drafting</span>
                      <p className="text-sm text-gray-600">Professional drafting of specifications, claims, and technical drawings</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Filing & Prosecution</span>
                      <p className="text-gray-600 text-sm">Handle filing formalities and respond to patent office objections</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">International Filing (PCT)</span>
                      <p className="text-sm text-gray-600">Patent Cooperation Treaty applications for global protection</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-all border-2 hover:border-orange-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Trademark Registration</h3>
                    <p className="text-gray-600">Protect your brand identity and business reputation</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Trademark Search & Clearance</span>
                      <p className="text-sm text-gray-600">Verify availability and avoid conflicts with existing marks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Application Filing</span>
                      <p className="text-sm text-gray-600">Register trademarks in India and internationally</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Opposition & Rectification</span>
                      <p className="text-sm text-gray-600">Handle objections and protect your trademark rights</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Renewal Management</span>
                      <p className="text-sm text-gray-600">Timely renewal to maintain continuous protection</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-all border-2 hover:border-orange-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Copyright Services</h3>
                    <p className="text-gray-600">Secure legal protection for your creative and academic works</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Copyright Registration</span>
                      <p className="text-sm text-gray-600">Register literary works, article papers, software, and artistic works</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Infringement Protection</span>
                      <p className="text-sm text-gray-600">Legal support for copyright violation cases</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Licensing Agreements</span>
                      <p className="text-sm text-gray-600">Draft and negotiate copyright licensing contracts</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">International Protection</span>
                      <p className="text-sm text-gray-600">Secure copyright in multiple jurisdictions</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-all border-2 hover:border-orange-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">IP Strategy Consulting</h3>
                    <p className="text-gray-600">Maximize value and commercial potential of your IP portfolio</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">IP Portfolio Management</span>
                      <p className="text-sm text-gray-600">Strategic planning and management of your IP assets</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Freedom-to-Operate Analysis</span>
                      <p className="text-sm text-gray-600">Assess IP landscape before product commercialization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Technology Transfer</span>
                      <p className="text-sm text-gray-600">Facilitate commercialization and licensing of innovations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Valuation & Monetization</span>
                      <p className="text-sm text-gray-600">Determine IP value for investment or sale purposes</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8">
                  Request IPR Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ScientisticEra Awards */}
        <section className="py-12 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-amber-100 text-amber-700 px-4 py-2 text-sm mb-4">
                  Excellence Recognition
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                  Research Excellence Awards
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Celebrate exceptional research contributions with our prestigious awards program. We recognize 
                  outstanding work that advances knowledge, demonstrates innovation, and creates meaningful impact 
                  across disciplines.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Best Article Paper Awards</h4>
                      <p className="text-gray-600 text-sm">
                        Recognition for papers demonstrating exceptional research quality, methodology rigor, and contribution to field advancement
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Young Researcher Awards</h4>
                      <p className="text-gray-600 text-sm">
                        Encourage emerging scholars showing promise and innovation in their early-career research endeavors
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Innovation & Impact Awards</h4>
                      <p className="text-gray-600 text-sm">
                        Honor research with significant real-world applications and societal impact
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Lifetime Achievement Awards</h4>
                      <p className="text-gray-600 text-sm">
                        Recognize distinguished careers and sustained excellence in research and academic leadership
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Award Benefits</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Recognition certificate and trophy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Featured in awards ceremony and publications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Global visibility and networking opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Enhanced academic profile and career prospects</span>
                    </li>
                  </ul>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    Submit Your Nomination
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6">
                  <Trophy className="w-40 h-40 text-amber-600" />
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-semibold">Award Categories:</span>
                      <Badge className="bg-amber-100 text-amber-700">6+</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Multiple categories across all research disciplines</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-semibold">Annual Awardees:</span>
                      <Badge className="bg-purple-100 text-purple-700">50+</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Recognizing excellence across the globe</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-semibold">Next Deadline:</span>
                      <Badge className="bg-blue-100 text-blue-700">March 2026</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Submit your nominations before the deadline</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Collaboration & MoU */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 order-2 md:order-1">
                <div className="aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6">
                  <Globe className="w-32 h-32 text-indigo-600" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">Active MOUs</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">25+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">100+</div>
                    <div className="text-sm text-gray-600">Joint Projects</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Researchers</div>
                  </div>
                </div>
              </Card>

              <div className="order-1 md:order-2">
                <Badge className="bg-indigo-100 text-indigo-700 px-4 py-2 text-sm mb-4">
                  Global Collaboration
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Strategic MOU Partnerships
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Build meaningful collaborations with leading institutions worldwide through our Memorandum of Understanding 
                  framework. Foster innovation, share resources, and create impactful research partnerships that benefit 
                  academia, industry, and society.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Joint Research Initiatives</h4>
                      <p className="text-gray-600 text-sm">
                        Collaborate on cutting-edge research projects with partner institutions and access combined expertise
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Resource & Facility Sharing</h4>
                      <p className="text-gray-600 text-sm">
                        Access to laboratories, equipment, databases, and institutional resources across partner network
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Faculty & Student Exchange Programs</h4>
                      <p className="text-gray-600 text-sm">
                        Enable academic mobility, cross-cultural learning, and international collaboration opportunities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Co-Branded Publications & Events</h4>
                      <p className="text-gray-600 text-sm">
                        Jointly organize conferences, publish research, and enhance institutional reputation globally
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Funding & Grant Opportunities</h4>
                      <p className="text-gray-600 text-sm">
                        Access collaborative funding opportunities and strengthen grant proposals through partnerships
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    Explore Partnership Opportunities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Research Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Choose the service that fits your needs, or contact us for a personalized consultation. 
              Our expert team is ready to support you at every stage of your research career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
            <p className="text-white/80">
              <CheckCircle2 className="w-5 h-5 inline mr-2" />
              Free initial consultation • Flexible payment options • 100% satisfaction guarantee
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}