




import React, { useState, useEffect, useRef, useMemo } from 'react';
import { sponsors, subsystems, Subsystem, appConfig } from './data';

export default function Landing({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [selectedSubsystem, setSelectedSubsystem] = useState<Subsystem | null>(null);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Carousel logic
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
      if (carouselRef.current) {
          const scrollAmount = 350; // approx card width + gap
          carouselRef.current.scrollBy({
              left: direction === 'left' ? -scrollAmount : scrollAmount,
              behavior: 'smooth'
          });
      }
  };

  const handleApplyClick = () => {
    if (appConfig.recruitment.isOpen) {
        onNavigate('join');
    } else {
        alert("Applications are currently closed. Please follow our social media for updates!");
    }
  };

  // Subsystems text for the join section
  const cyclingWords = ["Our Legacy", ...subsystems.map(s => s.name)];

  // Typewriter Effect
  useEffect(() => {
    const i = loopNum % cyclingWords.length;
    const fullText = cyclingWords[i];

    const handleTyping = () => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, cyclingWords]);

  // Split sponsors for variance - Memoized to prevent re-calculation on re-renders
  const { row1, row2, row3 } = useMemo(() => {
      return {
          row1: [...sponsors, ...sponsors],
          row2: [...[...sponsors].reverse(), ...sponsors],
          row3: [...[...sponsors].sort(() => 0.5 - Math.random()), ...sponsors]
      };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll-medium {
          animation: scroll 45s linear infinite;
        }
        .animate-scroll-fast {
          animation: scroll 30s linear infinite;
        }
        .cursor-blink {
            animation: blink 1s step-end infinite;
        }
        @keyframes blink {
            from, to { border-color: transparent }
            50% { border-color: #dc2626 }
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scroll {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Hero Section with Video */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-900">
        {/* Background Video - Hero */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-100"
                src="./video/carvid.mp4"
             >
             </video>
             {/* Simple dark overlay to ensure text contrast without hiding video */}
             <div className="absolute inset-0 bg-black/20"></div>
             {/* Gradient at bottom to blend into next section */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        </div>

        <div className="z-10 text-center px-4 max-w-5xl relative">
            <h2 className="text-red-500 font-bold tracking-widest text-sm md:text-xl mb-4 uppercase animate-pulse drop-shadow-lg">
            Engineered with Passion
            </h2>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mt-7 mb-4 leading-none text-white drop-shadow-2xl custom-font">
            FORMULA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">MANIPAL</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
            Pushing the limits of engineering since 2008. We build more than just race cars; we build the future of motorsport.
            </p>
        </div>

        <div className="absolute bottom-10 animate-bounce z-10">
            <i className="fas fa-chevron-down text-red-500 text-2xl"></i>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-neutral-950 relative" id="about-us">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="w-20 h-2 bg-red-600 mb-8 skew-x-[-12deg]"></div>
                  <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tight mb-8">
                      More Than <br/> Just A Team
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    We are a team of 45 passionate and innovative students in a student engineering project based out of Manipal, Karnataka, that strives to design, conceptualise, fabricate, test, and race a single seater open wheel Formula style race car. Since the beginning of FORMULA MANIPAL in 2007, our team has created 14 remarkably engineered vehicles that have led us to win countless awards in events both in India, like Formula Bharat and competitions around the world, including ones that take place in Italy, Germany, Austria, The Czech Republic, and the United Kingdom.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Our motto, "Engineered with Passion", pushes us to improve our performance year after year, each year, to produce better, more efficient, and more powerful cars that can take this team to greater heights. This year marks 17 years of our beautiful legacy. Stick around to watch us FLY!!
                  </p>
                  
                  <button 
                    onClick={() => onNavigate('team')}
                    className="group relative px-8 py-4 bg-transparent text-white font-bold text-lg uppercase tracking-wider skew-x-[-12deg] transition-all duration-300 border border-red-600 hover:bg-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                  >
                    <span className="block skew-x-[12deg] group-hover:text-white transition-colors">Meet The Team <i className="fas fa-arrow-right ml-2"></i></span>
                  </button>
              </div>
              <div className="relative h-[500px] w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 group">
                   <div className="absolute inset-0 bg-[url('./team_photo.HEIC')] bg-cover bg-center transition-all duration-700"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                   <div className="absolute bottom-8 left-8">
                       <div className="text-5xl font-black text-white italic">15+</div>
                       <div className="text-red-500 uppercase font-bold tracking-widest">Years of Legacy</div>
                   </div>
              </div>
          </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-black overflow-hidden relative border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
            <h2 className="text-3xl font-black uppercase tracking-widest text-white mb-2">Our Partners</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Blur Overlays */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

        <div className="space-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {/* Row 1 - Slow */}
            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll-slow hover:[animation-play-state:paused]">
                    {row1.map((sponsor, i) => (
                        <div key={`r1-${i}`} className="mx-8 flex items-center justify-center min-w-[200px]">
                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer group">
                                <span className="text-3xl font-black text-neutral-700 group-hover:text-white transition-colors uppercase italic tracking-tighter select-none">{sponsor.name}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 - Medium */}
             <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll-medium hover:[animation-play-state:paused]">
                    {row2.map((sponsor, i) => (
                        <div key={`r2-${i}`} className="mx-8 flex items-center justify-center min-w-[200px]">
                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer group">
                                <span className="text-3xl font-black text-neutral-600 group-hover:text-red-600 transition-colors uppercase italic tracking-tighter select-none">{sponsor.name}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 3 - Fast */}
             <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll-fast hover:[animation-play-state:paused]">
                    {row3.map((sponsor, i) => (
                        <div key={`r3-${i}`} className="mx-8 flex items-center justify-center min-w-[200px]">
                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer group">
                                <span className="text-3xl font-black text-neutral-700 group-hover:text-white transition-colors uppercase italic tracking-tighter select-none">{sponsor.name}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Subsystems Carousel Section */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="mb-16 text-center">
                <h2 className="text-5xl font-black italic uppercase text-red-600 mb-4">Subsystems</h2>
                <p className="text-gray-400">The powerhouse behind our performance.</p>
            </div>

            <div className="relative group/carousel">
                {/* Left Arrow - Always Visible */}
                <button 
                    onClick={() => scrollCarousel('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center text-white text-2xl opacity-100 shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all transform hover:scale-110"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>

                {/* Right Arrow - Always Visible */}
                <button 
                    onClick={() => scrollCarousel('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center text-white text-2xl opacity-100 shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all transform hover:scale-110"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>

                {/* Carousel Container */}
                <div 
                    ref={carouselRef}
                    className="flex overflow-x-auto gap-8 px-8 pb-12 pt-4 snap-x hide-scroll"
                >
                    {subsystems.map((subsystem, i) => {
                        const isManagement = subsystem.name === 'Management';
                        return (
                        <div 
                            key={i}
                            onClick={() => !isManagement && setSelectedSubsystem(subsystem)}
                            className={`flex-shrink-0 w-80 md:w-96 snap-center bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 transition-all duration-300 group shadow-lg 
                                ${isManagement ? 'cursor-default opacity-80' : 'cursor-pointer hover:bg-white/10 hover:shadow-red-900/20'}`}
                        >
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className={`fas ${isManagement ? 'fa-briefcase' : 'fa-cogs'}`}></i>
                            </div>
                            <h3 className="text-2xl font-black text-white italic uppercase mb-4">{subsystem.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                {subsystem.description}
                            </p>
                            {!isManagement && (
                                <div className="text-red-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                    Explore Research <i className="fas fa-arrow-right"></i>
                                </div>
                            )}
                        </div>
                    )})}
                </div>
            </div>
        </div>
      </section>

      {/* Join The Team Section */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-85"
                src="./video/cadvid.mp4"
             >
             </video>
             {/* Simple dark overlay to ensure text contrast without hiding video */}
             <div className="absolute inset-0 bg-black/60"></div>
             {/* Gradient at bottom to blend into next section */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <h3 className="text-red-500 font-bold uppercase tracking-[0.3em] mb-6">Be a part of</h3>
            
            {/* Typewriter Container */}
            <div className="min-h-[16rem] md:min-h-[12rem] flex items-center justify-center w-full max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-tight w-full break-words">
                    <span className="text-white-600">{text}</span>
                    <span className="border-r-4 border-red-600 ml-1 cursor-blink h-12 md:h-16 lg:h-20 inline-block align-baseline"></span>
                </h2>
            </div>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-8 mb-12">
                Join a legacy of engineering excellence. We are looking for passionate individuals ready to design, build, and race the future.
            </p>

            <button 
                onClick={handleApplyClick}
                className="bg-red-600 text-white px-12 py-5 font-black text-xl uppercase tracking-widest hover:bg-red-700 transition-all hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.5)] rounded-none skew-x-[-12deg]"
            >
                <span className="block skew-x-[12deg]">Apply Now</span>
            </button>
        </div>
      </section>

      {/* Subsystem Modal */}
      {selectedSubsystem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-xl transition-opacity" onClick={() => setSelectedSubsystem(null)}>
              <div 
                className="bg-neutral-900 border border-neutral-800 w-full max-w-2xl rounded-3xl p-8 md:p-12 relative animate-scaleIn shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                  <button 
                    onClick={() => setSelectedSubsystem(null)}
                    className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                  >
                      <i className="fas fa-times text-2xl"></i>
                  </button>

                  <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Current Research Focus</h3>
                  <h2 className="text-4xl font-black text-white italic uppercase mb-6">{selectedSubsystem.name}</h2>
                  
                  <div className="bg-black/50 p-6 rounded-xl border border-white/5 mb-8">
                      <p className="text-gray-300 text-lg leading-relaxed">
                          {selectedSubsystem.research}
                      </p>
                  </div>

                  <div className="flex justify-end">
                      <button 
                        onClick={() => { setSelectedSubsystem(null); handleApplyClick(); }}
                        className="text-white font-bold uppercase tracking-widest hover:text-red-500 transition-colors flex items-center gap-2"
                      >
                          Apply for {selectedSubsystem.name} <i className="fas fa-arrow-right"></i>
                      </button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
}