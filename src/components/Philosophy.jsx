import React from 'react';

export default function Philosophy() {
    return (
        <section className="w-full bg-obsidian py-32 border-t border-titanium/5 relative overflow-hidden">

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-5" style={{
                backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">

                {/* Statement 1 (Neutral/Legacy) */}
                <div className="flex-1 opacity-50 relative">
                    <div className="w-full h-px bg-titanium/20 mb-8"></div>
                    <span className="font-mono text-[10px] text-titanium uppercase tracking-widest mb-4 block">
                        Legacy Approach
                    </span>
                    <p className="font-sans font-light text-titanium text-2xl md:text-3xl leading-relaxed">
                        "Washington's approach to defense problems: commission a study, form a committee, issue a report in 18 months, repeat."
                    </p>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px h-48 bg-gradient-to-b from-transparent via-tactical-red/50 to-transparent"></div>

                {/* Divider for mobile */}
                <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-tactical-red/50 to-transparent my-8"></div>

                {/* Statement 2 (Bold/Ocean Wolf) */}
                <div className="flex-1 relative">
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-tactical-red shadow-glow-red md:block hidden"></div>
                    <div className="w-full h-px bg-tactical-red/30 mb-8 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-tactical-red shadow-glow-red"></div>
                    </div>

                    <span className="font-mono text-[10px] text-tactical-red font-bold uppercase tracking-widest mb-4 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-tactical-red rounded-full animate-pulse"></span>
                        <span>Ocean Wolf Protocol</span>
                    </span>
                    <p className="font-sans font-medium text-titanium text-3xl md:text-4xl leading-tight">
                        "Assemble the experts, give them full authority, solve it this week."
                    </p>
                </div>

            </div>
        </section>
    );
}
