'use client';

import { useState } from 'react';
import { HiLocationMarker, HiMail, HiPhone, HiPaperAirplane, HiCheckCircle, HiChat, HiCalendar } from 'react-icons/hi';
import { FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-28 bg-gray relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <HiChat className="text-primary mr-2" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Let&apos;s Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-dark-light/70 max-w-2xl mx-auto text-lg">
            Ready to transform your digital presence? Get in touch with our team
            and let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact Cards */}
            {[
              {
                icon: HiLocationMarker,
                title: 'Visit Us',
                info: '123 Innovation Drive, Tech City, TC 12345',
                color: 'from-violet-500 to-purple-600',
              },
              {
                icon: HiMail,
                title: 'Email Us',
                info: 'hello@roshantech.com',
                color: 'from-primary to-accent',
              },
              {
                icon: HiPhone,
                title: 'Call Us',
                info: '+1 (555) 123-4567',
                color: 'from-emerald-500 to-teal-600',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group hover-lift bg-white rounded-2xl p-6 flex items-start gap-4 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-dark-light/60 text-sm">{item.info}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-dark mb-4">Connect With Us</h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: FaWhatsapp, color: 'bg-[#25D366]', label: 'WhatsApp' },
                  { icon: FaLinkedin, color: 'bg-[#0077b5]', label: 'LinkedIn' },
                  { icon: FaTwitter, color: 'bg-[#1DA1F2]', label: 'Twitter' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <HiCalendar className="text-primary text-xl" />
                <h4 className="font-bold text-dark">Working Hours</h4>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM', active: true },
                  { day: 'Saturday', time: '10:00 AM - 4:00 PM', active: true },
                  { day: 'Sunday', time: 'Closed', active: false },
                ].map((schedule, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-dark-light/60">{schedule.day}</span>
                    <span className={`font-medium ${schedule.active ? 'text-dark' : 'text-dark-light/40'}`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-dark">
                <div className="flex items-center gap-2 text-success text-sm font-medium">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  We typically respond within 2 hours
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-primary/5 relative overflow-hidden">
              {/* Success Overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center animate-fadeInUp">
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
                    <HiCheckCircle className="text-success text-5xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Message Sent!</h3>
                  <p className="text-dark-light/60">We&apos;ll get back to you within 24 hours.</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="group">
                  <label htmlFor="name" className="block text-dark font-medium mb-2">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray rounded-xl border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark font-medium mb-2">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray rounded-xl border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-dark font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray rounded-xl border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-dark font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray rounded-xl border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="ppc">PPC Advertising</option>
                    <option value="content">Content Marketing</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="custom">Custom Software</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="budget" className="block text-dark font-medium mb-2">
                  Project Budget
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['$5k-$10k', '$10k-$25k', '$25k-$50k', '$50k+'].map((range) => (
                    <label
                      key={range}
                      className={`flex items-center justify-center px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.budget === range
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-gray-dark bg-gray text-dark-light hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={range}
                        checked={formData.budget === range}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="font-medium text-sm">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-dark font-medium mb-2">
                  Your Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-gray rounded-xl border-2 border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-dark-light/50 text-sm">
                  By submitting, you agree to our{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-animate w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 gradient-accent text-white rounded-full font-semibold text-lg shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <HiPaperAirplane className="text-xl" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
