import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Page } from '../types';

const LINKS: NavLink[] = [
  { label: 'Accueil', href: '#home', page: 'home' },
  { label: 'Services', href: '#services', page: 'services' },
  { label: "L'Équipe", href: '#team', page: 'team' },
  { label: 'Infos & Horaires', href: '#infos', page: 'infos' },
  { label: 'Contact', href: '#contact', page: 'contact' },
];

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true); // Mock logic for demo

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-colored py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="bg-primary-600 text-white p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
              <span className="font-extrabold text-xl tracking-tighter">M</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-slate-900 font-extrabold text-lg leading-tight tracking-tight">
                Cabinet Médical
              </span>
              <span className="text-primary-600 font-semibold text-sm tracking-tight">
                Dr Glele & Dr Pertus
              </span>
            </div>
          </button>

          {/* Desktop Navigation (Hidden on Mobile/Tablet, Visible on Large Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page)}
                className={`text-sm font-bold transition-colors ${
                  currentPage === link.page 
                    ? 'text-primary-600' 
                    : 'text-slate-500 hover:text-primary-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions: Status Badge & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Status Badge (Visible on All Screens) */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${
              isOpenNow 
                ? 'bg-green-50 text-green-700 border-green-200' 
                : 'bg-slate-100 text-slate-500 border-slate-200'
            }`}>
              <span className={`relative flex h-2 w-2`}>
                {isOpenNow && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpenNow ? 'bg-green-500' : 'bg-slate-400'}`}></span>
              </span>
              <span className="hidden sm:inline">{isOpenNow ? 'CABINET OUVERT' : 'FERMÉ'}</span>
              <span className="sm:hidden">{isOpenNow ? 'OUVERT' : 'FERMÉ'}</span>
            </div>

            {/* Mobile/Tablet Menu Button (Hidden on Large Desktop) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col space-y-4 animate-fade-in-down">
           {LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page)}
                className={`text-left w-full text-base font-bold py-3 border-b border-slate-50 last:border-0 ${
                   currentPage === link.page ? 'text-primary-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex items-center justify-between">
               <span className="text-sm font-semibold text-slate-500">Statut actuel:</span>
               <span className={`text-xs font-bold px-2 py-1 rounded ${isOpenNow ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                 {isOpenNow ? 'OUVERT AUJOURD\'HUI' : 'FERMÉ'}
               </span>
            </div>
        </div>
      )}
    </header>
  );
};