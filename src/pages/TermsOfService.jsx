import React from 'react';

export default function TermsOfService() {
    return (
        <div className="flex flex-col min-h-screen bg-obsidian pt-48 pb-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <span className="font-mono text-[10px] text-tactical-red uppercase tracking-widest font-bold mb-4 block">
                        Legal Protocol
                    </span>
                    <h1 className="font-sans font-light text-titanium text-4xl md:text-5xl tracking-tighter uppercase mb-8">
                        Terms of Service
                    </h1>
                    <div className="w-16 h-px bg-titanium/20 mb-12"></div>
                </div>

                <div className="font-mono text-sm text-titanium-muted space-y-8 leading-relaxed">
                    <section>
                        <h2 className="text-titanium font-bold uppercase tracking-widest mb-4 border-l border-tactical-red pl-4">01. Acceptance of Terms</h2>
                        <p>By accessing the Ocean Wolf digital infrastructure, you agree to comply with these terms. This site is intended for cleared defense professionals, industrial partners, and authorized government personnel. Unauthorized access attempts are monitored and logged.</p>
                    </section>

                    <section>
                        <h2 className="text-titanium font-bold uppercase tracking-widest mb-4 border-l border-tactical-red pl-4">02. Intellectual Property</h2>
                        <p>All methodologies, frameworks, and content displayed (unless explicitly attributed to external sources) remain the proprietary intellectual property of Ocean Wolf. You may not distribute, modify, or reproduce the "Protocol" structural guidelines without written authorization.</p>
                    </section>

                    <section>
                        <h2 className="text-titanium font-bold uppercase tracking-widest mb-4 border-l border-tactical-red pl-4">03. Disclaimers</h2>
                        <p>Information provided on this site does not constitute formal consulting or engineering advice until a specific contractual agreement is executed. Timelines, cost estimates, and outputs referenced (e.g., "5 Days Absolute") are target objectives subject to the scope details of specific engagements.</p>
                    </section>

                    <section>
                        <h2 className="text-titanium font-bold uppercase tracking-widest mb-4 border-l border-tactical-red pl-4">04. Limitation of Liability</h2>
                        <p>Ocean Wolf is not liable for indirect, incidental, or consequential damages arising from the use or inability to use this digital interface.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
