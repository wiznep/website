'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-gray-100'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 gradient-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-accent/40 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">R</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-dark' : 'text-white'}`}>
                RoshanTech
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-accent'}`}>
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    scrolled 
                      ? isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-dark-light hover:text-primary hover:bg-gray/50'
                      : isActive
                        ? 'text-white bg-white/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="#contact"
              className="btn-animate btn-pulse px-6 py-2.5 gradient-accent text-white rounded-full text-sm font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
            >
              Get Started
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-dark bg-gray hover:bg-gray-dark' 
                : 'text-white bg-white/10 hover:bg-white/20'
            }`}
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl mx-4 mt-2 rounded-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 space-y-2">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-dark-light hover:text-primary hover:bg-gray/50'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-4 border-t border-gray">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-6 py-3.5 gradient-accent text-white rounded-xl font-semibold shadow-lg shadow-accent/25"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
