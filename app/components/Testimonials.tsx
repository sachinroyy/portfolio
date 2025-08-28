'use client';

export default function Testimonials() {
  return (
    <section 
      id="testimonials"
      className="py-20 bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients Say About My{' '}
            <span className="text-purple-600">Work</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="text-6xl text-purple-600 mb-4">"</div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic">
                Aabraham delivered exceptional work that exceeded our expectations. 
                His attention to detail and creative approach transformed our vision into reality.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                alt="Sarah Johnson"
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-600"
              />
              <div className="text-left">
                <div className="text-purple-400 font-semibold text-lg">
                  Sarah Johnson
                </div>
                <div className="text-gray-400 text-sm">
                  CEO, TechStart Inc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}