'use client';

import { useEffect, useRef, useState } from 'react';
import { HiLightBulb, HiUserGroup, HiChartBar, HiShieldCheck, HiBadgeCheck, HiGlobe } from 'react-icons/hi';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <HiBadgeCheck className="text-primary mr-2" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
            Innovating for a <br className="hidden sm:block" />
            <span className="text-gradient">Digital Future</span>
          </h2>
          <p className="text-dark-light/70 max-w-2xl mx-auto text-lg leading-relaxed">
            We are a team of passionate developers, designers, and digital strategists 
            committed to delivering exceptional solutions that empower businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-accent font-medium text-sm">🚀 Trusted by 100+ Companies</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold text-dark mb-6 leading-tight">
              Your Trusted Partner in 
              <span className="text-gradient"> Digital Transformation</span>
            </h3>
            <p className="text-dark-light/70 mb-6 leading-relaxed text-lg">
              Since our founding, RoshanTech has been at the forefront of digital innovation. 
              We combine cutting-edge technology with creative thinking to deliver solutions 
              that not only meet but exceed our clients&apos; expectations.
            </p>
            <p className="text-dark-light/70 mb-10 leading-relaxed">
              Our holistic approach integrates digital marketing strategies with robust 
              software development, ensuring your business has the tools and visibility 
              needed to thrive in today&apos;s competitive landscape.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  icon: HiLightBulb,
                  title: 'Innovative Solutions',
                  description: 'We leverage the latest technologies to create forward-thinking solutions.',
                  color: 'from-yellow-400 to-orange-500',
                },
                {
                  icon: HiUserGroup,
                  title: 'Expert Team',
                  description: 'Our diverse team brings expertise across all digital disciplines.',
                  color: 'from-primary to-accent',
                },
                {
                  icon: HiChartBar,
                  title: 'Proven Results',
                  description: 'Track record of delivering measurable outcomes for our clients.',
                  color: 'from-green-400 to-emerald-500',
                },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-default"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-dark-light/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-primary/10 p-8 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: 10, suffix: '+', label: 'Years of Excellence', icon: HiBadgeCheck, color: 'bg-primary' },
                  { value: 250, suffix: '+', label: 'Projects Delivered', icon: HiGlobe, color: 'bg-accent' },
                  { value: 100, suffix: '+', label: 'Happy Clients', icon: HiUserGroup, color: 'bg-accent-secondary' },
                  { value: 24, suffix: '/7', label: 'Support Available', icon: HiShieldCheck, color: 'bg-success' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="hover-lift shine-effect bg-gray rounded-2xl p-6 text-center cursor-default group"
                  >
                    <div className={`w-14 h-14 ${stat.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <stat.icon className="text-white text-2xl" />
                    </div>
                    <div className="text-3xl font-bold text-dark mb-1">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-dark-light/60 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Trust Badge */}
              <div className="mt-8 pt-6 border-t border-gray-dark">
                <div className="flex items-center justify-center gap-6 text-dark-light/50">
                  <span className="text-sm font-medium">Certified Partner:</span>
                  {['Google', 'AWS', 'Microsoft'].map((partner, i) => (
                    <span key={i} className="text-sm font-bold text-dark-light/70 hover:text-primary transition-colors cursor-default">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-full blur-3xl" />
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-full shadow-xl flex items-center gap-2 animate-float">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-dark">Top Rated Agency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
