import React from 'react';

export default function OriginStoryboard() {
    const timelineEvents = [
        {
            year: '2010',
            title: 'Deepwater Horizon',
            desc: 'BP crisis methodology deployed. CEO assembles experts, unlimited resources, direct authority.'
        },
        {
            year: '2015',
            title: 'Protocol Systematized',
            desc: 'One week per critical problem. Fifty problems per year.'
        },
        {
            year: '2024',
            title: 'Defense Adaptation',
            desc: 'Methodology adapted for national defense. Department of War engagement secured.'
        },
        {
            year: '2026',
            title: 'First Mission Launch',
            desc: 'Trump-Class Battleship. Full national authority. Real stakes.',
            highlight: true
        }
    ];

    return (
        <section className="bg-obsidian w-full py-24 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                <div className="mb-16">
                    <h2 className="font-sans font-light text-titanium text-4xl md:text-5xl tracking-tighter uppercase mb-2">
                        Origin Story
                    </h2>
                    <p className="font-mono text-titanium-muted text-xs tracking-widest uppercase flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-titanium/50 rounded-full"></span>
                        <span>From Crisis to National Defense</span>
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative border-l border-titanium/10 pl-8 ml-4 md:ml-0 space-y-16">

                    {/* Glowing timeline track */}
                    <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-tactical-red/50 via-titanium/10 to-transparent"></div>

                    {timelineEvents.map((event, idx) => (
                        <div key={idx} className="relative group">
                            {/* Timeline Node */}
                            <div className={`absolute -left-[37px] top-1 w-3 h-3 rounded-full border-2 transition-all duration-300 ${event.highlight ? 'bg-tactical-red border-tactical-red shadow-glow-red scale-125' : 'bg-obsidian border-titanium/30 group-hover:border-tactical-red group-hover:bg-tactical-red/20'}`}></div>

                            {/* Event Content */}
                            <div className="flex flex-col md:flex-row md:items-baseline md:space-x-8">
                                <span className={`font-mono text-2xl font-light tabular-nums tracking-widest w-24 shrink-0 transition-colors ${event.highlight ? 'text-tactical-red font-bold' : 'text-titanium'}`}>
                                    {event.year}
                                </span>
                                <div>
                                    <h3 className={`font-mono text-sm tracking-widest uppercase mb-2 ${event.highlight ? 'text-titanium font-bold' : 'text-titanium/80'}`}>
                                        {event.title}
                                    </h3>
                                    <p className="font-sans text-titanium-muted text-sm leading-relaxed max-w-2xl">
                                        {event.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
