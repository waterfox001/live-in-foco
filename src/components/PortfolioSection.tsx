import { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem, getWhatsAppUrl } from '../data/company';
import { X, ZoomIn, ChevronLeft, ChevronRight, MessageCircle, Info } from 'lucide-react';

const CATEGORIES = [
  'Todos',
  'Eventos',
  'Estúdio',
  'Infantil',
  'Adulto',
  'Fotos impressas',
  'Álbuns',
  'Vídeo'
] as const;

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'Todos'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const currentIndex = selectedPhoto
    ? filteredItems.findIndex((item) => item.id === selectedPhoto.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setSelectedPhoto(filteredItems[currentIndex + 1]);
    } else if (filteredItems.length > 0) {
      setSelectedPhoto(filteredItems[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(filteredItems[currentIndex - 1]);
    } else if (filteredItems.length > 0) {
      setSelectedPhoto(filteredItems[filteredItems.length - 1]);
    }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#0F0F0F] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] block mb-3">
            Galeria & Portfólio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            A essência de cada momento revelada
          </h2>
          <p className="text-sm sm:text-base text-[#9A9A9A] font-light leading-relaxed">
            Fotografia autêntica em preto e branco e iluminação cuidada. Clique em qualquer foto para ampliar.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-1.5 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#0A0A0A] font-semibold shadow-md'
                    : 'bg-[#181818] text-[#A3A3A3] hover:text-white hover:bg-[#242424] border border-[#2B2B2B]'
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Visual Masonry / Dynamic Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => {
            // Apply subtle visual hierarchy without breaking layout
            const isFeatured = index === 0 && activeCategory === 'Todos';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className={`group relative overflow-hidden bg-[#161616] border border-[#242424] hover:border-[#555555] transition-all duration-300 cursor-pointer ${
                  isFeatured ? 'sm:col-span-2 sm:row-span-1 lg:col-span-2' : ''
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedPhoto(item);
                  }
                }}
                aria-label={`Ver foto ampliada: ${item.title}`}
              >
                <div className={`w-full overflow-hidden ${isFeatured ? 'aspect-16/9' : 'aspect-4/3'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-120 group-hover:scale-105 group-hover:contrast-125 transition-transform duration-600"
                  />
                </div>

                {/* Subtle Hover Overlay with Metadata */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#AAAAAA] block">
                        {item.category}
                      </span>
                      <h3 className="font-display text-base font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#CCCCCC] font-light mt-0.5 line-clamp-1">
                        {item.caption}
                      </p>
                    </div>
                    <div className="p-2 rounded-full bg-white/10 text-white backdrop-blur-sm">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note & Additional Works CTA */}
        <div className="mt-12 p-6 bg-[#141414] border border-[#242424] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#888888] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm text-[#CCCCCC]">
                Galeria preparada para inserção e atualização contínua de fotos reais de clientes, respeitando termos de privacidade e autorização de imagem.
              </p>
              <p className="text-xs text-[#7A7A7A] mt-1">
                Deseja conhecer mais exemplos de coberturas de eventos ou ensaios específicos?
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl('general', 'Olá! Gostaria de ver mais fotos e exemplos de portfólio da Live In Foco.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-white text-[#0A0A0A] hover:bg-[#E5E5E5] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ver portfólio completo</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada"
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#141414] border border-[#2E2E2E] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#242424] bg-[#0E0E0E]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
                  {selectedPhoto.category}
                </span>
                <span className="text-[#444444]" aria-hidden="true">·</span>
                <h4 className="text-sm font-semibold text-white">
                  {selectedPhoto.title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 text-[#AAAAAA] hover:text-white transition-colors cursor-pointer"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 bg-[#0A0A0A] flex items-center justify-center min-h-[300px] sm:min-h-[500px] overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain grayscale contrast-115"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#1A1A1A]/80 hover:bg-white hover:text-[#0A0A0A] text-white transition-colors border border-[#333333] rounded-full"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#1A1A1A]/80 hover:bg-white hover:text-[#0A0A0A] text-white transition-colors border border-[#333333] rounded-full"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#242424] bg-[#0E0E0E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#A8A8A8] font-light">
                {selectedPhoto.caption}
              </p>
              <a
                href={getWhatsAppUrl('general', `Olá! Vi a foto "${selectedPhoto.title}" no site da Live In Foco e gostaria de consultar um ensaio/evento similar.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E0E0E0] px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Quero fotos com este padrão</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
