import React from 'react';
import { Link } from 'react-router-dom';
import GlobalCTA from '../components/GlobalCTA';
import SEO from '../components/SEO';

export default function Mission() {
    const specsData = [
        { system: 'Displacement', spec: '30–40,000 tons' },
        { system: 'SLCM-N', spec: 'Surface Launch Cruise Missile Nuclear system' },
        { system: 'Hypersonic Weapons', spec: 'Conventional Prompt Strike (CPS) via Advanced Payload Modules' },
        { system: 'Vertical Launch System', spec: '128+ cell Mark 57 PVLS (peripheral configuration)' },
        { system: 'Railgun', spec: '32-megajoule electromagnetic launcher' },
        { system: 'Naval Guns', spec: 'Two 5-inch/62-caliber guns (Mk 45 Mod 4)' },
        { system: 'Directed Energy', spec: '300–600 kW DEW systems' },
        { system: 'Laser Systems', spec: 'Megawatt-class (under development)' }
    ];

    const expertDomains = [
        { domain: 'Armored Steel Manufacturing', desc: 'Scaling armor plate production for capital ship construction' },
        { domain: 'Naval Artillery & Weapons', desc: 'Railgun, directed energy, and hypersonic integration' },
        { domain: 'Modular Shipbuilding', desc: 'Multi-yard construction strategies for 30–40K ton displacement' },
        { domain: 'Combat Systems Integration', desc: 'Platform-level weapons and sensor architecture' },
        { domain: 'Naval Architecture', desc: 'Hull design for next-generation surface combatants' },
        { domain: 'Propulsion & Power Systems', desc: 'Nuclear and conventional options for megawatt-class weapons loads' },
        { domain: 'Workforce Development', desc: 'Rebuilding the shipyard labor pipeline' },
        { domain: 'Defense Acquisition Reform', desc: 'Procurement pathways and budget authorities' }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-obsidian">
            <SEO title="Mission One // Trump-Class Battleship" />

            {/* Hero Section */}
            <section className="relative w-full pt-48 pb-24 overflow-hidden px-6 md:px-12 border-b border-titanium/10">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.15] mix-blend-luminosity grayscale scale-105"
                    style={{ backgroundImage: `url('/mission_bg.png')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>

                <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row gap-12 justify-between items-end">
                    <div className="md:w-2/3">
                        <div className="inline-block border border-tactical-red/30 px-4 py-1.5 bg-tactical-red/5 backdrop-blur-sm rounded-sm mb-8 shadow-glow-red">
                            <p className="font-mono text-tactical-red text-[10px] font-bold tracking-huge uppercase flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-tactical-red rounded-full animate-pulse"></span>
                                <span>Mission One</span>
                            </p>
                        </div>
                        <h1 className="font-sans font-light text-titanium text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] mb-6 uppercase">
                            Building the <br />
                            <span className="font-bold opacity-90 text-5xl md:text-7xl lg:text-8xl">Trump-Class.</span>
                        </h1>
                        <p className="font-mono text-titanium-muted text-lg max-w-2xl leading-relaxed tracking-wider mb-8">
                            The most ambitious warship program since World War II
                        </p>
                    </div>

                    {/* Quick Stats Block */}
                    <div className="md:w-1/3 w-full bg-graphite border border-titanium/10 p-6 rounded-sm">
                        <div className="flex justify-between items-center mb-4 border-b border-titanium/10 pb-4">
                            <span className="font-mono text-xs text-titanium/50 uppercase tracking-widest">Date</span>
                            <span className="font-mono text-sm text-titanium">April 19–24, 2026</span>
                        </div>
                        <div className="flex justify-between items-center mb-4 border-b border-titanium/10 pb-4">
                            <span className="font-mono text-xs text-titanium/50 uppercase tracking-widest">Location</span>
                            <span className="font-mono text-sm text-titanium text-right w-1/2">National Harbor, MD</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-mono text-xs text-titanium/50 uppercase tracking-widest">Format</span>
                            <span className="font-mono text-sm text-tactical-red font-bold">5-Day Sprint</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section A: Platform Specifications */}
            <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
                <div className="mb-16">
                    <h2 className="font-sans font-light text-titanium text-3xl md:text-4xl tracking-tighter uppercase mb-2">
                        Platform Specifications
                    </h2>
                    <p className="font-mono text-[10px] text-tactical-red uppercase tracking-widest font-bold">Target Architecture</p>
                </div>

                <div className="border border-titanium/10 bg-graphite rounded-sm overflow-hidden mb-12">
                    <table className="w-full text-left font-mono text-xs">
                        <thead>
                            <tr className="border-b border-titanium/10 bg-black/40">
                                <th className="p-4 text-titanium/50 font-normal uppercase tracking-widest w-1/3">System</th>
                                <th className="p-4 text-titanium/50 font-normal uppercase tracking-widest w-2/3">Specification</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-titanium/5">
                            {specsData.map((item, idx) => (
                                <tr key={idx} className="hover:bg-titanium/5 transition-colors">
                                    <td className="p-4 text-titanium uppercase tracking-widest">{item.system}</td>
                                    <td className="p-4 text-titanium-muted">{item.spec}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="font-mono text-titanium text-lg leading-relaxed text-center italic border-x border-titanium/10 max-w-4xl mx-auto px-8 py-6 bg-graphite">
                    "This is not an evolution of existing designs. This is a new category of warship."
                </p>
            </section>

            {/* Section B: The Industrial Challenge */}
            <section className="py-24 bg-titanium/5 border-y border-titanium/10">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="mb-16">
                        <h2 className="font-sans font-light text-titanium text-3xl md:text-4xl tracking-tighter uppercase mb-2">
                            The Industrial Challenge
                        </h2>
                        <div className="w-16 h-px bg-tactical-red"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                        {/* Callout Stats */}
                        <div className="lg:w-1/3 flex flex-col space-y-8 min-w-[300px]">
                            <div className="border border-tactical-red/30 bg-tactical-red/5 p-8 rounded-sm text-center relative overflow-hidden group">
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-tactical-red shadow-glow-red"></div>
                                <span className="block font-sans font-light text-7xl text-tactical-red mb-2">66</span>
                                <span className="block font-mono text-[10px] text-titanium/50 uppercase tracking-widest">Total U.S. Shipyards</span>
                            </div>
                            <div className="border border-titanium/10 bg-graphite p-8 rounded-sm text-center relative overflow-hidden group hover:border-tactical-red/30 transition-colors">
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-titanium/30 group-hover:bg-tactical-red/50 transition-colors"></div>
                                <span className="block font-sans font-light text-7xl text-titanium mb-2">8</span>
                                <span className="block font-mono text-[10px] text-titanium/50 uppercase tracking-widest">Actively Building Naval Vessels</span>
                            </div>
                            <div className="border border-titanium/10 bg-graphite p-8 rounded-sm text-center relative overflow-hidden group hover:border-tactical-red/30 transition-colors">
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-titanium/10 group-hover:bg-tactical-red/50 transition-colors"></div>
                                <span className="block font-sans font-light text-7xl text-titanium-muted mb-2">11</span>
                                <span className="block font-mono text-[10px] text-titanium/50 uppercase tracking-widest">With Available Build Positions</span>
                            </div>
                        </div>

                        {/* Body Text */}
                        <div className="lg:w-2/3">
                            <p className="font-mono text-titanium-muted text-sm leading-relaxed mb-8">
                                America's shipbuilding capacity has atrophied to crisis levels. The White House Maritime Action Plan, released February 2026, documents the problem in stark terms. The workforce pipeline is broken. The supply chains are fragile. And no existing yard has built a surface combatant of this scale in living memory.
                            </p>
                            <div className="border-l border-tactical-red/50 pl-8 ml-4">
                                <p className="font-sans font-medium text-titanium text-xl leading-relaxed">
                                    Solving 'how to build Trump-class battleships' requires simultaneously solving a dozen interlocking problems:
                                </p>
                                <p className="font-mono text-titanium-muted text-sm leading-relaxed mt-4">
                                    Armor plate production (concentrated in a single domestic supplier), railgun and directed energy integration (never attempted on a capital ship), propulsion engineering (simultaneous weapons and combat systems power demand exceeds reserve capacity of existing naval power plants), modular multi-yard construction, combat systems architecture, workforce training, and acquisition reform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section D: Expert Domains */}
            <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
                <div className="mb-16">
                    <span className="font-mono text-[10px] text-tactical-red uppercase tracking-widest font-bold mb-4 block">Who's In The Room</span>
                    <h2 className="font-sans font-light text-titanium text-3xl md:text-4xl tracking-tighter uppercase mb-2">
                        Expert Domains
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {expertDomains.map((item, idx) => (
                        <div key={idx} className="bg-graphite border border-titanium/10 p-6 hover:border-tactical-red/50 transition-colors duration-300 group">
                            <div className="flex justify-between items-start mb-6">
                                <span className="font-mono text-[10px] text-titanium/50 uppercase tracking-widest">0{idx + 1}</span>
                                <div className="w-1.5 h-1.5 bg-titanium/30 rounded-full group-hover:bg-tactical-red transition-colors"></div>
                            </div>
                            <h3 className="font-sans text-lg text-titanium uppercase tracking-tight leading-snug mb-4 group-hover:text-tactical-red transition-colors">
                                {item.domain}
                            </h3>
                            <p className="font-mono text-xs text-titanium-muted leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="font-mono text-[10px] text-titanium/50 uppercase tracking-widest mb-6">
                        (Full speaker list available upon confirmation)
                    </p>
                    <Link to="/participate" className="inline-block border text-[10px] border-titanium/30 px-6 py-2 text-titanium hover:bg-tactical-red/5 hover:border-tactical-red/50 transition-colors cursor-crosshair font-mono uppercase tracking-widest">
                        Request Briefing For Details
                    </Link>
                </div>
            </section>

            {/* Section E: The Delivery */}
            <section className="py-32 bg-obsidian border-t border-titanium/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tactical-red/5 to-transparent pointer-events-none"></div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                    <div className="md:w-1/2">
                        <span className="font-mono text-tactical-red outline-text text-8xl md:text-9xl absolute -top-12 -left-12 opacity-10 pointer-events-none select-none">APR 24</span>
                        <h2 className="font-sans font-medium text-titanium text-4xl md:text-5xl tracking-tight leading-[1.1] mb-8">
                            By April 24, Ocean Wolf delivers a comprehensive, <span className="text-tactical-red shadow-glow-red">AI-augmented engineering roadmap</span> for Trump-class construction.
                        </h2>
                    </div>
                    <div className="md:w-1/2">
                        <div className="border-l border-titanium/30 pl-8 ml-4">
                            <p className="font-mono text-titanium-muted text-sm leading-relaxed mb-6">
                                Not a study. Not a proposal. Not a 200-page document that sits on a shelf. An actionable engineering roadmap — with expert validation at every step, AI-generated integration analysis, and specific recommendations for overcoming every identified industrial constraint.
                            </p>
                            <p className="font-mono text-titanium text-lg leading-relaxed font-bold uppercase tracking-widest">
                                The kind of report that changes decisions. This week.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <GlobalCTA />
        </div>
    );
}
