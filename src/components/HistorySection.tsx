import { TIMELINE, COMPANY, getWhatsAppUrl } from '../data/company';
import { Clock, MessageCircle, Sparkles } from 'lucide-react';

export function HistorySection() {
  return (
    <section id="historia" className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Nossa História & Tradição Familiar</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Mais de três décadas contando histórias através da fotografia
          </h2>
          <p className="text-base sm:text-lg text-[#B5B5B5] font-light leading-relaxed">
            Uma história de família construída com esforço, dedicação e amor pelo ofício que atravessa gerações desde 1989.
          </p>
        </div>

        {/* Narrative Block with Emotional Elegance */}
        <div className="bg-[#121212] border border-[#242424] p-8 sm:p-12 mb-16 relative">
          <div className="max-w-4xl space-y-6 text-base sm:text-lg text-[#CCCCCC] font-light leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:font-display first-letter:text-white first-letter:mr-2 first-letter:float-left">
              O Estúdio Live In Foco carrega uma história construída com muito esforço, dedicação e amor pela fotografia.
            </p>
            <p>
              Tudo começou em <strong className="text-white font-medium">1989</strong>, quando o pai da família, recém-casado e cheio de sonhos, veio do interior para a cidade, em busca de uma vida melhor e de mais oportunidades, decidido a conquistar seu espaço no mercado de trabalho.
            </p>
            <p>
              Com uma simples câmera da época, começou a registrar os mais diversos eventos. Com muito trabalho, dedicação e paixão pelo que fazia, foi conquistando seu espaço e a confiança das pessoas.
            </p>
            <p>
              Com o passar dos anos, essa história foi crescendo dentro da própria família. A fotografia deixou de ser apenas uma profissão e se tornou um legado. A mãe também passou a fazer parte dessa caminhada, ajudando a fortalecer esse trabalho construído com tanto esforço.
            </p>
            <p>
              O nome <strong className="text-white font-medium">Estúdio Live In Foco</strong> surgiu alguns anos atrás, através de um plano de negócio, trazendo uma nova identidade para algo que já tinha uma longa história.
            </p>
            <p>
              Hoje, já são <strong className="text-white font-medium">37 anos de experiência</strong>, marcados por milhares de momentos registrados e memórias eternizadas.
            </p>
            <p className="italic text-[#E5E5E5] border-l-2 border-white pl-4 py-1">
              E essa história continua... Há 13 anos, a filha também entrou para o ramo da fotografia, trazendo um novo olhar, inovação e continuidade para esse legado familiar.
            </p>
            <p>
              Assim, o Estúdio Live In Foco representa muito mais que um nome: é uma história de família, construída ao longo de gerações, com amor pela fotografia e pelo privilégio de registrar momentos únicos na vida das pessoas.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-[#8A8A8A] font-mono">
              Responsável atual: <span className="text-[#E0E0E0]">{COMPANY.responsible}</span> ({COMPANY.role})
            </div>
            <div className="text-xs text-[#8A8A8A]">
              Slogan oficial: <span className="text-white italic">"{COMPANY.slogans.official}"</span>
            </div>
          </div>
        </div>

        {/* Visual Timeline Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-white" />
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Linha do Tempo: 1989 aos Dias Atuais
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-[#2E2E2E] space-y-10">
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-white group-hover:bg-white transition-colors" />

                <div className="space-y-1.5">
                  <div className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[#1A1A1A] px-2.5 py-1 border border-[#333333]">
                    {item.yearOrStep}
                  </div>
                  <h4 className="font-display text-lg font-bold text-white pt-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#A8A8A8] font-light leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={getWhatsAppUrl('general', 'Olá! Li a história da Live In Foco no site e gostaria de conhecer mais sobre os serviços de vocês.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-[#0A0A0A] hover:bg-[#E0E0E0] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Conheça nossa história e agende seu momento</span>
          </a>
        </div>
      </div>
    </section>
  );
}
