'use client';
import { useState, useEffect } from 'react';
import { 
  Home,
  Briefcase,
  Code,
  MessageSquare,
  Mail
} from 'lucide-react';

const navItems = [
  { icon: Home, section: 'hero', label: 'Home' },
  { icon: Code, section: 'tools', label: 'Tools' },
  { icon: Briefcase, section: 'projects', label: 'Projects' },
  { icon: MessageSquare, section: 'faq', label: 'FAQ' },
  { icon: Mail, section: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show navigation based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = navItems.map(item => item.section);
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl px-2 py-2">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`p-3 rounded-xl transition-all duration-300 group relative ${
                  activeSection === item.section
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title={item.label}
              >
                <IconComponent size={20} />
                <span
                  className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-purple-600 text-white px-2 py-1 rounded-md border border-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}