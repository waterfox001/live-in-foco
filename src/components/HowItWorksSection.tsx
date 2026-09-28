import { HOW_IT_WORKS, getWhatsAppUrl } from '../data/company';
import { MessageCircle } from 'lucide-react';

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0F0F0F] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] block mb-3">
            Passo a Passo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Como funciona seu atendimento
          </h2>
          <p className="text-sm sm:text-base text-[#9A9A9A] font-light leading-relaxed">
            Um processo direto, transparente e sem burocracias, do primeiro contato à entrega das suas lembranças.
          </p>
        </div>

        {/* 5 Steps Horizontal / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {HOW_IT_WORKS.map((item) => (
            <div
              key={item.step}
              className="bg-[#141414] border border-[#242424] p-6 flex flex-col justify-between relative group hover:border-[#444444] transition-all"
            >
              <div>
                <span className="font-mono text-3xl font-bold text-[#444444] group-hover:text-white transition-colors block mb-4">
                  {item.step}
                </span>
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#999999] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#202020] text-[11px] font-mono text-[#666666]">
                Etapa {item.step} de 05
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-[#0A0A0A] hover:bg-[#E5E5E5] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Iniciar no WhatsApp pelo Passo 01</span>
          </a>
        </div>
      </div>
    </section>
  );
}
