import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GlobalCTA() {
    // Launch Date: April 19, 2026
    const targetDate = new Date('2026-04-19T00:00:00Z').getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <section className="w-full bg-obsidian py-32 border-t border-titanium/10 relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tactical-red/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

                {/* Countdown */}
                <div className="mb-20">
                    <span className="font-mono text-[10px] text-tactical-red uppercase tracking-widest font-bold mb-6 block">
                        First Mission Launches In
                    </span>

                    <div className="flex items-center space-x-4 md:space-x-8">
                        <div className="flex flex-col items-center">
                            <span className="font-mono text-4xl md:text-6xl text-titanium font-light tabular-nums">{formatNumber(timeLeft.days)}</span>
                            <span className="font-mono text-[10px] text-titanium/40 uppercase tracking-widest mt-2">{timeLeft.days === 1 ? 'Day' : 'Days'}</span>
                        </div>
                        <span className="font-mono text-3xl md:text-5xl text-titanium/20 mb-6">:</span>
                        <div className="flex flex-col items-center">
                            <span className="font-mono text-4xl md:text-6xl text-titanium font-light tabular-nums">{formatNumber(timeLeft.hours)}</span>
                            <span className="font-mono text-[10px] text-titanium/40 uppercase tracking-widest mt-2">Hrs</span>
                        </div>
                        <span className="font-mono text-3xl md:text-5xl text-titanium/20 mb-6">:</span>
                        <div className="flex flex-col items-center">
                            <span className="font-mono text-4xl md:text-6xl text-titanium font-light tabular-nums">{formatNumber(timeLeft.minutes)}</span>
                            <span className="font-mono text-[10px] text-titanium/40 uppercase tracking-widest mt-2">Min</span>
                        </div>
                        <span className="font-mono text-3xl md:text-5xl text-titanium/20 mb-6">:</span>
                        <div className="flex flex-col items-center">
                            <span className="font-mono text-4xl md:text-6xl text-tactical-red font-light tabular-nums animate-pulse">{formatNumber(timeLeft.seconds)}</span>
                            <span className="font-mono text-[10px] text-tactical-red/60 uppercase tracking-widest mt-2">Sec</span>
                        </div>
                    </div>
                </div>

                {/* Request Briefing CTA block */}
                <div className="max-w-2xl mx-auto border border-titanium/10 bg-graphite p-12 md:p-16 rounded-sm relative overflow-hidden group hover:border-tactical-red/30 transition-colors duration-500">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-titanium/30 group-hover:border-tactical-red transition-colors"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-titanium/30 group-hover:border-tactical-red transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-titanium/30 group-hover:border-tactical-red transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-titanium/30 group-hover:border-tactical-red transition-colors"></div>

                    <h2 className="font-sans font-medium text-titanium text-3xl md:text-4xl tracking-tight mb-6">
                        Ready to Solve the Unsolvable?
                    </h2>
                    <p className="font-mono text-titanium-muted text-sm leading-relaxed mb-10">
                        Contact Ocean Wolf to discuss your defense challenge. The briefing conversation determines fit, scope, and timeline. No pricing tiers. Direct engagement with the team that solves the problems that matter.
                    </p>

                    <Link to="/participate" className="inline-flex items-center justify-center border border-tactical-red bg-tactical-red/5 px-10 py-5 hover:bg-tactical-red/20 transition-all duration-300 w-full sm:w-auto shadow-glow-red cursor-crosshair">
                        <span className="font-mono font-bold text-titanium text-[11px] tracking-widest uppercase">
                            Request Briefing
                        </span>
                    </Link>

                    {/* Trust Signal */}
                    <div className="mt-8 flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-titanium/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="font-mono text-[10px] text-titanium/40 uppercase tracking-widest">
                            Secure communications available upon request
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
