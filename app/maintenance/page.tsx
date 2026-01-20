'use client';

import React, { useEffect, useRef } from 'react';
import { Settings, Clock, Mail, Linkedin, ArrowRight } from 'lucide-react';
import './maintenance.css';

export default function MaintenancePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const circle1Ref = useRef<HTMLDivElement>(null);
    const circle2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const winAny = window as any;
        const gsap = winAny.gsap;

        if (gsap) {
            const tl = gsap.timeline();

            // Entry animations
            tl.from('.logo-anim', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' })
                .from('.hero-anim', { scale: 0.9, opacity: 0, duration: 1, ease: 'expo.out' }, '-=0.4')
                .from('.text-anim', { y: 20, opacity: 0, stagger: 0.2, duration: 0.8 }, '-=0.6')
                .from('.card-anim', { y: 30, opacity: 0, stagger: 0.15, duration: 1, ease: 'back.out(1.7)' }, '-=0.4');

            // Floating background circles
            gsap.to(circle1Ref.current, {
                x: '30vw',
                y: '20vh',
                duration: 15,
                repeat: -1,
                yoyo: true,
                ease: 'none'
            });
            gsap.to(circle2Ref.current, {
                x: '-20vw',
                y: '-30vh',
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'none'
            });
        }
    }, []);

    return (
        <div ref={containerRef} className="maintenance-container-root maintenance-container min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 overflow-hidden relative">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    ref={circle1Ref}
                    className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px] opacity-40"
                />
                <div
                    ref={circle2Ref}
                    className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] bg-green-900/10 rounded-full blur-[100px] opacity-30"
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            </div>

            <div className="z-10 w-full max-w-4xl flex flex-col items-center">
                {/* Logo Section */}
                <div className="logo-anim mb-16 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <img src="/assets/images/logo.jpg" alt="Softvence Logo" className="h-10 w-auto brightness-110" />
                </div>

                {/* Main Visual */}
                <div className="hero-anim relative mb-12">
                    <div className="absolute inset-0 bg-primary blur-[80px] opacity-20 animate-pulse"></div>
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[2.5rem] flex items-center justify-center shadow-2xl">
                        <Settings className="w-12 h-12 md:w-16 md:h-16 text-primary animate-[spin_10s_linear_infinite]" />
                    </div>
                </div>

                {/* Copy */}
                <div className="text-center space-y-6 mb-16">
                    <p className="text-anim text-primary text-xs font-bold tracking-[0.4em] uppercase">Status: System Update</p>
                    <h1 className="text-anim text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-tight">
                        Under<br />
                        <span className="text-primary italic">Maintenance</span>
                    </h1>
                    <p className="text-anim text-gray-400 max-w-lg mx-auto text-lg leading-relaxed">
                        We're currently evolving our digital frontier to bring you a better experience.
                        Pure innovation takes a little time.
                    </p>
                </div>

                {/* Interactive Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-4">
                    <div className="card-anim group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:border-primary/50 transition-all cursor-default">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-primary/10 rounded-2xl text-primary transition-colors">
                                <Clock size={24} />
                            </div>
                            <h3 className="font-bold text-xl">Uptime Forecast</h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            Our team is aiming for completion within 120 minutes. Keep an eye on our progress!
                        </p>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-2/3 animate-[shimmer_2s_infinite_linear]" style={{ background: 'linear-gradient(90deg, #00AB0C, #80FF89, #00AB0C)', backgroundSize: '200% 100%' }}></div>
                        </div>
                    </div>

                    <div className="card-anim bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] flex flex-col justify-between group hover:bg-white/10 transition-all">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/5 rounded-2xl text-white group-hover:text-primary transition-colors">
                                    <Mail size={24} />
                                </div>
                                <h3 className="font-bold text-xl">Get in touch</h3>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Have an urgent inquiry? Our strategic team is still reachable on mail.
                            </p>
                        </div>
                        <a href="mailto:hello@softvence.agency" className="mt-6 flex items-center justify-between text-sm font-bold text-primary hover:text-white transition-colors group/link">
                            hello@softvence.agency
                            <ArrowRight size={18} className="translate-x-0 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-20 flex flex-col items-center gap-8">
                    <div className="flex gap-4">
                        <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 transition-all text-gray-400 hover:text-white">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 transition-all text-gray-400 hover:text-white">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
                        &copy; {new Date().getFullYear()} Softvence Agency • Pure Innovation
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
        </div>
    );
}
