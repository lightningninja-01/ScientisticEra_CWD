import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { University, FlaskConical, Users, Lightbulb } from "lucide-react";

export default function CollaborationSupport() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="py-28 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
            Collaboration & Institutional Support
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            ScientisticEra collaborates with universities, research institutions, startups, and organizations to strengthen research ecosystems, promote knowledge exchange, and support innovation-driven initiatives.
          </p>

          <div className="mt-10">
            <Link href="https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition">
                Partner With Us
              </button>
            </Link>
          </div>

        </div>
      </section>


      {/* PART 2 - COLLABORATION AREAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

            {/* 1 */}
            <div className="group bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition">

              <University className="text-blue-600 mb-4" size={32} />

              <h3 className="text-xl font-bold mb-4">
                Universities & Academic Institutions
              </h3>

              <p className="text-gray-600 mb-4">
                We collaborate with universities and academic institutions to support research activities, knowledge exchange, academic publishing, and scholarly initiatives.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Key Areas</h4>

              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Research collaborations</li>
                <li>• Academic publishing partnerships</li>
                <li>• Conference and seminar support</li>
                <li>• Faculty and student research initiatives</li>
              </ul>

            </div>


            {/* 2 */}
            <div className="group bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition">

              <FlaskConical className="text-purple-600 mb-4" size={32} />

              <h3 className="text-xl font-bold mb-4">
                Research Organizations & Think Tanks
              </h3>

              <p className="text-gray-600 mb-4">
                ScientisticEra partners with research organizations and think tanks to facilitate interdisciplinary research, joint publications, and knowledge-driven projects.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">Collaboration Opportunities</h4>

              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Joint research projects</li>
                <li>• Policy and research studies</li>
                <li>• Collaborative publications</li>
                <li>• Knowledge exchange programs</li>
              </ul>

            </div>


            {/* 3 */}
            <div className="group bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition">

              <Users className="text-green-600 mb-4" size={32} />

              <h3 className="text-xl font-bold mb-4">
                Conferences & Academic Events
              </h3>

              <p className="text-gray-600 mb-4">
                We work with conference organizers and institutions to support academic events through conference proceedings publication, editorial assistance, and research dissemination.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">How We Support</h4>

              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Conference proceedings publishing</li>
                <li>• Edited academic volumes</li>
                <li>• Webinar and workshop collaboration</li>
                <li>• Research symposium support</li>
              </ul>

            </div>


            {/* 4 */}
            <div className="group bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition">

              <Lightbulb className="text-pink-600 mb-4" size={32} />

              <h3 className="text-xl font-bold mb-4">
                Startups & Innovation Ecosystems
              </h3>

              <p className="text-gray-600 mb-4">
                ScientisticEra collaborates with startups, incubators, and innovation centers to support research documentation, intellectual property development, and knowledge sharing.
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">What We Offer</h4>

              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Startup research documentation</li>
                <li>• Innovation ecosystem partnerships</li>
                <li>• Industry–academia collaboration</li>
                <li>• Knowledge-sharing initiatives</li>
              </ul>

            </div>

          </div>

        </div>
      </section>


      <Footer />
    </>
  );
}