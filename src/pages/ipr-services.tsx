import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, FileText, Search, Award, BookOpen, CheckCircle, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function IPRServices() {
   const certificateSlides = [
    "/Ipr_service_01.png",
    "/Ipr_service_02.png",
    "/Ipr_service_03.png",
    "/Ipr_service_04.png",
    "/Ipr_service_05.png",
    "/Ipr_service_06.png",
    "/Ipr_service_07.png",
    "/Ipr_service_08.png"
  ];
  
  const [currentCertSlide, setCurrentCertSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertSlide((prev) => (prev + 1) % certificateSlides.length);
    }, 4000);
  
    return () => clearInterval(interval);
  }, []);
  const iprServices = [
    {
      icon: Shield,
      title: "Patent Filing & Registration",
      description: "Complete assistance in patent application preparation, filing, and prosecution with expert guidance.",
      features: ["Patentability Search", "Drafting & Filing", "Response to Objections", "Patent Grant Support"]
    },
    {
      icon: FileText,
      title: "Copyright Registration",
      description: "Protect your literary, artistic, and creative works with comprehensive copyright registration services.",
      features: ["Copyright Application", "Registration Process", "Legal Documentation", "Certificate Issuance"]
    },
    {
      icon: Award,
      title: "Trademark Registration",
      description: "Secure your brand identity with trademark search, application, and registration services.",
      features: ["Trademark Search", "Application Filing", "Opposition Handling", "Renewal Services"]
    },
    {
      icon: Search,
      title: "IPR Search & Analysis",
      description: "Comprehensive patent and trademark search services to ensure novelty and avoid infringement.",
      features: ["Prior Art Search", "Freedom to Operate", "Trademark Clearance", "Landscape Analysis"]
    },
    {
      icon: BookOpen,
      title: "Design Registration",
      description: "Protect the unique visual appearance of your products through design registration.",
      features: ["Design Search", "Application Drafting", "Registration Filing", "Renewal Management"]
    },
    {
      icon: TrendingUp,
      title: "IPR Commercialization",
      description: "Maximize the value of your intellectual property through licensing and technology transfer.",
      features: ["IP Valuation", "Licensing Agreements", "Technology Transfer", "Monetization Strategy"]
    },
  ];

  const benefits = [
    "Expert IPR Consultants with 10+ Years Experience",
    "Fast-Track Processing for Urgent Applications",
    "End-to-End Support from Filing to Grant",
    "Affordable Pricing for Researchers & Startups",
    "Regular Updates on Application Status",
    "Post-Grant Maintenance & Renewal Services"
  ];

  const stats = [
    { icon: Shield, label: "Patents Filed", value: "500+" },
    { icon: Award, label: "Trademarks Registered", value: "200+" },
    { icon: FileText, label: "Copyrights Secured", value: "150+" },
    { icon: Users, label: "Satisfied Clients", value: "350+" },
  ];

  

  return (
    <>
      <SEO 
        title="IPR Services - Patent, Trademark & Copyright Registration | ScientisticEra"
        description="Professional IPR services including patent filing, trademark registration, copyright protection, and intellectual property consulting for researchers and innovators."
      />
      <Header />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intellectual Property Rights Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Protect your innovations with comprehensive IPR solutions - Patents, Trademarks, Copyrights & More
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8">
                Get IPR Consultation
              </Button>
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-teal-600" />
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

              {/* <section className="py-16 px-4">         
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Here's Some Certification of Our IPR Services
            </h2>   
            <div className="flex flex-col md:flex-row gap-8 justify-center items-start">        
          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              First Certificate
            </h2>
            <img src="/Ipr_service_01.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>

          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Second Certificate
            </h2>
            <img src="/Ipr_service_02.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>          
          </div>          
        </section> */}

        {/* <section className="py-16 px-4">         
                      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">        
          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Third Certificate
            </h2>
            <img src="/Ipr_service_03.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>

          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fourth Certificate
            </h2>
            <img src="/Ipr_service_04.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>          
          </div>          
        </section> */}

        {/* <section className="py-16 px-4">         
                      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">        
          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fifth Certificate
            </h2>
            <img src="/Ipr_service_05.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>

          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sixth Certificate
            </h2>
            <img src="/Ipr_service_06.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>          
          </div>          
        </section> */}

        {/* <section className="py-16 px-4">         
                      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">        
          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Seventh Certificate
            </h2>
            <img src="/Ipr_service_07.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>

          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Eight Certificate
            </h2>
            <img src="/Ipr_service_08.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>          
          </div>          
        </section> */}

        <section className="py-16 px-4">
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

</section>


        {/* Services Section */}
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
                <Card key={idx} className="hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-8">
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
                      {service.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Why Choose Our IPR Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-teal-50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our IPR Filing Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Initial discussion and requirement analysis" },
                { step: "02", title: "Search & Analysis", desc: "Prior art search and patentability assessment" },
                { step: "03", title: "Application Filing", desc: "Drafting and submission of IPR application" },
                { step: "04", title: "Grant & Support", desc: "Follow-up and post-grant services" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Protect Your Innovation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get expert IPR consultation and start securing your intellectual property today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 font-bold px-8">
                  Schedule Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 font-bold px-8">
                Download IPR Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}