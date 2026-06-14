import { useState } from "react";
import Image from "next/image";
import { Camera, Video, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Gallery() {
  // State for Image Categories and Lightbox Modal
  const [activeCategoryTab, setActiveCategoryTab] = useState("webinars");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Categorized image data
  const galleryCategories = [
    {
      id: "webinars",
      label: "Webinars",
      images: [
        "/Upcoming_webinar.png",
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
      ],
    },
    {
      id: "books",
      label: "Books",
      images: [
        "/SE_01.jpeg",
        "/SE_02.jpeg",
        "/SE_03.jpeg",
        "/SE_04.jpeg",
        "/SE_05.jpeg",
        "/SE_06.jpeg",
        "/SE_07.jpeg",
        "/Ipr_service_06.png",
        "/Ipr_service_07.png",
        "/Ipr_service_08.png",
      ],
    },
    {
      id: "articles",
      label: "Articles",
      images: [
        "/Article_01.png",
        "/Article_02.png",
        "/Article_03.png",
        "/Article_04.png",
        "/Article_05.png",
      ],
    },
    {
      id: "certifications",
      label: "Certifications",
      images: [
        "/Gallery_01.png",
        "/Gallery-1.jpg",
        "/Gallery-2.jpg",
        "/Gallery-3.jpg",
        "/Ipr_service_01.png",
        "/Ipr_service_02.png",
        "/Ipr_service_03.png",
        "/Ipr_service_04.png",
        "/Ipr_service_05.png",
      ],
    },
  ];

  const activeCategory = galleryCategories.find((cat) => cat.id === activeCategoryTab);

  return (
    <>
      <SEO
        title="Gallery - ScientisticEra Private Limited"
        description="Explore our image and video gallery showcasing events, conferences, awards, and government recognition at ScientisticEra."
      />
      
      <Header />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
              <Camera className="w-5 h-5" />
              <span className="font-semibold">Media Gallery</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Capturing moments of excellence, innovation, and collaboration in research and academia
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Outer Tabs (Images vs Videos) */}
            <Tabs defaultValue="images" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="images" className="text-lg">
                  <Camera className="w-5 h-5 mr-2" />
                  Image Gallery
                </TabsTrigger>
                <TabsTrigger value="videos" className="text-lg">
                  <Video className="w-5 h-5 mr-2" />
                  Video Gallery
                </TabsTrigger>
              </TabsList>

              {/* ======================= */}
              {/* IMAGE GALLERY TAB       */}
              {/* ======================= */}
              <TabsContent value="images">
                <div className="space-y-8 animate-in fade-in duration-500">
                  
                  {/* Category Filter Buttons */}
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
                    {galleryCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategoryTab(category.id)}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                          activeCategoryTab === category.id
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform -translate-y-0.5"
                            : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 shadow-sm"
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>

                  {/* Categorized Image Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {activeCategory?.images.map((src, index) => (
                      <div
                        key={src + index}
                        onClick={() => setSelectedImage(src)}
                        className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-blue-400 bg-white cursor-pointer"
                      >
                        <Image
                          src={src}
                          alt={`${activeCategory.label} - ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                      </div>
                    ))}
                  </div>

                </div>
              </TabsContent>

              {/* ======================= */}
              {/* VIDEO GALLERY TAB       */}
              {/* ======================= */}
              {/* <TabsContent value="videos">
                <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-5">
                    Watch Our Videos on YouTube
                  </h1>

                  <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                    Click below to explore webinars, research sessions, and expert talks on our official YouTube channel.
                  </p>

                  <a
                    href="https://youtube.com/@scientisticera?si=DHNhgCuJ8Et2AHJh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-700 to-rose-600 hover:from-indigo-700 hover:via-purple-800 hover:to-rose-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-purple-500/30 transition transform hover:scale-105 backdrop-blur"
                  >
                    ▶ Visit Our YouTube Channel
                  </a>
                </div>
              </TabsContent> */}
              {/* ======================= */}
          {/* VIDEO GALLERY TAB       */}
          {/* ======================= */}
          <TabsContent value="videos">
            <div className="py-12 lg:py-20 animate-in fade-in zoom-in duration-500">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
                  Watch Our Latest Webinars
                </h1>
                
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                  Explore our collection of expert talks, research sessions, and international webinars directly on our official YouTube channel.
                </p>

                <a
                  href="https://youtube.com/channel/UCafFU8VdRfXxuH7vNoSxCaQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-700 to-rose-600 hover:from-indigo-700 hover:via-purple-800 hover:to-rose-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-purple-500/30 transition transform hover:-translate-y-1"
                >
                  ▶ Subscribe to Our Channel
                </a>
              </div>

              {/* Responsive Grid for all your YouTube Videos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  // Previous Videos
                  { id: "1ffkf5PuOkc", title: "2nd National Webinar" },
                  { id: "96dRmF7cDMY", title: "Scientistic Era Induction Program" },
                  
                  // Newly Added Videos
                  { id: "ejGoyTRv3QY", title: "1st International Webinar" },
                  { id: "x0hiSJ9Nfu0", title: "1st National Webinar" },
                  { id: "ram1t9DcWkQ", title: "3rd National Webinar" },
                  { id: "PQ_eat5vxQA", title: "4th National Webinar" },
                  { id: "DdAhc77HrJQ", title: "5th National Webinar" },
                  { id: "PFxzaA1r-88", title: "6th National Webinar" },
                  { id: "T6siDMFFc8c", title: "7th National Webinar" },
                  { id: "_S9OTvThBJ0", title: "8th National Webinar" },
                ].map((video, index) => (
                  <div 
                    key={video.id + index}
                    className="flex flex-col gap-3 group"
                  >
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 group-hover:shadow-2xl group-hover:border-blue-400 transition-all duration-300">
                      <iframe 
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?rel=0`} 
                        title={video.title} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="font-bold text-gray-800 px-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

            </Tabs>
          </div>
        </section>

        {/* Image Modal (Lightbox) */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedImage}
                alt="Expanded Gallery Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}