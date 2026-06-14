import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Target,
  Eye,
  Heart,
  Shield,
  TrendingUp,
  Lightbulb,
  Globe,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Zap,
  Building2,
  User
} from "lucide-react";

export default function About() {
  return (
    <>
      <SEO
        title="About Us - ScientisticEra Private Limited"
        description="Learn about ScientisticEra's journey, mission, and commitment to advancing research excellence. Inaugurated by Hon. Shripad Yesso Naik Ji, Minister of State, Government of India."
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about1.png"
              alt="ScientisticEra Background"
              fill
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-90" />
          </div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm mb-6">
              <Building2 className="w-4 h-4 mr-2 inline" />
              About ScientisticEra
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Pioneering Research Excellence Since Inception
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              ScientisticEra Private Limited is India's premier research publication house, dedicated to empowering
              researchers worldwide with ethical publication practices, expert guidance, and comprehensive academic services.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

            {/* Left Image */}
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/about1.png"
                  alt="Scientistic Era"
                  className="w-full max-w-md h-[550px] object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                Webinar, Journal, Academician & Researcher Awards and E-Magazine
              </h1>

              <p className="font-semibold text-lg mb-4 text-gray-800">
                Inaugurated by “Honourable Shripad Yesso Naik Ji” Minister of State for New & Renewable Energy, Government of India
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Scientistic Era is a prominent platform that supports global academic and research excellence through its key services. It offers Webinars for real-time knowledge sharing, hosts Academician & Researcher Awards to recognize outstanding achievements, and publishes an E-Magazine to disseminate the latest research and insights. These services foster collaboration, celebrate innovation, and help connect the academic community worldwide.
              </p>
            </div>

          </div>
        </section>



        {/* Origin Story */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-purple-100 text-purple-700 px-3 py-1 text-sm mb-4">
                  Our Story
                </Badge>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Born from a Vision to Democratize Research
                </h2>
                <div className="space-y-4 text-gray-800 leading-relaxed">
                  <p>
                    ScientisticEra was founded with a clear mission: to bridge the gap between brilliant research
                    and global recognition. We witnessed countless talented researchers struggling to navigate the
                    complex world of academic publishing, and we knew there had to be a better way.
                  </p>
                  <p>
                    Our journey began with a small team of passionate academics and publication experts who believed
                    that every researcher deserves access to quality guidance, ethical publication practices, and
                    recognition for their hard work. Today, we've grown into a trusted partner for over 500 researchers
                    across multiple disciplines.
                  </p>
                  <p className="font-semibold text-blue-600">
                    Our proudest moment came when we were officially inaugurated by Honourable Shripad Yesso Naik Ji,
                    Minister of State for New & Renewable Energy, Government of India—a testament to our commitment
                    to advancing India's research ecosystem.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Card className="border-2 border-purple-200 shadow-xl">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                      <Award className="w-20 h-20 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Government Recognized</h3>
                      <p className="text-blue-100">
                        Inaugurated by Hon. Shripad Yesso Naik Ji
                      </p>
                      <div className="mt-6 pt-6 border-t border-white/20">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-3xl font-bold">100+</div>
                            <div className="text-sm text-blue-100">Papers Published</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold">500+</div>
                            <div className="text-sm text-blue-100">Researchers</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 hover:shadow-2xl transition-all bg-gradient-to-br from-blue-50 to-white">
                {/* <CardHeader>
                  <Target className="w-16 h-16 text-blue-600 mb-4" />
                  <CardTitle className="text-3xl mb-3 text-gray-900">Our Mission</CardTitle> */}

                <CardHeader className="items-center text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Target className="w-10 h-10 text-blue-600" />
                    <CardTitle className="text-3xl text-gray-900">Our Mission</CardTitle>
                  </div>

                  <CardDescription className="text-base text-gray-800 leading-relaxed space-y-3">
                    <p>
                      To empower researchers worldwide by providing accessible, ethical, and high-quality publication
                      services that accelerate knowledge dissemination and academic career growth.
                    </p>
                    <p className="font-semibold text-blue-700">
                      We believe every researcher, regardless of their background or resources, deserves the opportunity
                      to share their discoveries with the world.
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Democratize access to publication opportunities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Maintain highest ethical standards</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Provide expert mentorship at every stage</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Foster global research collaboration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-50 to-white">
                {/* <CardHeader>
                  <Eye className="w-16 h-16 text-purple-600 mb-4" />
                  <CardTitle className="text-3xl mb-3">Our Vision</CardTitle> */}
                <CardHeader className="items-center text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Eye className="w-10 h-10 text-purple-600" />
                    <CardTitle className="text-3xl text-gray-900">Our Vision</CardTitle>
                  </div>

                  <CardDescription className="text-base text-gray-700 leading-relaxed space-y-3">
                    <p>
                      To become the world's most trusted research publication partner, recognized for transforming
                      how academic knowledge is created, shared, and celebrated globally.
                    </p>
                    <p className="font-semibold text-purple-700">
                      We envision a future where quality research from every corner of the world receives the recognition
                      it deserves, breaking down barriers and building bridges across disciplines and borders.
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Global leader in research support services</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Champion of ethical publication practices</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Bridge between researchers and global journals</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Catalyst for India's research excellence</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 hover:shadow-2xl transition-all bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-3xl mb-3 text-gray-900 text-center text-5xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Core Objectives</CardTitle>
                </CardHeader>

                <ul className="px-6 pb-6 space-y-3 text-gray-700 leading-relaxed">
                  <li><b>Promote Scientific Knowledge:</b> Provide access to research papers, studies, and findings.</li>
                  <li><b>Enhance Research Visibility: </b> Enable global scientists to share data and collaborate on projects.</li>
                  <li><b>Fostering Professional Growth:</b> Offer platforms for publishing and indexing research work.</li>
                  <li><b>Facilitate Innovation & Technology Transfer: </b>Support the practical application of scientific discoveries.</li>
                  <li><b>Research Collaboration:</b> Facilitating global networking among scientists, researchers, and institutions.</li>
                </ul>
              </Card>

              <Card className="border-2 border-blue-200 hover:shadow-2xl transition-all bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-5xl text-gray-900 text-center font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Key Initiatives</CardTitle>
                </CardHeader>

                <ul className="px-6 pb-6 space-y-3 text-gray-700 leading-relaxed">
                  <li><b>Scientific Journals & Research Publications:</b>Open-access and peer-reviewed journals for global reach.</li>
                  <li><b>Webinars & Online Conferences: </b> Organizing live research discussions with global experts.</li>
                  <li><b>Academician & Researcher Awards:</b> Categorized awards (Best Researcher, Young Scientist, Lifetime Achievement).</li>
                  <li><b>E-Magazines & Digital Publications:</b>Collaboration with industry experts and guest editors.</li>
                  <li><b>ScientisticEra and Resources: </b> Sharing cutting-edge research and insights.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>


        {/* Core Values */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              {/* <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm mb-4">
                Core Values
              </Badge> */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What We Stand For
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our values guide every decision we make and every service we provide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Integrity & Ethics</CardTitle>
                  <CardDescription className="text-gray-700">
                    We maintain unwavering commitment to ethical publishing standards, zero tolerance for plagiarism,
                    and complete transparency in all our processes.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <Heart className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">Researcher-First Approach</CardTitle>
                  <CardDescription className="text-gray-700">
                    Every decision we make prioritizes researcher success. Your goals are our goals,
                    and your achievements are our greatest reward.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-pink-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-pink-600 mb-4" />
                  <CardTitle className="text-xl">Excellence in Service</CardTitle>
                  <CardDescription className="text-gray-700">
                    We deliver exceptional quality in every interaction, from initial consultation to final publication,
                    never compromising on standards.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-green-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <Lightbulb className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Innovation & Growth</CardTitle>
                  <CardDescription className="text-gray-700">
                    We continuously evolve our services, adopt new technologies, and develop innovative solutions
                    to meet changing research needs.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-orange-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <Globe className="w-12 h-12 text-orange-600 mb-4" />
                  <CardTitle className="text-xl">Global Collaboration</CardTitle>
                  <CardDescription className="text-gray-700">
                    We foster connections across borders, disciplines, and institutions, believing that
                    collaboration drives breakthrough discoveries.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-indigo-500 hover:shadow-xl transition-all">
                <CardHeader>
                  <Sparkles className="w-12 h-12 text-indigo-600 mb-4" />
                  <CardTitle className="text-xl">Accessibility & Inclusion</CardTitle>
                  <CardDescription className="text-gray-700">
                    Quality research support should be accessible to all. We offer flexible solutions
                    that accommodate diverse needs and budgets.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-white/20 backdrop-blur text-white border-white/30 px-4 py-2 text-sm mb-4">
                <Award className="w-4 h-4 mr-2 inline" />
                Achievements & Accolades
              </Badge>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Awards & Recognition
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Our commitment to excellence has been recognized by leading institutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 p-8 text-center hover:border-white hover:shadow-2xl transition-all group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Best Research Facilitator</h3>
                <p className="text-gray-700">National Research Excellence Awards 2023</p>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 p-8 text-center hover:border-white hover:shadow-2xl transition-all group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation in Academia</h3>
                <p className="text-gray-700">Ministry Recognition 2024</p>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 p-8 text-center hover:border-white hover:shadow-2xl transition-all group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Top Publication Partner</h3>
                <p className="text-gray-700">Academic Excellence Forum 2024</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20" id="team">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                Meet the experts driving innovation in research and publication
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

            {/* <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white/10 backdrop-blur border-2 border-white/20 hover:border-blue-400 transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">Mr. Jaydeep S. Baghel</h3>
                <p className="text-blue-400 text-center mb-4">Research Head Operations</p>
                <p className="text-gray-300 text-center">
                  Operational excellence expert ensuring seamless research project execution.
                  Specialized in research methodology and quality assurance.
                </p>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur border-2 border-white/20 hover:border-blue-400 transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">Ms. Ishika Antil</h3>
                <p className="text-blue-400 text-center mb-4">Research Specialist (Intern)</p>
                <p className="text-gray-300 text-center">
                  Emerging research talent contributing to innovative research projects.
                  Supporting data analysis and literature review processes.
                </p>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur border-2 border-white/20 hover:border-blue-400 transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">Ms. Himani Raj</h3>
                <p className="text-blue-400 text-center mb-4">Research (Intern)</p>
                <p className="text-gray-300 text-center">
                  Dedicated research intern supporting various research initiatives.
                  Contributing to research documentation and coordination.
                </p>
              </Card>
            </div> */}

            <div className="grid md:grid-cols-3 gap-8 mb-12 justify-items-center">
                          <Card className="overflow-hidden border-2 border-white/20 hover:border-blue-400 transition-all w-[320px]">
  <div className="relative">
    <img
      src="/jaydeep.png"
      alt="Mr. Jaydeep S. Baghel"
      className="w-full h-[450px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    
    <div className="absolute bottom-0 p-4 text-white w-full text-center">
      <h3 className="text-xl font-bold">Mr. Jaydeep S. Baghel</h3>
      <p className="text-blue-300 mb-1">Research Head Operations</p>
      <p className="text-sm">
         Operational excellence expert ensuring seamless research project execution.
                  Specialized in research methodology and quality assurance.
      </p>
    </div>
  </div>
</Card>


              <Card className="overflow-hidden border-2 border-white/20 hover:border-blue-400 transition-all w-[320px]">
  <div className="relative">
    <img
      src="/ishika.png"
      alt="Ms. Ishika Antil"
      className="w-full h-[450px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    
    <div className="absolute bottom-0 p-4 text-white w-full text-center">
      <h3 className="text-xl font-bold">Ms. Ishika Antil</h3>
      <p className="text-blue-300 mb-1">Research Specialist (Intern)</p>
      <p className="text-sm">
       Emerging research talent contributing to innovative research projects.
                  Supporting data analysis and literature review processes.   
      </p>
    </div>
  </div>
</Card>

              <Card className="overflow-hidden border-2 border-white/20 hover:border-blue-400 transition-all w-[320px]">
  <div className="relative">
    <img
      src="/Himani.png"
      alt="Ms. Himani Raj"
      className="w-full h-[450px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    
    <div className="absolute bottom-0 p-4 text-white w-full text-center">
      <h3 className="text-xl font-bold">Ms. Himani Raj</h3>
      <p className="text-blue-300 mb-1">Research (Intern)</p>
      <p className="text-sm">
       Dedicated research intern supporting various research initiatives.
                  Contributing to research documentation and coordination.
      </p>
    </div>
  </div>
</Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Differentiators */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Makes Us Different
              </h2>
              <p className="text-xl text-blue-100">
                The ScientisticEra advantage that sets us apart from other publication services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all">
                <Award className="w-12 h-12 flex-shrink-0 text-yellow-300" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Government Recognition</h3>
                  <p className="text-blue-100">
                    Officially inaugurated by Hon. Minister, ensuring credibility and trust that few organizations can match
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all">
                <Shield className="w-12 h-12 flex-shrink-0 text-green-300" />
                <div>
                  <h3 className="text-xl font-bold mb-2">100% Ethical Practices</h3>
                  <p className="text-blue-100">
                    Zero tolerance for plagiarism, transparent processes, and adherence to international publishing standards
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all">
                <GraduationCap className="w-12 h-12 flex-shrink-0 text-pink-300" />
                <div>
                  <h3 className="text-xl font-bold mb-2">PhD-Level Mentorship</h3>
                  <p className="text-blue-100">
                    Access to experienced academics and subject experts who understand your research challenges firsthand
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all">
                <Zap className="w-12 h-12 flex-shrink-0 text-orange-300" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Fast Turnaround Time</h3>
                  <p className="text-blue-100">
                    Efficient processes that respect your deadlines without compromising on quality or thoroughness
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all">
                <Globe className="w-12 h-12 flex-shrink-0 text-cyan-300" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Journal Network</h3>
                  <p className="text-blue-100">
                    Established relationships with prestigious international journals across all major disciplines
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all">
                <Heart className="w-12 h-12 flex-shrink-0 text-red-300" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Support</h3>
                  <p className="text-blue-100">
                    One-on-one attention for every researcher, with customized solutions that fit your unique needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-none shadow-2xl">
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-4xl md:text-5xl font-bold text-white">
                  Join Our Mission
                </CardTitle>
                <CardDescription className="text-xl text-white/90 max-w-2xl mx-auto">
                  Be part of a team that's transforming academic publishing in India
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100">
                      Get in Touch
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10">
                      Our Services
                    </Button>
                  </Link>
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