import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen bg-obsidian pt-48 pb-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <span className="font-mono text-[10px] text-tactical-red uppercase tracking-widest font-bold mb-4 block">
                        Legal Protocol
                    </span>
                    <h1 className="font-sans font-light text-titanium text-4xl md:text-5xl tracking-tighter uppercase mb-8">
                        Privacy Policy
                    </h1>
                    <div className="w-16 h-px bg-titanium/20 mb-12"></div>
                </div>

                <div className="font-mono text-sm text-titanium-muted space-y-8 leading-relaxed">
                    <section>
                        <h2 className="text-titanium font-bold uppercase tracking-widest mb-4 border-l border-tactical-red pl-4">01. Data Collection</h2>
                        <p>Ocean Wolf operates under strict data minimization principles. We collect only the information explicitly provided via our secure contact protocols or required for basic network operations. We do not deploy third-party advertising trackers, pixel tags, or behavioral analytics software.</p>
                    </section>

                    <section>
                        <h2 className="text-titanium font-bold uppercase tracking-widest mb-4 border-l border-tactical-red pl-4">02. Information Security</h2>
                        <p>All data transmitted through this domain is encrypted in transit and at rest. Information related to national defense projects, clearance levels, or proprietary industrial capacity is segregated from public-facing infrastructure. Do not transmit Controlled Unclassified Information (CUI) or classified data through unauthenticated public endpoints.</p>
                    </section>

                    <section>
                        <h2 className="text-titanium font-bold uppercase tracking-widest mb-4 border-l border-tactical-red pl-4">03. Third-Party Sharing</h2>
                        <p>We do not sell, rent, or lease operational data. Information may be shared with designated U.S. Government entities only when required by contract, law, or explicit authorization of the transmitting party.</p>
                    </section>

                    <section>
                        <h2 className="text-titanium font-bold uppercase tracking-widest mb-4 border-l border-tactical-red pl-4">04. Updates</h2>
                        <p>This protocol is subject to revision without notice. Last modified: April 2026.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
