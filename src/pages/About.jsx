import React from 'react';
import { Link } from 'react-router-dom';
import GlobalCTA from '../components/GlobalCTA';
import SEO from '../components/SEO';

export default function About() {
    const playbookDays = [
        {
            day: 'MONDAY',
            title: 'The Problem',
            content: 'A critical industrial crisis threatened a multi-billion-dollar deepwater project. A blowout preventer the size of a building was falling behind in Houston. The vessel was being built in South Korea. The delivery window was closing. BP\'s CEO sent one man: "The Wolf." By end of day, The Wolf had mapped every dimension of the problem and had direct access to the CEO because this was the company\'s number-one priority for the week.'
        },
        {
            day: 'TUESDAY',
            title: 'Apollo 13',
            content: 'The Wolf told the team a story. NASA\'s Apollo 13 mission control isn\'t staffed by NASA engineers alone. Each console is manned by the top expert from the company that built that system — the propulsion engineer from the engine manufacturer, the electronics specialist from the avionics company. Domain experts with full information and the authority to solve problems no single organization could handle alone. The Wolf assembled his own mission control.'
        },
        {
            day: 'WEDNESDAY',
            title: '"I Like That Idea"',
            content: 'Someone suggested flying the BOP to South Korea on the Antonov — the world\'s largest operating cargo aircraft. Everyone laughed. That would cost millions. It was ridiculous. The Wolf stood up: "I like that idea. Someone go research it." Sub-agents deployed in parallel. By Wednesday, the Antonov solution was not ridiculous. By Thursday, The Wolf was sightseeing in South Korea, available by phone but trusting his team to execute. The plan was good. The problem was solved.'
        },
        {
            day: 'FRIDAY',
            title: 'The Next Problem',
            content: 'The Wolf boarded a plane to the next country, to solve the next biggest problem. Fifty weeks a year. Fifty problems. Each one the most important challenge the company faced that week.'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-obsidian">
            <SEO title="About" />

            {/* Hero Section */}
            <section className="relative w-full pt-48 pb-24 overflow-hidden px-6 md:px-12 border-b border-titanium/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888049387-195fd0bd48b4?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-[0.15] mix-blend-luminosity grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="inline-block border border-titanium/20 px-4 py-1.5 bg-black/50 backdrop-blur-sm rounded-sm mb-8">
                        <p className="font-mono text-tactical-red text-[10px] font-bold tracking-huge uppercase">
                            The Origin
                        </p>
                    </div>
                    <h1 className="font-sans font-light text-titanium text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] mb-6 uppercase">
                        The Origin of <br />
                        <span className="font-bold opacity-90 text-5xl md:text-7xl lg:text-8xl">Ocean Wolf.</span>
                    </h1>
                    <p className="font-mono text-titanium-muted text-lg max-w-2xl leading-relaxed tracking-wider mb-12">
                        From billion-dollar crisis resolution to national defense.
                    </p>
                </div>
            </section>

            {/* Section A: The Wolf's Playbook */}
            <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
                <div className="mb-16">
                    <h2 className="font-sans font-light text-titanium text-3xl md:text-4xl tracking-tighter uppercase mb-2">
                        The Wolf's Playbook
                    </h2>
                    <div className="w-16 h-px bg-tactical-red"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {playbookDays.map((panel, idx) => (
                        <div key={idx} className="bg-graphite border border-titanium/5 p-8 rounded-sm hover:border-tactical-red/30 transition-all duration-300 group flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <span className="font-mono text-[10px] bg-titanium/10 text-titanium px-2 py-1 uppercase tracking-widest group-hover:bg-tactical-red/20 group-hover:text-tactical-red transition-colors">
                                    {panel.day}
                                </span>
                                <div className="w-1.5 h-1.5 bg-titanium/30 rounded-full group-hover:bg-tactical-red group-hover:shadow-glow-red transition-all duration-300"></div>
                            </div>
                            <h3 className="font-sans text-xl text-titanium mb-4">{panel.title}</h3>
                            <p className="font-mono text-xs text-titanium-muted leading-relaxed flex-grow">
                                {panel.content}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section B: Manifesto */}
            <section className="py-32 bg-titanium/5 border-y border-titanium/10 relative overflow-hidden">
                {/* Schematic pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                }}></div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                    <div className="md:w-1/2">
                        <span className="font-mono text-[10px] text-titanium/50 uppercase tracking-widest mb-6 block">
                            The Department of War doesn't lack talent. It doesn't lack resources. It doesn't lack will.
                        </span>
                        <h2 className="font-sans font-medium text-tactical-red text-4xl md:text-5xl tracking-tight leading-[1.1] mb-8 shadow-glow-red inline-block" style={{ textShadow: '0 0 40px rgba(153,0,0,0.3)' }}>
                            What it lacks is a mechanism for bringing the right experts together and enabling leaders to act in days rather than months.
                        </h2>
                    </div>
                    <div className="md:w-1/2">
                        <div className="border-l border-tactical-red/50 pl-8 ml-4">
                            <p className="font-mono text-titanium-muted text-sm leading-relaxed mb-6">
                                Ocean Wolf is that mechanism. Enhanced with advanced AI that processes expert testimony in real-time, cross-references industrial data, identifies integration conflicts, and generates comprehensive implementation roadmaps—
                            </p>
                            <p className="font-mono text-titanium text-lg leading-relaxed font-bold">
                                Ocean Wolf produces in one week what traditional defense analysis takes a year to deliver.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section C: The Name & Quote */}
            <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
                <div className="max-w-3xl mx-auto mb-24">
                    <span className="font-mono text-[10px] text-tactical-red uppercase tracking-widest font-bold mb-4 block">
                        Origin Of The Identifier
                    </span>
                    <h3 className="font-sans font-light text-titanium text-2xl md:text-3xl leading-relaxed italic border-x border-titanium/10 px-8 py-4 bg-graphite rounded-sm">
                        "Ocean Wolf — from the maritime domain where the methodology was born, and from the man who proved that focused problem-solving can move faster than bureaucracy."
                    </h3>
                </div>

                <div className="max-w-2xl mx-auto flex flex-col items-center">
                    <div className="w-px h-16 bg-titanium/20 mb-8"></div>
                    <h2 className="font-sans font-bold text-titanium text-4xl md:text-5xl uppercase tracking-tighter mb-4">
                        "People, ideas, technology — in that order."
                    </h2>
                    <p className="font-mono text-[11px] text-titanium-muted tracking-widest uppercase">
                        — Colonel John Boyd, USAF
                    </p>
                </div>
            </section>

            <GlobalCTA />
        </div>
    );
}
