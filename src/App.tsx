import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptSection } from './components/ConceptSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { HistorySection } from './components/HistorySection';
import { ProductsSection } from './components/ProductsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { GoogleReviewsPlaceholder } from './components/GoogleReviewsPlaceholder';
import { FAQSection } from './components/FAQSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-white selection:text-[#0A0A0A]">
      {/* Navigation Bar */}
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 2. Conceito: Mais do que fotografar. Eternizar. */}
        <ConceptSection />

        {/* 3. Serviços */}
        <ServicesSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 4. Portfólio & Galeria com Lightbox */}
        <PortfolioSection />

        {/* 5. Nossa História (1989 - 37 anos de tradição familiar) */}
        <HistorySection />

        {/* 6. Produtos & Preços Informados */}
        <ProductsSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 7. Experiência & Diferenciais */}
        <ExperienceSection />

        {/* 8. Como Funciona (01 a 05) */}
        <HowItWorksSection />

        {/* 9. Avaliações & Transparência Google */}
        <GoogleReviewsPlaceholder />

        {/* 10. Perguntas Frequentes (FAQ) */}
        <FAQSection />

        {/* 11. Localização, Mapa & Horários */}
        <LocationSection />

        {/* 12. CTA Final */}
        <FinalCTASection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Interactive Quote Simulator Modal */}
      <QuoteSimulatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
