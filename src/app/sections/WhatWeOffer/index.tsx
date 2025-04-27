export default function WhatWeOfferSection() {
  return (
    <section id="what-we-offer" className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600">
            A holistic approach to digital excellence with performance-driven solutions.
          </p>
        </div>

        {/* Offer List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Offer 1 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Mobile to Desktop Responsive Websites
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Websites designed to look perfect and function seamlessly across all devices—mobile, tablet, and desktop.
            </p>
          </div>

          {/* Offer 2 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Custom Designed Websites
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tailored designs crafted to your brand, ensuring a unique online presence that stands out from the competition.
            </p>
          </div>

          {/* Offer 3 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Excellent Google PageSpeed Results
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We ensure fast-loading websites with optimal PageSpeed scores, making sure you rank higher on Google.
            </p>
          </div>

          {/* Offer 4 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Optimized Page Speed
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We enhance your website&apos;s speed through optimized code and assets, improving user experience and search rankings.
            </p>
          </div>

          {/* Offer 5 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-black mb-4">
              24/7 Technical Support from the Owner
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Access direct, ongoing support from the owner, ensuring quick resolutions and personal attention to your needs.
            </p>
          </div>

          {/* SEO Services Offer */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-black mb-4">
              SEO Services
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We help your website rank higher on search engines with proven SEO strategies, including on-page optimization and link building.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to elevate your digital presence? Let’s work together.
          </p>
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wide px-6 py-4 rounded-lg transition">
              Get Started
            </a>
        </div>
      </div>
    </section>
  );
}
