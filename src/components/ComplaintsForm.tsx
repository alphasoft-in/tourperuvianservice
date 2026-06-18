import React, { useState } from 'react';

interface ComplaintsFormProps {
  language?: 'es' | 'en';
}

export default function ComplaintsForm({ language = 'es' }: ComplaintsFormProps) {
  // FormSubmit configuration
  const formUrl = "https://formsubmit.co/reservas@toursperuvianservice.com.pe";

  const t = {
    title: language === 'es' ? 'Libro de Reclamaciones' : 'Complaints Book',
    subtitle: language === 'es' ? 'Hoja de Reclamación' : 'Claim Form',
    date: language === 'es' ? 'Fecha' : 'Date',
    
    // Step 1
    step1: language === 'es' ? '1. Identificación del Consumidor Reclamante' : '1. Claimant Consumer Identification',
    fullName: language === 'es' ? 'Nombre / Razón Social' : 'Full Name / Company Name',
    address: language === 'es' ? 'Domicilio' : 'Address',
    docType: language === 'es' ? 'Tipo de Documento' : 'Document Type',
    docNum: language === 'es' ? 'Número de Documento' : 'Document Number',
    phone: language === 'es' ? 'Teléfono' : 'Phone Number',
    email: language === 'es' ? 'Correo Electrónico' : 'Email Address',

    // Step 2
    step2: language === 'es' ? '2. Identificación del Bien Contratado' : '2. Identification of the Contracted Service',
    type: language === 'es' ? 'Tipo' : 'Type',
    product: language === 'es' ? 'Producto' : 'Product',
    service: language === 'es' ? 'Servicio' : 'Service',
    amount: language === 'es' ? 'Monto Reclamado (USD)' : 'Claimed Amount (USD)',
    description: language === 'es' ? 'Descripción del Bien/Servicio' : 'Description of Good/Service',

    // Step 3
    step3: language === 'es' ? '3. Detalle de la Reclamación y Pedido' : '3. Claim Details and Consumer Request',
    claimType: language === 'es' ? 'Tipo de Reclamación' : 'Claim Type',
    claim: language === 'es' ? 'Reclamo' : 'Claim (Disconformity related to products/services)',
    complaint: language === 'es' ? 'Queja' : 'Complaint (Discontent regarding customer service)',
    detail: language === 'es' ? 'Detalle' : 'Detail',
    request: language === 'es' ? 'Pedido' : 'Request',

    submit: language === 'es' ? 'Enviar Reclamo' : 'Submit Claim',
    terms: language === 'es' 
      ? 'Al enviar este formulario, usted acepta que Turismo Peruvian Service procese sus datos para darle respuesta a su reclamación.' 
      : 'By submitting this form, you agree that Turismo Peruvian Service will process your data to respond to your claim.'
  };

  const dateObj = new Date();
  const formattedDate = `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()}`;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl font-['Montserrat']">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-[#1E2B4D] mb-2">{t.title}</h1>
        <p className="text-slate-500 font-medium">{t.subtitle}</p>
      </div>

      <form action={formUrl} method="POST" className="space-y-8">
        
        {/* Date */}
        <div className="flex justify-end">
          {/* Hidden subject to identify the form in Formspree */}
          <input type="hidden" name="_subject" value={`Nuevo ingreso en el Libro de Reclamaciones`} />
          <div className="w-28">
            <label className="block text-sm font-semibold text-slate-700 mb-1">{t.date}</label>
            <input type="text" name="Fecha" defaultValue={formattedDate} readOnly className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50 text-slate-500 outline-none cursor-not-allowed" />
          </div>
        </div>

        {/* Step 1 */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <h2 className="text-lg font-bold mb-4">
            <span className="text-orange-500">1.</span> <span className="text-[#1E2B4D]">{t.step1.replace('1. ', '')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="Nombre" className="block text-sm font-semibold text-slate-700 mb-1">{t.fullName} *</label>
              <input id="Nombre" type="text" name="Nombre" required className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="Domicilio" className="block text-sm font-semibold text-slate-700 mb-1">{t.address} *</label>
              <input id="Domicilio" type="text" name="Domicilio" required className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
            </div>
            <div>
              <label htmlFor="TipoDocumento" className="block text-sm font-semibold text-slate-700 mb-1">{t.docType} *</label>
              <div className="relative">
                <select id="TipoDocumento" name="TipoDocumento" required className="w-full bg-white border border-slate-300 rounded-lg p-2.5 pr-10 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none">
                  <option value="DNI">DNI / ID</option>
                  <option value="CE">CE / Alien Registration</option>
                  <option value="Pasaporte">Pasaporte / Passport</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="NumeroDocumento" className="block text-sm font-semibold text-slate-700 mb-1">{t.docNum} *</label>
              <input id="NumeroDocumento" type="text" name="NumeroDocumento" required className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
            </div>
            <div>
              <label htmlFor="Telefono" className="block text-sm font-semibold text-slate-700 mb-1">{t.phone} *</label>
              <input id="Telefono" type="tel" name="Telefono" required className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
            </div>
            <div>
              <label htmlFor="Email" className="block text-sm font-semibold text-slate-700 mb-1">{t.email} *</label>
              <input id="Email" type="email" name="Email" required className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <h2 className="text-lg font-bold mb-4">
            <span className="text-orange-500">2.</span> <span className="text-[#1E2B4D]">{t.step2.replace('2. ', '')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="TipoBien" className="block text-sm font-semibold text-slate-700 mb-1">{t.type} *</label>
              <div className="relative">
                <select id="TipoBien" name="TipoBien" required className="w-full bg-white border border-slate-300 rounded-lg p-2.5 pr-10 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none">
                  <option value="Servicio">{t.service}</option>
                  <option value="Producto">{t.product}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="MontoReclamado" className="block text-sm font-semibold text-slate-700 mb-1">{t.amount}</label>
              <input id="MontoReclamado" type="number" step="0.01" name="MontoReclamado" className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="DescripcionBien" className="block text-sm font-semibold text-slate-700 mb-1">{t.description} *</label>
              <textarea id="DescripcionBien" name="DescripcionBien" required rows={2} className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"></textarea>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <h2 className="text-lg font-bold mb-4">
            <span className="text-orange-500">3.</span> <span className="text-[#1E2B4D]">{t.step3.replace('3. ', '')}</span>
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t.claimType} *</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 cursor-pointer">
                  <input id="TipoReclamo" type="radio" name="TipoReclamacion" value="Reclamo" defaultChecked className="w-4 h-4 text-orange-500 focus:ring-orange-500" />
                  <label htmlFor="TipoReclamo" className="text-sm font-medium text-slate-700 cursor-pointer">{t.claim}</label>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input id="TipoQueja" type="radio" name="TipoReclamacion" value="Queja" className="w-4 h-4 text-orange-500 focus:ring-orange-500" />
                  <label htmlFor="TipoQueja" className="text-sm font-medium text-slate-700 cursor-pointer">{t.complaint}</label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="Detalle" className="block text-sm font-semibold text-slate-700 mb-1">{t.detail} *</label>
              <textarea id="Detalle" name="Detalle" required rows={4} className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"></textarea>
            </div>
            <div>
              <label htmlFor="Pedido" className="block text-sm font-semibold text-slate-700 mb-1">{t.request} *</label>
              <textarea id="Pedido" name="Pedido" required rows={3} className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"></textarea>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 mt-4 italic">
          {t.terms}
        </div>

        <div className="flex justify-center mt-8">
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wide">
            {t.submit}
          </button>
        </div>

      </form>
    </div>
  );
}
