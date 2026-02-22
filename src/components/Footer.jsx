import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-obsidian w-full border-t border-titanium/10 py-16 mt-auto">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-6 h-6 border border-titanium/30 flex items-center justify-center">
                                <div className="w-2 h-2 bg-titanium"></div>
                            </div>
                            <span className="font-sans font-bold text-lg tracking-huge uppercase text-titanium">
                                Ocean Wolf
                            </span>
                        </div>
                        <p className="font-mono text-titanium-muted text-xs leading-relaxed max-w-sm uppercase tracking-widest">
                            The Department of Defense's Primary Problem-Solving Weapon.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col space-y-4">
                        <Link to="/protocol" className="font-mono text-xs text-titanium-muted hover:text-titanium uppercase tracking-widest transition-colors">Protocol</Link>
                        <Link to="/mission/trump-class" className="font-mono text-xs text-titanium-muted hover:text-titanium uppercase tracking-widest transition-colors">Mission</Link>
                        <Link to="/participate" className="font-mono text-xs text-titanium-muted hover:text-titanium uppercase tracking-widest transition-colors">Participate</Link>
                        <Link to="/about" className="font-mono text-xs text-titanium-muted hover:text-titanium uppercase tracking-widest transition-colors">About</Link>
                    </div>

                    {/* Legal & Status */}
                    <div className="flex flex-col space-y-4">
                        <Link to="/privacy" className="font-mono text-xs text-titanium-muted hover:text-titanium uppercase tracking-widest transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="font-mono text-xs text-titanium-muted hover:text-titanium uppercase tracking-widest transition-colors">Terms of Service</Link>

                        <div className="mt-auto pt-8 border-t border-titanium/10">
                            <span className="font-mono text-[10px] text-tactical-red uppercase tracking-widest font-bold flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-tactical-red rounded-full shadow-glow-red animate-pulse"></span>
                                <span>Mission Status: Active — April 2026</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-titanium/5">
                    <p className="font-mono text-[10px] text-titanium/40 uppercase tracking-widest">
                        © 2026 Ocean Wolf LLC. All rights reserved.
                    </p>
                    <p className="font-mono text-[10px] text-titanium/30 uppercase tracking-widest mt-4 md:mt-0">
                        Unclassified // For Official Use Only
                    </p>
                </div>

            </div>
        </footer>
    )
}
