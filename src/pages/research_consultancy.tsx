import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Zap } from "lucide-react";
import Link from "next/link";
import { Lightbulb, BookOpen, Microscope, BarChart3, PenLine, MessageSquare , TrendingUp, FileCheck, GraduationCap,FileText,RefreshCcw } from "lucide-react";


export default function Team() {
  
  return (
    <>
      <Header />

     

<section className="py-32 bg-gray-100 text-center">

<div className="max-w-6xl mx-auto px-6">



{/* Heading */}
<h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">

Every Service Your Research Needs

</h1>

{/* Subtitle */}
<p className="mt-6 text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
From Idea to Indexed Publication - We Handle the Complexity, You Focus on Research.
</p>

{/* Buttons */}
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

<Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
<button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
Book Consultation
</button>
</Link>

{/* <Link href="/contact">
<button className="px-8 py-4 rounded-xl border-2 border-purple-500 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition duration-300">
Submit Inquiry
</button>
</Link> */}

</div>

</div>

</section>

<section className="py-20 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">

{/* LEFT SIDE */}

<div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white p-10">

<span className="bg-white/20 px-4 py-1 rounded-md text-sm">
Most Popular Service
</span>

<div className="flex items-center gap-3 mt-6">
  
  <div className="bg-white/20 p-2 rounded-lg">
    <BookOpen size={24} />
  </div>

  <h2 className="text-3xl font-bold">
    Article Paper
  </h2>

</div>

<p className="mt-4 text-blue-100 leading-relaxed">
We provide end-to-end manuscript writing assistance for research articles, reviews, case reports, and book chapters. Our experts help improve scientific quality, readability, and journal compliance, enabling researchers to communicate their work effectively.
</p>

<ul className="mt-6 space-y-3 text-blue-100">

<li>✔ 200+ Manuscripts Prepared</li>

<li>✔ SCI / Scopus / UGC Indexed Journal Expertise</li>

<li>✔ Dedicated Publication Consultant Assigned</li>

<li>✔ 100% Ethical & Confidential Process</li>

</ul>

<p className="mt-6 text-sm text-blue-100">
100% confidentiality, NDA support (if required), and transparent
communication throughout the research lifecycle.
</p>

<p className="mt-6 font-semibold">
Ideal For:
</p>

<p className="text-sm text-blue-100">
PhD Scholars | Academicians | Research Institutions | Industry Professionals
</p>

</div>

{/* RIGHT SIDE */}

{/* <div className="bg-white p-10">

<h3 className="text-2xl font-bold text-gray-900 mb-6">
What We Offer
</h3>

<div className="space-y-6">

<div>
<h4 className="font-semibold text-lg">
Journal Selection & Publication Strategy
</h4>
<p className="text-gray-600 text-sm">
Target journals based on impact factor, indexing, scope match,
acceptance probability, and review timelines.
</p>
</div>

<div>
<h4 className="font-semibold text-lg">
Manuscript Preparation & Technical Editing
</h4>
<p className="text-gray-600 text-sm">
Structural editing, language refinement, reference formatting
(APA/MLA/Vancouver), and journal compliance review.
</p>
</div>

<div>
<h4 className="font-semibold text-lg">
Peer Review & Revision Management
</h4>
<p className="text-gray-600 text-sm">
Reviewer response drafting, revision implementation,
and resubmission coordination.
</p>
</div>

<div>
<h4 className="font-semibold text-lg">
Indexing & Visibility Support
</h4>
<p className="text-gray-600 text-sm">
Guidance for indexing visibility on Google Scholar,
ResearchGate, and academic databases.
</p>
</div>

</div>

<div className="mt-8">

<p className="text-sm text-gray-500">
Average Publication Time:
<span className="text-blue-600 font-semibold ml-2">
30-60 Days
</span>
</p>

<Link href="/contact">
<button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
Start Your Publication Journey →
</button>
</Link>

</div>
</div> */}

<div className="bg-white p-10">

  <h3 className="text-2xl font-bold text-gray-900 mb-6">
    What We Offer
  </h3>

  <div className="space-y-6">

    {/* Item 1 */}
    <div className="flex gap-4 items-start">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
        <BookOpen size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-lg">
          Journal Selection & Publication Strategy
        </h4>
        <p className="text-gray-600 text-sm">
          Target journals based on impact factor, indexing, scope match,
          acceptance probability, and review timelines.
        </p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="flex gap-4 items-start">
      <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
        <FileText size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-lg">
          Manuscript Preparation & Technical Editing
        </h4>
        <p className="text-gray-600 text-sm">
          Structural editing, language refinement, reference formatting
          (APA/MLA/Vancouver), and journal compliance review.
        </p>
      </div>
    </div>

    {/* Item 3 */}
    <div className="flex gap-4 items-start">
      <div className="bg-pink-100 text-pink-600 p-3 rounded-lg">
        <RefreshCcw size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-lg">
          Peer Review & Revision Management
        </h4>
        <p className="text-gray-600 text-sm">
          Reviewer response drafting, revision implementation,
          and resubmission coordination.
        </p>
      </div>
    </div>

    {/* Item 4 */}
    <div className="flex gap-4 items-start">
      <div className="bg-green-100 text-green-600 p-3 rounded-lg">
        <BarChart3 size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-lg">
          Indexing & Visibility Support
        </h4>
        <p className="text-gray-600 text-sm">
          Guidance for indexing visibility on Google Scholar,
          ResearchGate, and academic databases.
        </p>
      </div>
    </div>

  </div>

  <div className="mt-8">

    <p className="text-sm text-gray-500">
      Average Publication Time:
      <span className="text-blue-600 font-semibold ml-2">
        1 month to 1 year
      </span>
    </p>

    <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
      <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Start Your Publication Journey →
      </button>
    </Link>

  </div>
</div>
</div>
</div>
</section>

{/* Sliding Journals Marquee */}
<section className="py-12 bg-gray-100 overflow-hidden border-y border-gray-200">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-6">
      Supporting Publications in Reputed Journals
    </p>
    <div className="overflow-hidden relative group">
      <div className="flex w-max gap-8 animate-marquee group-hover:[animation-play-state:paused]">
        {[
          "/SE_01.jpeg",
          "/SE_02.jpeg",
          "/SE_03.jpeg",
          "/SE_04.jpeg",
          "/SE_05.jpeg",
          "/SE_06.jpeg",
          "/SE_07.jpeg"
        ].map((img, i) => (
          <div key={i} className="w-40 h-52 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 bg-white p-2 flex-shrink-0">
            <img src={img} className="w-full h-full object-contain" alt={`Journal Cover ${i + 1}`} />
          </div>
        ))}
        {/* Duplicate for smooth infinite scroll */}
        {[
          "/SE_01.jpeg",
          "/SE_02.jpeg",
          "/SE_03.jpeg",
          "/SE_04.jpeg",
          "/SE_05.jpeg",
          "/SE_06.jpeg",
          "/SE_07.jpeg"
        ].map((img, i) => (
          <div key={`dup-${i}`} className="w-40 h-52 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 bg-white p-2 flex-shrink-0">
            <img src={img} className="w-full h-full object-contain" alt={`Journal Cover ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-16">

<span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
Expert Mentorship
</span>

<h2 className="mt-6 text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
Writing Guidance & Mentorship
</h2>

<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
Starting From Scratch? We Guide Your Research Journey with structured mentorship from experienced PhD scholars and research experts.
</p>

</div>


{/* Cards */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


{/* Card 1 */}

<div className="group bg-white p-8 rounded-xl border border-gray-200 
hover:shadow-xl hover:-translate-y-2 hover:border-purple-400 
transition-all duration-300">

<Lightbulb 
className="text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110" 
size={32} 
/>

<h3 className="font-semibold text-lg mb-2">
Research Topic & Proposal Development
</h3>

<p className="text-gray-600 text-sm mb-4">
Identify impactful research gaps and build a structured proposal aligned with academic standards and feasibility.
</p>

<ul className="space-y-1 text-sm text-gray-600">
<li>✔ Gap analysis in your domain</li>
<li>✔ Research question formulation</li>
<li>✔ Proposal structuring & validation</li>
</ul>

</div>

{/* Card 2 */}

<div className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:border-purple-400 transition-all duration-300">

<BookOpen className="text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110" size={32} />

<h3 className="font-semibold text-lg mb-2">
Literature Review & Theoretical Framing
</h3>

<p className="text-gray-600 text-sm mb-4">
Conduct systematic literature reviews and develop a strong theoretical foundation.
</p>

<ul className="space-y-1 text-sm text-gray-600">
<li>✔ Database search strategies</li>
<li>✔ Critical analysis of key studies</li>
<li>✔ Structured review synthesis</li>
</ul>

</div>


{/* Card 3 */}

<div className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:border-purple-400 transition-all duration-300">

<Microscope className="text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110" size={32} />

<h3 className="font-semibold text-lg mb-2">
Research Methodology Design
</h3>

<p className="text-gray-600 text-sm mb-4">
Develop robust research frameworks ensuring reliable outcomes.
</p>

<ul className="space-y-1 text-sm text-gray-600">
<li>✔ Research design selection</li>
<li>✔ Sampling & data collection planning</li>
<li>✔ Analytical approach structuring</li>
</ul>

</div>


{/* Card 4 */}

<div className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:border-purple-400 transition-all duration-300">

<BarChart3 className="text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110" size={32} />

<h3 className="font-semibold text-lg mb-2">
Data Analysis & Interpretation
</h3>

<p className="text-gray-600 text-sm mb-4">
Transform raw data into meaningful insights through statistical validation.
</p>

<ul className="space-y-1 text-sm text-gray-600">
<li>✔ Statistical test selection</li>
<li>✔ SPSS / R / NVivo guidance</li>
<li>✔ Results interpretation</li>
</ul>

</div>


{/* Card 5 */}

<div className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:border-purple-400 transition-all duration-300">

<PenLine className="text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110" size={32} />

<h3 className="font-semibold text-lg mb-2">
Academic Writing & Thesis Structuring
</h3>

<p className="text-gray-600 text-sm mb-4">
Enhance clarity and academic rigor in your research writing.
</p>

<ul className="space-y-1 text-sm text-gray-600">
<li>✔ Argument & chapter structuring</li>
<li>✔ Citation style compliance</li>
<li>✔ Manuscript review</li>
</ul>

</div>


{/* Card 6 */}

<div className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:border-purple-400 transition-all duration-300">

<MessageSquare className="text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110" size={32} />

<h3 className="font-semibold text-lg mb-2">
Personalized Research Mentorship
</h3>

<p className="text-gray-600 text-sm mb-4">
Dedicated PhD-level guidance to support your research journey.
</p>

<ul className="space-y-1 text-sm text-gray-600">
<li>✔ Scheduled consultation sessions</li>
<li>✔ Customized research roadmap</li>
<li>✔ Continuous academic support</li>
</ul>

</div>

</div>


{/* CTA */}

{/* <div className="text-center mt-14">

<Link href="/contact">
<button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:scale-105 transition">
Schedule a Consultation →
</button>
</Link>
</div> */}
</div>
</section>


<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-16">


<h2 className="mt-4 text-3xl md:text-5xl font-bold text-green-700">
Thesis & Dissertation Complete Support
</h2>

<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
From topic finalization to viva preparation, we guide researchers
through every stage of the thesis journey with structured
academic mentorship and methodological expertise.
</p>

</div>


<div className="grid lg:grid-cols-2 gap-16 items-start">


{/* LEFT SIDE - TIMELINE */}

<div className="relative border-l-2 border-green-200 ml-6 space-y-12">

{/* Step 1 */}
<div className="relative pl-10">
<div className="absolute -left-5 top-1 w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full font-semibold">1</div>

<h4 className="font-semibold text-lg">
Topic Finalization & Research Gap Identification
</h4>

<p className="text-gray-600 text-sm mt-1">
Refining your idea into a focused, researchable problem aligned with academic standards.
</p>

<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li>✔ Gap positioning</li>
<li>✔ Research question clarity</li>
<li>✔ Feasibility validation</li>
</ul>
</div>


{/* Step 2 */}
<div className="relative pl-10">
<div className="absolute -left-5 top-1 w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full font-semibold">2</div>

<h4 className="font-semibold text-lg">
Literature Review & Conceptual Framing
</h4>

<p className="text-gray-600 text-sm mt-1">
Developing a strong theoretical and evidence-based foundation for your study.
</p>

<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li>✔ Structured literature mapping</li>
<li>✔ Critical synthesis</li>
<li>✔ Citation alignment</li>
</ul>
</div>


{/* Step 3 */}
<div className="relative pl-10">
<div className="absolute -left-5 top-1 w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full font-semibold">3</div>

<h4 className="font-semibold text-lg">
Research Design & Methodology Planning
</h4>

<p className="text-gray-600 text-sm mt-1">
Designing academically sound frameworks ensuring reliability and validity.
</p>

<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li>✔ Research model selection</li>
<li>✔ Sampling & tools planning</li>
<li>✔ Analytical strategy</li>
</ul>
</div>


{/* Step 4 */}
<div className="relative pl-10">
<div className="absolute -left-5 top-1 w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full font-semibold">4</div>

<h4 className="font-semibold text-lg">
Data Collection & Execution Framework
</h4>

<p className="text-gray-600 text-sm mt-1">
Ensuring systematic and ethically compliant data gathering.
</p>

<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li>✔ Survey / experimental design</li>
<li>✔ Documentation standards</li>
<li>✔ Data integrity guidance</li>
</ul>
</div>


{/* Step 5 */}
<div className="relative pl-10">
<div className="absolute -left-5 top-1 w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full font-semibold">5</div>

<h4 className="font-semibold text-lg">
Statistical Analysis & Interpretation
</h4>

<p className="text-gray-600 text-sm mt-1">
Transforming raw data into validated research insights.
</p>

<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li>✔ SPSS / R guidance</li>
<li>✔ Result interpretation</li>
<li>✔ Tables & graphical presentation</li>
</ul>
</div>


{/* Step 6 */}
<div className="relative pl-10">
<div className="absolute -left-5 top-1 w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full font-semibold">6</div>

<h4 className="font-semibold text-lg">
Chapter Structuring & Academic Refinement
</h4>

<p className="text-gray-600 text-sm mt-1">
Enhancing clarity, logical flow and formatting compliance.
</p>

<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li>✔ Chapter alignment</li>
<li>✔ Referencing correction</li>
<li>✔ Technical editing</li>
</ul>
</div>


{/* Step 7 */}
<div className="relative pl-10">
<div className="absolute -left-5 top-1 w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full font-semibold">7</div>

<h4 className="font-semibold text-lg">
Pre-Submission & Viva Preparation
</h4>

<p className="text-gray-600 text-sm mt-1">
Ensuring confidence and readiness for final defense.
</p>

<ul className="mt-2 text-sm text-gray-600 space-y-1">
<li>✔ Mock viva sessions</li>
<li>✔ Anticipated questions</li>
<li>✔ Final review</li>
</ul>
</div>

</div>



{/* RIGHT SIDE - INFO PANEL */}

<div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 sticky top-28">

<h3 className="text-2xl font-bold text-green-700 mb-6">
What You Receive (Deliverables)
</h3>

<ul className="space-y-4 text-gray-700">

<li className="flex gap-3">
<span className="text-green-600 font-semibold">✔</span>
Structured & Reviewed Thesis Document
</li>

<li className="flex gap-3">
<span className="text-green-600 font-semibold">✔</span>
Plagiarism Report (if required)
</li>

<li className="flex gap-3">
<span className="text-green-600 font-semibold">✔</span>
Statistical Output Files & Interpretation Support
</li>

<li className="flex gap-3">
<span className="text-green-600 font-semibold">✔</span>
Proper Referencing & Formatting  
<span className="text-gray-500 text-sm">(APA / MLA / Vancouver / University format)</span>
</li>

<li className="flex gap-3">
<span className="text-green-600 font-semibold">✔</span>
Publication-Ready Manuscript (Optional)
</li>

<li className="flex gap-3">
<span className="text-green-600 font-semibold">✔</span>
Viva Preparation Support
</li>

</ul>

<div className="mt-8">

<Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
<button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
Book Consultation →
</button>
</Link>
</div>

</div>

</div>

</div>

</section>


<section className="py-24 bg-gray-50">

<div className="max-w-6xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-16">

<span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
Research Support Packages
</span>

<h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
Choose the Right Support Level
</h2>

<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
Flexible research mentorship packages designed to support
students and scholars at different stages of their thesis journey.
</p>

</div>


{/* Grid */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


{/* Foundation */}

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm 
hover:shadow-xl hover:-translate-y-2 transition duration-300">

<div className="flex items-center gap-3 mb-5">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
<Lightbulb size={24}/>
</div>

<h3 className="text-xl font-bold">
Foundation Package
</h3>

</div>

<p className="text-gray-600 text-sm mb-6">
Structured support for research initiation and proposal approval.
</p>

<ul className="space-y-2 text-gray-700 text-sm">

<li>✔ Research topic refinement & gap identification</li>
<li>✔ Synopsis / proposal structuring</li>
<li>✔ Literature review planning support</li>
<li>✔ Research methodology framework guidance</li>
<li>✔ University compliance overview</li>
<li>✔ 3 dedicated consultation sessions</li>

</ul>

</div>



{/* Development */}

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm 
hover:shadow-xl hover:-translate-y-2 transition duration-300">

<div className="flex items-center gap-3 mb-5">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
<TrendingUp size={24}/>
</div>

<h3 className="text-xl font-bold">
Development Package
</h3>

</div>

<p className="text-gray-600 text-sm mb-6">
Comprehensive support during active research progression.
</p>

<ul className="space-y-2 text-gray-700 text-sm">

<li>✔ Chapter-wise thesis structuring</li>
<li>✔ Advanced literature review assistance</li>
<li>✔ Data analysis planning (SPSS / R / NVivo)</li>
<li>✔ Result interpretation support</li>
<li>✔ Citation & formatting compliance review</li>
<li>✔ 5 structured mentorship sessions</li>

</ul>

</div>



{/* Complete */}

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm 
hover:shadow-xl hover:-translate-y-2 transition duration-300">

<div className="flex items-center gap-3 mb-5">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600">
<FileCheck size={24}/>
</div>

<h3 className="text-xl font-bold">
Complete Thesis Support
</h3>

</div>

<p className="text-gray-600 text-sm mb-6">
End-to-end academic guidance from proposal to submission.
</p>

<ul className="space-y-2 text-gray-700 text-sm">

<li>✔ Proposal to full thesis structuring support</li>
<li>✔ Methodology validation & data analysis guidance</li>
<li>✔ Statistical / qualitative interpretation support</li>
<li>✔ Technical editing & formatting review</li>
<li>✔ Plagiarism reduction guidance</li>
<li>✔ Pre-submission review & viva preparation</li>

</ul>

</div>
</div>

</div>

</section>

      <Footer />
    </>
  );
}