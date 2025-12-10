
import React from 'react';
import { appConfig } from './data';

export default function Sponsors() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-4 md:px-10 flex flex-col">
            <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
                <div className="text-center mb-20">
                    <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] mb-4 animate-pulse">Partner With Speed</h2>
                    <h1 className="text-5xl md:text-8xl font-black italic text-white uppercase tracking-tighter leading-none mb-8">
                        Drive The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Future</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Formula Manipal offers a unique platform for brands to associate with innovation, engineering excellence, and youth leadership. Join us on our journey to the podium.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto w-full">
                    {/* Brochure Card */}
                    <div className="group bg-neutral-900/50 border border-neutral-800 hover:border-red-600/50 p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-colors"></div>
                        
                        <div className="mb-8 w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center text-3xl text-white group-hover:bg-red-600 transition-colors shadow-lg">
                            <i className="fas fa-file-download"></i>
                        </div>
                        <h3 className="text-3xl font-black text-white italic uppercase mb-4">Sponsorship Brochure</h3>
                        <p className="text-gray-400 mb-8 h-20">
                            Detailed insights into our team's achievements, media reach, and the various tiers of sponsorship benefits available for your brand.
                        </p>
                        <a 
                            href="./magazine/SPONSORSHIP BROCHURE 2025-26.pdf" 
                            className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest group-hover:text-red-500 transition-colors"
                        >
                            Download PDF <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>

                    {/* Contact Card */}
                    <div className="group bg-neutral-900/50 border border-neutral-800 hover:border-blue-600/50 p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors"></div>

                        <div className="mb-8 w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center text-3xl text-white group-hover:bg-blue-600 transition-colors shadow-lg">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <h3 className="text-3xl font-black text-white italic uppercase mb-4">Get In Touch</h3>
                        <p className="text-gray-400 mb-8 h-20">
                            Ready to collaborate? Connect directly with our corporate relations team to discuss how we can create value for your organization.
                        </p>
                        <a 
                            href={appConfig.sponsorship.contactFormUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest group-hover:text-blue-500 transition-colors"
                        >
                            Contact Us <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="fixed top-1/3 left-0 w-full h-[500px] -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-[-10%] w-[120%] h-32 bg-red-900/5 -rotate-12 blur-3xl"></div>
                <div className="absolute bottom-0 right-[-10%] w-[120%] h-32 bg-blue-900/5 -rotate-12 blur-3xl"></div>
            </div>
        </div>
    );
}
