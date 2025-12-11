import React, { lazy, Suspense, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './fonts.css';

// Lazy load all page components to enable code splitting
const Landing = lazy(() => import('./Landing'));
const Team = lazy(() => import('./Team'));
const Cars = lazy(() => import('./Cars'));
const Media = lazy(() => import('./Media'));
const Sponsors = lazy(() => import('./Sponsors'));
const OurSponsors = lazy(() => import('./OurSponsors'));
const JoinForm = lazy(() => import('./JoinForm'));
const Footer = lazy(() => import('./Footer'));  // Lazy Footer too, as it has potential media (map iframe)

const App = () => {
  const [page, setPage] = useState('landing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (targetPage: string) => {
    setPage(targetPage);
    setIsMobileMenuOpen(false);
  };

  const handleScrollToAbout = () => {
    setPage('landing');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
        const aboutSection = document.getElementById('about-us');
        if(aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Simple fallback loader (customize with spinner/CSS from your styles)
  const Loader = () => (
    <div className="flex items-center justify-center min-h-[50vh] text-gray-400">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      <span className="ml-2">Loading...</span>
    </div>
  );

  return (
    <div className="font-sans text-white bg-black min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl px-6 h-20 flex items-center justify-between shadow-2xl shadow-black/50 relative z-50">
            {/* Logo */}
            <div 
                className="cursor-pointer flex items-center gap-3 group"
                onClick={() => setPage('landing')}
            >
                {/* PLACEHOLDER FOR USER UPLOADED LOGO */}
                {/* Use a reliable placeholder service to ensure visibility if local image fails */}
                <img 
                    src="./fm_white_logo.png" 
                    alt="Formula Manipal" 
                    className="h-10 w-auto object-contain scale-125"
                />
            </div>
            
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
                <button 
                    onClick={() => setPage('landing')}
                    className={`relative py-2 transition-colors ${page === 'landing' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    Home
                    {page === 'landing' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_#dc2626]"></span>}
                </button>
                <button 
                    onClick={() => {
                        setPage('landing');
                        setTimeout(() => {
                           const aboutSection = document.getElementById('about-us');
                           if(aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }}
                    className="relative py-2 transition-colors text-gray-400 hover:text-white"
                >
                    About Us
                </button>
                <button 
                    onClick={() => setPage('team')}
                    className={`relative py-2 transition-colors ${page === 'team' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    Team
                    {page === 'team' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_#dc2626]"></span>}
                </button>
                <button 
                    onClick={() => setPage('cars')}
                    className={`relative py-2 transition-colors ${page === 'cars' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    Cars
                    {page === 'cars' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_#dc2626]"></span>}
                </button>
                <button 
                    onClick={() => setPage('media')}
                    className={`relative py-2 transition-colors ${page === 'media' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    Media
                    {page === 'media' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_#dc2626]"></span>}
                </button>
                 <button 
                    onClick={() => setPage('our-sponsors')}
                    className={`relative py-2 transition-colors ${page === 'our-sponsors' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    Our Sponsors
                    {page === 'our-sponsors' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_10px_#dc2626]"></span>}
                </button>
            </div>

            {/* Desktop CTA */}
            <button 
                onClick={() => setPage('sponsors')}
                className="hidden lg:block bg-gradient-to-r from-red-700 to-red-500 text-white px-6 py-3 font-bold uppercase text-xs tracking-widest hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all transform hover:-translate-y-0.5 border border-red-400/30 skew-x-[-20deg]"
            >
                <span className="block skew-x-[20deg]">Sponsor Us</span>
            </button>

            {/* Mobile Menu Icon */}
            <button 
                className="lg:hidden text-2xl text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 top-24 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col p-6 animate-fadeIn">
                <div className="flex flex-col gap-6 text-xl font-black uppercase italic tracking-wider h-full overflow-y-auto pb-20">
                    <button 
                        onClick={() => handleNavClick('landing')}
                        className={`text-left py-4 border-b border-white/10 ${page === 'landing' ? 'text-red-600' : 'text-white'}`}
                    >
                        Home
                    </button>
                    <button 
                        onClick={handleScrollToAbout}
                        className="text-left py-4 border-b border-white/10 text-white"
                    >
                        About Us
                    </button>
                    <button 
                        onClick={() => handleNavClick('team')}
                        className={`text-left py-4 border-b border-white/10 ${page === 'team' ? 'text-red-600' : 'text-white'}`}
                    >
                        Meet The Team
                    </button>
                    <button 
                        onClick={() => handleNavClick('cars')}
                        className={`text-left py-4 border-b border-white/10 ${page === 'cars' ? 'text-red-600' : 'text-white'}`}
                    >
                        Cars
                    </button>
                    <button 
                        onClick={() => handleNavClick('media')}
                        className={`text-left py-4 border-b border-white/10 ${page === 'media' ? 'text-red-600' : 'text-white'}`}
                    >
                        Media
                    </button>
                    <button 
                        onClick={() => handleNavClick('our-sponsors')}
                        className={`text-left py-4 border-b border-white/10 ${page === 'our-sponsors' ? 'text-red-600' : 'text-white'}`}
                    >
                        Our Sponsors
                    </button>
                    <button 
                        onClick={() => handleNavClick('sponsors')}
                        className="mt-4 bg-red-600 text-white py-4 text-center font-bold uppercase tracking-widest rounded-xl hover:bg-red-700 transition-colors"
                    >
                        Sponsor Us
                    </button>
                </div>
            </div>
        )}
      </nav>

      {/* Page Content - Wrapped in Suspense for lazy loading */}
      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          {page === 'landing' && <Landing onNavigate={setPage} />}
          {page === 'team' && <Team />}
          {page === 'cars' && <Cars />}
          {page === 'media' && <Media />}
          {page === 'our-sponsors' && <OurSponsors />}
          {page === 'sponsors' && <Sponsors />}
          {page === 'join' && <JoinForm onNavigate={setPage} />}
        </Suspense>
      </main>

      {/* Footer - Also lazy loaded, but always rendered */}
      <Suspense fallback={<div></div>}>  {/* Minimal fallback for Footer */}
        <Footer />
      </Suspense>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);