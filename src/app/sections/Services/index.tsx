import { CodeBracketIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Crafting digital experiences with precision and purpose.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Service 1 */}
          <div className="group p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <CodeBracketIcon className="w-10 h-10 text-blue-600 group-hover:text-blue-700 group-hover:-translate-y-1 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-black">
                Web Design & Development
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We build fast, responsive, and beautifully designed websites tailored to your business needs — from landing pages to full platforms.
            </p>
          </div>

          {/* Service 2 */}
          <div className="group p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <DocumentDuplicateIcon className="w-10 h-10 text-blue-600 group-hover:text-blue-700 group-hover:-translate-y-1 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-black">
                Translating Design to Website
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Got a Figma, Adobe XD, or Sketch file? We transform your static designs into pixel-perfect, fully functional websites with clean code.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
