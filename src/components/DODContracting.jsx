import React, { useState } from 'react'

export default function DODContracting() {
    const [activeNode, setActiveNode] = useState(null);

    const protocolSteps = [
        { day: 'Day 1', label: 'Extraction', desc: 'Secure high-value operators.' },
        { day: 'Day 3', label: 'Consensus', desc: 'Global threat modeling.' },
        { day: 'Day 5', label: 'Delivery', desc: 'Countermeasures deployed.' }
    ];

    return (
        <section id="contracting" className="bg-obsidian w-full py-24 border-t border-titanium/10 relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
                    <div className="max-w-2xl">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-2 h-2 bg-tactical-red rounded-full shadow-glow-red"></div>
                            <h2 className="font-mono text-tactical-red text-xs tracking-widest uppercase font-bold">
                                Deployment Velocity
                            </h2>
                        </div>
                        <h3 className="font-sans font-light text-titanium text-4xl md:text-5xl tracking-tight leading-[1.1]">
                            Bypassing the legacy acquisition cycle.
                        </h3>
                    </div>

                    <p className="font-mono text-titanium-muted text-sm max-w-sm mt-8 md:mt-0 leading-relaxed">
                        Standard DoD procurement timelines are fundamentally incompatible with modern crisis response. We operate on a different temporal axis.
                    </p>
                </div>

                {/* Data Visualization Comparison */}
                <div className="w-full bg-graphite rounded-sm p-8 md:p-12 relative overflow-hidden border border-titanium/5">

                    {/* Traditional Pipeline */}
                    <div className="mb-16 relative z-10">
                        <div className="flex justify-between font-mono text-xs uppercase tracking-widest mb-4">
                            <span className="text-titanium-dark">Legacy Procurement Pipeline</span>
                            <span className="text-titanium-muted">18 Months Minimum</span>
                        </div>
                        <div className="w-full h-8 bg-black/50 rounded-sm overflow-hidden flex">
                            <div className="h-full w-1/4 border-r border-titanium/10 bg-titanium/[0.02]"></div>
                            <div className="h-full w-1/4 border-r border-titanium/10 bg-titanium/[0.02]"></div>
                            <div className="h-full w-1/4 border-r border-titanium/10 bg-titanium/[0.02]"></div>
                            <div className="h-full w-1/4 bg-titanium/[0.02]"></div>
                        </div>
                        <div className="flex justify-between font-mono text-[10px] uppercase text-titanium/30 mt-2">
                            <span>RFP Issuance</span>
                            <span>Vendor Selection</span>
                            <span>Contract Award</span>
                            <span>Initial Capability</span>
                        </div>
                    </div>

                    {/* Ocean Wolf Pipeline */}
                    <div className="relative z-10">
                        <div className="flex justify-between font-mono text-xs uppercase tracking-widest mb-4">
                            <span className="text-titanium">Ocean Wolf Protocol</span>
                            <span className="text-tactical-red font-bold">5 Days Absolute</span>
                        </div>
                        <div className="w-full h-8 bg-black/50 rounded-sm flex relative">
                            {/* The timeline fill */}
                            <div className="absolute top-0 left-0 h-full w-[2%] bg-tactical-red shadow-glow-red z-10 shimmer"></div>

                            {/* Comparison grid underlying */}
                            <div className="absolute inset-0 flex items-center justify-between px-2">
                                {protocolSteps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="relative group flex items-center justify-center cursor-crosshair z-20 w-8 h-8"
                                        onMouseEnter={() => setActiveNode(idx)}
                                        onMouseLeave={() => setActiveNode(null)}
                                    >
                                        {/* Node Dot */}
                                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeNode === idx ? 'bg-tactical-red scale-150 shadow-glow-red' : 'bg-titanium/30'}`}></div>

                                        {/* Tooltip */}
                                        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 w-48 bg-obsidian border border-titanium/20 p-3 rounded-sm transition-all duration-300 pointer-events-none ${activeNode === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                            <span className="font-mono text-tactical-red text-[10px] font-bold tracking-widest uppercase block mb-1">{step.day} // {step.label}</span>
                                            <span className="font-sans text-titanium-muted text-xs leading-tight block">{step.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex font-mono text-[10px] uppercase text-titanium/60 mt-4">
                            <span className="text-tactical-red font-bold">Interactive Nodes: Read Extraction Stages</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
