import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, Users, Video, Award, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Webinars() {
  const webinarImages = [
    "/1st_International_webinar.png",
    "/1st_national_webinar.png",
    "/2nd_national_webinar.png",
    "/3rd_national_webinar.png",
    "/4th_national_webinar.png",
    "/5th_national_webinar.png",
    "/6th_national_webinar.png",
    "/7th_national_webinar.png",
    "/8th_national_webinar.png",
    "/9th_national_webinar.png",
    "/Upcoming_webinar.png"
  ];

  const webinarStats = [
    { icon: Video, label: "Total Webinars", value: "50+" },
    { icon: Users, label: "Total Participants", value: "10,000+" },
    { icon: Award, label: "Expert Speakers", value: "75+" },
    { icon: BookOpen, label: "Hours of Learning", value: "200+" },
  ];

  return (
    <>
      <SEO
        title="Webinars - ScientisticEra Private Limited"
        description="Join our expert-led webinars on research methodology, publication strategies, IPR protection, and academic excellence."
      />
      <Header />

      <main className="min-h-screen pt-14 sm:pt-16 md:pt-20">

        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Research Webinars & Workshops
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Learn from industry experts and enhance your research skills through our comprehensive webinar series
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 sm:py-14 md:py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {webinarStats.map((stat, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-5 sm:pt-6 pb-4 px-3 sm:px-6">
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 text-blue-600" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-10 sm:py-14 md:py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Upcoming Webinars
              <p>Coming Soon ...</p>
            </h2>

            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {/* Upcoming Webinar Image - fully responsive */}
              {/* <div className="w-full max-w-5xl">
                <img
                  src="/Upcoming_webinar.png"
                  alt="Upcoming Webinar"
                  className="w-full h-auto object-contain rounded-xl shadow-xl border border-gray-200 bg-white p-2"
                />
              </div> */}

              {/* Register Button - full width on mobile, capped on desktop */}
              <Link href="https://wa.me/917068507857" target="_blank">
                <Button
                  // onClick={() => window.open("https://forms.gle/WzHLKQEkhTVWWvSy5", "_blank")}
                  size="lg"
                  className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-5 sm:py-6 text-base sm:text-lg"
                >
                  Register for Free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button></Link>
            </div>
          </div>
        </section>

        {/* Webinar Image Marquee */}
        <section className="py-10 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our National & International Webinars
            </h2>

            <div className="overflow-hidden relative rounded-2xl shadow-2xl py-4 sm:py-6">
              <div className="flex gap-4 sm:gap-6 animate-marquee">
                {[...webinarImages, ...webinarImages].map((img, i) => (
                  <div key={i} className="flex-shrink-0">
                    <img
                      src={img}
                      alt={`Webinar ${i + 1}`}
                      className="w-[260px] h-[360px] sm:w-[320px] sm:h-[440px] md:w-[380px] md:h-[520px] object-contain p-3 sm:p-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Want to Host a Webinar with Us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
              Share your expertise with our global community of researchers and academicians
            </p>
            <Link href="https://wa.me/917068507857" target="_blank">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-6 sm:px-8">
                Become a Speaker
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}