import { useState } from 'react';
import { X, MessageCircle, Calculator, Check, Info } from 'lucide-react';
import { COMPANY } from '../data/company';

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteSimulatorModal({ isOpen, onClose }: QuoteSimulatorModalProps) {
  const [serviceType, setServiceType] = useState<string>('evento');
  const [locationCity, setLocationCity] = useState<string>('Caucaia');
  const [targetDate, setTargetDate] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  
  // Known quantities
  const [print15x21Qty, setPrint15x21Qty] = useState<number>(0);
  const [digitalExtraQty, setDigitalExtraQty] = useState<number>(0);
  const [includeAlbum, setIncludeAlbum] = useState<boolean>(false);
  const [includeVideo, setIncludeVideo] = useState<boolean>(false);
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  if (!isOpen) return null;

  // Exact calculations based on disclosed rates
  const EVENT_BASE_PRICE = 400; // a partir de R$ 400
  const PRINT_15x21_PRICE = 20; // R$ 20 por foto
  const DIGITAL_INDIVIDUAL_PRICE = 15; // R$ 15 por foto

  let calculatedBase = 0;
  if (serviceType === 'evento') {
    calculatedBase += EVENT_BASE_PRICE;
  }
  calculatedBase += print15x21Qty * PRINT_15x21_PRICE;
  calculatedBase += digitalExtraQty * DIGITAL_INDIVIDUAL_PRICE;

  const handleSendWhatsApp = () => {
    let serviceLabel = 'Fotografia de Eventos (Fotos ilimitadas)';
    if (serviceType === 'estudio') serviceLabel = 'Fotografia em Estúdio Próprio';
    if (serviceType === 'infantil') serviceLabel = 'Ensaio Fotográfico Infantil';
    if (serviceType === 'adulto') serviceLabel = 'Ensaio Fotográfico Adulto';
    if (serviceType === 'pacote-video') serviceLabel = 'Pacote Fotografia + Videomaker';

    const lines: string[] = [
      `Olá, Live In Foco! Meu nome é ${clientName ? clientName : 'um cliente do site'}.`,
      `Gostaria de solicitar um orçamento para:`,
      `• Serviço: ${serviceLabel}`,
      `• Local / Cidade: ${locationCity}`,
      targetDate ? `• Data prevista: ${targetDate}` : '',
      serviceType === 'evento' ? `• Base de evento: a partir de R$ 400 (fotos ilimitadas)` : '',
      print15x21Qty > 0 ? `• Fotos impressas 15x21: ${print15x21Qty} unidade(s) (R$ ${print15x21Qty * 20})` : '',
      digitalExtraQty > 0 ? `• Fotos digitais individuais: ${digitalExtraQty} unidade(s) (R$ ${digitalExtraQty * 15})` : '',
      includeAlbum ? `• Desejo conhecer modelos e valores de Álbuns fotográficos` : '',
      includeVideo ? `• Desejo incluir cobertura com Videomaker / Storymakers` : '',
      calculatedBase > 0 ? `• Estimativa base dos itens com preço tabelado: R$ ${calculatedBase}` : '',
      additionalNotes ? `• Observações: ${additionalNotes}` : '',
      `Poderiam me informar a disponibilidade e detalhes? Obrigado!`
    ].filter(Boolean);

    const message = lines.join('\n');
    const url = `https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Simulador de Orçamento"
    >
      <div className="relative bg-[#121212] border border-[#2E2E2E] max-w-2xl w-full p-6 sm:p-8 rounded-sm shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#242424] mb-6">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-white" />
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              Simulador de Orçamento
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8A8A8A] hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar simulador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="space-y-5 text-xs sm:text-sm">
          {/* Client Name & Target Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                Seu Nome (Opcional)
              </label>
              <input
                type="text"
                placeholder="Ex.: Mariana"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-[#181818] border border-[#2F2F2F] text-white px-3 py-2.5 rounded-sm focus:outline-none focus:border-white text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                Data Prevista / Mês
              </label>
              <input
                type="text"
                placeholder="Ex.: Próximo mês / 15 de Outubro"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full bg-[#181818] border border-[#2F2F2F] text-white px-3 py-2.5 rounded-sm focus:outline-none focus:border-white text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Service Type Selection */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
              Tipo de Serviço Principal
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { id: 'evento', label: 'Evento Externo', note: 'Fotos digitais ilimitadas a partir de R$ 400' },
                { id: 'estudio', label: 'Estúdio Próprio', note: 'Ambiente controlado em Caucaia' },
                { id: 'infantil', label: 'Ensaio Infantil', note: 'Paciência e sensibilidade' },
                { id: 'adulto', label: 'Ensaio Adulto', note: 'Retratos e ensaios pessoais' },
                { id: 'pacote-video', label: 'Fotografia + Vídeo', note: 'Videomaker & Storymakers' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id)}
                  className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                    serviceType === item.id
                      ? 'bg-white text-[#0A0A0A] border-white font-medium shadow-sm'
                      : 'bg-[#181818] text-[#C2C2C2] border-[#292929] hover:border-[#444444]'
                  }`}
                >
                  <div className="font-semibold text-xs sm:text-sm flex items-center justify-between">
                    <span>{item.label}</span>
                    {serviceType === item.id && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`text-[11px] mt-0.5 ${serviceType === item.id ? 'text-[#333333]' : 'text-[#8A8A8A]'}`}>
                    {item.note}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
              Cidade do Atendimento
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Caucaia', 'Fortaleza', 'Outra Região'].map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setLocationCity(city)}
                  className={`py-2 text-center text-xs rounded-sm border cursor-pointer ${
                    locationCity === city
                      ? 'bg-white text-[#0A0A0A] border-white font-semibold'
                      : 'bg-[#181818] text-[#A5A5A5] border-[#282828] hover:border-[#404040]'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Extras with known pricing */}
          <div className="p-4 bg-[#161616] border border-[#242424] space-y-3 rounded-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0] block">
              Produtos & Itens Adicionais (Tabela Oficial)
            </span>

            {/* Impressões 15x21 */}
            <div className="flex items-center justify-between py-1 border-b border-[#202020]">
              <div>
                <span className="text-xs sm:text-sm text-white font-medium block">
                  Foto impressa 15x21 cm
                </span>
                <span className="text-[11px] text-[#8A8A8A]">
                  R$ 20 por foto revelada
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPrint15x21Qty(Math.max(0, print15x21Qty - 1))}
                  className="w-7 h-7 bg-[#202020] text-white hover:bg-[#333333] rounded-sm text-sm"
                >
                  -
                </button>
                <span className="w-8 text-center text-white font-mono text-xs">
                  {print15x21Qty}
                </span>
                <button
                  type="button"
                  onClick={() => setPrint15x21Qty(print15x21Qty + 1)}
                  className="w-7 h-7 bg-[#202020] text-white hover:bg-[#333333] rounded-sm text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Fotos digitais extras */}
            <div className="flex items-center justify-between py-1 border-b border-[#202020]">
              <div>
                <span className="text-xs sm:text-sm text-white font-medium block">
                  Foto digital individual
                </span>
                <span className="text-[11px] text-[#8A8A8A]">
                  R$ 15 por foto em alta resolução
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setDigitalExtraQty(Math.max(0, digitalExtraQty - 1))}
                  className="w-7 h-7 bg-[#202020] text-white hover:bg-[#333333] rounded-sm text-sm"
                >
                  -
                </button>
                <span className="w-8 text-center text-white font-mono text-xs">
                  {digitalExtraQty}
                </span>
                <button
                  type="button"
                  onClick={() => setDigitalExtraQty(digitalExtraQty + 1)}
                  className="w-7 h-7 bg-[#202020] text-white hover:bg-[#333333] rounded-sm text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Checkboxes for options under consultation */}
            <div className="pt-2 space-y-2">
              <label className="flex items-center gap-2 text-xs text-[#CCCCCC] cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeAlbum}
                  onChange={(e) => setIncludeAlbum(e.target.checked)}
                  className="rounded bg-[#202020] border-[#383838] text-white focus:ring-0"
                />
                <span>Desejo consultar modelos e valores de <strong>Álbuns fotográficos</strong></span>
              </label>

              <label className="flex items-center gap-2 text-xs text-[#CCCCCC] cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeVideo}
                  onChange={(e) => setIncludeVideo(e.target.checked)}
                  className="rounded bg-[#202020] border-[#383838] text-white focus:ring-0"
                />
                <span>Desejo incluir equipe de <strong>Videomaker & Storymakers</strong></span>
              </label>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
              Observações Especiais (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Descreva detalhes como horário, duração ou ideias para o ensaio..."
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="w-full bg-[#181818] border border-[#2F2F2F] text-white px-3 py-2 rounded-sm focus:outline-none focus:border-white text-xs"
            />
          </div>

          {/* Summary Box */}
          <div className="p-4 bg-[#141414] border border-[#2B2B2B] rounded-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#8A8A8A] block uppercase">
                  Estimativa Base Tabelada
                </span>
                <span className="text-xl font-bold text-white font-mono">
                  {calculatedBase > 0 ? `R$ ${calculatedBase}` : 'Sob consulta'}
                </span>
              </div>
              <div className="text-right text-[11px] text-[#888888]">
                {serviceType === 'evento' ? 'Inclui fotos digitais ilimitadas' : 'Valores finais alinhados no WhatsApp'}
              </div>
            </div>

            <div className="mt-2 text-[10px] text-[#7A7A7A] flex items-center gap-1.5 border-t border-[#1F1F1F] pt-2">
              <Info className="w-3 h-3 text-[#777777] shrink-0" />
              <span>Não cobramos taxas ocultas. Valores de álbuns e vídeos são combinados de acordo com sua preferência.</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-[#242424] flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs uppercase tracking-wider text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E0E0E0] px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enviar Solicitação pelo WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
