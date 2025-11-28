import { Shield, Cpu, Lock, Network } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0A0F1F]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 via-transparent to-[#1E90FF]/5"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#38BDF8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E90FF]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Secure Financial Intelligence.{' '}
              <span className="text-[#38BDF8]">On Your Device.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              VaultNet provides encrypted, on-device credit scoring and financial risk analysis with zero cloud dependency — ensuring privacy, speed, and complete user control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('features')}
                className="px-8 py-4 bg-[#38BDF8] text-white rounded-lg hover:bg-[#1E90FF] transition-all shadow-lg shadow-[#38BDF8]/50 hover:shadow-xl hover:shadow-[#38BDF8]/60 transform hover:-translate-y-0.5 font-semibold text-lg"
              >
                Explore Features
              </button>
              <button
                onClick={() => scrollToSection('flow')}
                className="px-8 py-4 border-2 border-[#38BDF8] text-[#38BDF8] rounded-lg hover:bg-[#38BDF8]/10 transition-all font-semibold text-lg"
              >
                View Overview
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#38BDF8]/10 to-transparent backdrop-blur-sm border border-[#38BDF8]/30 rounded-2xl p-6 hover:border-[#38BDF8]/60 transition-all hover:shadow-lg hover:shadow-[#38BDF8]/20 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-[#38BDF8]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Edge AI</h3>
              <p className="text-gray-400 text-sm">On-device intelligence with zero latency</p>
            </div>

            <div className="bg-gradient-to-br from-[#38BDF8]/10 to-transparent backdrop-blur-sm border border-[#38BDF8]/30 rounded-2xl p-6 hover:border-[#38BDF8]/60 transition-all hover:shadow-lg hover:shadow-[#38BDF8]/20 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-[#38BDF8]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Enclaves</h3>
              <p className="text-gray-400 text-sm">Hardware-backed security isolation</p>
            </div>

            <div className="bg-gradient-to-br from-[#38BDF8]/10 to-transparent backdrop-blur-sm border border-[#38BDF8]/30 rounded-2xl p-6 hover:border-[#38BDF8]/60 transition-all hover:shadow-lg hover:shadow-[#38BDF8]/20 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-[#38BDF8]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Encrypted Inference</h3>
              <p className="text-gray-400 text-sm">End-to-end encryption for all operations</p>
            </div>

            <div className="bg-gradient-to-br from-[#38BDF8]/10 to-transparent backdrop-blur-sm border border-[#38BDF8]/30 rounded-2xl p-6 hover:border-[#38BDF8]/60 transition-all hover:shadow-lg hover:shadow-[#38BDF8]/20 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center mb-4">
                <Network className="text-[#38BDF8]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Federated Learning</h3>
              <p className="text-gray-400 text-sm">Privacy-preserving model updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
