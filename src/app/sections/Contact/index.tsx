// app/contact.tsx

export default function ContactUsSection() {
    return (
      <section id="contact" className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Feel free to reach out to us through any of the following methods:
          </p>
  
          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Email */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Email</h3>
              <p className="text-lg text-gray-700 mb-4">
                For inquiries, please email us at:
              </p>
              <a
                href="mailto:dev.christopherii@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                christopheriilajom@gmail.com
              </a>
            </div>
  
            {/* Viber */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Viber</h3>
              <p className="text-lg text-gray-700 mb-4">
                You can contact us via Viber:
              </p>
              <a
                href="viber://chat?number=%2B639652075514"
                className="text-blue-600 hover:text-blue-800"
              >
                Chat with us on Viber
              </a>
            </div>
  
            {/* Facebook */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Facebook</h3>
              <p className="text-lg text-gray-700 mb-4">
                Reach us on our Facebook page:
              </p>
              <a
                href="https://www.facebook.com/christopheritsolutions" // Update with your actual Facebook link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Visit our Facebook Page
              </a>
            </div>
          </div>
  
          {/* CTA Button */}
          <div className="mt-12">
            <a
              href="mailto:dev.christopherii@gmail.com"
              className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </section>
    );
  }
  