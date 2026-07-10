import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  buttonText?: string;
  buttonLink?: string;
  category?: string;
  goal?: string;
}

interface GridSectionProps {
  headline?: string;
  subHeadline?: string;
  cards: CardProps[];
  bgWhite?: boolean;
  columns?: 2 | 3;
}

const GridSection: React.FC<GridSectionProps> = ({
  headline,
  subHeadline,
  cards,
  bgWhite = false,
  columns = 3
}) => {
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

      <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8 w-full mt-12 lg:mt-16`}>
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-start bg-white p-6 rounded-[24px] border border-[#0000000D]">
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
  );
};

export default GridSection;
