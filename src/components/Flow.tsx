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
            <div className="flex items-center justify-center min-h-[400px] bg-[#0A0F1F]/50 rounded-2xl border border-[#38BDF8]/20">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-[#38BDF8]/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#38BDF8]/50">
                  <svg
                    className="w-12 h-12 text-[#38BDF8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Flow Diagram</h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Please provide your product flow diagram image to display here. The image will be centered and styled with a glassmorphism border.
                </p>
                <p className="text-sm text-[#38BDF8]/70">
                  Supported formats: PNG, JPG, SVG
                </p>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
