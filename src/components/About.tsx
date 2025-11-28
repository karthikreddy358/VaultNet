import { Shield, Zap, Lock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-[#0A0F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-[#38BDF8]">VaultNet</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#1E90FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              VaultNet is a <span className="text-[#38BDF8] font-semibold">confidential edge AI system</span> that performs all financial risk scoring locally on user devices. No raw data ever leaves the machine, ensuring compliance with <span className="text-[#38BDF8]">GDPR, PCI DSS</span>, and global privacy requirements.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              It uses <span className="text-[#38BDF8] font-semibold">secure enclaves, encrypted inference, and federated learning</span> to ensure privacy, speed, and trust.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#38BDF8]/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#38BDF8]/30">
                  <Shield className="text-[#38BDF8]" size={28} />
                </div>
                <p className="text-white font-semibold">Privacy</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#38BDF8]/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#38BDF8]/30">
                  <Zap className="text-[#38BDF8]" size={28} />
                </div>
                <p className="text-white font-semibold">Speed</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#38BDF8]/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#38BDF8]/30">
                  <Lock className="text-[#38BDF8]" size={28} />
                </div>
                <p className="text-white font-semibold">Trust</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#38BDF8]/10 to-transparent backdrop-blur-sm border border-[#38BDF8]/30 rounded-3xl p-8 shadow-2xl shadow-[#38BDF8]/10">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#38BDF8] rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Zero Data Leakage</h4>
                    <p className="text-gray-400">All processing happens on-device with no cloud dependency</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#38BDF8] rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Compliance Ready</h4>
                    <p className="text-gray-400">Built to meet GDPR, PCI DSS, and global regulations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#38BDF8] rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Real-Time Intelligence</h4>
                    <p className="text-gray-400">Instant financial risk scoring with edge computing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#38BDF8] rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Federated Evolution</h4>
                    <p className="text-gray-400">Models improve without exposing sensitive data</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
