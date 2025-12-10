


import React from 'react';
import { sponsors } from './data';

export default function OurSponsors() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] mb-4">The Engine Behind Us</h2>
                    <h1 className="text-5xl md:text-8xl font-black italic text-white uppercase tracking-tighter leading-none mb-8">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Sponsors</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Formula Manipal is powered by a network of industry leaders who share our vision for excellence. 
                        Their contributions in funding, technology, and materials turn our designs into reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sponsors.map((sponsor, i) => (
                        <div key={i} className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900 transition-all duration-300 group hover:border-red-900/50 shadow-lg flex flex-col h-full">
                            <div className="mb-6 h-32 flex items-center justify-center bg-white/5 rounded-xl p-4 overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
                                <img 
                                    src={sponsor.image} 
                                    alt={`${sponsor.name} Logo`} 
                                    className="h-full w-full object-contain transition-all duration-500"
                                />
                            </div>
                            
                            <div className="flex items-start justify-between mb-4">
                                <h4 className="text-2xl font-black text-white italic uppercase group-hover:text-red-500 transition-colors">{sponsor.name}</h4>
                                <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow border-l-2 border-neutral-700 pl-4 group-hover:border-red-600 transition-colors">
                                {sponsor.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}