import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-900 to-secondary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-white text-xl">Cabinet Médical<br/>Dr Glele & Dr Pertus</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Votre santé est notre priorité. Une équipe dévouée pour des soins de qualité dans un environnement moderne et accueillant.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <ShieldCheck size={16} />
              <span>Conventionné Secteur 1</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg mb-6">Accès Rapide</h4>
            <ul className="space-y-3">
              {['Accueil', 'Nos Médecins', 'Prendre Rendez-vous', 'Urgences'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 text-sm group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg mb-6">Nous Contacter</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin size={18} className="text-primary-600 mt-0.5 shrink-0" />
                <span>123 Avenue de la République,<br/>Djibouti</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone size={18} className="text-primary-600 shrink-0" />
                <span>21 35 00 38</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Mail size={18} className="text-primary-600 shrink-0" />
                <span>contact@cabinet-glele-pertus.dj</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white text-lg mb-6">Horaires</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Lundi - Vendredi</span>
                <span className="font-semibold text-white">08:30 - 19:30</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Samedi</span>
                <span className="font-semibold text-white">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Dimanche</span>
                <span className="text-primary-200">Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Cabinet Médical Dr Glele & Dr Pertus. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};