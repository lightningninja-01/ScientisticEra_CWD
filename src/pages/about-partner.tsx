import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, Users, ShieldCheck, GraduationCap, Star, Zap } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function AboutPartner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 lg:pt-28">

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

<img src="/gogo logo.png" className="h-44 mx-auto object-contain "/>

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


      </main>
      <Footer />
    </>
  );
}