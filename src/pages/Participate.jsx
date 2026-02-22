import React, { useState } from 'react';

export default function Participate() {
    const [formState, setFormState] = useState({
        name: '',
        organization: '',
        clearance: '',
        email: '',
        track: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call for form submission
        setTimeout(() => {
            setIsSubmitted(true);
        }, 800);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const tracks = [
        {
            title: 'Sponsor a Sprint',
            tag: 'Program Managers & Flag Officers',
            desc: 'You have a critical capability bottleneck. You have the funding to solve it. You need the Ocean Wolf protocol deployed against your problem set.'
        },
        {
            title: 'Nominate an Expert',
            tag: 'Industry & Academia',
            desc: 'You know the undisputed domain expert in a specific technical field essential to national defense. (Self-nominations accepted but highly scrutinized.)'
        },
        {
            title: 'General Briefing',
            tag: 'Strategic Partners',
            desc: 'General inquiry into Ocean Wolf capabilities, media requests, or broader strategic alignment conversations.'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-obsidian">

            {/* Hero Section */}
            <section className="relative w-full pt-48 pb-24 overflow-hidden px-6 md:px-12 border-b border-titanium/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542157585-ef20bbcce178?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-[0.10] mix-blend-luminosity grayscale shadow-[inset_0_0_100px_rgba(0,0,0,1)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>

                <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                    <h1 className="font-sans font-light text-titanium text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] mb-6 uppercase">
                        Initiate <span className="font-bold opacity-90 text-5xl md:text-7xl lg:text-8xl">Contact.</span>
                    </h1>
                    <p className="font-mono text-tactical-red text-lg max-w-2xl mx-auto leading-relaxed tracking-wider mb-8">
                        The problem-solving apparatus is active.
                    </p>
                </div>
            </section>

            <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left Column: Engagement Tracks */}
                <div className="lg:w-1/2">
                    <h2 className="font-sans font-light text-titanium text-3xl md:text-4xl tracking-tighter uppercase mb-2">
                        Engagement Tracks
                    </h2>
                    <div className="w-16 h-px bg-tactical-red mb-12"></div>

                    <div className="space-y-6">
                        {tracks.map((track, idx) => (
                            <div key={idx} className="bg-graphite border border-titanium/10 p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300">
                                <span className="font-mono text-[10px] text-tactical-red uppercase tracking-widest font-bold mb-4 block">
                                    Track 0{idx + 1} // {track.tag}
                                </span>
                                <h3 className="font-sans text-xl text-titanium mb-4">{track.title}</h3>
                                <p className="font-mono text-sm text-titanium-muted leading-relaxed">
                                    {track.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 border border-tactical-red/30 bg-tactical-red/5 rounded-sm">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="w-2 h-2 bg-tactical-red rounded-sm animate-pulse shadow-glow-red"></span>
                            <span className="font-mono text-tactical-red text-xs uppercase tracking-widest font-bold">Secure Comms Protocol</span>
                        </div>
                        <p className="font-mono text-sm text-titanium-muted leading-relaxed">
                            For highly classified or compartmentalized inquiries, use the initial contact form to establish identity. Do not transmit CUI or classified data via this form. An Ocean Wolf representative will provide secure transmission protocols following identity verification.
                        </p>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:w-1/2">
                    <div className="bg-graphite border border-titanium/10 p-8 md:p-12 rounded-sm relative">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-[500px] text-center">
                                <div className="w-16 h-16 border border-tactical-red flex items-center justify-center mb-6 shadow-glow-red">
                                    <svg className="w-8 h-8 text-tactical-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-sans text-2xl text-titanium mb-4">Transmission Received</h3>
                                <p className="font-mono text-titanium-muted text-sm leading-relaxed max-w-sm">
                                    Your request has been securely logged. An Ocean Wolf representative will review and contact you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-8 font-mono text-[10px] text-titanium/50 hover:text-titanium uppercase tracking-widest transition-colors cursor-crosshair"
                                >
                                    Submit Another Request
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-10 text-center">
                                    <span className="font-mono text-[10px] text-titanium/50 uppercase tracking-widest block mb-2">Secure Link Established</span>
                                    <h3 className="font-sans text-2xl text-titanium">Request Briefing</h3>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="font-mono text-[10px] text-titanium/70 uppercase tracking-widest">Full Name / Callsign</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full bg-obsidian border border-titanium/20 px-4 py-3 text-titanium font-sans text-sm focus:outline-none focus:border-tactical-red transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-mono text-[10px] text-titanium/70 uppercase tracking-widest">Organization / Agency</label>
                                            <input
                                                required
                                                type="text"
                                                name="organization"
                                                value={formState.organization}
                                                onChange={handleChange}
                                                className="w-full bg-obsidian border border-titanium/20 px-4 py-3 text-titanium font-sans text-sm focus:outline-none focus:border-tactical-red transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="font-mono text-[10px] text-titanium/70 uppercase tracking-widest">Official Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full bg-obsidian border border-titanium/20 px-4 py-3 text-titanium font-sans text-sm focus:outline-none focus:border-tactical-red transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-mono text-[10px] text-titanium/70 uppercase tracking-widest">Clearance Status (Optional)</label>
                                            <select
                                                name="clearance"
                                                value={formState.clearance}
                                                onChange={handleChange}
                                                className="w-full bg-obsidian border border-titanium/20 px-4 py-3 text-titanium font-sans text-sm focus:outline-none focus:border-tactical-red transition-colors appearance-none"
                                            >
                                                <option value="" disabled>Select Status...</option>
                                                <option value="none">None / Uncleared</option>
                                                <option value="secret">Secret</option>
                                                <option value="ts">Top Secret</option>
                                                <option value="ts_sci">TS/SCI</option>
                                                <option value="sap">SAP/Special Access</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-mono text-[10px] text-titanium/70 uppercase tracking-widest">Engagement Track</label>
                                        <select
                                            required
                                            name="track"
                                            value={formState.track}
                                            onChange={handleChange}
                                            className="w-full bg-obsidian border border-titanium/20 px-4 py-3 text-titanium font-sans text-sm focus:outline-none focus:border-tactical-red transition-colors appearance-none"
                                        >
                                            <option value="" disabled>Select Track...</option>
                                            <option value="sponsor">Sponsor a Sprint</option>
                                            <option value="nominate">Nominate an Expert</option>
                                            <option value="briefing">General Briefing</option>
                                            <option value="press">Press / Media</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-mono text-[10px] text-titanium/70 uppercase tracking-widest">Nature of Inquiry</label>
                                        <textarea
                                            required
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full bg-obsidian border border-titanium/20 px-4 py-3 text-titanium font-sans text-sm focus:outline-none focus:border-tactical-red transition-colors resize-none"
                                            placeholder="Provide unclassified context only..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-tactical-red/10 border border-tactical-red text-titanium font-mono text-xs uppercase tracking-widest py-4 hover:bg-tactical-red/20 transition-all duration-300 shadow-glow-red cursor-crosshair group flex justify-center items-center space-x-3"
                                    >
                                        <span>Transmit</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>

            </section>
        </div>
    );
}
