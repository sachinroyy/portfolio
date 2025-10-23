'use client';

const testimonials = [
  {
    id: 1,
    name: 'Shiven Sharma',
    role: 'Founder, Shiven Enterprises & Shiven Clinic',
    content: 'Sachin transformed our online presence with his exceptional web development skills. His attention to detail and understanding of our business needs resulted in a website that perfectly represents our brand. The clinic management system he built has streamlined our operations significantly.',
    rating: 5
  },
  {
    id: 2,
    name: 'Dr. Aditya Verma',
    role: 'Chief Physician, Aditya Homoeopathic Clinic',
    content: 'Working with Sachin was a game-changer for our clinic. He developed a comprehensive management system that handles our appointments, patient records, and billing seamlessly. His professionalism and technical expertise are truly commendable.',
    rating: 5
  },
  {
    id: 3,
    name: 'Kartic Mehta',
    role: 'Stock Market Analyst',
    content: 'The Bull & Bear application developed by Sachin has been instrumental in our market analysis. The intuitive interface and powerful features help us make data-driven decisions. His ability to understand complex requirements is remarkable.',
    rating: 5
  },
 
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients Say About My{' '}
            <span className="text-purple-600">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-900/50 w-full h-auto min-h-[320px] backdrop-blur-sm border border-gray-800 rounded-3xl p-6 hover:border-purple-600/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-center">
                <div className="text-4xl text-purple-600 mb-4">"</div>
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-300 mb-4 italic text-sm line-clamp-5">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-2xl text-purple-400 font-bold border-2 border-purple-600">
                    {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}