import { Camera, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY } from '../data/company';

export function ConceptSection() {
  return (
    <section id="conceito" className="py-20 sm:py-28 bg-[#0F0F0F] border-b border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side: Framed Fine Art Photo */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative border border-[#2B2B2B] p-2 bg-[#0A0A0A] shadow-2xl">
              <div className="aspect-4/5 overflow-hidden bg-[#141414] relative">
                <img
                  src="/src/assets/images/studio_portrait_bw_1790631792497.jpg"
                  alt="Retrato em preto e branco capturado no estúdio Live In Foco"
                  className="w-full h-full object-cover grayscale contrast-115 hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#CCCCCC] font-light">
                  <span className="font-mono text-[11px] text-[#888888] block">Estúdio Próprio · Caucaia</span>
                  <span>Cuidado e sensibilidade em cada enquadramento</span>
                </div>
              </div>
            </div>
            {/* Subtle vintage border detail */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border border-[#262626] -z-10" />
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A]">
              <span>Conceito & Filosofia</span>
              <span aria-hidden="true">·</span>
              <span>Luz & Sombra</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              {COMPANY.slogans.conceptHeadline}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#BDBDBD] font-light leading-relaxed">
              <p>
                A fotografia não é apenas um registro técnico de pessoas e lugares; é o guardião silencioso dos instantes mais preciosos de uma família.
              </p>
              <p>
                A <strong className="text-white font-medium">Live In Foco</strong> nasceu de uma trajetória familiar genuína, iniciada em 1989 pelo pai da família com uma simples câmera da época. O que começou com coragem e amor pelo ofício se transformou em um legado vivo que hoje, com 37 anos de história, atravessa gerações.
              </p>
              <p className="text-sm sm:text-base text-[#9E9E9E]">
                Com estúdio próprio localizado no Parque das Nações em Caucaia e atendimento completo em eventos externos por toda a região metropolitana de Fortaleza, unimos a solidez da tradição à sensibilidade contemporânea conduzida por Lina Mara Costa de Matos.
              </p>
            </div>

            {/* Core Values Minimalist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#222222]">
              <div className="flex items-start gap-3">
                <Heart className="w-4 h-4 text-white mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Cuidado com as Memórias</h4>
                  <p className="text-xs text-[#8A8A8A] mt-0.5">Tratamento afetuoso e respeito à verdade de cada família.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-white mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Tradição & Confiança</h4>
                  <p className="text-xs text-[#8A8A8A] mt-0.5">37 anos de dedicação ininterrupta à arte da fotografia.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Camera className="w-4 h-4 text-white mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Estúdio Próprio & Externas</h4>
                  <p className="text-xs text-[#8A8A8A] mt-0.5">Espaço próprio equipado em Caucaia e cobertura externa completa.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-white mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Continuidade Familiar</h4>
                  <p className="text-xs text-[#8A8A8A] mt-0.5">Nova geração trazendo inovação e olhar atualizado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
