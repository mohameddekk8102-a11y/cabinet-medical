import React from 'react';
import { Clock, MapPin, Info, Car, Navigation } from 'lucide-react';

export const Infos: React.FC = () => {
  const schedule = [
    { day: 'Lundi', am: '08:30 - 12:30', pm: '14:30 - 19:30', isOpenPm: true },
    { day: 'Mardi', am: '08:30 - 12:30', pm: 'FERMÉ', isOpenPm: false },
    { day: 'Mercredi', am: '08:30 - 12:30', pm: '14:30 - 19:30', isOpenPm: true },
    { day: 'Jeudi', am: '08:30 - 12:30', pm: '14:30 - 19:30', isOpenPm: true },
    { day: 'Vendredi', am: '08:30 - 12:30', pm: '14:30 - 19:30', isOpenPm: true },
    { day: 'Samedi', am: '09:00 - 13:00', pm: 'FERMÉ', isOpenPm: false },
    { day: 'Dimanche', am: 'FERMÉ', pm: 'FERMÉ', isOpenPm: false, isClosedAm: true },
  ];

  return (
    <div className="space-y-16 animate-fade-in-up">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Infos & Horaires
        </h1>
        <p className="text-lg text-slate-500">
          Retrouvez toutes les informations pratiques pour préparer votre visite au cabinet.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Schedule Section */}
        <div className="bg-white rounded-3xl shadow-colored border border-slate-100 overflow-hidden">
          <div className="p-6 md:p-8 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary-400">
                <Clock size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold">Horaires d'ouverture</h2>
                <p className="text-slate-400 text-sm">Consultations générales & dentaires</p>
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
                OUVERT AUJOURD'HUI
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Jour</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Matin</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Après-midi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {schedule.map((slot, idx) => (
                    <tr key={slot.day} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                        {slot.day}
                      </td>
                      <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium ${slot.isClosedAm ? 'text-slate-400' : 'text-emerald-600'}`}>
                        {slot.am}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                        {slot.isOpenPm ? (
                          <span className="text-emerald-600">{slot.pm}</span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-500">
                            {slot.pm}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
              <Info className="text-primary-600 shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-primary-800">
                <strong>Note importante :</strong> Le cabinet est fermé le Mardi après-midi. 
                Pour les urgences vitales, veuillez composer le 15.
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl shadow-colored border border-slate-100 overflow-hidden h-full flex flex-col">
            <div className="p-6 md:p-8 border-b border-slate-100">
              <div className="flex items-center gap-4 mb-2">
                 <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Accès & Localisation</h2>
              </div>
              <p className="text-slate-500">
                123 Avenue de la République, Djibouti
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-64 bg-slate-200 flex items-center justify-center group overflow-hidden">
               {/* Simulating a map embed */}
               <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png')] bg-center bg-no-repeat bg-contain transform group-hover:scale-105 transition-transform duration-700"></div>
               <div className="absolute inset-0 bg-slate-300/20"></div>
               <a 
                 href="https://maps.google.com" 
                 target="_blank" 
                 rel="noreferrer"
                 className="relative z-10 px-6 py-3 bg-white text-slate-900 font-bold rounded-full shadow-lg hover:bg-slate-50 transition-colors flex items-center gap-2"
               >
                 <Navigation size={18} />
                 Ouvrir dans Google Maps
               </a>
            </div>

            <div className="p-6 md:p-8 bg-slate-50 flex-grow">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Car size={20} className="text-secondary-600" />
                Stationnement
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Des places de stationnement public sont disponibles le long de l'Avenue de la République. 
                Le cabinet est situé à proximité de la Banque Centrale, un point de repère facile pour vos taxis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">
                  Parking gratuit
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">
                  Accès PMR
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">
                  Climatisé
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};