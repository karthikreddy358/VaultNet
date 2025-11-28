export default function Flow() {
  return (
    <section id="flow" className="relative py-20 bg-[#0F1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            VaultNet System <span className="text-[#38BDF8]">Workflow</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#1E90FF] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            This is the complete system workflow for VaultNet, illustrating device-side processing, secure enclaves, and federated updates.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#38BDF8]/5 to-transparent backdrop-blur-sm border-2 border-[#38BDF8]/30 rounded-3xl p-8 shadow-2xl shadow-[#38BDF8]/10">

            <div className="flex items-center justify-center">
              <img
                src="/assets/flow.png"
                alt="VaultNet Flow Diagram"
                className="rounded-2xl border border-[#38BDF8]/40 shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Background Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 
            -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
