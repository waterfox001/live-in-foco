import { useState } from 'react';
import { FAQS, getWhatsAppUrl } from '../data/company';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0F0F0F] border-b border-[#1E1E1E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Dúvidas comuns sobre nossos serviços
          </h2>
          <p className="text-sm sm:text-base text-[#9A9A9A] font-light leading-relaxed">
            Respostas claras e diretas baseadas nas informações oficiais da empresa.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#141414] border border-[#242424] hover:border-[#383838] transition-colors rounded-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-[#1A1A1A]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8A8A8A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#B0B0B0] font-light leading-relaxed border-t border-[#1F1F1F] pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-6 bg-[#141414] border border-[#262626] text-center space-y-3">
          <h4 className="text-sm font-semibold text-white">
            Sua dúvida não está listada acima?
          </h4>
          <p className="text-xs text-[#8A8A8A] max-w-md mx-auto">
            Entre em contato conosco pelo WhatsApp para consultar qualquer informação personalizada sobre sua data e formato.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl('general', 'Olá! Gostaria de tirar uma dúvida sobre os serviços da Live In Foco.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E0E0E0] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Tirar dúvida pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
