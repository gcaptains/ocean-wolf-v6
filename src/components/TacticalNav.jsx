import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TacticalNav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 hairline-b ${scrolled ? 'bg-obsidian/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* Logo Mark */}
                <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 border border-titanium/30 flex items-center justify-center">
                        <div className="w-2 h-2 bg-titanium"></div>
                    </div>
                    <span className="font-sans font-bold text-lg tracking-huge uppercase text-titanium">
                        Ocean Wolf
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-12">
                    <Link to="/protocol" className="font-mono text-[11px] text-titanium-muted hover:text-titanium tracking-widest uppercase transition-colors">
                        Protocol
                    </Link>
                    <Link to="/mission/trump-class" className="font-mono text-[11px] text-titanium-muted hover:text-titanium tracking-widest uppercase transition-colors">
                        Mission
                    </Link>
                    <Link to="/participate" className="font-mono text-[11px] text-titanium-muted hover:text-titanium tracking-widest uppercase transition-colors">
                        Participate
                    </Link>
                    <Link to="/about" className="font-mono text-[11px] text-titanium-muted hover:text-titanium tracking-widest uppercase transition-colors">
                        About
                    </Link>

                    {/* CTA Button */}
                    <div className="pl-8 border-l border-titanium/10 flex items-center space-x-6">
                        {/* Status Indicator */}
                        <div className="flex items-center space-x-3">
                            <div className="relative flex items-center justify-center w-3 h-3">
                                <div className="absolute w-full h-full bg-tactical-red rounded-full opacity-40 animate-ping"></div>
                                <div className="relative w-1.5 h-1.5 bg-tactical-red rounded-full shadow-glow-red"></div>
                            </div>
                            <span className="font-mono text-[10px] text-titanium/80 tracking-widest uppercase">
                                Clearance: Active
                            </span>
                        </div>

                        <Link to="/participate" className="group relative inline-flex items-center justify-center border border-titanium/30 px-6 py-2 overflow-hidden transition-all duration-300 hover:border-tactical-red/50 hover:bg-tactical-red/5 cursor-crosshair">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-titanium/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                            <span className="relative z-10 font-mono font-bold text-titanium text-[10px] tracking-widest uppercase">
                                Request Briefing
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
}
