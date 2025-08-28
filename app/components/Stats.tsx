'use client';

export default function Stats() {
  return (
    <section 
      id="stats"
      className="py-20 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-lg mb-12">
          Relied on by companies near, far, and worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
          {['LogoIpsum', 'LogoIpsum', 'LogoIpsum', 'LogoIpsum', 'LogoIpsum'].map((logo, index) => (
            <div 
              key={index}
              className="text-gray-500 text-xl font-semibold hover:text-gray-300 transition-colors duration-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}