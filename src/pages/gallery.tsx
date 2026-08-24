import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Camera, Video, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { founderGalleryCategories } from "@/lib/founderGalleryData";

// ─── Existing gallery categories (unchanged) ────────────────────────────────
const existingCategories = [
  {
    id: "webinars",
    label: "Webinars",
    images: [
      { src: "/Upcoming_webinar.png",          alt: "Upcoming Webinar" },
      { src: "/1st_International_webinar.png",  alt: "1st International Webinar" },
      { src: "/1st_national_webinar.png",       alt: "1st National Webinar" },
      { src: "/2nd_national_webinar.png",       alt: "2nd National Webinar" },
      { src: "/3rd_national_webinar.png",       alt: "3rd National Webinar" },
      { src: "/4th_national_webinar.png",       alt: "4th National Webinar" },
      { src: "/5th_national_webinar.png",       alt: "5th National Webinar" },
      { src: "/6th_national_webinar.png",       alt: "6th National Webinar" },
      { src: "/7th_national_webinar.png",       alt: "7th National Webinar" },
      { src: "/8th_national_webinar.png",       alt: "8th National Webinar" },
      { src: "/9th_national_webinar.png",       alt: "9th National Webinar" },
      { src: "/10th_national_webinar.jpeg",     alt: "10th National Webinar" },
    ],
  },
  {
    id: "books",
    label: "Books",
    images: [
      { src: "/SE_01.jpeg",           alt: "Book 1" },
      { src: "/SE_02.jpeg",           alt: "Book 2" },
      { src: "/SE_03.jpeg",           alt: "Book 3" },
      { src: "/SE_04.jpeg",           alt: "Book 4" },
      { src: "/SE_05.jpeg",           alt: "Book 5" },
      { src: "/SE_06.jpeg",           alt: "Book 6" },
      { src: "/SE_07.jpeg",           alt: "Book 7" },
      { src: "/Ipr_service_06.png",   alt: "IPR Service Book 6" },
      { src: "/Ipr_service_07.png",   alt: "IPR Service Book 7" },
      { src: "/Ipr_service_08.png",   alt: "IPR Service Book 8" },
    ],
  },
  {
    id: "articles",
    label: "Articles",
    images: [
      { src: "/Article_01.png", alt: "Article 1" },
      { src: "/Article_02.png", alt: "Article 2" },
      { src: "/Article_03.png", alt: "Article 3" },
      { src: "/Article_04.png", alt: "Article 4" },
      { src: "/Article_05.png", alt: "Article 5" },
    ],
  },
  {
    id: "certifications",
    label: "Certifications",
    images: [
      { src: "/Gallery_01.png",       alt: "Gallery Certification 1" },
      { src: "/Gallery-1.jpg",        alt: "Gallery Certification" },
      { src: "/Gallery-2.jpg",        alt: "Gallery Certification" },
      { src: "/Gallery-3.jpg",        alt: "Gallery Certification" },
      { src: "/Ipr_service_01.png",   alt: "IPR Service Certification 1" },
      { src: "/Ipr_service_02.png",   alt: "IPR Service Certification 2" },
      { src: "/Ipr_service_03.png",   alt: "IPR Service Certification 3" },
      { src: "/Ipr_service_04.png",   alt: "IPR Service Certification 4" },
      { src: "/Ipr_service_05.png",   alt: "IPR Service Certification 5" },
    ],
  },
];

// ─── Normalise founderGalleryCategories images to the same {src, alt} shape ─
const founderCategories = founderGalleryCategories.map((cat) => ({
  id: cat.id,
  label: cat.label,
  images: cat.images.map((img) => ({ src: img.src, alt: img.alt })),
}));

// ─── All categories combined: existing first, then founder ──────────────────
const allCategories = [...existingCategories, ...founderCategories];

const DEFAULT_CATEGORY = "webinars";

export default function Gallery() {
  const router = useRouter();

  // ── Derive active category from URL query; fall back to default ────────────
  const [activeCategoryTab, setActiveCategoryTab] = useState(DEFAULT_CATEGORY);

  useEffect(() => {
    if (!router.isReady) return;
    const qCategory = router.query.category;
    if (typeof qCategory === "string" && qCategory.trim() !== "") {
      const matched = allCategories.find((c) => c.id === qCategory.trim());
      if (matched) {
        setActiveCategoryTab(matched.id);
      }
    }
  }, [router.isReady, router.query.category]);

  // ── When the user clicks a category button, update both state AND the URL ──
  const handleCategoryChange = (id: string) => {
    setActiveCategoryTab(id);
    router.replace({ pathname: "/gallery", query: { category: id } }, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activeCategory = allCategories.find((cat) => cat.id === activeCategoryTab);

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
                    {allCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
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

                  {/* Empty State — shown only when the active category has no images */}
                  {activeCategory && activeCategory.images.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                        <Camera className="w-9 h-9 text-gray-400" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                        No images available yet
                      </h3>
                      <p className="text-gray-500 max-w-md">
                        Images for <span className="font-medium text-gray-700">{activeCategory.label}</span> will
                        appear here once they are added.
                      </p>
                    </div>
                  )}

                  {/* Categorized Image Grid */}
                  {activeCategory && activeCategory.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {activeCategory.images.map((img, index) => (
                        <div
                          key={img.src + index}
                          onClick={() => setSelectedImage(img.src)}
                          className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-blue-400 bg-white cursor-pointer"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </TabsContent>

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

                  {/* Responsive Grid for all YouTube Videos */}
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