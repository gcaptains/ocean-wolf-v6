import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-obsidian flex-grow items-center justify-center relative overflow-hidden">

            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10" style={{
                backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tactical-red/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 text-center px-6">
                <div className="mb-8 inline-block border border-tactical-red/30 px-6 py-2 bg-tactical-red/10 backdrop-blur-sm rounded-sm shadow-glow-red animate-pulse">
                    <p className="font-mono text-tactical-red text-sm font-bold tracking-huge uppercase">
                        Error 404 // Signal Lost
                    </p>
                </div>

                <h1 className="font-sans font-light text-titanium text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] mb-6 uppercase">
                    Asset <span className="font-bold opacity-90">Unreachable.</span>
                </h1>

                <p className="font-mono text-titanium-muted text-lg max-w-xl mx-auto leading-relaxed tracking-wider mb-12">
                    The requested coordinates do not resolve to an active node in the Ocean Wolf network.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="/" className="inline-flex items-center justify-center border border-titanium/30 px-8 py-4 bg-transparent hover:bg-titanium/5 transition-all duration-300 group cursor-crosshair relative overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-titanium/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                        <span className="font-mono font-bold text-titanium text-[11px] tracking-widest uppercase relative z-10 flex items-center space-x-2">
                            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                            <span>Return to Base</span>
                        </span>
                    </Link>

                    <Link to="/participate" className="inline-flex items-center justify-center border border-tactical-red/50 bg-tactical-red/10 px-8 py-4 hover:bg-tactical-red/20 hover:border-tactical-red transition-all duration-300 shadow-glow-red cursor-crosshair">
                        <span className="font-mono font-bold text-tactical-red text-[11px] tracking-widest uppercase">
                            Establish Link
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
