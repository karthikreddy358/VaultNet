import { Linkedin, Github, Globe, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0A0F1F] border-t border-[#38BDF8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vault<span className="text-[#38BDF8]">Net</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Secure financial intelligence powered by confidential edge AI. Privacy-first, compliant, and lightning-fast.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center hover:bg-[#38BDF8]/30 transition-all border border-[#38BDF8]/30 hover:border-[#38BDF8]/60"
              >
                <Linkedin className="text-[#38BDF8]" size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center hover:bg-[#38BDF8]/30 transition-all border border-[#38BDF8]/30 hover:border-[#38BDF8]/60"
              >
                <Github className="text-[#38BDF8]" size={18} />
              </a>
              <a
                href="https://portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center hover:bg-[#38BDF8]/30 transition-all border border-[#38BDF8]/30 hover:border-[#38BDF8]/60"
              >
                <Globe className="text-[#38BDF8]" size={18} />
              </a>
              <a
                href="mailto:karthikreddy7818@gmail.com"
                className="w-10 h-10 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center hover:bg-[#38BDF8]/30 transition-all border border-[#38BDF8]/30 hover:border-[#38BDF8]/60"
              >
                <Mail className="text-[#38BDF8]" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('applications')} className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Applications
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('flow')} className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  System Workflow
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#38BDF8]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} VaultNet. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with <span className="text-[#38BDF8]">VaultNet Confidential Edge AI</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#38BDF8]/5 blur-3xl"></div>
    </footer>
  );
}
