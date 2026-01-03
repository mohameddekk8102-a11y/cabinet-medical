import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Page } from '../types';

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
    </div>
  );
};