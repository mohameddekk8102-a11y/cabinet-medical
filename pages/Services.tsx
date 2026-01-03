import React from 'react';
import { 
  Stethoscope, 
  Smile, 
  Check, 
  Scan, 
  Sparkles, 
  ShieldCheck, 
  Activity,
  Clock,
  Calendar
} from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in-up">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Nos Pôles de Santé
        </h1>
        <p className="text-lg text-slate-500">
          Une offre de soins complète combinant médecine générale de proximité et expertise dentaire, le tout réuni en un seul lieu.
        </p>
      </div>

      {/* Main Content Blocks */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Block A: Médecine Générale */}
        <div className="bg-white rounded-3xl shadow-colored border border-slate-100 overflow-hidden flex flex-col h-full">
          <div className="p-8 md:p-10 flex-grow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                <Stethoscope size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Médecine Générale</h2>
                <p className="text-primary-600 font-bold">Dr Christiane Glele</p>
              </div>
            </div>

            <p className="text-slate-500 mb-8 leading-relaxed">
              Un suivi médical complet pour toute la famille. Notre approche privilégie l'écoute et la disponibilité pour répondre à vos besoins de santé quotidiens.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Consultations Adultes & Enfants',
                'Suivi Pédiatrique & Vaccinations',
                'Certificats Médicaux & Aptitude',
                'Petite Traumatologie & Urgences'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-emerald-50 p-6 text-center border-t border-emerald-100">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-extrabold text-sm md:text-base uppercase tracking-wide">
              <Clock size={20} className="animate-pulse" />
              Consultations Sans Rendez-vous
            </div>
            <p className="text-emerald-600/80 text-sm mt-1">Du Lundi au Vendredi : 08h30 - 19h30</p>
          </div>
        </div>

        {/* Block B: Dentaire */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex flex-col h-full">
          <div className="p-8 md:p-10 flex-grow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-600">
                <Smile size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Cabinet Dentaire</h2>
                <p className="text-secondary-600 font-bold">Dr Eirik Pertus</p>
              </div>
            </div>

            <p className="text-slate-500 mb-8 leading-relaxed">
              Des soins dentaires modernes et sans douleur. Nous utilisons les dernières technologies pour redonner éclat et santé à votre sourire.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Soins Conservateurs & Caries',
                'Prothèses Fixes & Amovibles',
                'Hygiène & Détartrage',
                'Esthétique Dentaire & Blanchiment'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 text-center border-t border-blue-100">
            <div className="inline-flex items-center gap-2 text-blue-700 font-extrabold text-sm md:text-base uppercase tracking-wide">
              <Calendar size={20} />
              Uniquement Sur Rendez-vous
            </div>
            <p className="text-blue-600/80 text-sm mt-1">Prise de rendez-vous par téléphone</p>
          </div>
        </div>

      </div>

      {/* Technology Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-slate-900">Plateau Technique & Sécurité</h3>
          <p className="text-slate-500">Nous investissons pour votre sécurité et la qualité des diagnostics.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Scan, label: 'Radio Numérique', color: 'text-blue-500', bg: 'bg-blue-50' },
            { icon: ShieldCheck, label: 'Stérilisation Normes CE', color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { icon: Sparkles, label: 'Hygiène Renforcée', color: 'text-purple-500', bg: 'bg-purple-50' },
            { icon: Activity, label: 'Urgences Mineures', color: 'text-rose-500', bg: 'bg-rose-50' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
              <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={28} />
              </div>
              <span className="font-bold text-slate-700 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};