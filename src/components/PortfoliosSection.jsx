import { useState, useEffect, useCallback } from 'react';
import PortfolioCard from './PortfolioCard';
import PortfolioModal from './PortfolioModal';
import portfoliosData from '../data/portfolios.json';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfoliosSection = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const handleViewDetails = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPortfolio(null);
  };

  return (
    <section id="portfolios" className="section-padding bg-gray-50 geometric-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conheça Nossos
            <span className="text-gradient block">Talentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada portfólio representa uma história única de aprendizado e dedicação. 
            Explore os trabalhos de jovens talentos e estudantes que buscam sua primeira oportunidade em nossa comunidade.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {portfoliosData.map((portfolio) => (
                <div key={portfolio.id} className="flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pl-4">
                  <PortfolioCard
                    portfolio={portfolio}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          </div>
          {portfoliosData.length > 4 && (
            <>
              <Button
                className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2"
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </Button>
              <Button
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2"
                onClick={scrollNext}
                disabled={nextBtnDisabled}
              >
                <ArrowRight className="w-6 h-6 text-gray-700" />
              </Button>
            </>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer fazer parte desta comunidade?
            </h3>
            <p className="text-gray-600 mb-6">
              Se você é um jovem talento ou estudante da nossa cidade, entre em contato 
              conosco para incluir seu portfólio nesta plataforma.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Modal */}
      <PortfolioModal
        portfolio={selectedPortfolio}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default PortfoliosSection;

