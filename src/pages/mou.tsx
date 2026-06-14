import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, GraduationCap, Globe, Handshake, Target, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function MOUPartners() {
  const partnerCategories = [
    {
      title: "University Partners",
      icon: GraduationCap,
      partners: [
        {
          name: "Gateway College of Pharmacy",
          type: "Academic Collaboration",
          year: "2024",
          focus: "Research & Publication Support"
        },
      ]
    },
    {
      title: "Research Institutions",
      icon: Building2,
      partners: [
        {
          name: "Hubs Aryuveda",
          type: "Research Collaboration",
          year: "2024",
          focus: "Ayurvedic Research & Development"
        },
        {
          name: "Holistic Herbs Daiwik",
          type: "Partnership Agreement",
          year: "2024",
          focus: "Herbal Medicine Research"
        },
      ]
    },
    {
      title: "International Collaborations",
      icon: Globe,
      partners: [
        {
          name: "Gogo International",
          type: "International MOU",
          year: "2024",
          focus: "Global Research Partnership"
        },
      ]
    },
    {
      title: "Industry Partners",
      icon: Handshake,
      partners: [
        {
          name: "Saraswati Pharmaceuticals and Manufacturing",
          type: "Corporate Partnership",
          year: "2024",
          focus: "Pharmaceutical Research & Development"
        },
      ]
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Joint Research Projects",
      description: "Collaborative research initiatives with leading institutions worldwide"
    },
    {
      icon: Users,
      title: "Faculty Exchange Programs",
      description: "International faculty and student exchange opportunities"
    },
    {
      icon: TrendingUp,
      title: "Resource Sharing",
      description: "Access to advanced research facilities and resources"
    },
    {
      icon: Award,
      title: "Funding Opportunities",
      description: "Joint funding proposals and research grants"
    },
  ];

  const stats = [
    { label: "MOU Partners", value: "5+" },
    { label: "Countries", value: "3+" },
    { label: "Joint Projects", value: "15+" },
    { label: "Years of Partnership", value: "2+" },
  ];

  return (
    <>
      <SEO 
        title="MOU Partners - Collaborations & Partnerships | ScientisticEra"
        description="Explore our strategic partnerships with leading universities, research institutions, and industry partners worldwide."
      />
      <Header />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our MOU Partners
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Building bridges between academia, research, and industry through strategic collaborations
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8">
                Become a Partner
              </Button>
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        {partnerCategories.map((category, idx) => (
          <section key={idx} className={`py-16 px-4 ${idx % 2 === 0 ? "bg-gradient-to-br from-gray-50 to-purple-50" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-center mb-12">
                <category.icon className="w-12 h-12 text-purple-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.partners.map((partner, partnerIdx) => (
                  <Card key={partnerIdx} className="hover:shadow-2xl transition-all hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {partner.name}
                          </h3>
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                              {partner.type}
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                              {partner.year}
                            </span>
                          </div>
                        </div>
                        <Handshake className="w-8 h-8 text-purple-600" />
                      </div>
                      
                      <p className="text-gray-600">
                        <span className="font-semibold">Focus Area:</span> {partner.focus}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Partnership Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              How to Partner With Us
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Join our growing network of academic and industry partners
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Initial Contact", desc: "Reach out to discuss partnership opportunities" },
                { step: "2", title: "Proposal Review", desc: "We evaluate mutual collaboration areas" },
                { step: "3", title: "MOU Drafting", desc: "Formal agreement and terms finalization" },
                { step: "4", title: "Partnership Launch", desc: "Begin collaborative projects and initiatives" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Interested in Partnering With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's explore collaboration opportunities and create impactful partnerships
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 font-bold px-8">
                  Contact Partnership Team
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 font-bold px-8">
                Download Partnership Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}