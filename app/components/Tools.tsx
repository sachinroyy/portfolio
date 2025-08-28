'use client';

import { useEffect, useState } from 'react';

const tools = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: '⚛️', color: 'from-cyan-600 to-cyan-800' },
  { name: 'Next.js', category: 'Frontend', icon: '🚀', color: 'from-gray-600 to-gray-800' },
  { name: 'JavaScript', category: 'Frontend', icon: '🟨', color: 'from-yellow-500 to-amber-700' },
  { name: 'HTML', category: 'Frontend', icon: '🔶', color: 'from-orange-500 to-orange-700' },
  { name: 'CSS', category: 'Frontend', icon: '🎨', color: 'from-blue-500 to-blue-700' },
  { name: 'MUI', category: 'Frontend', icon: '🧩', color: 'from-indigo-500 to-indigo-700' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: '🌬️', color: 'from-teal-500 to-teal-700' },
  { name: 'Three.js', category: 'Frontend', icon: '🧊', color: 'from-sky-600 to-sky-800' },
  { name: 'Flutter', category: 'Frontend', icon: '💙', color: 'from-blue-600 to-blue-900' },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: '🟩', color: 'from-emerald-600 to-emerald-800' },
  { name: 'Express.js', category: 'Backend', icon: '🛤️', color: 'from-slate-600 to-slate-800' },
  { name: 'MongoDB', category: 'Backend', icon: '🍃', color: 'from-green-600 to-green-800' },

  // Version Control & API Testing
  { name: 'Git', category: 'Version Control', icon: '🔧', color: 'from-rose-600 to-rose-800' },
  { name: 'GitHub', category: 'Version Control', icon: '🐱', color: 'from-gray-700 to-gray-900' },
  { name: 'Postman', category: 'Version Control', icon: '📮', color: 'from-orange-500 to-orange-700' },
  { name: 'Bruno', category: 'Version Control', icon: '🧪', color: 'from-fuchsia-600 to-fuchsia-800' },

  // Deploy
  { name: 'Vercel', category: 'Deploy', icon: '🔺', color: 'from-zinc-700 to-zinc-900' },
  { name: 'Netlify', category: 'Deploy', icon: '🔷', color: 'from-teal-600 to-teal-800' },
  { name: 'Render', category: 'Deploy', icon: '🛠️', color: 'from-purple-600 to-purple-800' },
  
  // AI/LLM
  { name: 'ChatGPT', category: 'AI/LLM', icon: '🧠', color: 'from-emerald-500 to-emerald-700' },
  
];

export default function Tools() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Tailwind's sm breakpoint is 640px
    const mq = window.matchMedia('(max-width: 639px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile((e as MediaQueryList).matches);
    // Initialize
    handler(mq);
    // Listen for changes
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', handler as (e: MediaQueryListEvent) => void);
      return () => mq.removeEventListener('change', handler as (e: MediaQueryListEvent) => void);
    } else {
      // Safari fallback
      // @ts-ignore deprecated API fallback
      mq.addListener(handler);
      return () => {
        // @ts-ignore deprecated API fallback
        mq.removeListener(handler);
      };
    }
  }, []);

  const itemsToShow = isMobile
    ? tools.filter(t => t.category === 'Frontend' || t.category === 'Backend')
    : tools;

  return (
    <section 
      id="tools"
      className="py-20 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Top-Tier Tools for Exceptional{' '}
            <span className="text-purple-600">Results</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {itemsToShow.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-600/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/10 group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {tool.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}