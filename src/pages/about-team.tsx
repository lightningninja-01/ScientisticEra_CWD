import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

export default function AboutTeam() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 lg:pt-28">

      {/* <section className="relative bg-[#0b2a4a] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mt-10">Our Team</h1>
          <p className="text-gray-300 mt-8">
            The specialists driving ScientisticEra's research, publication, technology, and operations.
          </p>
        </div>
      </section> */}

<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading + Arrows */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-12">

      <div className="text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Team
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-3 max-w-xl text-base sm:text-lg md:text-xl">
          Meet the experts supporting research, publication, technology, and operations
        </p>
      </div>

      {/* Arrows */}
      <div className="flex gap-3 justify-center sm:justify-end shrink-0">
        <button className="team-prev w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400 transition">
          <ChevronLeft size={20} />
        </button>
        <button className="team-next w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#0f1f3d] text-white hover:bg-[#162a4d] transition">
          <ChevronRight size={20} />
        </button>
      </div>

    </div>

    {/* Slider */}
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation={{
        nextEl: ".team-next",
        prevEl: ".team-prev",
      }}
      onInit={(swiper) => {
        // @ts-expect-error: ignore type issue temporarily
        swiper.params.navigation.prevEl = ".team-prev";
        // @ts-expect-error: ignore type issue temporarily
        swiper.params.navigation.nextEl = ".team-next";
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      breakpoints={{
        480:  { slidesPerView: 1, spaceBetween: 16 },
        640:  { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
    >
      {[        { src: "/Team_02.png", name: "Ms. Mansi Negi", role: "Co-Founder & Head BD", linkedin: "mansi-negi-a6143614a" },
        { src: "/Team_03.png", name: "Mr. Vishwajeet", role: "Chief Technology Officer", linkedin: "techyvishwajeet" },
        { src: "/Team_04.png", name: "Mr. Jaydeep S. Baghel", role: "Research Head Operations", linkedin: "jaydeep-baghel" },
        { src: "/Team_05.png", name: "Ms. Ishika Antil", role: "Research Specialist (Intern)", linkedin: "ishika-antil-486966285" },
        { src: "/Team_06.png", name: "Ms. Himani Raj", role: "Research (Intern)", linkedin: "himani-raj-034a27276" },
      ].map((member, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

            <Image
              src={member.src}
              alt={member.name}
              width={250}
              height={250}
              className="w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-[260px] object-contain"
            />

            <div className="p-4 sm:p-5 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-base sm:text-lg leading-snug">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                  {member.role}
                </p>
              </div>

              {/* Action Trigger Elements Box */}
              <div className="flex gap-2 shrink-0">
                {/* Cleaned Dynamic LinkedIn Anchoring */}
                <a
                  href={`https://www.linkedin.com/in/${member.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-white hover:bg-blue-600 p-2 rounded-full transition flex items-center justify-center border border-transparent hover:border-blue-100"
                  title={`View ${member.name}'s professional profile`}
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}

    </Swiper>
  </div>
</section>



      </main>
      <Footer />
    </>
  );
}