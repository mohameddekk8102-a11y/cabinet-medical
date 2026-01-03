import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Page } from '../types';
import { Phone } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-500 selection:bg-primary-100 selection:text-primary-900">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
      <Footer />

      {/* Floating Call Button (Mobile Only) */}
      <a
        href="tel:+25321350038"
        className="md:hidden fixed bottom-6 right-6 h-16 w-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full shadow-lg shadow-indigo-500/40 border-2 border-white z-50 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-subtle group"
        aria-label="Appeler le cabinet"
      >
        <Phone size={28} className="group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};