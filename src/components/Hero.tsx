import { MessageCircle, ArrowDown, MapPin, Calendar } from 'lucide-react';
import { COMPANY, getWhatsAppUrl } from '../data/company';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-[#1F1F1F]"
    >
      {/* Background Photography with Monochrome Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_camera_bw_1790631781229.jpg"
          alt="Fotógrafo em estúdio com câmera profissional em preto e branco"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-45 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_90%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed Metadata Trust Marker */}
        <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm tracking-[0.2em] text-[#C2C2C2] uppercase mb-6 font-medium">
          <span>Tradição Familiar desde 1989</span>
          <span aria-hidden="true" className="text-[#666666]">·</span>
          <span className="text-white font-semibold">37 anos de história</span>
          <span aria-hidden="true" className="text-[#666666]">·</span>
          <span>Caucaia & Fortaleza</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08] [text-wrap:balance]">
          {COMPANY.slogans.heroHeadline}
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#C7C7C7] font-light leading-relaxed mb-10 [text-wrap:balance]">
          {COMPANY.slogans.heroSubheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={getWhatsAppUrl('events')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#0A0A0A] hover:bg-[#EBEBEB] px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-200 rounded-sm shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white group"
          >
            <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Agendar pelo WhatsApp</span>
          </a>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#404040] hover:border-white text-[#E5E5E5] hover:text-white px-7 py-4 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] transition-all duration-200 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <span>Conhecer nosso trabalho</span>
          </a>
        </div>

        {/* Clean Editorial Trust Markers */}
        <div className="pt-8 border-t border-[#222222]/80 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#8A8A8A] block font-mono">Espaço Próprio</span>
            <p className="text-sm text-[#E0E0E0] font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8A8A8A]" />
              Estúdio em Caucaia
            </p>
            <p className="text-xs text-[#8A8A8A]">Parque das Nações c/ vagas na rua</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#8A8A8A] block font-mono">Eventos & Externas</span>
            <p className="text-sm text-[#E0E0E0] font-medium">Fotos Ilimitadas</p>
            <p className="text-xs text-[#8A8A8A]">Eventos a partir de R$ 400</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#8A8A8A] block font-mono">Atendimento</span>
            <p className="text-sm text-[#E0E0E0] font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#8A8A8A]" />
              Presencial & Online
            </p>
            <p className="text-xs text-[#8A8A8A]">Fortaleza e Região Metropolitana</p>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#conceito"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 text-[#777777] hover:text-white transition-colors duration-200"
        aria-label="Rolar para próxima seção"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
