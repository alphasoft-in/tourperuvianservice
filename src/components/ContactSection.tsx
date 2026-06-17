import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface ContactSectionProps {
  language?: 'es' | 'en';
}

export default function ContactSection({ language = 'es' }: ContactSectionProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const content = {
    es: {
      title: "Ponte en Contacto",
      subtitle: "Estamos aquí para ayudarte a planificar tu próxima aventura en Perú. Escríbenos y te responderemos lo más pronto posible.",
      infoTitle: "Información de Contacto",
      address: "Trujillo, La Libertad, Perú",
      phone: "+51 966 638 693",
      email: "reservas@toursperuvianservice.com.pe",
      hours: "Atención 24/7 desde la web",
      formTitle: "Envíanos un Mensaje",
      nameLabel: "Nombre Completo",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Teléfono (Opcional)",
      subjectLabel: "Asunto",
      messageLabel: "Tu Mensaje",
      sendButton: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
      error: "Ocurrió un error al enviar el mensaje. Inténtalo nuevamente."
    },
    en: {
      title: "Get in Touch",
      subtitle: "We are here to help you plan your next great adventure in Peru. Drop us a line and we'll get back to you as soon as possible.",
      infoTitle: "Contact Information",
      address: "Trujillo, La Libertad, Peru",
      phone: "+51 966 638 693",
      email: "reservas@toursperuvianservice.com.pe",
      hours: "24/7 service via web",
      formTitle: "Send us a Message",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number (Optional)",
      subjectLabel: "Subject",
      messageLabel: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! We will contact you soon.",
      error: "An error occurred while sending the message. Please try again."
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Usamos el endpoint de FormSubmit para AJAX
      const response = await fetch('https://formsubmit.co/ajax/reservas@toursperuvianservice.com.pe', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-12 pt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
          {t.title}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
        <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-8 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Contact Info Sidebar - 40% Width (col-span-2) */}
        <div className="lg:col-span-2 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">{t.infoTitle}</h3>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-5">
                <div className="bg-white/10 p-2.5 rounded-xl text-orange-400 mt-0.5 backdrop-blur-sm border border-white/5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white/90 mb-1">{language === 'es' ? 'Dirección' : 'Address'}</h4>
                  <p className="text-slate-300 leading-relaxed text-sm">{t.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-white/10 p-2.5 rounded-xl text-orange-400 mt-0.5 backdrop-blur-sm border border-white/5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white/90 mb-1">{language === 'es' ? 'Teléfono' : 'Phone'}</h4>
                  <p className="text-slate-300 leading-relaxed text-sm">{t.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-white/10 p-2.5 rounded-xl text-orange-400 mt-0.5 backdrop-blur-sm border border-white/5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden w-full">
                  <h4 className="font-semibold text-base text-white/90 mb-1">{language === 'es' ? 'Correo' : 'Email'}</h4>
                  <p className="text-slate-300 leading-relaxed text-sm truncate" title={t.email}>{t.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-white/10 p-2.5 rounded-xl text-orange-400 mt-0.5 backdrop-blur-sm border border-white/5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white/90 mb-1">{language === 'es' ? 'Horario' : 'Business Hours'}</h4>
                  <p className="text-slate-300 leading-relaxed text-sm">{t.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - 60% Width (col-span-3) */}
        <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center bg-white">
          <h3 className="text-xl font-bold text-slate-800 mb-5">{t.formTitle}</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2.5">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">{t.nameLabel}</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-0 focus:border-orange-500 focus:bg-white transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                  placeholder={language === 'es' ? 'Juan Pérez' : 'John Doe'}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">{t.emailLabel}</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-0 focus:border-orange-500 focus:bg-white transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                  placeholder="ejemplo@correo.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <label htmlFor="phone" className="text-sm font-semibold text-slate-700 ml-1">{t.phoneLabel}</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-0 focus:border-orange-500 focus:bg-white transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                  placeholder="+51 999 999 999"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 ml-1">{t.subjectLabel}</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  required
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-0 focus:border-orange-500 focus:bg-white transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                  placeholder={language === 'es' ? 'Consulta sobre tour a Cusco' : 'Inquiry about Cusco tour'}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">{t.messageLabel}</label>
              <textarea 
                name="message" 
                id="message" 
                rows={3} 
                required
                className="w-full px-5 py-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-0 focus:border-orange-500 focus:bg-white transition-all outline-none resize-none font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                placeholder={language === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200 font-medium text-sm">
                {t.success}
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 font-medium text-sm">
                {t.error}
              </div>
            )}

            <div className="pt-2 text-center">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-sm shadow-xl shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 w-full sm:w-auto min-w-[200px]"
              >
                <Send className="w-4 h-4 mr-2.5" />
                {status === 'submitting' ? t.sending : t.sendButton}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-slate-100 h-[400px] relative w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7899.8435052451905!2d-79.0387203!3d-8.10945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d5cc6e3e8bb%3A0xa59cf5ee5bf8ba9b!2sAgencia%20de%20viajes%20Peruvian%20Service!5e0!3m2!1ses-419!2spe!4v1781549749475!5m2!1ses-419!2spe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={language === 'es' ? 'Nuestra Ubicación en Trujillo' : 'Our Location in Trujillo'}
          className="absolute inset-0 grayscale-[20%] contrast-125"
        ></iframe>
      </div>
    </div>
  );
}
