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
          <p className="text-xl text-gray-700 mb-8">
            Simple. Reliable. Scalable.
          </p>
          <div>
            <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wide px-6 py-4 rounded-lg transition">
              Get Started
            </a>
          </div>
        </div>

        {/* Image / Graphic */}
        <div className="flex items-center justify-center">
          <Image 
            src="/hero-image-sm.jpg" 
            alt="Hero Image" 
            width={500} 
            height={400} 
            priority={true}
            className="rounded-xl object-cover"
          /> 
         
        </div>

      </div>
    </section>
  );
}
