import { SERVICES, getWhatsAppUrl } from '../data/company';
import { ArrowUpRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: () => void;
}

export function ServicesSection({ onOpenQuoteModal }: ServicesSectionProps) {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] block mb-3">
              Serviços Fotográficos & Audiovisuais
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Soluções completas para eternizar momentos
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#9A9A9A] font-light leading-relaxed mb-4">
              Atendimento presencial em nosso estúdio próprio em Caucaia ou em eventos externos por Fortaleza e região metropolitana.
            </p>
            <button
              onClick={onOpenQuoteModal}
              className="text-xs font-semibold uppercase tracking-widest text-white hover:text-[#C2C2C2] underline underline-offset-8 transition-colors cursor-pointer"
            >
              Simular orçamento para seu caso →
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="group bg-[#121212] border border-[#242424] hover:border-[#444444] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#181818]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:contrast-125 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 text-[11px] font-mono tracking-wider uppercase text-[#D4D4D4] bg-[#0A0A0A]/85 px-2.5 py-1 border border-[#2E2E2E]">
                  {service.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-[#777777] uppercase tracking-wider">
                    {String(index + 1).padStart(2, '0')}. Serviço
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#A0A0A0] font-light leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Features checklist */}
                <ul className="space-y-2 pt-3 border-t border-[#1F1F1F] text-xs text-[#BFBFBF]">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-white mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#1F1F1F]">
                  <a
                    href={getWhatsAppUrl(service.ctaMessageKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white py-2.5 px-3 bg-[#1C1C1C] hover:bg-white hover:text-[#0A0A0A] border border-[#2E2E2E] hover:border-white transition-all duration-200 rounded-sm"
                  >
                    <span>Saiba mais no WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
