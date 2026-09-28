import { DIFFERENTIALS, COMPANY, getWhatsAppUrl } from '../data/company';
import { Award, Check, MessageCircle } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <div className="border border-[#262626] bg-[#121212] p-8 sm:p-14 mb-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A]">
              <Award className="w-3.5 h-3.5 text-white" />
              <span>Experiência & Legado</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {COMPANY.slogans.experienceHeadline}
            </h2>

            <p className="text-base sm:text-lg text-[#CCCCCC] font-light leading-relaxed">
              O tempo não apenas constrói experiência; refina o olhar, ensina a antecipar o abraço, a lágrima discreta e a gargalhada espontânea que só acontecem uma única vez.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('events')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E5E5E5] px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar com nossa equipe</span>
              </a>
            </div>
          </div>
        </div>

        {/* Differentials Clean Grid */}
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] block">
              Por que escolher a Live In Foco
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              Diferenciais consolidados na prática
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {DIFFERENTIALS.map((diff, index) => (
              <div
                key={index}
                className="bg-[#121212] border border-[#222222] p-6 flex flex-col justify-start hover:border-[#383838] transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#1C1C1C] border border-[#333333] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-white">
                    {diff.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#9E9E9E] font-light leading-relaxed pl-8">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
