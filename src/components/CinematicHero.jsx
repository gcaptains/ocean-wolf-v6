import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export default function CinematicHero() {
    const heroRef = useRef(null);
    const bgRef = useRef(null);

    // Mouse tracking state for ambient parallax
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate mouse position relative to center of screen, normalized from -1 to 1
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.fade-up-element', {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.15,
                ease: "power2.out",
                delay: 0.2
            });

            // Subtle slow zoom on the background
            gsap.to('.hero-bg', {
                scale: 1.05,
                duration: 20,
                ease: "none",
                repeat: -1,
                yoyo: true
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-obsidian flex items-center justify-center px-6 md:px-12">

            {/* Cinematic Background - Deep, desaturated naval/ocean imagery with Parallax */}
            <div
                ref={bgRef}
                className="hero-bg absolute inset-[-5%] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity grayscale transition-transform duration-100 ease-out"
                style={{
                    backgroundImage: 'url("/hero_bg.png")',
                    transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0) scale(1.05)` // Parallax offset
                }}
            ></div>

            {/* Heavy Vignette / Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-transparent z-10 opacity-60"></div>

            {/* Schematic overlay lines */}
            <div className="absolute inset-0 z-10 pointer-events-none flex justify-center">
                <div className="w-px h-full bg-titanium/5"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-titanium/5"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 text-center max-w-5xl">
                <div className="fade-up-element mb-8 inline-block border border-titanium/20 px-4 py-1.5 bg-black/50 backdrop-blur-sm rounded-sm">
                    <p className="font-mono text-tactical-red text-[10px] font-bold tracking-huge uppercase">
                        Founded by John Konrad, gCaptain
                    </p>
                </div>

                <h1 className="fade-up-element font-sans font-light text-titanium text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] mb-8 uppercase">
                    Solving the Department of War's<br />
                    <span className="font-bold opacity-90 text-5xl md:text-7xl lg:text-8xl">Biggest Problems.</span>
                </h1>

                <p className="fade-up-element font-mono text-titanium-muted text-lg max-w-2xl mx-auto leading-relaxed tracking-wider mb-12">
                    One problem. One week. Full authority.
                </p>

                <div className="fade-up-element flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="#participate" className="group relative inline-flex items-center justify-center border border-titanium/30 px-8 py-4 overflow-hidden transition-all duration-300 hover:border-tactical-red/50 hover:bg-tactical-red/5 cursor-crosshair">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-titanium/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                        <span className="relative z-10 font-mono font-bold text-titanium text-[11px] tracking-widest uppercase text-center">
                            Request Briefing
                        </span>
                    </a>

                    <a href="#mission" className="font-mono text-[11px] text-titanium-muted hover:text-titanium tracking-widest uppercase transition-colors flex items-center space-x-2">
                        <span>View First Mission</span>
                        <span className="text-tactical-red">→</span>
                    </a>
                </div>

                <div className="fade-up-element mt-20 pt-8 border-t border-titanium/10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div>
                        <span className="block font-mono text-tactical-red text-xl font-bold mb-1">5 DAYS</span>
                        <span className="block font-mono text-[10px] text-titanium/50 uppercase tracking-widest">Per Problem Cycle</span>
                    </div>
                    <div className="hidden md:block w-px h-full bg-titanium/10 mx-auto"></div>
                    <div>
                        <span className="block font-mono text-titanium text-xl mb-1">APRIL 19</span>
                        <span className="block font-mono text-[10px] text-titanium/50 uppercase tracking-widest">First Mission Launch</span>
                    </div>
                    <div className="hidden md:block w-px h-full bg-titanium/10 mx-auto"></div>
                    <div>
                        <span className="block font-mono text-titanium text-xl mb-1">50+</span>
                        <span className="block font-mono text-[10px] text-titanium/50 uppercase tracking-widest">Domain Experts Assembled</span>
                    </div>
                </div>
            </div>

            {/* Global Noise Overlay */}
            <div className="noise-bg absolute inset-0 z-50 pointer-events-none"></div>
        </section>
    );
}
