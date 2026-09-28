import { COMPANY, getWhatsAppUrl } from '../data/company';
import { Instagram, MessageCircle, MapPin, Mail, Phone, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#080808] text-[#9A9A9A] border-t border-[#1C1C1C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-display text-2xl font-bold tracking-[0.16em] text-white block">
              LIVE IN FOCO
            </span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A]">
              Estúdio Fotográfico & Fotografia de Eventos
            </p>
            <p className="text-xs text-[#AAAAAA] italic leading-relaxed">
              "{COMPANY.slogans.official}"
            </p>
            <p className="text-xs text-[#808080] leading-relaxed">
              Tradição familiar iniciada em 1989. Mais de 37 anos dedicados a eternizar momentos únicos na vida das pessoas através da fotografia.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#141414] hover:bg-white hover:text-[#0A0A0A] text-white border border-[#2A2A2A] rounded-sm transition-colors"
                aria-label="Instagram da Live In Foco"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#141414] hover:bg-white hover:text-[#0A0A0A] text-white border border-[#2A2A2A] rounded-sm transition-colors"
                aria-label="WhatsApp da Live In Foco"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#conceito" className="hover:text-white transition-colors">Sobre a Empresa</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#produtos" className="hover:text-white transition-colors">Produtos & Preços</a></li>
              <li><a href="#historia" className="hover:text-white transition-colors">Nossa História (1989)</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Localização</a></li>
            </ul>
          </div>

          {/* Services & Products List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
              Serviços & Produtos
            </h4>
            <ul className="space-y-2 text-xs text-[#8A8A8A]">
              <li>Fotografia de Eventos (Ilimitadas a partir de R$ 400)</li>
              <li>Fotografia em Estúdio Próprio</li>
              <li>Foto Impressa 15x21 (R$ 20/foto)</li>
              <li>Foto Digital Individual (R$ 15/foto)</li>
              <li>Álbuns Fotográficos (Modelos diversos)</li>
              <li>Videomaker & Storymakers</li>
              <li>Pacotes de Fotografia + Vídeo</li>
              <li>Fotografia Infantil e Adulta</li>
            </ul>
          </div>

          {/* Company Data & Contact */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
              Atendimento & Dados
            </h4>
            <div className="space-y-2 text-[#9A9A9A]">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>
                  {COMPANY.address.street}, {COMPANY.address.detail}<br />
                  {COMPANY.address.neighborhood} — {COMPANY.address.city}, {COMPANY.address.state}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                <span>WhatsApp: {COMPANY.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{COMPANY.email}</span>
              </p>
              <p className="flex items-start gap-2 pt-1 border-t border-[#1C1C1C]">
                <Clock className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>
                  {COMPANY.hours.weekdaysText}<br />
                  <span className="text-[#777777] italic">{COMPANY.hours.outOfHoursText}</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Legal & CNPJ Line */}
        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between text-[11px] text-[#707070] gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {currentYear} {COMPANY.name}. Razão Social: {COMPANY.legalName} · CNPJ: {COMPANY.cnpj}.
            </p>
            <p>
              Responsável técnica: {COMPANY.responsible} ({COMPANY.role}) · Caucaia — Ceará.
            </p>
          </div>
          <div className="text-center md:text-right text-[#5A5A5A]">
            <span>Fotografia preto e branco, luz, sombra e eternização de memórias.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
