import { CreditCard, Smartphone, BarChart3, Code, Building2, AlertTriangle } from 'lucide-react';

export default function Applications() {
  const applications = [
    {
      icon: CreditCard,
      title: 'Online Credit Rating Systems',
      description: 'Secure, privacy-preserving credit scoring for lending platforms',
    },
    {
      icon: Smartphone,
      title: 'Mobile Banking Apps',
      description: 'On-device financial intelligence for banking applications',
    },
    {
      icon: BarChart3,
      title: 'Personal Finance Dashboards',
      description: 'Real-time financial insights without compromising data privacy',
    },
    {
      icon: Code,
      title: 'Fintech Lending APIs',
      description: 'API-first risk assessment for embedded finance solutions',
    },
    {
      icon: Building2,
      title: 'ATM/Terminal Risk Scoring',
      description: 'Instant transaction risk evaluation at point-of-service',
    },
    {
      icon: AlertTriangle,
      title: 'Fraud Detection & Alerts',
      description: 'Real-time anomaly detection with zero-latency response',
    },
  ];

  return (
    <section id="applications" className="relative py-20 bg-gradient-to-b from-[#0F1629] to-[#0A0F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Real-World <span className="text-[#38BDF8]">Applications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#1E90FF] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            VaultNet powers secure financial intelligence across diverse use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#38BDF8]/10 to-transparent backdrop-blur-sm border border-[#38BDF8]/30 rounded-2xl p-8 hover:border-[#38BDF8]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#38BDF8]/20 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/0 to-[#38BDF8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#38BDF8]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#38BDF8]/30 transition-all duration-300 border border-[#38BDF8]/40 group-hover:scale-110 transform">
                    <Icon className="text-[#38BDF8]" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">
                    {app.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-[#38BDF8]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
