'use client';

export default function Contact() {
  const handleLetsTalk = () => {
    const phoneNumber = '+917479804508';
    const message = 'Hi! I would like to discuss a project with you.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="contact"
      className="py-20 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Let's transform your ideas into beautifully crafted digital experiences. 
          Get in touch and let's discuss your next project.
        </p>
        
        <button
          onClick={handleLetsTalk}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-12 rounded-2xl text-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25"
        >
          Let's Talk on WhatsApp
        </button>
      </div>
    </section>
  );
}