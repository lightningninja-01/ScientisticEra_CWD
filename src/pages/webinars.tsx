import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, Users, Video, Award, BookOpen, ArrowRight, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const webinarsData = [
  {
    title: "1st International Webinar",
    image: "/1st_International_webinar.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ejGoyTRv3QY",
    date: "Past Event",
    brief: "An insightful international session discussing global advancements in research, scientific publishing, and interdisciplinary collaborations.",
  },
  {
    title: "1st National Webinar",
    image: "/1st_national_webinar.png",
    youtubeUrl: "https://www.youtube.com/watch?v=x0hiSJ9Nfu0",
    date: "Past Event",
    brief: "Our inaugural national webinar focusing on foundational research methodologies and the future of scientific writing in India.",
  },
  {
    title: "2nd National Webinar",
    image: "/2nd_national_webinar.png",
    youtubeUrl: "https://www.youtube.com/watch?v=1ffkf5PuOkc",
    date: "Past Event",
    brief: "Deep dive into intellectual property rights (IPR) and how researchers can protect their innovative ideas and patents.",
  },
  {
    title: "3rd National Webinar",
    image: "/3rd_national_webinar.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ram1t9DcWkQ",
    date: "Past Event",
    brief: "A comprehensive guide on navigating high-impact journal submissions and understanding the peer-review process.",
  },
  {
    title: "4th National Webinar",
    image: "/4th_national_webinar.png",
    youtubeUrl: "https://www.youtube.com/watch?v=PQ_eat5vxQA",
    date: "Past Event",
    brief: "Expert strategies for securing research grants and institutional funding for early-career researchers.",
  },
  {
    title: "5th National Webinar",
    image: "/5th_national_webinar.png",
    youtubeUrl: "https://www.youtube.com/watch?v=DdAhc77HrJQ",
    date: "Past Event",
    brief: "Exploring the intersection of technology and healthcare research, featuring guest speakers from leading institutes.",
  },
  {
    title: "6th National Webinar",
    image: "/6th_national_webinar.png",
    youtubeUrl: "https://www.youtube.com/watch?v=PFxzaA1r-88",
    date: "Past Event",
    brief: "Advanced manuscript drafting techniques: How to structure your thesis and research papers for maximum impact.",
  },
  {
    title: "7th National Webinar",
    image: "/7th_national_webinar.png",
    youtubeUrl: "https://www.youtube.com/watch?v=T6siDMFFc8c",
    date: "Past Event",
    brief: "Understanding research ethics, plagiarism avoidance, and maintaining academic integrity in global publications.",
  },
  {
    title: "8th National Webinar",
    image: "/8th_national_webinar.png",
    youtubeUrl: "https://www.youtube.com/watch?v=_S9OTvThBJ0",
    date: "Past Event",
    brief: "Bridging the gap between academic research and industry application. Real-world case studies and outcomes.",
  },
  {
    title: "9th National Webinar",
    image: "/9th_national_webinar.png",
    youtubeUrl: "https://youtube.com/channel/UCafFU8VdRfXxuH7vNoSxCaQ",
    date: "Past Event",
    brief: "Latest trends in scientific research, data analysis methodologies, and utilizing modern knowledge platforms.",
  },
  {
    title: "10th National Webinar",
    image: "/10th_national_webinar.jpeg",
    youtubeUrl: "https://www.youtube.com/live/ejGoyTRv3QY?si=ggMBp8eJwvhRtjVH",
    date: "Past Event",
    brief: "Latest trends in scientific research, data analysis methodologies, and utilizing modern knowledge platforms.",
  }
];

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
    "/10th_national_webinar.jpeg",
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
              <p className="text-lg mt-2 font-medium text-gray-600">Coming Soon ...</p>
            </h2>

            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
                <Button
                  size="lg"
                  className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-5 sm:py-6 text-base sm:text-lg shadow-lg"
                >
                  Register for Free
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Webinars List */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Webinars Portfolio
            </h2>
            <div className="space-y-8">
              {webinarsData.map((webinar, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl shadow-md border border-gray-150 overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative w-full md:w-1/3 lg:w-1/4 h-64 md:h-auto bg-gray-50 overflow-hidden shrink-0">
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{webinar.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {webinar.brief}
                    </p>
                    <div>
                      <a
                        href={webinar.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-md"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
            <Link href="/contact">
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