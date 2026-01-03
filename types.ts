import React from 'react';

export type Page = 'home' | 'services' | 'team' | 'infos' | 'contact';

export interface NavLink {
  label: string;
  href: string; // Used for hash links or fallback
  page: Page;   // Used for state navigation
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}