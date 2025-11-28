import { Cpu, Lock, Shield, Network, Eye, Gauge, Database, FileCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Cpu,
      title: 'Confidential Edge AI',
      description: 'All AI computations run locally on user devices with hardware-backed security',
    },
    {
      icon: Lock,
      title: 'Encrypted Inference-as-a-Service',
      description: 'End-to-end encrypted model serving without exposing data or models',
    },
    {
      icon: Shield,
      title: 'Secure Enclave Execution',
      description: 'Trusted execution environments ensure complete data isolation',
    },
    {
      icon: Network,
      title: 'Federated Model Evolution',
      description: 'Models learn from distributed data without centralized collection',
    },
    {
      icon: Eye,
      title: 'Zero Data Leakage',
      description: 'Raw financial data never leaves the device at any point',
    },
    {
      icon: Gauge,
      title: 'Real-Time Risk Scoring',
      description: 'Instant credit and risk assessments with millisecond latency',
    },
    {
      icon: Database,
      title: 'Local Financial Data Processing',
      description: 'Process sensitive banking data entirely on-device for maximum security',
    },
    {
      icon: FileCheck,
      title: 'Privacy-First Architecture',
      description: 'Designed from the ground up with privacy and compliance as core principles',
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-[#0A0F1F] to-[#0F1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Core <span className="text-[#38BDF8]">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#1E90FF] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology stack designed for maximum security, privacy, and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#38BDF8]/5 to-transparent backdrop-blur-sm border border-[#38BDF8]/20 rounded-2xl p-6 hover:border-[#38BDF8]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#38BDF8]/20 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#38BDF8]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#38BDF8]/30 transition-colors border border-[#38BDF8]/30">
                  <Icon className="text-[#38BDF8]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
