import { MessageCircle, Shield } from 'lucide-react';
import { COMPANY, getWhatsAppUrl } from '../data/company';

interface FinalCTASectionProps {
  onOpenQuoteModal: () => void;
}

export function FinalCTASection({ onOpenQuoteModal }: FinalCTASectionProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden border-b border-[#202020]">
      {/* Background with B&W photographic overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/src/assets/images/hero_camera_bw_1790631781229.jpg"
          alt="Fotografia em preto e branco de fundo"
          className="w-full h-full object-cover grayscale contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8A8A8A] mb-4">
          <Shield className="w-3.5 h-3.5 text-white" />
          <span>Atendimento Direto com a Equipe</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
          {COMPANY.slogans.ctaFinalHeadline}
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#CCCCCC] font-light leading-relaxed mb-10 [text-wrap:balance]">
          {COMPANY.slogans.ctaFinalSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#0A0A0A] hover:bg-[#E0E0E0] px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] rounded-sm transition-all shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar pelo WhatsApp</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#404040] hover:border-white text-white px-7 py-4 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] rounded-sm transition-all cursor-pointer"
          >
            <span>Simular Orçamento Online</span>
          </button>
        </div>

        <div className="mt-8 text-xs text-[#7A7A7A] font-mono">
          WhatsApp oficial: {COMPANY.phoneDisplay} · Resposta ágil em horário comercial
        </div>
      </div>
    </section>
  );
}
