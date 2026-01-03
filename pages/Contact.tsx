import React, { useState } from 'react';
import { Phone, Mail, User, Calendar, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Map ids to state keys
    if (id === 'name-gen') setFormData(prev => ({ ...prev, name: value }));
    if (id === 'email-gen') setFormData(prev => ({ ...prev, email: value }));
    if (id === 'phone-gen') setFormData(prev => ({ ...prev, phone: value }));
    if (id === 'message-gen') setFormData(prev => ({ ...prev, message: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Merci de remplir les champs obligatoires (Nom, Téléphone, Message).");
      return;
    }

    setStatus('loading');

    // Data Mapping
    const templateParams = {
      user_name: formData.name,
      user_phone: formData.phone,
      message: formData.message,
      // Optional: include email in message if needed, but strict mapping was requested for the above.
      // We'll append email to message for context if provided.
      // message: `${formData.message} \n\n Email: ${formData.email}` // Alternative if strict mapping allows.
      // Strict mapping request: "Form Input 'Message' -> maps to `message`". I will stick to the raw message to be safe.
    };

    emailjs.send(
      "service_nt09gc9",
      "template_tp4rxo9",
      templateParams,
      "irceI8Lzzb-tRP5Ux"
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      },
      (err) => {
        console.log('FAILED...', err);
        setStatus('error');
      }
    );
  };

  return (
    <div className="space-y-12 animate-fade-in-up">
      
      {/* Header & Direct Action */}
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Prendre Contact
          </h1>
          <p className="text-lg text-slate-500">
            Une question ou une demande de rendez-vous ? Choisissez l'option qui vous convient.
          </p>
        </div>

        <a 
          href="tel:+25321350038" 
          className="group block w-full md:w-auto mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-1 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 max-w-2xl"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-8 flex flex-col md:flex-row items-center justify-center gap-6 border border-white/20">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-inner group-hover:scale-110 transition-transform">
              <Phone size={32} className="animate-pulse" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-primary-100 font-medium mb-1">Secrétariat médical</p>
              <p className="text-3xl md:text-5xl font-extrabold tracking-tight">21 35 00 38</p>
            </div>
            <span className="hidden md:inline-flex px-6 py-3 bg-white text-primary-700 font-bold rounded-full text-sm shadow-sm group-hover:bg-primary-50 transition-colors">
              Appeler maintenant
            </span>
          </div>
        </a>
      </div>

      {/* Forms Grid */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        
        {/* Form A: General / Admin (Connected to EmailJS) */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
              <Mail size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Question Administrative</h2>
              <p className="text-slate-500 text-sm">Pour toute demande générale</p>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name-gen" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <User size={16} /> Nom complet <span className="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                id="name-gen" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none"
                placeholder="Votre nom"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="phone-gen" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Phone size={16} /> Téléphone <span className="text-rose-500">*</span>
                </label>
                <input 
                  type="tel" 
                  id="phone-gen" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none"
                  placeholder="21 XX XX XX"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email-gen" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Mail size={16} /> Email
                </label>
                <input 
                  type="email" 
                  id="email-gen" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none"
                  placeholder="Optionnel"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message-gen" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <MessageSquare size={16} /> Message <span className="text-rose-500">*</span>
              </label>
              <textarea 
                id="message-gen" 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none resize-none"
                placeholder="Comment pouvons-nous vous aider ?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-4 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                status === 'loading' 
                  ? 'bg-slate-400 text-white cursor-not-allowed'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <Send size={18} className={status === 'loading' ? 'animate-spin' : ''} />
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 flex items-center gap-3 animate-fade-in-up">
                <CheckCircle size={20} className="shrink-0" />
                <p className="text-sm font-semibold">✅ Merci ! Votre message a été reçu. Nous vous recontacterons très vite.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 flex items-center gap-3 animate-fade-in-up">
                <AlertCircle size={20} className="shrink-0" />
                <p className="text-sm font-semibold">❌ Une erreur est survenue. Merci de nous appeler directement au 21 35 00 38.</p>
              </div>
            )}
          </form>
        </div>

        {/* Form B: Dental Booking (Static / Phone Call CTA focus) */}
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl shadow-colored border border-indigo-100 p-8 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-secondary-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary-600 shadow-sm">
              <Calendar size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Demande de RDV Dentiste</h2>
              <p className="text-secondary-700 font-semibold text-sm">Dr Pertus (Sur RDV uniquement)</p>
            </div>
          </div>

          <form className="space-y-5 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Pour les rendez-vous dentaires, merci de privilégier l'appel téléphonique au 21 35 00 38."); }}>
            <div className="space-y-2">
              <label htmlFor="name-dent" className="text-sm font-bold text-slate-700">Nom complet</label>
              <input 
                type="text" 
                id="name-dent" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary-500 focus:ring-4 focus:ring-secondary-500/10 transition-all outline-none bg-white"
                placeholder="Nom du patient"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone-dent" className="text-sm font-bold text-slate-700">Téléphone</label>
              <input 
                type="tel" 
                id="phone-dent" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary-500 focus:ring-4 focus:ring-secondary-500/10 transition-all outline-none bg-white"
                placeholder="77 00 00 00"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="slot-dent" className="text-sm font-bold text-slate-700">Créneau souhaité</label>
              <select 
                id="slot-dent" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary-500 focus:ring-4 focus:ring-secondary-500/10 transition-all outline-none bg-white text-slate-600"
              >
                <option value="">Sélectionnez une préférence...</option>
                <option value="matin">En matinée (08h30 - 12h30)</option>
                <option value="apres-midi">L'après-midi (14h30 - 19h30)</option>
                <option value="urgence">Urgence (Douleur intense)</option>
              </select>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              <Calendar size={18} />
              Demander un RDV
            </button>
            
            <p className="text-center text-xs text-slate-500 mt-4">
              Notre secrétariat vous rappellera sous 24h pour confirmer l'horaire.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};