import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export default function AboutVisionMission() {
  return (
    <>
      <Header />
      {/* Handled top padding here to push content precisely below the fixed header */}
      <main className="pt-24 sm:pt-28 lg:pt-32 bg-[#020b14]">

        {/* Hero Section */}
        <section className="w-full overflow-hidden leading-[0] block">
          <img
            src="/about_section.png"
            alt="ScientisticEra About Section Banner"
            className="w-full h-auto object-cover block"
          />
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission & Vision</h2>
              <p className="text-gray-600 mt-3">Guiding principles that drive ScientisticEra forward.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              
              {/* Vision Card */}
              <Card className="border-2 border-purple-200 hover:shadow-xl transition-all bg-gradient-to-br from-purple-50 to-white flex flex-col h-full flex-1">
                <CardHeader className="items-center text-center flex-1">
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <Eye className="w-10 h-10 text-purple-600" />
                    <CardTitle className="text-3xl text-gray-900">Our Vision</CardTitle>
                  </div>
                  <CardDescription className="text-xl text-gray-900 leading-relaxed text-justify">
                    To become a globally recognized platform for scientific innovation, research excellence, and intellectual property advancement.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Mission Card */}
              <Card className="border-2 border-purple-200 hover:shadow-xl transition-all bg-gradient-to-br from-purple-50 to-white flex flex-col h-full flex-1">
                <CardHeader className="items-center flex-1">
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <Target className="w-10 h-10 text-blue-600" />
                    <CardTitle className="text-3xl text-gray-900">Our Mission</CardTitle>
                  </div>
                  <CardDescription className="text-xl text-gray-900 leading-relaxed w-full">
                    <ul className="list-disc pl-6 space-y-3 text-left">
                      <li>To empower young researchers and innovators</li>
                      <li>To promote ethical and quality research practices</li>
                      <li>To support scientific publication and commercialization</li>
                      <li>To strengthen industry-academia collaboration</li>
                      <li>To encourage innovation through IPR awareness and protection</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 relative overflow-hidden">
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

      </main>
      <Footer />
    </>
  );
}