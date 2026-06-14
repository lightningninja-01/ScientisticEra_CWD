import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookOpen, FileText, Award, Users, TrendingUp, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Journals() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const journals = [
    {
      id: 1,
      title: "Journal of Health Synapse",
      subtitle: "International Multidisciplinary Journal",
      image: "/uploads/image_8846969c-94ba-4bf8-b56c-b9c1e7f51a84.png",
      issn: "ISSN No. XXXX",
      description: "A premier open-access journal focusing on health sciences and multidisciplinary research.",
      publisher: "SCIENTISTIC Era Private Limited",
      features: ["Open Access", "Peer Reviewed", "International", "Multidisciplinary"]
    },
    {
      id: 2,
      title: "International Journal of Research and Development in Pharmacy and Life Sciences",
      subtitle: "IJRDPL - Official Publication of SRDE",
      image: "/uploads/image_b913c3e2-360e-4e52-8c85-40d1e8ef1e19.png",
      issn: "ISSN (e): 2278-0238, ISSN (p): 2393-932X",
      description: "Leading journal in pharmaceutical research and life sciences with highest impact factor.",
      publisher: "Reg. No. J-24158/829",
      features: ["Index Copernicus Value: 95.48", "CrossRef DOI", "Thomson Reuters", "PubMed Indexed"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % journals.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, journals.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % journals.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + journals.length) % journals.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const stats = [
    { icon: BookOpen, label: "Active Journals", value: "2+" },
    { icon: FileText, label: "Published Articles", value: "500+" },
    { icon: Award, label: "Impact Factor", value: "95.48" },
    { icon: Users, label: "Authors", value: "1000+" },
    { icon: TrendingUp, label: "Citations", value: "2000+" },
    { icon: Globe, label: "Countries", value: "50+" },
  ];

  return (
    <>
      <SEO
        title="Our Journals - ScientisticEra"
        description="Explore our international peer-reviewed journals in health sciences, pharmacy, and life sciences with high impact factor."
      />
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">Our Scientific Publications</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                International Peer-Reviewed Journals
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Publishing cutting-edge research in health sciences, pharmacy, and life sciences.
                Open access journals with global reach and high impact factor.
              </p>
            </div>
          </div>
        </section>

        {/* Auto-Sliding Carousel Section */}
        {/* <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Journals
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Browse our prestigious international journals
              </p>
            </div> */}

        {/* Carousel */}
        {/* <div className="relative max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white"> */}
        {/* Slides */}
        {/* <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {journals.map((journal) => (
                    <div key={journal.id} className="min-w-full">
                      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12"> */}
        {/* Journal Cover */}
        {/* <div className="flex items-center justify-center">
                          <div className="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            <Image
                              src={journal.image}
                              alt={journal.title}
                              fill
                              className="object-cover"
                              priority
                            />
                          </div>
                        </div> */}

        {/* Journal Details */}
        {/* <div className="flex flex-col justify-center space-y-6">
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                              {journal.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-4">
                              {journal.subtitle}
                            </p>
                            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm mb-4">
                              {journal.issn}
                            </div>
                          </div>

                          <p className="text-gray-700 leading-relaxed">
                            {journal.description}
                          </p>

                          <div className="space-y-3">
                            <p className="text-sm text-gray-600 font-semibold">
                              Published by: {journal.publisher}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {journal.features.map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 pt-4">
                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                              Submit Article
                            </Button>
                            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                              View Guidelines
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div> */}

        {/* Navigation Arrows */}
        {/* <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button> */}

        {/* Dots Navigation */}
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                  {journals.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? "bg-blue-600 w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div> */}

        {/* Auto-play indicator */}
        {/* <div className="text-center mt-6">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {isAutoPlaying ? "⏸ Pause auto-play" : "▶ Resume auto-play"}
                </button>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

            {/* Right Content */}


            <div className="md:w-1/2 w-full text-center md:text-left">
              <h3 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                The International Journal of Research and Development in Pharmacy & Life Sciences (IJRDPL)
                <br /> About IJRDPL
              </h3>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Peer-reviewed, open-access, bi-monthly journal (ISSN: 2278-0238).</li>
                <li>Governed by SRDE, the official publication of the Society for Research and Development in Education (Reg. No. J-24158/829).</li>
              </ul>

              <h4 className="text-2xl font-semibold mt-6 mb-3">Publication Scope</h4>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Serves as a credible platform for academic and industrial researchers.</li>
                <li>Covers a broad spectrum of scientific disciplines, including:</li>

                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Pharmaceutical sciences</li>
                  <li>Medicine</li>
                  <li>Production and process engineering</li>
                  <li>Life sciences</li>
                  <li>Small particle science and technology</li>
                </ul>
              </ul>
              <h4 className="text-2xl font-semibold mt-6 mb-3">Publication Scope</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Encourages basic and applied research in laboratory practices.</li>
                <li>Aims to advance scientific knowledge through interdisciplinary collaboration.</li>
                <li>Freely available online, ensuring wider accessibility and knowledge dissemination.</li>
              </ul>
            </div>

            {/* Left Image */}
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/journal_1.jpeg"
                  alt="Scientistic Era"
                  className="w-full max-w-md h-[700px] object-cover"
                />
              </div>
            </div>

          </div>
        </section>



        <section className="py-10 px-4">
          <h1 className="text-xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight">
            International Journal of Research and Development in Pharmacy & Life Sciences (IJRDPL)
          </h1>

          <ul className="list-disc pl-10 md:pl-16 space-y-2 mx-auto text-left">
            <li><b>Discipline, Focus & Scope:</b> Pharmaceutical Sciences, Medical Sciences & Life Sciences.</li>
            <li><b>Publisher:</b> Society for Research and Development in Education.</li>
            <li><b>Country:</b> India</li>
            <li><b>Language:</b> English</li>
            <li><b>Current Status:</b> Online & Print</li>
            <li><b>e-ISSN:</b> 2278-0238 | <b>P-ISSN:</b> 2393-932X</li>
            <li><b>Membership:</b> International Committee of Medical Journal Editors (ICMJE)</li>
            <li><b>Year of Start:</b> 2012</li>
            <li><b>CODEN (CAS-USA):</b> IJRDA9</li>

            <li>
              <b>Email:</b>{" "}
              <a
                href="mailto:editor@ijrdpl.com"
                className="text-blue-600 hover:underline"
              >
                editor@ijrdpl.com
              </a>
            </li>

            <li>
              <b>Website:</b>{" "}
              <a
                href="https://www.ijrdpl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.ijrdpl.com
              </a>
            </li>
          </ul>
        </section>

        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 hover:shadow-2xl transition-all bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-3xl mb-3 text-gray-900 text-center text-5xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">About the Journal</CardTitle>
                </CardHeader>

                <ul className="list-disc pl-8 px-6 pb-6 space-y-3 text-gray-700 leading-relaxed marker:text-black-600">
                  <li>Official publication of SRDE (Society for Research and Development in Education).</li>
                  <li>International peer-reviewed, open-access, multidisciplinary journal.</li>
                  <li>Published bi-monthly to serve as a medium for scientific information exchange in pharmaceutical and life sciences forums.</li>
                  <li>Publishes original research articles, review articles, short communications, case reports, letters to editors, and rapid communications in all areas of Pharmaceutical and Basic Life Sciences.</li>
                </ul>
              </Card>

              <Card className="border-2 border-blue-200 hover:shadow-2xl transition-all bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-3xl mb-3 text-gray-900 text-center text-5xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Our Support</CardTitle>
                </CardHeader>

                <ul className="list-disc pl-8 px-6 pb-6 space-y-3 text-gray-700 leading-relaxed marker:text-black-600">

                  <li>We support HIFA (Healthcare Information for All).</li>
                  <li>We believe every person and every health worker should have access to the health information they need to protect their own health and the health of others.</li>
                  <li>
                    <b>Join HIFA here:</b>{" "}
                    <a
                      href="https://www.hifa.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      www.ijrdpl.com
                    </a>
                  </li>

                </ul>
              </Card>
            </div>
          </div>
        </section>



        {/* Statistics Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-gray-600 text-lg">
                Contributing to global research and academic excellence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Publish With Us Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Publish With Us?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "High Impact Factor",
                  description: "Our journals have achieved excellent impact factors recognized globally.",
                  icon: TrendingUp,
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  title: "Open Access",
                  description: "Free access to all published research for maximum visibility and citations.",
                  icon: Globe,
                  color: "from-purple-600 to-pink-600"
                },
                {
                  title: "Rigorous Peer Review",
                  description: "Double-blind peer review process ensuring quality and integrity.",
                  icon: Award,
                  color: "from-emerald-600 to-teal-600"
                },
                {
                  title: "Fast Publication",
                  description: "Quick turnaround time from submission to publication.",
                  icon: FileText,
                  color: "from-indigo-600 to-purple-600"
                },
                {
                  title: "Global Indexing",
                  description: "Indexed in major databases including PubMed, CrossRef, and Thomson Reuters.",
                  icon: BookOpen,
                  color: "from-rose-600 to-pink-600"
                },
                {
                  title: "Expert Editorial Board",
                  description: "Renowned international experts guiding the editorial process.",
                  icon: Users,
                  color: "from-amber-600 to-orange-600"
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Publish Your Research?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of researchers worldwide who trust ScientisticEra for their publications
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                Submit Your Manuscript
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                Author Guidelines
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}