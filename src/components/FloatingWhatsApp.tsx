import { useState } from 'react';
import { MessageCircle, X, Camera, Calendar, Package } from 'lucide-react';
import { COMPANY, getWhatsAppUrl } from '../data/company';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40">
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 bg-[#121212] border border-[#2B2B2B] p-4 rounded-sm shadow-2xl w-72 text-left space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[#202020] pb-2">
            <div>
              <span className="font-display text-sm font-bold text-white block">
                Atendimento Live In Foco
              </span>
              <span className="text-[10px] text-[#8A8A8A] font-mono">
                {COMPANY.phoneDisplay}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#888888] hover:text-white p-1 cursor-pointer"
              aria-label="Fechar janela rápida"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#B5B5B5] font-light">
            Como podemos te ajudar hoje? Escolha o assunto para agilizar:
          </p>

          <div className="space-y-1.5 text-xs">
            <a
              href={getWhatsAppUrl('events')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 bg-[#181818] hover:bg-white hover:text-[#0A0A0A] text-[#CCCCCC] rounded-sm transition-colors border border-[#242424]"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Fotografia para Evento</span>
            </a>

            <a
              href={getWhatsAppUrl('studio')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 bg-[#181818] hover:bg-white hover:text-[#0A0A0A] text-[#CCCCCC] rounded-sm transition-colors border border-[#242424]"
            >
              <Camera className="w-3.5 h-3.5 shrink-0" />
              <span>Ensaio em Estúdio / Externo</span>
            </a>

            <a
              href={getWhatsAppUrl('products')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 bg-[#181818] hover:bg-white hover:text-[#0A0A0A] text-[#CCCCCC] rounded-sm transition-colors border border-[#242424]"
            >
              <Package className="w-3.5 h-3.5 shrink-0" />
              <span>Álbuns & Fotos Impressas 15x21</span>
            </a>
          </div>

          <div className="pt-1 text-center">
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#999999] hover:text-white underline"
            >
              Ou iniciar conversa geral no WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Abrir opções de contato no WhatsApp"
        aria-expanded={isOpen}
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
          WhatsApp
        </span>
      </button>
    </div>
  );
}
