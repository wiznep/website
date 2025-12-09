'use client';

import { useState } from 'react';
import { HiExternalLink, HiEye, HiCode, HiChartBar, HiDeviceMobile, HiGlobe } from 'react-icons/hi';

const categories = ['All', 'Web Development', 'Mobile Apps', 'Digital Marketing', 'Custom Software'];

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce solution with AI-powered recommendations and seamless checkout.',
    image: 'from-violet-600 to-indigo-600',
    tags: ['Next.js', 'Node.js', 'AWS'],
    stats: { users: '50K+', revenue: '+180%' },
    icon: HiGlobe,
  },
  {
    title: 'FinTech Mobile App',
    category: 'Mobile Apps',
    description: 'Secure banking application with biometric authentication and real-time transactions.',
    image: 'from-emerald-500 to-teal-600',
    tags: ['React Native', 'Firebase', 'Stripe'],
    stats: { users: '100K+', rating: '4.9★' },
    icon: HiDeviceMobile,
  },
  {
    title: 'SaaS Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategy that increased leads by 340% in 6 months.',
    image: 'from-pink-500 to-rose-600',
    tags: ['SEO', 'PPC', 'Content'],
    stats: { leads: '+340%', cac: '-45%' },
    icon: HiChartBar,
  },
  {
    title: 'Healthcare Dashboard',
    category: 'Custom Software',
    description: 'HIPAA-compliant analytics dashboard for healthcare providers with real-time insights.',
    image: 'from-cyan-500 to-blue-600',
    tags: ['React', 'Python', 'PostgreSQL'],
    stats: { hospitals: '25+', uptime: '99.9%' },
    icon: HiCode,
  },
  {
    title: 'Brand Awareness Campaign',
    category: 'Digital Marketing',
    description: 'Multi-platform social media campaign that achieved 2M+ impressions in 30 days.',
    image: 'from-amber-500 to-orange-600',
    tags: ['Instagram', 'TikTok', 'LinkedIn'],
    stats: { impressions: '2M+', engagement: '+520%' },
    icon: HiChartBar,
  },
  {
    title: 'Enterprise CRM System',
    category: 'Custom Software',
    description: 'Scalable CRM solution handling 100K+ customers with automated workflows.',
    image: 'from-primary to-accent',
    tags: ['Vue.js', '.NET', 'Azure'],
    stats: { customers: '100K+', efficiency: '+65%' },
    icon: HiCode,
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
            <HiEye className="text-accent mr-2" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Explore our diverse portfolio of successful projects across industries
            and technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white text-dark shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-dark-light rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image/Gradient Background */}
              <div className={`relative h-64 bg-gradient-to-br ${project.image} overflow-hidden`}>
                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>

                {/* Floating Icon */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <project.icon className="text-white text-2xl" />
                </div>

                {/* Stats Badges */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  {Object.entries(project.stats).map(([key, value], i) => (
                    <div key={i} className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                      {value}
                    </div>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark hover:scale-110 transition-transform">
                      <HiEye className="text-xl" />
                    </button>
                    <button className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <HiExternalLink className="text-xl" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-dark">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white hover:text-dark transition-all duration-300">
            View All Projects
            <HiExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
