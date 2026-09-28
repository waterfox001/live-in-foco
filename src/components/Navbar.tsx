import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { COMPANY, getWhatsAppUrl } from '../data/company';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#conceito' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Nossa História', href: '#historia' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#localizacao' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#202020] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A0A0A]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#inicio"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            aria-label="Live In Foco - Página Inicial"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.18em] text-white transition-opacity group-hover:opacity-90">
              LIVE IN FOCO
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#8A8A8A] uppercase font-light">
              Estúdio & Eventos
            </span>
          </a>

          {/* Zone 2: 4-8 clean text navigation links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-normal text-[#B5B5B5]"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-150 relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="text-xs uppercase tracking-wider text-[#CCCCCC] hover:text-white px-3 py-2 border border-[#333333] hover:border-[#666666] transition-colors rounded-sm cursor-pointer whitespace-nowrap"
            >
              Simular Orçamento
            </button>
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E5E5E5] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm rounded-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-3.5 h-3.5 stroke-[2.2]" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#8A8A8A] focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0F0F0F] border-b border-[#202020] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2.5 pt-2" aria-label="Menu móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm font-medium text-[#D1D1D1] hover:text-white py-2 border-b border-[#1A1A1A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center text-xs uppercase tracking-wider text-[#CCCCCC] py-2.5 border border-[#333333] rounded-sm block"
            >
              Simular Orçamento
            </button>
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white text-[#0A0A0A] py-3 text-xs font-semibold uppercase tracking-wider rounded-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4 stroke-[2.2]" />
              <span>Falar pelo WhatsApp</span>
            </a>
            <div className="text-center text-xs text-[#8A8A8A] pt-1 flex items-center justify-center gap-1">
              <Phone className="w-3 h-3" />
              <span>{COMPANY.phoneDisplay} · Caucaia - CE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
