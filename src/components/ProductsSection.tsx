import { PRODUCTS, getWhatsAppUrl } from '../data/company';
import { ArrowUpRight, MessageCircle, Image, CheckCircle, Package } from 'lucide-react';

interface ProductsSectionProps {
  onOpenQuoteModal: () => void;
}

export function ProductsSection({ onOpenQuoteModal }: ProductsSectionProps) {
  return (
    <section id="produtos" className="py-20 sm:py-28 bg-[#0F0F0F] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] block mb-3">
              Produtos & Valores Informados
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Transparência para suas memórias
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#9A9A9A] font-light leading-relaxed mb-3">
              Tabela com os valores oficiais informados pela empresa. Sem surpresas ou taxas ocultas.
            </p>
            <button
              onClick={onOpenQuoteModal}
              className="text-xs font-semibold uppercase tracking-widest text-white hover:text-[#C2C2C2] underline underline-offset-8 transition-colors cursor-pointer"
            >
              Calcular orçamento personalizado →
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#141414] border border-[#242424] hover:border-[#404040] transition-all flex flex-col justify-between p-6 rounded-sm relative group"
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-[#1C1C1C] mb-5 border border-[#262626]">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-[#D4D4D4] bg-[#0A0A0A]/90 px-2 py-0.5 border border-[#333333]">
                    {prod.priceNote || 'Tabela'}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {prod.name}
                </h3>

                {/* Price Display */}
                <div className="py-2.5 mb-4 border-y border-[#202020]">
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {prod.priceDisplay}
                  </span>
                </div>

                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed mb-4">
                  {prod.description}
                </p>

                {/* Details list */}
                <ul className="space-y-2 mb-6 text-xs text-[#8F8F8F]">
                  {prod.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppUrl(prod.ctaMessageKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#1F1F1F] hover:bg-white text-white hover:text-[#0A0A0A] border border-[#333333] hover:border-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
              >
                <span>{prod.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Dedicated Albums Section with Model Placeholder */}
        <div className="bg-[#121212] border border-[#262626] p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8A8A8A]">
                <Package className="w-3.5 h-3.5 text-white" />
                <span>Acervo de Álbuns Fotográficos</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Álbuns artesanais em diversos modelos
              </h3>
              <p className="text-sm sm:text-base text-[#B0B0B0] font-light leading-relaxed">
                A Live In Foco oferece álbuns de diversos modelos e materiais para eternizar momentos com a nobreza que um livro físico de memórias merece. Os valores variam conforme dimensões, encadernação e número de lâminas.
              </p>

              {/* Placeholder Box for Future Real Album Photos */}
              <div className="p-4 bg-[#181818] border border-dashed border-[#383838] text-xs text-[#8A8A8A] flex items-start gap-3">
                <Image className="w-4 h-4 text-[#CCCCCC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#CCCCCC] block font-medium">Espaço reservado para inserção do catálogo fotográfico de modelos de álbuns:</strong>
                  <span>Novas amostras de encadernações em linho, couro, estojo e acrílico serão atualizadas nesta galeria conforme a disponibilidade dos fornecedores parceiros.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl('products')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E5E5E5] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar modelos e valores pelo WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Album Visual Preview */}
            <div className="lg:col-span-5 relative">
              <div className="border border-[#2F2F2F] p-2 bg-[#0A0A0A]">
                <div className="aspect-4/3 overflow-hidden bg-[#181818] relative">
                  <img
                    src="/src/assets/images/album_prints_bw_1790631813067.jpg"
                    alt="Álbum fotográfico de luxo com impressões 15x21"
                    className="w-full h-full object-cover grayscale contrast-115"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono bg-[#0A0A0A]/90 text-[#CCCCCC] px-2 py-1 border border-[#333333]">
                    Álbum & Revelação 15x21
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
