import React from 'react'

export default function SecureComms() {
    return (
        <section id="deployment" className="bg-obsidian w-full py-32 border-t border-titanium/5 relative overflow-hidden">
            {/* Deep Military Logistics Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] mix-blend-luminosity grayscale"
                style={{ backgroundImage: 'url("/secure_comms_bg.png")' }}
            ></div>

            {/* Subtle glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-tactical-red/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">

                <div className="mb-12 inline-flex items-center space-x-3 px-4 py-2 border border-titanium/10 bg-graphite/50 backdrop-blur-sm rounded-sm">
                    <div className="w-1.5 h-1.5 bg-tactical-red rounded-full shadow-glow-red animate-pulse"></div>
                    <span className="font-mono text-[10px] text-titanium/60 uppercase tracking-widest">
                        Secure Channel Available
                    </span>
                </div>

                <h2 className="font-sans font-light text-titanium text-5xl md:text-7xl tracking-tighter leading-tight mb-8">
                    Initiate the <br /><span className="font-medium">Protocol.</span>
                </h2>

                <p className="font-mono text-titanium-muted text-sm max-w-lg mb-16 leading-relaxed">
                    Designated contracting officers and clearing agencies only. Requests are processed within 12 hours of clearance verification.
                </p>

                <button className="group relative inline-flex items-center justify-center bg-transparent border border-titanium/20 px-12 py-5 overflow-hidden transition-all duration-500 hover:border-tactical-red/50 hover:bg-tactical-red/5">
                    {/* Button glow effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-titanium/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

                    <span className="relative z-10 font-mono font-bold text-titanium text-sm tracking-widest uppercase flex items-center space-x-4">
                        <span>[ Request Briefing ]</span>
                        <span className="text-tactical-red group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                </button>

            </div>
        </section>
    )
}
