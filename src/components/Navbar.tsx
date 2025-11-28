import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1F]/80 backdrop-blur-lg border-b border-[#38BDF8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold text-white">
              Vault<span className="text-[#38BDF8]">Net</span>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-[#38BDF8] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#38BDF8] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-[#38BDF8] transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('flow')} className="text-gray-300 hover:text-[#38BDF8] transition-colors">
                Flow
              </button>
              <button onClick={() => scrollToSection('applications')} className="text-gray-300 hover:text-[#38BDF8] transition-colors">
                Applications
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#38BDF8] transition-colors">
                Contact
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#38BDF8] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0A0F1F]/95 backdrop-blur-lg border-t border-[#38BDF8]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 rounded-md transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 rounded-md transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 rounded-md transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('flow')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 rounded-md transition-colors"
            >
              Flow
            </button>
            <button
              onClick={() => scrollToSection('applications')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 rounded-md transition-colors"
            >
              Applications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 rounded-md transition-colors"
            >
              Contact
            </button>
            <div className="flex flex-col space-y-2 px-3 pt-2">
              <button className="px-4 py-2 border border-[#38BDF8] text-[#38BDF8] rounded-lg hover:bg-[#38BDF8]/10 transition-all text-center">
                Sign In
              </button>
              <button className="px-4 py-2 bg-[#38BDF8] text-white rounded-lg hover:bg-[#1E90FF] transition-all shadow-lg shadow-[#38BDF8]/50 text-center">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
