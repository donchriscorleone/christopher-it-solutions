import { UsersIcon, PresentationChartBarIcon, CodeBracketIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline';

export default function DevelopmentProcessSection() {
  return (
    <section id="development-process" className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-600">
            A streamlined approach to turning your ideas into functional, beautiful websites.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Step 1: Gathering Client Information */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <UsersIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4 text-center">
              Gathering Client Information
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              We begin by understanding your needs, goals, and vision. Our team listens to ensure we capture every detail.
            </p>
          </div>

          {/* Step 2: Showcase Demo */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <PresentationChartBarIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4 text-center">
              Showcase Demo
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              We present a demo that visualizes the project&apos;s core structure and design to get your feedback before moving forward.
            </p>
          </div>

          {/* Step 3: Design and Development */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <CodeBracketIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4 text-center">
              Design and Development
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Our design and development team brings your vision to life by creating a fully functional and visually stunning website.
            </p>
          </div>

          {/* Step 4: Go Live and Maintenance */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <CloudArrowDownIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4 text-center">
              Go Live and Maintenance
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Once everything is finalized, we deploy your site, ensure it&apos;s running smoothly, and offer ongoing support.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
