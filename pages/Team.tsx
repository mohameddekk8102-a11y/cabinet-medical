import React from 'react';
import { 
  Heart, 
  Clock, 
  Sparkles, 
  User,
  Image as ImageIcon
} from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <div className="space-y-20 animate-fade-in-up">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Une Équipe Dévouée, <br />
          <span className="text-primary-600">Un Cadre Accueillant</span>
        </h1>
        <p className="text-lg text-slate-500">
          Rencontrez nos praticiens et découvrez un environnement conçu pour votre confort et votre sécurité.
        </p>
      </div>

      {/* Doctor Profiles Section */}
      <div className="grid gap-8 lg:gap-12">
        
        {/* Dr Glele Card */}
        <div className="bg-white rounded-3xl shadow-colored border border-slate-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:border-primary-100 transition-colors">
          <div className="shrink-0 relative">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-200 rounded-full md:rounded-2xl overflow-hidden shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
               <User size={64} className="text-slate-400" />
            </div>
            <div className="absolute -bottom-3 -right-3 md:bottom-4 md:-right-4 bg-primary-600 text-white p-2 rounded-xl shadow-lg transform rotate-6">
              <Heart size={20} fill="currentColor" />
            </div>
          </div>
          <div className="text-center md:text-left space-y-4 flex-1">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Dr Christiane Glele</h2>
              <p className="text-primary-600 font-bold text-lg">Médecin Généraliste</p>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Avec plus de 20 ans d'expérience, le Dr Glele privilégie une approche globale et humaine de la médecine. 
              À l'écoute de ses patients, elle assure le suivi des familles, des nourrissons aux séniors, avec bienveillance et professionnalisme.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {['Pédiatrie', 'Suivi Chronique', 'Vaccination', 'Conseil'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-semibold rounded-lg border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dr Pertus Card */}
        <div className="bg-white rounded-3xl shadow-colored border border-slate-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:border-secondary-100 transition-colors">
          <div className="shrink-0 relative">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-200 rounded-full md:rounded-2xl overflow-hidden shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
               <User size={64} className="text-slate-400" />
            </div>
            <div className="absolute -bottom-3 -right-3 md:bottom-4 md:-right-4 bg-secondary-600 text-white p-2 rounded-xl shadow-lg transform -rotate-6">
              <Sparkles size={20} fill="currentColor" />
            </div>
          </div>
          <div className="text-center md:text-left space-y-4 flex-1">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Dr Eirik Pertus</h2>
              <p className="text-secondary-600 font-bold text-lg">Chirurgien-Dentiste</p>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Passionné par l'esthétique et la chirurgie dentaire, le Dr Pertus utilise des techniques modernes pour garantir des soins sans douleur. 
              Son objectif est de réconcilier les patients avec le dentiste grâce à une prise en charge douce et pédagogique.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {['Esthétique', 'Prothèses', 'Chirurgie', 'Soins Conservateurs'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-semibold rounded-lg border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Values Section */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[128px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600 rounded-full blur-[128px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">Nos Valeurs Fondamentales</h3>
            <p className="text-white max-w-2xl mx-auto">
              Au-delà des soins, nous nous engageons à offrir une expérience patient basée sur la confiance et le respect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors text-center group">
              <div className="flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                <Heart size={32} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">Écoute Active</h4>
              <p className="text-slate-200 text-sm">Nous prenons le temps de vous comprendre pour mieux vous soigner.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors text-center group">
              <div className="flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                <Clock size={32} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">Ponctualité</h4>
              <p className="text-slate-200 text-sm">Votre temps est précieux. Nous nous efforçons de respecter les horaires.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors text-center group">
              <div className="flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                <Sparkles size={32} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">Hygiène Stricte</h4>
              <p className="text-slate-200 text-sm">Protocoles de stérilisation rigoureux et normes CE pour votre sécurité.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-8">
        <h3 className="text-2xl font-extrabold text-slate-900 text-center">La Clinique en Images</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          
          {/* Gallery Item 1 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm bg-slate-100 lg:col-span-2">
             <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
               <ImageIcon size={48} className="mb-2 opacity-50" />
               <span className="font-semibold">Salle d'attente lumineuse</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
               <span className="text-white font-bold">Espace d'attente</span>
             </div>
          </div>

          {/* Gallery Item 2 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm bg-slate-100">
             <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
               <ImageIcon size={48} className="mb-2 opacity-50" />
               <span className="font-semibold">Cabinet Dentaire</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
               <span className="text-white font-bold">Fauteuil Dentaire</span>
             </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm bg-slate-100">
             <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
               <ImageIcon size={48} className="mb-2 opacity-50" />
               <span className="font-semibold">Salle de Consultation</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
               <span className="text-white font-bold">Médecine Générale</span>
             </div>
          </div>

          {/* Gallery Item 4 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm bg-slate-100 lg:col-span-2">
             <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
               <ImageIcon size={48} className="mb-2 opacity-50" />
               <span className="font-semibold">Plateau Technique</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
               <span className="text-white font-bold">Stérilisation & Radio</span>
             </div>
          </div>

        </div>
      </div>

    </div>
  );
};