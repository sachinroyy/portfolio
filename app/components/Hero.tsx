'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Globe,
  Twitter,
  Instagram,
  Mail,
  ArrowRight,
  Linkedin,
    GithubIcon
} from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLetsTalk = () => {
    const phoneNumber = '+917479804508';
    const message = 'Hi! I would like to discuss a project with you.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <section 
      id="hero"
      className="min-h-screen bg-black flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="order-1 lg:order-1">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  {/* Rotating purple ambient glow */}
                  <div
                    className="pointer-events-none absolute -inset-4 rounded-[1.75rem] bg-[conic-gradient(at_50%_50%,_rgba(168,85,247,0.6),_transparent_25%,_rgba(126,34,206,0.6),_transparent_50%,_rgba(147,51,234,0.6),_transparent_75%,_rgba(168,85,247,0.6))] blur-xl opacity-60 animate-[spin_8s_linear_infinite]"
                    aria-hidden
                  />
                  <Image
                    src=" img/photo.jpg"
                    alt="Aabraham James"
                    className="relative z-10 w-48 h-48 rounded-3xl object-cover border-4 border-purple-600"
                    width={192}
                    height={192}
                  />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">
                    SACHIN CHOUDHARY
                </h2>
                
                <p className="text-gray-400 mb-1 uppercase">
                  SOFTWARE DEVELOPER
                </p>
                
                <p className="text-gray-500 text-sm mb-6">
                  New Delhi, India
                </p>
                
                <div className="flex justify-center space-x-3 mb-6">
                  {[
                    { icon: GithubIcon, href: 'https://github.com/sachinroyy' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/sachin-kumar-bb94ab254/' },
                    { icon: Instagram, href: 'https://www.instagram.com/s_a.c_h_i_n_choudhary?igsh=Zm5nOXZjM254dGh3' },
                    { icon: Mail, href: 'mailto:pradipkumarchaudhary06@gmail.com' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800/50 hover:bg-purple-600 text-gray-400 hover:text-white rounded-xl transition-all duration-300 hover:scale-110"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                
                <button
                  onClick={handleLetsTalk}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming Your Ideas into{' '}
              <span className="text-purple-600">Reality</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-4 max-w-2xl">
              Passionate about creating intuitive and engaging user experiences.
            </p>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Specialize in transforming ideas into beautifully crafted products.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              {[
                { number: '+2', label: 'YEARS OF EXPERIENCE' },
                { number: '+10', label: 'PROJECTS COMPLETED' },
                { number: '+2', label: 'WORLDWIDE CLIENTS' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleLetsTalk}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25"
              >
                Let's Talk
              </button>
              
              <button
                onClick={scrollToProjects}
                className="border border-gray-600 hover:border-purple-600 text-white hover:text-purple-400 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-purple-600/10 flex items-center justify-center gap-2"
              >
                My Work <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}