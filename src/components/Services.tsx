'use client';

import { useState } from 'react';
import {
  HiSearch,
  HiSpeakerphone,
  HiCursorClick,
  HiPencilAlt,
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiCloud,
  HiArrowRight,
  HiTrendingUp,
  HiColorSwatch,
} from 'react-icons/hi';

const categories = [
  { id: 'all', name: 'All Services', icon: HiColorSwatch },
  { id: 'marketing', name: 'Digital Marketing', icon: HiTrendingUp },
  { id: 'development', name: 'Software Development', icon: HiCode },
];

const services = [
  {
    icon: HiSearch,
    title: 'SEO Optimization',
    description: 'Boost your visibility with data-driven SEO strategies that drive organic traffic and improve rankings.',
    category: 'marketing',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: HiSpeakerphone,
    title: 'Social Media Marketing',
    description: 'Engage your audience across platforms with compelling content and targeted campaigns.',
    category: 'marketing',
    features: ['Content Strategy', 'Community Management', 'Paid Ads', 'Influencer Marketing'],
    color: 'from-pink-500 to-rose-400',
  },
  {
    icon: HiCursorClick,
    title: 'PPC Advertising',
    description: 'Maximize ROI with strategic pay-per-click campaigns on Google, Meta, and more.',
    category: 'marketing',
    features: ['Google Ads', 'Facebook Ads', 'Retargeting', 'A/B Testing'],
    color: 'from-amber-500 to-orange-400',
  },
  {
    icon: HiPencilAlt,
    title: 'Content Marketing',
    description: 'Create compelling narratives that resonate with your audience and establish thought leadership.',
    category: 'marketing',
    features: ['Blog Writing', 'Video Content', 'Infographics', 'Email Campaigns'],
    color: 'from-emerald-500 to-teal-400',
  },
  {
    icon: HiCode,
    title: 'Web Applications',
    description: 'Build powerful, scalable web applications using modern frameworks and best practices.',
    category: 'development',
    features: ['React/Next.js', 'Node.js', 'API Development', 'Database Design'],
    color: 'from-violet-500 to-purple-400',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android that users love.',
    category: 'development',
    features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Optimization'],
    color: 'from-primary to-accent',
  },
  {
    icon: HiCube,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to address your unique business challenges.',
    category: 'development',
    features: ['Enterprise Solutions', 'SaaS Products', 'Automation', 'Integration'],
    color: 'from-red-500 to-pink-400',
  },
  {
    icon: HiCloud,
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure and migration services for modern businesses.',
    category: 'development',
    features: ['AWS/Azure', 'DevOps', 'CI/CD', 'Microservices'],
    color: 'from-sky-500 to-blue-400',
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <HiCube className="text-primary mr-2" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Comprehensive <span className="text-gradient">Digital Solutions</span>
          </h2>
          <p className="text-dark-light/70 max-w-2xl mx-auto text-lg">
            From marketing strategy to software development, we offer end-to-end solutions 
            to help your business succeed in the digital age.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'gradient-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-gray text-dark-light hover:bg-gray-dark'
              }`}
            >
              <cat.icon className="mr-2" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-6 border border-gray-dark/50 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon className="text-white text-2xl" />
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-dark-light/60 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.slice(0, 3).map((feature, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-gray text-dark-light/70 rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="flex items-center text-primary font-semibold text-sm group/link">
                <span className="group-hover/link:mr-2 transition-all">Learn More</span>
                <HiArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 bg-gray rounded-full">
            <span className="px-6 py-3 text-dark-light font-medium">Need a custom solution?</span>
            <a
              href="#contact"
              className="btn-animate flex items-center px-8 py-3 gradient-accent text-white rounded-full font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all"
            >
              Let&apos;s Discuss
              <HiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
