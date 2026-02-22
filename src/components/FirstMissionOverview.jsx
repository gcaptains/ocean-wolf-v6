import React from 'react';
import { Link } from 'react-router-dom';

export default function FirstMissionOverview() {
    return (
        <section className="w-full bg-obsidian py-32 border-t border-titanium/10 relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end">
                    <div>
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="w-2 h-2 bg-tactical-red shadow-glow-red rounded-full animate-pulse"></span>
                            <h2 className="font-mono text-tactical-red text-xs tracking-widest uppercase font-bold">
                                First Mission Launch
                            </h2>
                        </div>
                        <h3 className="font-sans font-light text-titanium text-4xl lg:text-5xl tracking-tight leading-[1.1]">
                            The <span className="font-medium">Trump-Class</span> Battleship.
                        </h3>
                    </div>
                </div>

                {/* Stacking Cards Container */}
                <div className="flex flex-col md:flex-row gap-6">

                    {/* Card 1: The Challenge */}
                    <div className="flex-1 bg-graphite border border-titanium/5 p-8 rounded-sm hover:-translate-y-2 hover:border-tactical-red/30 transition-all duration-300 flex flex-col">
                        <span className="font-mono text-xs text-titanium/50 uppercase tracking-widest mb-4">Phase 01</span>
                        <h4 className="font-sans text-xl text-titanium mb-4">The Challenge</h4>
                        <p className="font-mono text-sm text-titanium-muted leading-relaxed mb-6 flex-grow">
                            30–40,000 tons of American naval power. Railguns. Hypersonic missiles. Directed energy weapons. The most ambitious warship since the Iowa class. But America has only 8 active shipbuilding yards and a workforce crisis that threatens every timeline.
                        </p>
                    </div>

                    {/* Card 2: The Assembly */}
                    <div className="flex-1 bg-graphite border border-titanium/5 p-8 rounded-sm hover:-translate-y-2 hover:border-tactical-red/30 transition-all duration-300 md:translate-y-4 flex flex-col">
                        <span className="font-mono text-xs text-titanium/50 uppercase tracking-widest mb-4">Phase 02</span>
                        <h4 className="font-sans text-xl text-titanium mb-4">The Assembly</h4>
                        <p className="font-mono text-sm text-titanium-muted leading-relaxed mb-6 flex-grow">
                            April 19–20, 2026 — National Harbor, MD. Timed with Sea-Air-Space, Ocean Wolf assembles the nation's top experts: armored steel manufacturers, naval gun designers, modular shipbuilders, combat systems integrators, and propulsion engineers.
                        </p>
                    </div>

                    {/* Card 3: The Delivery */}
                    <div className="flex-1 bg-graphite border border-titanium/5 p-8 rounded-sm hover:-translate-y-2 hover:border-tactical-red/30 transition-all duration-300 md:translate-y-8 flex flex-col relative overflow-hidden">
                        {/* Shimmer effect for final card */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-tactical-red/5 to-transparent pointer-events-none"></div>
                        <span className="font-mono text-xs text-tactical-red uppercase tracking-widest font-bold mb-4 relative z-10">Phase 03</span>
                        <h4 className="font-sans text-xl text-titanium mb-4 relative z-10">The Delivery</h4>
                        <p className="font-mono text-sm text-titanium-muted leading-relaxed mb-8 flex-grow relative z-10">
                            By April 24, Ocean Wolf delivers a comprehensive, AI-augmented report: how to design, build, and deliver Trump-class battleships given real industrial constraints. An actionable engineering roadmap.
                        </p>
                        <Link to="/mission/trump-class" className="relative z-10 inline-flex items-center space-x-2 text-titanium hover:text-tactical-red transition-colors w-max group cursor-crosshair">
                            <span className="font-mono text-xs uppercase tracking-widest">Full Mission Brief</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
