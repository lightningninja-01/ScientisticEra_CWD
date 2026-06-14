import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FlaskConical } from "lucide-react";

export default function Pharmaceutics() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="py-28 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">

          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <FlaskConical className="w-10 h-10" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pharmaceutics
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Advancing pharmaceutical innovation through research-driven development and scientific expertise.
          </p>

        </div>
      </section>


      {/* CONTENT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pharmaceutical Development
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our Pharmaceutical Development Division focuses on developing innovative healthcare products through research-driven formulation and scientific expertise.
          </p>

        </div>
      </section>


      {/* COMING SOON */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-8 rounded-3xl shadow-xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Coming Soon 🚀
            </h2>

            <p className="text-lg text-white/90">
              Stay tuned for updates on our upcoming formulations.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}