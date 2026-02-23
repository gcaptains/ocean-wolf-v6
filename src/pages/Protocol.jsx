import React from 'react';
import GlobalCTA from '../components/GlobalCTA';
import SEO from '../components/SEO';

export default function Protocol() {
    const cycleSteps = [
        { day: 'Monday', title: 'DEFINE', desc: 'The problem is decomposed. Every assumption challenged. Every constraint identified. One question: what exactly are we solving, and what does success look like by Friday? The master AI prompt is constructed.' },
        { day: 'Tuesday', title: 'ASSEMBLE', desc: 'Every seat filled by the top domain expert. Not generalists. The engineer who designed the component. The manufacturer who bends the steel. Each expert presents for 30 minutes: what does their domain contribute?' },
        { day: 'Wednesday', title: 'SYNTHESIZE', desc: 'All expert inputs transcribed and fed into AI systems. Cross-references every proposal. Identifies conflicts and synergies. Maps dependencies. Generates integrated solution framework.' },
        { day: 'Thursday', title: 'VALIDATE', desc: 'Critical experts return to review the AI-generated report section by section. Is the integration correct? What did the AI miss? What did it get brilliantly right? Final feedback incorporated.' },
        { day: 'Friday', title: 'DELIVER', desc: 'Comprehensive report delivered to the Secretary of War. Actionable plan with specific engineering solutions, industrial pathways, timeline estimates, and identified risks — validated by domain experts and synthesized by AI.' }
    ];

    const decisionPackage = [
        { doc: 'Executive Summary', pages: '2-3', desc: 'Flag officer ready — the decision in two pages' },
        { doc: 'Decision Brief', pages: '5-7', desc: 'Options, risks, and recommendation with evidence' },
        { doc: 'Stakeholder Slides', pages: '30-40', desc: 'Briefing-ready deck with speaker notes' },
        { doc: 'Full Analytical Report', pages: '25-35', desc: 'Complete evidence, analysis, and methodology' },
        { doc: 'Implementation Roadmap', pages: '10-15', desc: 'Timeline, milestones, cost estimates, dependencies' },
        { doc: 'Supporting Materials', pages: 'Variable', desc: 'Expert bios, bibliography, assumption ledger, risk register' }
    ];

    const tempoData = [
        { entity: 'Traditional Think Tank', timeline: '18 months', cost: '$1-2M', output: 'Exploratory study', highlight: false },
        { entity: 'Management Consulting', timeline: '8-12 weeks', cost: '$300K-$1M', output: 'Process recommendations', highlight: false },
        { entity: 'Ocean Wolf', timeline: '5 days', cost: '$150-300K', output: 'Decision-grade roadmap', highlight: true }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-obsidian">
            <SEO title="Protocol" />

            {/* Hero Section */}
            <section className="relative w-full pt-48 pb-24 overflow-hidden px-6 md:px-12 border-b border-titanium/10">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.10] mix-blend-luminosity grayscale"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620021307613-25ed32ddcdb3?q=80&w=2600&auto=format&fit=crop')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <h1 className="font-sans font-light text-titanium text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] mb-6 uppercase">
                        The Wolf <span className="font-bold opacity-90">Protocol.</span>
                    </h1>
                    <p className="font-mono text-tactical-red text-lg max-w-2xl leading-relaxed tracking-wider mb-12 shadow-glow-red font-bold">
                        Five days. One problem. Decision-grade results.
                    </p>
                </div>
            </section>

            {/* Section A: The Cycle */}
            <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
                <div className="mb-16">
                    <span className="font-mono text-[10px] text-tactical-red uppercase tracking-widest font-bold mb-4 block">Process Flow</span>
                    <h2 className="font-sans font-light text-titanium text-3xl md:text-4xl tracking-tighter uppercase mb-2">
                        The Cycle
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {cycleSteps.map((step, idx) => (
                        <div key={idx} className="bg-graphite border border-titanium/10 p-6 flex flex-col hover:border-tactical-red/50 transition-colors duration-300 group">
                            <div className="mb-8">
                                <span className="font-mono text-[10px] text-titanium/50 uppercase tracking-widest block mb-2 group-hover:text-tactical-red transition-colors">
                                    Day {idx + 1} // {step.day}
                                </span>
                                <h3 className="font-sans text-2xl text-titanium uppercase tracking-tight group-hover:text-tactical-red transition-colors">
                                    {step.title}
                                </h3>
                            </div>
                            <p className="font-mono text-xs text-titanium-muted leading-relaxed mt-auto border-t border-titanium/10 pt-4">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section B: The AI Engine */}
            <section className="py-24 bg-titanium/5 border-y border-titanium/10">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="mb-16">
                        <h2 className="font-sans font-light text-titanium text-3xl md:text-4xl tracking-tighter uppercase mb-2">
                            The AI Engine
                        </h2>
                        <div className="w-16 h-px bg-tactical-red"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <span className="font-mono text-tactical-red text-xs font-bold tracking-widest uppercase bg-tactical-red/10 px-3 py-1.5 rounded-sm inline-block mb-6">Pre-Sprint</span>
                            <ul className="space-y-4 font-mono text-xs text-titanium-muted leading-relaxed">
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span>Process 100+ documents in hours</span></li>
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span>Extract historical precedents and case studies</span></li>
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span>Map assumption dependencies across domains</span></li>
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span>Generate initial position synthesis for expert review</span></li>
                            </ul>
                        </div>
                        <div>
                            <span className="font-mono text-tactical-red text-xs font-bold tracking-widest uppercase bg-tactical-red/10 px-3 py-1.5 rounded-sm inline-block mb-6 animate-pulse shadow-glow-red">During Sprint</span>
                            <ul className="space-y-4 font-mono text-xs text-titanium-muted leading-relaxed">
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span className="text-titanium">Real-time debate transcription and analysis</span></li>
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span className="text-titanium">Live argument strength scoring</span></li>
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span className="text-titanium">Cross-reference expert claims against evidence base</span></li>
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span>Flag logical inconsistencies automatically</span></li>
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span>Generate data visualizations on demand</span></li>
                            </ul>
                        </div>
                        <div>
                            <span className="font-mono text-tactical-red text-xs font-bold tracking-widest uppercase bg-tactical-red/10 px-3 py-1.5 rounded-sm inline-block mb-6">Post-Sprint</span>
                            <ul className="space-y-4 font-mono text-xs text-titanium-muted leading-relaxed">
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span>Draft report sections from session notes</span></li>
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span>Generate stakeholder briefing slides</span></li>
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span>Build risk assessment matrices</span></li>
                                <li className="flex items-start space-x-3"><span className="text-tactical-red">»</span><span>Create executive summary with key findings</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section C & D: Output & Tempo */}
            <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* The Decision Package */}
                <div>
                    <h2 className="font-sans font-light text-titanium text-3xl md:text-4xl tracking-tighter uppercase mb-8">
                        The Decision Package
                    </h2>
                    <div className="border border-titanium/10 bg-graphite rounded-sm overflow-hidden">
                        <table className="w-full text-left font-mono text-xs">
                            <thead>
                                <tr className="border-b border-titanium/10 bg-black/40">
                                    <th className="p-4 text-titanium/50 font-normal uppercase tracking-widest">Document</th>
                                    <th className="p-4 text-titanium/50 font-normal uppercase tracking-widest">Pages</th>
                                    <th className="p-4 text-titanium/50 font-normal uppercase tracking-widest">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-titanium/5">
                                {decisionPackage.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-titanium/5 transition-colors">
                                        <td className="p-4 text-titanium">{item.doc}</td>
                                        <td className="p-4 text-tactical-red">{item.pages}</td>
                                        <td className="p-4 text-titanium-muted">{item.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-right">
                        <span className="font-mono text-[10px] text-tactical-red uppercase tracking-widest font-bold">Total Output: 80-120 Pages of decision-grade analysis</span>
                    </div>
                </div>

                {/* Tempo Comparison */}
                <div>
                    <h2 className="font-sans font-light text-titanium text-3xl md:text-4xl tracking-tighter uppercase mb-8">
                        Tempo Comparison
                    </h2>
                    <div className="border border-titanium/10 bg-graphite rounded-sm overflow-hidden">
                        <table className="w-full text-left font-mono text-xs">
                            <thead>
                                <tr className="border-b border-titanium/10 bg-black/40">
                                    <th className="p-4 text-titanium/50 font-normal uppercase tracking-widest">Entity</th>
                                    <th className="p-4 text-titanium/50 font-normal uppercase tracking-widest">Timeline</th>
                                    <th className="p-4 text-titanium/50 font-normal uppercase tracking-widest">Cost</th>
                                    <th className="p-4 text-titanium/50 font-normal uppercase tracking-widest">Output</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-titanium/5">
                                {tempoData.map((item, idx) => (
                                    <tr key={idx} className={`transition-colors ${item.highlight ? 'bg-tactical-red/5 hover:bg-tactical-red/10 border-l border-tactical-red' : 'hover:bg-titanium/5'}`}>
                                        <td className={`p-4 ${item.highlight ? 'text-tactical-red font-bold shadow-glow-red' : 'text-titanium/80'}`}>{item.entity}</td>
                                        <td className={`p-4 ${item.highlight ? 'text-titanium' : 'text-titanium-muted'}`}>{item.timeline}</td>
                                        <td className={`p-4 ${item.highlight ? 'text-titanium' : 'text-titanium-muted'}`}>{item.cost}</td>
                                        <td className={`p-4 ${item.highlight ? 'text-titanium' : 'text-titanium-muted'}`}>{item.output}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            <GlobalCTA />
        </div>
    );
}
