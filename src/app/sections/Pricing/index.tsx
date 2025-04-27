export default function PricingSection() {
    return (
      <section id="pricing" className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Our Pricing Models
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Choose the pricing plan that suits your needs.
          </p>
  
          {/* Pricing Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Website Design & Development Plan */}
            <div className="max-w-md bg-white rounded-lg shadow-xl p-8">
              <div className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-600">Starts at ₱5,000/month</h3>
                <p className="text-xl text-gray-700 mt-2">Website Design & Development</p>
              </div>
  
              {/* Plan Features */}
              <div className="text-left text-gray-600 space-y-4 mb-6">
                <ul>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✔️</span>
                    Custom Web Design
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✔️</span>
                    Mobile & Desktop Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✔️</span>
                    SEO Friendly
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✔️</span>
                    24/7 Technical Support
                  </li>
                </ul>
              </div>
  
              {/* CTA Button */}
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </a>
            </div>
  
            {/* Translating Design Files Plan */}
            <div className="max-w-md bg-white rounded-lg shadow-xl p-8">
              <div className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-600">Starts at ₱3,000/page</h3>
                <p className="text-xl text-gray-700 mt-2">Translating Design Files</p>
              </div>
  
              {/* Plan Features */}
              <div className="text-left text-gray-600 space-y-4 mb-6">
                <ul>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✔️</span>
                    Convert Figma, Sketch, or Adobe XD Files to HTML/CSS
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✔️</span>
                    Responsive Design Implementation
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✔️</span>
                    Pixel Perfect Translation
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✔️</span>
                    Fast Turnaround Time
                  </li>
                </ul>
              </div>
  
              {/* CTA Button */}
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  