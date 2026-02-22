import React from 'react';

export default function AssetPool() {
    return (
        <section id="asset-pool" className="w-full bg-obsidian py-32 border-t border-titanium/5 relative">

            {/* Very faint background pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24">
                    <div className="max-w-2xl mb-12 md:mb-0">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-2 h-2 bg-titanium rounded-sm"></div>
                            <h2 className="font-mono text-titanium-muted text-xs tracking-widest uppercase font-bold">
                                The Human Infrastructure
                            </h2>
                        </div>
                        <h3 className="font-sans font-light text-titanium text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6">
                            40,000 cleared defense professionals.
                        </h3>
                        <p className="font-mono text-titanium-muted text-sm leading-relaxed max-w-lg">
                            An unprecedented extraction of talent. The network spans active-duty commanders, specialized aerospace engineers, and classified cryptologists. We don't hire consultants; we deploy practitioners.
                        </p>
                    </div>

                    {/* Stats Overview */}
                    <div className="flex flex-col space-y-8 min-w-[300px]">
                        <div>
                            <div className="flex justify-between font-mono text-xs text-titanium uppercase mb-2">
                                <span>Clearance Level &gt; TS/SCI</span>
                                <span>68%</span>
                            </div>
                            <div className="w-full h-1 bg-titanium/10 rounded-full overflow-hidden">
                                <div className="h-full bg-titanium w-[68%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between font-mono text-xs text-titanium uppercase mb-2">
                                <span>Combat / Field Deployment</span>
                                <span>42%</span>
                            </div>
                            <div className="w-full h-1 bg-titanium/10 rounded-full overflow-hidden">
                                <div className="h-full bg-titanium w-[42%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between font-mono text-xs text-tactical-red font-bold uppercase mb-2">
                                <span>Immediate Availability</span>
                                <span>100%</span>
                            </div>
                            <div className="w-full h-1 bg-tactical-red/20 rounded-full overflow-hidden">
                                <div className="h-full bg-tactical-red w-full shadow-glow-red"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-titanium/10 p-px rounded-sm">
                    {[
                        { title: 'Aerospace Engineering', num: '12K', desc: 'Hypersonics, Propulsion & Avionic Systems' },
                        { title: 'Naval Architecture', num: '8K', desc: 'Submersibles, Fleet Logistics & Weaponry' },
                        { title: 'Cyber & Cryptology', num: '14K', desc: 'Offensive Security, SIGINT & Exploitation' },
                        { title: 'Special Operations', num: '6K', desc: 'Tier 1 Operators, Intelligence & Recon' }
                    ].map((item, i) => (
                        <div key={i} className="bg-graphite hover:bg-graphite-light p-8 transition-colors duration-300 group">
                            <span className="font-mono text-3xl text-titanium font-light mb-4 block group-hover:text-tactical-red transition-colors">
                                {item.num}
                            </span>
                            <span className="font-mono text-xs text-titanium uppercase tracking-widest font-bold block mb-2">
                                {item.title}
                            </span>
                            <span className="font-sans text-titanium-muted text-xs leading-relaxed">
                                {item.desc}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
