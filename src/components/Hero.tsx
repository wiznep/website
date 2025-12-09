import Link from 'next/link';
import { HiArrowRight, HiPlay, HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { FaRocket, FaCode, FaChartLine } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#030014]">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/25 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent-secondary/20 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-20 h-20 border border-primary/20 rounded-2xl animate-float rotate-12" />
        <div className="absolute top-40 right-[15%] w-16 h-16 border border-accent/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-32 left-[20%] w-12 h-12 bg-accent-secondary/10 rounded-xl animate-float rotate-45" />
        <div className="absolute bottom-40 right-[25%] w-24 h-24 border border-accent/10 rounded-3xl animate-float-delayed -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2.5 glass rounded-full mb-8 animate-fadeInUp">
            <HiSparkles className="text-accent mr-2 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Transforming Ideas into Digital Reality</span>
            <div className="ml-3 flex items-center text-accent text-xs font-semibold">
              <span className="w-2 h-2 bg-success rounded-full mr-1.5 animate-pulse" />
              Available Now
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            We Build{' '}
            <span className="relative">
              <span className="text-gradient animate-gradient bg-[length:200%_auto]">Digital Solutions</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0066FF"/>
                    <stop offset="100%" stopColor="#00D4FF"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            <span className="text-white/90">That Drive Growth</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            A full-service IT agency specializing in{' '}
            <span className="text-accent font-medium">digital marketing</span> and{' '}
            <span className="text-primary-light font-medium">software development</span>. 
            We help startups and enterprises transform their vision into powerful digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#contact"
              className="btn-animate btn-pulse group flex items-center px-8 py-4 gradient-accent text-white rounded-full font-semibold text-lg shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
            >
              <FaRocket className="mr-2 group-hover:animate-bounce" />
              Start Your Project
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group flex items-center px-8 py-4 glass hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                <HiPlay className="text-accent ml-0.5" />
              </div>
              Watch Our Story
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            {[
              { icon: FaCode, text: 'Custom Development' },
              { icon: FaChartLine, text: 'Digital Marketing' },
              { icon: HiLightningBolt, text: 'Fast Delivery' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
              >
                <item.icon className="mr-2 text-accent" />
                {item.text}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '250+', label: 'Projects Completed', suffix: '' },
              { value: '50+', label: 'Team Members', suffix: '' },
              { value: '98', label: 'Client Satisfaction', suffix: '%' },
              { value: '10+', label: 'Years Experience', suffix: '' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group relative p-6 glass rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                <div className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <div className="text-white/50 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/40 text-xs mb-3 tracking-widest uppercase">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray to-transparent" />
    </section>
  );
}
