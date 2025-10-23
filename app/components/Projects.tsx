'use client';

const projects = [
  {
    title: 'JinStore',
    category: 'E-commerce Platform',
    image: '/img/jinstore.png',
    link: 'https://adminstore-seven.vercel.app/',
    gradient: 'from-purple-600 to-blue-600',
    isClientProject: false
  },
  {
    title: 'fabric',
    category: 'E-commerce Platform',
    image: '/img/fabric.png',
    link: 'https://fabric-phi-nine.vercel.app/',
    gradient: 'from-blue-600 to-cyan-600',
    isClientProject: false
  },
  {
    title: 'fusionfood',
    category: 'E-commerce Platform',
    image: '/img/fusionfoods.png',
    link: 'https://sachinfusionfood.netlify.app/',
    gradient: 'from-green-600 to-teal-600',
    isClientProject: false
  },
  {
    title: 'Shiven Enterprises',
    category: 'Management Website',
    image: '/img/shivenlanding.png',
    link: 'https://shivenenterprises.com/',
    gradient: 'from-orange-600 to-red-600',
    isClientProject: true
  },
  {
    title: 'Shiven Clinic',
    category: 'Clinic Website',
    image: '/img/shivenclinic.png',
    link: 'https://shivenclinic.com/',
    gradient: 'from-orange-600 to-red-600',
    isClientProject: true
  },
  {
    title: 'Bull & Bear',
    category: 'Stock Market',
    image: '/img/bull&bear.png',
    link: 'https://bull-and-bear-weld.vercel.app/',
    gradient: 'from-yellow-600 to-amber-600',
    isClientProject: true
  },
  {
    title: 'Aditya Homoeopathic Clinic',
    category: 'Clinic Website',
    image: '/img/adityaclinic.png',
    link: 'https://adityahomoeopathicclinic.com/',
    gradient: 'from-emerald-600 to-green-600',
    isClientProject: true
  },
  {
    title: 'Clinic Management',
    category: 'Management System',
    image: '/img/clinicmanagemnt.png',
    link: 'https://admin.adityahomoeopathicclinic.com/dashboard',
    gradient: 'from-rose-600 to-pink-600',
    isClientProject: true
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
              className={`group block cursor-pointer relative ${project.isClientProject ? 'mt-10' : ''}`}
            >
              {project.isClientProject && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                    Client Project
                  </span>
                </div>
              )}
              <div className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-${project.gradient.split(' ')[0].split('-')[1]}-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${project.gradient.split(' ')[0].split('-')[1]}-600/20 h-full`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/800x500/1F2937/FFFFFF?text=Project+Image';
                    }}
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
        
        <div className="text-center mt-16 space-x-4">
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25"
          >
            Start Your Project
          </a>
          <a 
            href="#" 
            className="inline-block border border-gray-600 hover:border-purple-600 text-white hover:text-purple-400 font-semibold py-3 px-8 rounded-2xl transition-all duration-300 hover:bg-purple-600/10"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}