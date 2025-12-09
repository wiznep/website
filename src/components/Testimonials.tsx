'use client';

import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { FaGoogle, FaLinkedin, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content:
      'RoshanTech transformed our online presence completely. Their team delivered a stunning website and marketing strategy that increased our leads by 200%. The attention to detail and commitment to our success was remarkable.',
    rating: 5,
    avatar: 'SJ',
    color: 'from-violet-500 to-purple-600',
    company: 'TechStart',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, HealthPlus',
    content:
      'The mobile app they developed exceeded our expectations. The team was professional, responsive, and delivered on time. Our user engagement has never been higher, and we\'ve seen a 150% increase in daily active users.',
    rating: 5,
    avatar: 'MC',
    color: 'from-emerald-500 to-teal-600',
    company: 'HealthPlus',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowFast',
    content:
      'Their PPC campaigns and SEO strategies have been game-changers for us. We\'ve seen a 340% increase in organic traffic and significantly lower customer acquisition costs. Highly recommended!',
    rating: 5,
    avatar: 'ER',
    color: 'from-pink-500 to-rose-600',
    company: 'GrowFast',
  },
  {
    name: 'David Williams',
    role: 'CTO, FinanceFlow',
    content:
      'The custom CRM system they built has streamlined our operations tremendously. The team understood our complex requirements and delivered a solution that works perfectly. Outstanding technical expertise!',
    rating: 5,
    avatar: 'DW',
    color: 'from-primary to-accent',
    company: 'FinanceFlow',
  },
  {
    name: 'Lisa Thompson',
    role: 'COO, RetailMax',
    content:
      'Outstanding work on our e-commerce platform. Sales have increased by 150% since launch. The team\'s attention to detail and commitment to quality is unmatched. A true partner in our growth.',
    rating: 5,
    avatar: 'LT',
    color: 'from-amber-500 to-orange-600',
    company: 'RetailMax',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-28 bg-gray relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <HiStar className="text-primary mr-2" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-dark-light/70 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about working with us.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-primary/10 p-8 md:p-12 overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <FaQuoteLeft className="text-8xl text-primary" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <HiStar key={i} className="text-yellow-400 text-2xl" />
              ))}
              <span className="ml-2 text-dark-light/60 font-medium">5.0</span>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-dark leading-relaxed mb-10 font-medium">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div>
                  <div className="text-dark font-bold text-xl mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-dark-light/60">{testimonials[currentIndex].role}</div>
                </div>
              </div>

              {/* Company Badge */}
              <div className="px-4 py-2 bg-gray rounded-full text-dark-light/70 font-medium">
                {testimonials[currentIndex].company}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray">
              <div 
                className="h-full gradient-accent transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8">
          {/* Arrows */}
          <button
            onClick={prevTestimonial}
            className="w-14 h-14 border-2 border-dark/10 rounded-full flex items-center justify-center text-dark hover:border-primary hover:text-primary transition-colors"
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          {/* Thumbnails */}
          <div className="flex items-center gap-3">
            {testimonials.map((t, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 h-12 scale-100'
                    : 'w-10 h-10 scale-90 opacity-50 hover:opacity-100'
                }`}
              >
                <div className={`w-full h-full bg-gradient-to-br ${t.color} rounded-xl flex items-center justify-center shadow-md`}>
                  <span className="text-white font-bold text-sm">{t.avatar}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={nextTestimonial}
            className="w-14 h-14 gradient-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all"
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-dark/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <FaGoogle className="text-2xl text-dark-light/70" />
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <span className="text-xs text-dark-light/50">4.9 on Google</span>
                </div>
              </div>
              <div className="w-px h-8 bg-dark/10" />
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-2xl text-[#0077b5]" />
                <div>
                  <div className="text-sm font-semibold text-dark">500+ Recommendations</div>
                  <span className="text-xs text-dark-light/50">on LinkedIn</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-dark-light/50">
              <span className="text-sm font-medium">Trusted by:</span>
              {['Google', 'Microsoft', 'Amazon', 'Meta'].map((company, i) => (
                <span key={i} className="text-sm font-bold text-dark-light/30 hover:text-dark-light/70 transition-colors cursor-default">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
