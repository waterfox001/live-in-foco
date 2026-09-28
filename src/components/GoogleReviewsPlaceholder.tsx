import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/company';

export function GoogleReviewsPlaceholder() {
  return (
    <section className="py-20 sm:py-24 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] block mb-3">
            Avaliações & Reputação
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Transparência & Opinião dos Clientes
          </h2>
          <p className="text-sm text-[#9E9E9E] font-light">
            Prezamos pela autenticidade e respeito aos nossos clientes. Não publicamos depoimentos simulados ou fictícios.
          </p>
        </div>

        {/* Real Google Reviews Integration Card */}
        <div className="bg-[#121212] border border-[#2B2B2B] p-8 sm:p-12 text-center rounded-sm relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-1.5 text-white">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-white text-white" />
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Perfil Oficial no Google: {COMPANY.googleProfile}
              </h3>
              <p className="text-sm text-[#CCCCCC] font-light leading-relaxed">
                Este espaço está integrado e reservado para receber e exibir em tempo real as avaliações públicas deixadas por clientes que vivenciaram a experiência Live In Foco em Caucaia e Fortaleza.
              </p>
            </div>

            {/* Placeholder Container with Clear Identifier */}
            <div className="p-4 bg-[#181818] border border-dashed border-[#3A3A3A] text-left text-xs text-[#999999] space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Política de Integridade e Avaliações Verificadas</span>
              </div>
              <p>
                Conforme as diretrizes de transparência da empresa, os depoimentos exibidos refletem exclusivamente avaliações reais submetidas no Google Meu Negócio.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COMPANY.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E0E0E0] px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                <span>Acessar perfil no Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#404040] hover:border-white text-[#CCCCCC] hover:text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                <span>Ver stories no Instagram (@{COMPANY.instagram})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
