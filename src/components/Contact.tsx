import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Globe, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0A0F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in <span className="text-[#38BDF8]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#1E90FF] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions about VaultNet? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#38BDF8]/10 to-transparent backdrop-blur-sm border border-[#38BDF8]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#38BDF8]/30">
                    <Mail className="text-[#38BDF8]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:karthikreddy7818@gmail.com" className="text-white hover:text-[#38BDF8] transition-colors text-lg">
                      karthikreddy7818@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#38BDF8]/30">
                    <Phone className="text-[#38BDF8]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a href="tel:+91" className="text-white hover:text-[#38BDF8] transition-colors text-lg">
                      +91 [Your Number]
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-gray-400 text-sm mb-4">Connect with us</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center hover:bg-[#38BDF8]/30 transition-all border border-[#38BDF8]/30 hover:border-[#38BDF8]/60 transform hover:-translate-y-1"
                    >
                      <Linkedin className="text-[#38BDF8]" size={20} />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center hover:bg-[#38BDF8]/30 transition-all border border-[#38BDF8]/30 hover:border-[#38BDF8]/60 transform hover:-translate-y-1"
                    >
                      <Github className="text-[#38BDF8]" size={20} />
                    </a>
                    <a
                      href="https://portfolio.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center hover:bg-[#38BDF8]/30 transition-all border border-[#38BDF8]/30 hover:border-[#38BDF8]/60 transform hover:-translate-y-1"
                    >
                      <Globe className="text-[#38BDF8]" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#38BDF8]/5 to-transparent backdrop-blur-sm border border-[#38BDF8]/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Project Creator</h4>
              <p className="text-2xl font-bold text-[#38BDF8] mb-2">Nasannagari Karthik Reddy</p>
              <p className="text-gray-400">VaultNet Developer & Security Architect</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#38BDF8]/10 to-transparent backdrop-blur-sm border border-[#38BDF8]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0F1F]/50 border border-[#38BDF8]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0F1F]/50 border border-[#38BDF8]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0A0F1F]/50 border border-[#38BDF8]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#38BDF8] text-white rounded-lg hover:bg-[#1E90FF] transition-all shadow-lg shadow-[#38BDF8]/50 hover:shadow-xl hover:shadow-[#38BDF8]/60 transform hover:-translate-y-0.5 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
