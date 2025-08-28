'use client';

const projects = [
  {
    title: 'JinStore',
    category: 'E-commerce Platform',
    image: '/img/jinstore.png',
    link: 'https://adminstore-seven.vercel.app/',
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    title: 'fabric',
    category: 'E-commerce Platform',
    image: '/img/fabric.png',
    link: 'https://fabric-phi-nine.vercel.app/',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'fusionfood',
    category: 'E-commerce Platform',
    image: '/img/fusionfoods.png',
    link: 'https://sachinfusionfood.netlify.app/',
    gradient: 'from-green-600 to-teal-600',
  },
  {
    title: 'ChatAI',
    category: 'AI Dashboard',
    image: '/img/chatai.png',
    link: 'https://chatbotsac.netlify.app/',
    gradient: 'from-orange-600 to-red-600',
  },
];

export default function Projects() {
  return (
    <section 
      id="projects"
      className="py-20 bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Projects and{' '}
            <span className="text-purple-600">Achievements</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-purple-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/20">
                <div className="relative h-64 overflow-hidden " >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">
                    {project.category}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12 space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25">
            Use for Free
          </button>
          <button className="border border-gray-600 hover:border-purple-600 text-white hover:text-purple-400 font-semibold py-3 px-8 rounded-2xl transition-all duration-300 hover:bg-purple-600/10">
            More Templates
          </button>
        </div>
      </div>
    </section>
  );
}