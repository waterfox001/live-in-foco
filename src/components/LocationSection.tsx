import { MapPin, Navigation, Clock, Car, Globe, Mail, Phone } from 'lucide-react';
import { COMPANY } from '../data/company';

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] block mb-3">
            Onde Estamos & Horários
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Estúdio Próprio & Atendimento Regional
          </h2>
          <p className="text-base text-[#9A9A9A] font-light leading-relaxed">
            Atendimento presencial com todo o conforto em Caucaia e cobertura externa em Fortaleza e municípios vizinhos.
          </p>
        </div>

        {/* 2-Column Grid: Location Details + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Details Card */}
          <div className="lg:col-span-5 bg-[#121212] border border-[#242424] p-6 sm:p-8 space-y-8 rounded-sm">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A8A8A] block mb-1">
                Endereço Físico
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {COMPANY.name}
              </h3>
              <div className="space-y-1 text-sm text-[#CCCCCC] font-light">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>
                    {COMPANY.address.street}<br />
                    {COMPANY.address.detail}<br />
                    {COMPANY.address.neighborhood}<br />
                    <strong className="text-white font-medium">{COMPANY.address.city} — {COMPANY.address.state}</strong>
                  </span>
                </p>
              </div>

              {/* Action Button: Como Chegar */}
              <div className="mt-5">
                <a
                  href={COMPANY.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E5E5E5] px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Como chegar no Google Maps</span>
                </a>
              </div>
            </div>

            {/* Parking & Format notes */}
            <div className="pt-6 border-t border-[#1F1F1F] space-y-4">
              <div className="flex items-start gap-3 text-xs text-[#B5B5B5]">
                <Car className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Estacionamento:</strong>
                  <span>{COMPANY.address.parking}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#B5B5B5]">
                <Globe className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Modalidade de Atendimento:</strong>
                  <span>{COMPANY.address.serviceType} Cobertura: {COMPANY.address.coverageRegion}</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="pt-6 border-t border-[#1F1F1F] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8A8A8A]">
                <Clock className="w-3.5 h-3.5 text-white" />
                <span>Horário de Funcionamento</span>
              </div>
              <div className="text-sm text-[#CCCCCC] space-y-1">
                <p className="text-white font-medium">{COMPANY.hours.weekdaysText}</p>
                <p className="text-xs text-[#8A8A8A] italic">{COMPANY.hours.outOfHoursText}</p>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="pt-6 border-t border-[#1F1F1F] space-y-2.5 text-xs text-[#9E9E9E]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp / Tel: <strong className="text-white font-medium">{COMPANY.phoneDisplay}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white" />
                <span>E-mail: <strong className="text-white font-medium">{COMPANY.email}</strong></span>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#242424] p-3 rounded-sm flex flex-col">
            <div className="relative w-full h-[400px] sm:h-[480px] bg-[#1A1A1A] overflow-hidden rounded-xs">
              <iframe
                title="Localização Live In Foco no Google Maps"
                src="https://maps.google.com/maps?q=Av.+Mister+Hull,+7431,+Caucaia,+Ceara&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-3 text-center sm:text-left text-xs text-[#8A8A8A] flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>{COMPANY.address.street}, {COMPANY.address.detail} — {COMPANY.address.neighborhood}, {COMPANY.address.city} - {COMPANY.address.state}</span>
              <a
                href={COMPANY.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline whitespace-nowrap"
              >
                Abrir rota detalhada →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
