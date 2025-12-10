


import React, { useState } from 'react';
import { seasons, database, Member } from './data';

export default function Team() {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Get data for the selected season
  const currentSeasonData = database[selectedSeason];
  const members = currentSeasonData.members; // Now contains { board: [], core: [], general: [] }
  const achievements = currentSeasonData.achievements;
  const showAchievements = currentSeasonData.hasCar !== false;

  return (
    <div className="min-h-screen bg-black pt-20 pb-20">
        
        {/* Hero Image Section with Heading Overlay */}
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
            {achievements && (
                <img 
                    key={achievements.teamPhoto}
                    src={achievements.teamPhoto} 
                    alt={`Team of ${selectedSeason}`} 
                    className="w-full h-full object-cover animate-fadeIn transition-transform duration-[2s] hover:scale-105"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                <h1 className="text-5xl md:text-8xl font-black italic text-white uppercase tracking-tighter drop-shadow-2xl">
                    Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Team</span>
                </h1>
                <div className="w-32 h-2 bg-red-600 mx-auto mt-4 skew-x-[-20deg]"></div>
            </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-12">
        
        {/* Timeline */}
        <div className="mb-16 relative group">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-y-1/2 z-0"></div>
            {/* Removed md:justify-center to prevent clipping of start items (newer seasons) on overflow */}
            <div className="flex overflow-x-auto pb-8 pt-4 gap-6 custom-scrollbar relative z-10 hide-scroll snap-x justify-start">
                {seasons.map((season) => (
                <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={`flex-shrink-0 snap-center px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 border skew-x-[-12deg]
                    ${selectedSeason === season 
                        ? 'bg-red-600 border-red-600 text-white scale-110 shadow-[0_0_20px_rgba(220,38,38,0.5)] z-20' 
                        : 'bg-neutral-900/80 backdrop-blur border-neutral-700 text-gray-500 hover:border-red-500 hover:text-white'}`}
                >
                    <span className="block skew-x-[12deg]">{season}</span>
                </button>
                ))}
            </div>
        </div>

        {/* Season Highlights - Only shown if season has a car */}
        {achievements && showAchievements && (
            <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl flex items-center gap-4 hover:bg-neutral-900 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 text-xl">
                        <i className="fas fa-trophy"></i>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Overall Rank</div>
                        <div className="text-xl font-bold text-white">{achievements.rank}</div>
                    </div>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl flex items-center gap-4 hover:bg-neutral-900 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 text-xl">
                        <i className="fas fa-star"></i>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Achievement</div>
                        <div className="text-xl font-bold text-white">{achievements.highlight}</div>
                    </div>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl flex items-center gap-4 hover:bg-neutral-900 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center text-green-500 text-xl">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Highlights</div>
                        <div className="text-xl font-bold text-white">{achievements.points}</div>
                    </div>
                </div>
            </div>
        )}

        {/* Members Grid - Dynamically rendered from categories */}
        <div className="space-y-20">
          <Section title="The Board" members={members.board} onSelect={setSelectedMember} />
          <Section title="Core Team" members={members.core} onSelect={setSelectedMember} />
          <Section title="Team Members" members={members.general} onSelect={setSelectedMember} />
        </div>
      </div>

      {/* Modern Modal with Blurred Backdrop */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-xl transition-opacity duration-300" onClick={() => setSelectedMember(null)}>
          <div 
            className="bg-neutral-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scaleIn border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden group">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">{selectedMember.department}</span>
                </div>
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-3/5 p-8 md:p-10 relative flex flex-col justify-between bg-gradient-to-br from-neutral-900 to-neutral-950">
                 <button 
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                    <i className="fas fa-times"></i>
                </button>

                <div>
                    <h3 className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm mb-2">{selectedMember.role}</h3>
                    <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase leading-none mb-6">{selectedMember.name}</h2>
                    
                    <div className="relative pl-6 border-l-4 border-red-600 py-2 mb-8">
                        <i className="fas fa-quote-left absolute -top-2 left-4 text-neutral-700 text-4xl -z-10"></i>
                        <p className="text-gray-300 text-lg font-light leading-relaxed italic">
                            {selectedMember.quote}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-neutral-800">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mr-2">Connect:</span>
                    <a href={selectedMember.socials.linkedin} className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all">
                        <i className="fab fa-linkedin-in text-gray-400 group-hover:text-blue-500"></i>
                    </a>
                    <a href={selectedMember.socials.instagram} className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-pink-500 hover:bg-pink-500/10 transition-all">
                        <i className="fab fa-instagram text-gray-400 group-hover:text-pink-500"></i>
                    </a>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, members, onSelect }: { title: string, members: Member[], onSelect: (m: Member) => void }) {
  if (!members || members.length === 0) return null;
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-8 bg-red-600 skew-x-[-12deg]"></div>
          <h2 className="text-3xl font-black text-white uppercase italic tracking-wider">
            {title}
          </h2>
          <div className="h-[1px] flex-grow bg-neutral-800 ml-4"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map(member => (
          <div 
            key={member.id}
            onClick={() => onSelect(member)}
            className="group relative bg-neutral-900 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-red-900/20 border border-neutral-800 hover:border-red-900/50"
          >
            {/* Filling Line Animation */}
            <div className="absolute bottom-0 left-0 h-1.5 bg-red-600 z-30 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>

            {/* Badge */}
            <div className="absolute top-0 right-0 z-20 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-bl-lg shadow-lg">
                {member.department}
            </div>

            <div className="h-72 overflow-hidden relative">
                <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 pb-8">
                {/* Role Popup */}
                <h3 className="text-red-500 text-xs font-bold uppercase tracking-widest mb-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    {member.role}
                </h3>
                <h2 className="text-2xl font-black text-white italic uppercase leading-none group-hover:text-red-50 transition-colors">
                    {member.name}
                </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}