import React from 'react';
import { 
  Phone, 
  Stethoscope, 
  Smile, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      {/* 
        HERO SECTION 
      */}
      <section className="relative pt-8 pb-20 lg:pt-20 lg:pb-28">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Nouveaux Patients Acceptés
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Votre santé, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                notre priorité à Djibouti.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Médecine Générale & Cabinet Dentaire. <br className="hidden sm:block"/>
              Une prise en charge moderne, humaine et accessible à tous.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="tel:+25321350038"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-lg rounded-full shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden inline-flex"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Appeler maintenant
                </span>
              </a>
              
              <button 
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-white text-slate-700 font-bold text-lg rounded-full shadow-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                Nos Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary-600" size={18} />
                <span>Conventionné</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                <span>Excellence des soins</span>
              </div>
            </div>
          </div>

          {/* Visual Content (Abstract Composition) */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Fake UI Header */}
              <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                     <Stethoscope size={20} />
                   </div>
                   <div>
                     <div className="h-2.5 w-24 bg-slate-800 rounded mb-1"></div>
                     <div className="h-2 w-16 bg-slate-200 rounded"></div>
                   </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
              </div>
              
              {/* Fake Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-primary-600 mb-1">98%</div>
                  <div className="text-xs font-semibold text-slate-400 uppercase">Satisfaction</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                   <div className="text-2xl font-bold text-secondary-600 mb-1">15+</div>
                   <div className="text-xs font-semibold text-slate-400 uppercase">Années d'expérience</div>
                </div>
              </div>

              {/* Fake List */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-default">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-32 bg-slate-200 rounded mb-1.5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Background Element behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl transform -rotate-2 scale-95 opacity-20 blur-sm -z-10 translate-y-4"></div>
          </div>
        </div>
      </section>

      {/* 
        SERVICES SUMMARY GRID 
      */}
      <section className="py-12">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Médecine Générale */}
          <button 
            onClick={() => onNavigate('services')}
            className="group bg-white p-8 rounded-3xl shadow-colored border border-transparent hover:border-primary-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-left w-full"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Stethoscope size={120} className="text-primary-600 transform rotate-12" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <Stethoscope size={28} />
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                  Sans Rendez-vous
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Médecine Générale</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Consultations pour adultes et enfants. Suivi régulier, vaccinations, et certificats médicaux.
              </p>
              
              <span className="inline-flex items-center font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                En savoir plus <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>

          {/* Card 2: Dentiste */}
          <button 
            onClick={() => onNavigate('services')}
            className="group bg-white p-8 rounded-3xl shadow-colored border border-transparent hover:border-secondary-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-left w-full"
          >
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Smile size={120} className="text-secondary-600 transform -rotate-12" />
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white transition-colors duration-300">
                  <Smile size={28} />
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                  Sur Rendez-vous
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Chirurgien Dentiste</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Soins dentaires complets, détartrage, blanchiment et chirurgie. Un sourire éclatant en toute confiance.
              </p>
              
              <span className="inline-flex items-center font-bold text-secondary-600 group-hover:text-secondary-700 transition-colors">
                En savoir plus <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>

        </div>
      </section>

      {/* 
        DOCTORS TEASER
      */}
      <section className="py-16 border-t border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Vos experts de confiance</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Une équipe pluridisciplinaire et expérimentée à votre écoute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Doctor 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
            <div className="w-20 h-20 bg-slate-200 rounded-full shrink-0 overflow-hidden">
              <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-400">
                <span className="text-2xl font-bold">Dr</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Dr Glele</h3>
              <p className="text-primary-600 font-medium text-sm mb-2">Médecin Généraliste</p>
              <div className="flex items-center gap-1 text-slate-400 text-xs">
                <Clock size={12} />
                <span>Lun - Ven: 08:30 - 19:30</span>
              </div>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
            <div className="w-20 h-20 bg-slate-200 rounded-full shrink-0 overflow-hidden">
               <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-400">
                <span className="text-2xl font-bold">Dr</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Dr Pertus</h3>
              <p className="text-secondary-600 font-medium text-sm mb-2">Chirurgien Dentiste</p>
              <div className="flex items-center gap-1 text-slate-400 text-xs">
                <Clock size={12} />
                <span>Sur Rendez-vous Uniquement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden z-50">
        <a 
          href="tel:+25321350038"
          className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <Phone size={20} />
          Appeler le 21 35 00 38
        </a>
      </div>
    </>
  );
};