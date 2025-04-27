import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
            Empowering Businesses<br />Through Technology.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Simple. Reliable. Scalable.
          </p>
          <a
            href="#contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wide px-6 py-4 rounded-lg transition"
          >
            Get Started
          </a>
        </div>

        {/* Image / Graphic */}
        <div className="flex items-center justify-center">
          <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">[ Image Placeholder ]</span>
          </div>
          {/* Example if you want to use an actual image:
          <Image 
            src="/your-image.jpg" 
            alt="Hero Image" 
            width={500} 
            height={400} 
            className="rounded-xl object-cover"
          /> 
          */}
        </div>

      </div>
    </section>
  );
}
