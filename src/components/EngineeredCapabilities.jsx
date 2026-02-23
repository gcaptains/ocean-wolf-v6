import React, { useState, useEffect } from 'react'

export default function EngineeredCapabilities() {
    // Live Terminal State
    const [terminalLines, setTerminalLines] = useState([
        `> INITIALIZING AI FUSION ENGINE...`,
    ]);

    useEffect(() => {
        const potentialLines = [
            `> Processing expert transcript: Naval Architecture...`,
            `> Cross-referencing industrial base capacity data...`,
            `> Identifying integration conflicts in hull design...`,
            `> Generating modular construction feasibility matrix...`,
            `> Optimizing critical path scheduling...`,
            `> THREAT: ARMOR PLATE SUPPLIER BOTTLENECK DETECTED.`,
            `> Rerouting supply chain dependencies...`,
            `> Synthesis complete. 47 actionable recommendations.`
        ];

        let index = 0;
        const interval = setInterval(() => {
            setTerminalLines(prev => {
                const newLines = [...prev, potentialLines[index]];
                // Keep only last 4 lines to fit in terminal
                return newLines.slice(-4);
            });
            index = (index + 1) % potentialLines.length;
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="capabilities" className="bg-obsidian w-full py-24 relative overflow-hidden">
            {/* Deep Industrial Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05] mix-blend-luminosity grayscale"
                style={{ backgroundImage: 'url("/capabilities_bg.png")' }}
            ></div>

            {/* Schematic Grid Background Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{
                backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
                backgroundSize: '100px 100px'
            }}></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="mb-16 flex items-start space-x-6">
                    <div className="w-px h-16 bg-gradient-to-b from-tactical-red to-transparent"></div>
                    <div>
                        <h2 className="font-sans font-light text-titanium text-4xl md:text-5xl tracking-tighter uppercase mb-2">
                            Advanced AI-Augmented Fusion
                        </h2>
                        <p className="font-mono text-tactical-red text-xs tracking-widest uppercase font-bold">
                            Zero Committees. 100% Signal.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Flow Cards */}
                    <div className="space-y-6">

                        {/* Card 1 */}
                        <div className="group border border-titanium/10 bg-black/40 p-8 rounded-sm hover:border-tactical-red/30 transition-colors duration-300">
                            <h4 className="font-mono text-titanium text-sm uppercase tracking-widest mb-3 group-hover:text-tactical-red transition-colors flex items-center justify-between">
                                <span>The Wolf Protocol</span>
                                <span className="text-tactical-red text-[10px] bg-tactical-red/10 px-2 py-1">[ 01 ]</span>
                            </h4>
                            <p className="font-sans text-titanium-muted text-sm leading-relaxed mb-6">
                                Five days. One problem. Battle-tested methodology from billion-dollar crisis resolution.
                            </p>

                            {/* Cyclic Day indicators inside Card 1 */}
                            <div className="flex flex-wrap gap-2 font-mono text-[10px] text-titanium/50 uppercase tracking-widest">
                                <span className="border border-titanium/20 px-2 py-1">Day 1: Define</span>
                                <span className="border border-titanium/20 px-2 py-1">Day 2: Assemble</span>
                                <span className="border border-titanium/20 px-2 py-1">Day 3: Identify</span>
                                <span className="border border-titanium/20 px-2 py-1">Day 4: Stress-Test</span>
                                <span className="border border-tactical-red/50 text-tactical-red px-2 py-1 shadow-[0_0_10px_rgba(255,0,0,0.1)]">Day 5: Deliver</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group border border-titanium/10 bg-black/40 p-8 rounded-sm hover:border-tactical-red/30 transition-colors duration-300">
                            <h4 className="font-mono text-titanium text-sm uppercase tracking-widest mb-3 group-hover:text-tactical-red transition-colors flex items-center justify-between">
                                <span>One Problem. One Week.</span>
                                <span className="text-tactical-red text-[10px] bg-tactical-red/10 px-2 py-1">[ 02 ]</span>
                            </h4>
                            <p className="font-sans text-titanium-muted text-sm leading-relaxed mb-6">
                                The Secretary identifies the priority. Ocean Wolf deploys. No committees. No 18-month cycles. This week.
                            </p>

                            {/* Weekly Grid */}
                            <div className="flex space-x-1">
                                {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
                                    <div key={i} className="flex-1 h-8 flex items-center justify-center border border-titanium/10 bg-titanium/5 font-mono text-xs text-titanium-muted group-hover:border-tactical-red/30 transition-colors duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                                        {day}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: AI Terminal (Card 3 Equivalent) */}
                    <div className="group border border-titanium/10 bg-graphite p-8 rounded-sm hover:border-tactical-red/30 transition-colors duration-300 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <h4 className="font-mono text-titanium text-sm uppercase tracking-widest group-hover:text-tactical-red transition-colors">AI-Augmented Expert Fusion</h4>
                            <span className="text-tactical-red font-mono text-[10px] bg-tactical-red/10 px-2 py-1">[ 03 ]</span>
                        </div>

                        <p className="font-sans text-titanium-muted text-sm leading-relaxed mb-8">
                            Advanced AI processes expert inputs in real-time, producing in hours what analysts take weeks to compile.
                        </p>

                        {/* Terminal Window */}
                        <div className="w-full flex-grow min-h-[250px] bg-obsidian border border-titanium/5 rounded-sm p-4 overflow-hidden relative mt-auto shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
                            {/* Simulated Live Feed Scanning line */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[rgba(153,0,0,0.05)] to-transparent animate-[scan_3s_linear_infinite] pointer-events-none"></div>

                            <div className="space-y-2 font-mono text-[11px] text-titanium/40 relative z-10 flex flex-col justify-end h-full">
                                {terminalLines.map((line, i) => (
                                    <p key={i} className={line.includes('THREAT') || line.includes('actionable') ? 'text-tactical-red' : ''}>
                                        {line}
                                    </p>
                                ))}
                                <p className="animate-pulse">_</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
