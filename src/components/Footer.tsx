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
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#38BDF8]/5 blur-3xl"></div>
    </footer>
  );
}
