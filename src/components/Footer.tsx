'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  HiLocationMarker,
  HiMail,
  HiPhone,
  HiArrowUp,
  HiHeart,
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaDribbble,
} from 'react-icons/fa';

const footerLinks = {
  services: [
    { name: 'SEO Optimization', href: '#services' },
    { name: 'Social Media Marketing', href: '#services' },
    { name: 'PPC Advertising', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Custom Software', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Documentation', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'hover:bg-[#1877f2]' },
  { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:bg-[#1da1f2]' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
  { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]' },
  { icon: FaGithub, href: '#', label: 'GitHub', color: 'hover:bg-[#333]' },
  { icon: FaDribbble, href: '#', label: 'Dribbble', color: 'hover:bg-[#ea4c89]' },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Ready to start your project?
              </h3>
              <p className="text-white/60">
                Let&apos;s create something amazing together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="#contact"
                className="btn-animate px-8 py-4 gradient-accent text-white rounded-full font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all"
              >
                Get Free Consultation
              </Link>
              <Link
                href="#portfolio"
                className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">RoshanTech</span>
                <span className="block text-xs text-accent font-medium tracking-widest uppercase">Digital Agency</span>
              </div>
            </Link>
            <p className="text-white/60 mb-8 leading-relaxed max-w-sm">
              Empowering businesses with innovative digital solutions. We transform ideas
              into powerful digital experiences that drive growth and success.
            </p>
            <div className="space-y-4">
              {[
                { icon: HiLocationMarker, text: '123 Innovation Drive, Tech City, TC 12345' },
                { icon: HiMail, text: 'hello@roshantech.com' },
                { icon: HiPhone, text: '+1 (555) 123-4567' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/60 text-sm group cursor-pointer hover:text-accent transition-colors">
                  <item.icon className="text-accent flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-accent transition-colors animated-underline inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-accent transition-colors animated-underline inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-accent transition-colors animated-underline inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-white/40 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} RoshanTech. Made with 
            <HiHeart className="text-red-500 animate-pulse" /> 
            All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={`w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:border-transparent ${social.color} transition-all duration-300`}
              >
                <social.icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 gradient-accent rounded-full flex items-center justify-center text-white shadow-2xl shadow-accent/40 z-50 transition-all duration-300 hover:scale-110 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <HiArrowUp className="text-xl" />
      </button>
    </footer>
  );
}
