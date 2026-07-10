import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  buttonText?: string;
  buttonLink?: string;
  category?: string;
  goal?: string;
}

interface CarouselSectionProps {
  headline?: string;
  subHeadline?: string;
  cards: CardProps[];
  bgWhite?: boolean;
  itemsPerView?: number;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({
  headline,
  subHeadline,
  cards,
  bgWhite = false,
  itemsPerView = 2,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(itemsPerView);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerView]);

  const totalItems = cards.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + cardsPerPage) % totalItems);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalItems, cardsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + cardsPerPage) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - cardsPerPage + totalItems * cardsPerPage) % totalItems);
  };

  const getTransform = () => {
    if (cardsPerPage === 1) {
        return `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 32}px))`;
    }
    if (cardsPerPage === 2) {
        return `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 16}px))`;
    }
    return `translateX(calc(-${currentIndex * 33.33333}% - ${currentIndex * 10.66667}px))`;
  };

  const extendedCards = [...cards, ...cards.slice(0, cardsPerPage)];

  return (
    <div className={`flex justify-center self-stretch py-16 md:py-24 px-6 md:px-12 lg:px-[120px] ${bgWhite ? 'bg-white' : 'bg-[#F4F5F6]'}`}>
      <div className="flex flex-col items-center w-full max-w-[1400px]">
      {(headline || subHeadline) && (
        <div className="flex flex-col items-center mb-[60px] gap-5 text-center">
          {headline && (
            <h2 className="text-[#222222] text-4xl md:text-5xl font-bold" style={{ whiteSpace: 'pre-line' }}>
              {headline}
            </h2>
          )}
          {subHeadline && (
            <p className="text-[#727272] text-lg max-w-[800px]" style={{ whiteSpace: 'pre-line' }}>
              {subHeadline}
            </p>
          )}
        </div>
      )}

      <div className="w-full mt-12 lg:mt-[60px]">
        {/* Navigation and progress header */}
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
                {cards.map((_, idx) => {
                    const isDotActive = Array.from({ length: cardsPerPage }).some(
                        (_, i) => idx === (currentIndex + i) % totalItems
                    );
                    
                    return (
                        <button 
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                isDotActive ? 'w-8 bg-[#39A46B]' : 'w-2 bg-[#39A46B]/30'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    );
                })}
            </div>
            
            <div className="flex gap-4">
                <button 
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#222222] hover:bg-[#39A46B] hover:text-white hover:border-[#39A46B] transition-all"
                >
                    <FiChevronLeft size={24} />
                </button>
                <button 
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#222222] hover:bg-[#39A46B] hover:text-white hover:border-[#39A46B] transition-all"
                >
                    <FiChevronRight size={24} />
                </button>
            </div>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden w-full relative pb-4">
            <div 
                className="flex transition-transform duration-500 ease-in-out gap-8"
                style={{ transform: getTransform() }}
            >
                {extendedCards.map((card, idx) => (
                    <div 
                        key={idx} 
                        className={`flex-none ${cardsPerPage === 1 ? 'w-full' : cardsPerPage === 2 ? 'w-[calc(50%-16px)]' : 'w-[calc(33.33333%-21.33333px)]'} flex flex-col items-start bg-white p-6 rounded-[24px] border border-[#0000000D]`}
                    >
                        {card.imageSrc && (
                        <div className="w-full relative mb-6 rounded-[16px] overflow-hidden">
                            <img
                              src={card.imageSrc} 
                              className="w-full h-[280px] object-cover"
                              alt={card.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#39A46B]/30 to-transparent mix-blend-multiply pointer-events-none"></div>
                            {card.goal && (
                              <div className="absolute top-4 right-4 bg-[#39A46B] text-white text-[13px] font-medium py-1.5 px-3 rounded-md">
                                  Goal: {card.goal}
                              </div>
                            )}
                        </div>
                        )}
                        {card.category && (
                          <span className="text-[#39A46B] text-[13px] font-medium mb-2">{card.category}</span>
                        )}
                        <h3 className="text-[#222222] text-[22px] font-bold mb-3 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-[#727272] text-[15px] mb-6 flex-1 leading-relaxed">
                          {card.description}
                        </p>
                        {card.buttonText && (
                          <div className="mt-auto pt-4">
                              <Button to={card.buttonLink || "#"} variant="secondary">
                                {card.buttonText}
                              </Button>
                          </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CarouselSection;
