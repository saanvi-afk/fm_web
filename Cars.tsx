






import React, { useState } from 'react';
import ThreeScene from './ThreeScene';
import { seasons, database } from './data';

export default function Cars() {
  // Filter seasons to only include those that have a car (default true if undefined)
  // This allows removing a season from the Cars timeline while keeping it on Teams page
  const carSeasons = seasons.filter(season => database[season].hasCar !== false);
  
  const [activeSeasonIndex, setActiveSeasonIndex] = useState(0); // Default to newest (index 0) of FILTERED list
  const activeSeason = carSeasons[activeSeasonIndex];
  
  // Fetch stats from the unified database
  const activeSeasonData = database[activeSeason];
  const stats = activeSeasonData.car;
  const achievements = activeSeasonData.achievements;

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col pt-20">
      {/* 3D Scene Section */}
      <div className="relative w-full h-[60vh] z-0">
        {/* Pass filtered list length so progress calc is correct */}
        <ThreeScene targetIndex={activeSeasonIndex} totalPoints={carSeasons.length} />
        
        {/* Header Overlay */}
        <div className="absolute top-8 left-8 pointer-events-none z-10">
             <h1 className="text-5xl md:text-7xl font-black italic text-white uppercase tracking-tighter drop-shadow-2xl">
                Our Garage
             </h1>
             <div className="w-32 h-3 bg-red-600 mt-2 skew-x-[-20deg]"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-neutral-950 border-t border-red-900/30 flex flex-col relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        
        {/* Full Width Timeline - Using FILTERED carSeasons */}
        <div className="w-full bg-neutral-900 border-b border-neutral-800">
            <div className="flex overflow-x-auto custom-scrollbar hide-scroll">
                {carSeasons.map((season, idx) => (
                    <button
                        key={season}
                        onClick={() => setActiveSeasonIndex(idx)}
                        className={`flex-shrink-0 flex-grow min-w-[100px] h-14 flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 relative group
                            ${idx === activeSeasonIndex 
                                ? 'bg-red-600 text-white' 
                                : 'bg-transparent text-gray-500 hover:text-white hover:bg-white/5'}`}
                    >
                        <span className="relative z-10">{season.split('-')[1]}</span>
                        {idx === activeSeasonIndex && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-white shadow-[0_0_15px_white]"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>

        {/* Stats Content - Standard Document Flow */}
        <div className="max-w-7xl mx-auto w-full p-6 md:p-12">
            <div key={activeSeason} className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-slideUp">
                
                {/* Left Column: Statistics (50%) */}
                <div className="flex flex-col gap-10 justify-start">
                    {/* Identity - Single Flex Col with alignment */}
                    <div className="flex flex-col w-full">
                         
                         <div className="self-start mb-6">
                             {/* Car Name - Left Aligned */}
                             <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-red-500 font-bold uppercase text-xs tracking-[0.2em]">Chassis Identity</h4>
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${stats.type === 'EV' ? 'bg-green-900/50 text-green-400 border border-green-800' : 'bg-orange-900/50 text-orange-400 border border-orange-800'}`}>
                                    {stats.type === 'EV' ? 'Electric' : 'Combustion'}
                                </span>
                             </div>
                             
                             <h2 className="text-7xl font-black text-white italic uppercase leading-none">{stats.name}</h2>
                             {stats.competitionCode && (
                                 <div className="text-gray-400 font-bold uppercase tracking-widest text-sm bg-white/5 px-2 py-1 rounded mt-2 inline-block">
                                     Competition Chassis: <span className="text-white">{stats.competitionCode}</span>
                                 </div>
                             )}
                             <div className="text-gray-500 text-sm font-mono mt-2">Season {activeSeason}</div>
                         </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-2">
                             <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-white/5 hover:border-red-600/50 transition-colors group">
                                <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2 group-hover:text-red-500">
                                    {stats.customStat1.label}
                                </div>
                                <div className="text-5xl font-black text-white font-mono italic">{stats.customStat1.value}</div>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-white/5 hover:border-red-600/50 transition-colors group">
                                <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2 group-hover:text-red-500">
                                    {stats.customStat2.label}
                                </div>
                                <div className="text-5xl font-black text-white font-mono italic">{stats.customStat2.value}</div>
                            </div>
                        </div>
                    </div>

                    {/* POWERTRAIN STATS - CONDITIONAL RENDERING */}
                    <div className="space-y-4">
                        <h4 className="text-red-500 font-bold uppercase text-xs tracking-[0.2em]">Powertrain Architecture</h4>
                        
                        {stats.type === 'EV' ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
                                <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">Motor</div>
                                    <div className="text-sm font-bold text-white leading-tight font-mono">{stats.motor}</div>
                                </div>
                                <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">Accumulator</div>
                                    <div className="text-sm font-bold text-white font-mono">{stats.battery}</div>
                                </div>
                                <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">Voltage</div>
                                    <div className="text-sm font-bold text-red-500 font-mono">{stats.voltage}</div>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
                                <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">Engine</div>
                                    <div className="text-sm font-bold text-white leading-tight font-mono">{stats.engine}</div>
                                </div>
                                <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">Displacement</div>
                                    <div className="text-sm font-bold text-white font-mono">{stats.displacement}</div>
                                </div>
                                <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">Output</div>
                                    <div className="text-sm font-bold text-orange-500 font-mono">{stats.powerOutput}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Car Image (50%) */}
                <div className="relative group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 min-h-[400px] shadow-2xl">
                <img 
                src={stats.image} 
                alt={`${stats.name} Livery`}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-24 flex items-end justify-center pb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Official Livery</p>
            </div>
            </div>

                {/* Bottom Row: Highlight (Full Width) */}
                <div className="col-span-1 lg:col-span-2 mt-8">
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-10 md:p-14 rounded-3xl border border-neutral-800 relative overflow-hidden group shadow-2xl">
                        {/* Decorative background icon */}
                        <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                            <i className="fas fa-cogs text-9xl text-white scale-[2.5]"></i>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 text-red-500 text-sm font-bold uppercase tracking-[0.2em] mb-6">
                                <span className="w-8 h-[2px] bg-red-600"></span>
                                <span>Season Overview</span>
                            </div>
                            
                            <h3 className="text-3xl font-black text-white italic uppercase mb-8 leading-tight">
                                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Highlights</span>
                            </h3>

                            <div className="prose prose-invert max-w-none mb-8">
                                <p className="text-gray-300 text-lg leading-relaxed font-light border-l-2 border-neutral-700 pl-6">
                                    {stats.description}
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-black/30 px-6 py-3 rounded-lg border border-white/5">
                                    <div className="text-xs text-gray-500 uppercase font-bold">Design Iterations</div>
                                    <div className="text-xl text-white font-mono">142</div>
                                </div>
                                <div className="bg-black/30 px-6 py-3 rounded-lg border border-white/5">
                                    <div className="text-xs text-gray-500 uppercase font-bold">Testing Hours</div>
                                    <div className="text-xl text-white font-mono">500+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Tech Specs Section (If Available) */}
                {stats.detailedSpecs && (
                     <div className="col-span-1 lg:col-span-2 mt-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-1.5 h-12 bg-red-600 skew-x-[-12deg]"></div>
                            <h3 className="text-4xl font-black text-white italic uppercase tracking-tight">
                                Technical Data Sheet
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {Object.entries(stats.detailedSpecs).map(([key, value]) => (
                                <div key={key} className="bg-[#0f0f0f] p-6 rounded-none border-l-2 border-red-600/30 hover:border-red-600 hover:bg-[#151515] transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <i className="fas fa-microchip text-4xl"></i>
                                    </div>
                                    <h4 className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed font-mono font-light group-hover:text-gray-200">
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                     </div>
                )}

                {/* Season Achievements / Trophy Case (Moved to Bottom) */}
                {achievements && achievements.awards && achievements.awards.length > 0 && (
                     <div className="col-span-1 lg:col-span-2 mt-8 pb-12">
                         <div className="flex items-center gap-4 mb-8">
                            <div className="w-1.5 h-12 bg-yellow-600 skew-x-[-12deg]"></div>
                            <h3 className="text-4xl font-black text-white italic uppercase tracking-tight">
                                Trophy Cabinet
                            </h3>
                        </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {achievements.awards.map((award, i) => (
                                <div key={i} className="bg-[#0f0f0f] p-6 rounded-none border-l-2 border-yellow-600/30 hover:border-yellow-500 hover:bg-[#151515] transition-all group relative overflow-hidden">
                                     <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <i className="fas fa-trophy text-4xl text-yellow-600"></i>
                                    </div>
                                    <h4 className="text-yellow-600 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                                        {award.title}
                                    </h4>
                                    <p className="text-white text-xl font-black italic uppercase">
                                        {award.value}
                                    </p>
                                </div>
                            ))}
                         </div>
                     </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}