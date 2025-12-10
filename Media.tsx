import React from 'react';
import { newspaperClippings, magazines, appConfig } from './data';

export default function Media() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-black italic text-white mb-20 border-l-[12px] border-red-600 pl-8 uppercase tracking-tighter">
                    Media <span className="text-red-600">Center</span>
                </h1>

                {/* Newspaper Section - Scrapbook Style */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-2 h-8 bg-red-600 skew-x-[-12deg]"></div>
                        <h2 className="text-3xl font-black text-white uppercase italic tracking-wider">In The Press</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] rounded-3xl border border-neutral-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-neutral-900/50"></div>
                        {newspaperClippings.map((clip, i) => (
                            <a 
                                key={i} 
                                href={clip.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-[#f0e6d2] p-4 shadow-2xl transform transition-transform hover:scale-105 hover:z-10 duration-300 relative group cursor-pointer block`}
                                style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                            >
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-12 bg-red-900/30 rotate-90 blur-[1px] mix-blend-multiply"></div> {/* Tape effect */}
                                <div className="absolute top-2 right-2 text-neutral-800 opacity-50 group-hover:opacity-100">
                                     <i className="fas fa-external-link-alt"></i>
                                </div>
                                <div className="h-48 overflow-hidden mb-4 sepia group-hover:sepia-0 transition-all border-2 border-dashed border-gray-400/50">
                                    <img src={clip.image} alt={clip.title} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-serif font-bold text-neutral-900 text-xl leading-tight mb-2 group-hover:text-red-900 transition-colors">{clip.title}</h3>
                                <p className="font-mono text-neutral-600 text-xs border-t border-neutral-400 pt-2 flex justify-between uppercase">
                                    <span>Daily News</span>
                                    <span>{clip.date}</span>
                                </p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Formula Monthly Section */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                         <div className="w-2 h-8 bg-red-600 skew-x-[-12deg]"></div>
                        <h2 className="text-3xl font-black text-white uppercase italic tracking-wider">Formula Monthly</h2>
                    </div>

                    {/* Smaller grid columns: md:grid-cols-4 lg:grid-cols-5 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {magazines.map((mag, i) => (
                            <div key={i} className="group relative bg-neutral-900 rounded-xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-500 border border-neutral-800">
                                <a 
                                    href={mag.websiteUrl || '#'} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="block aspect-[3/4] overflow-hidden relative cursor-pointer"
                                >
                                    <img src={mag.cover} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" alt={`${mag.month} Cover`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                                    
                                    {/* Magazine Spine effect */}
                                    <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-r from-white/20 to-transparent"></div>
                                    
                                    {/* Hover hint */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="bg-black/60 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                                            <span className="text-xs font-bold uppercase text-white tracking-widest">Visit Site</span>
                                        </div>
                                    </div>
                                </a>
                                <div className="absolute bottom-0 left-0 w-full p-4 pointer-events-none">
                                    <div className="text-red-500 font-bold uppercase tracking-widest text-[10px] mb-1">{mag.year}</div>
                                    <h3 className="text-xl font-black text-white italic uppercase truncate mb-2">{mag.month}</h3>
                                    <a 
                                        href={mag.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors cursor-pointer pointer-events-auto group/btn"
                                    >
                                        Download <i className="fas fa-download text-red-600 group-hover/btn:translate-y-1 transition-transform"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Archive Button */}
                    <div className="mt-12 flex justify-center">
                        <a 
                            href={appConfig.media.magazineArchiveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-neutral-900 border border-neutral-700 text-gray-300 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all flex items-center gap-3 shadow-lg group"
                        >
                            View Archives <i className="fas fa-archive group-hover:rotate-12 transition-transform"></i>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}