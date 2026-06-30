import React, { useState } from 'react';
import Button from './Button';

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionSectionProps {
  tagText: string;
  headline: string;
  subHeadline: string;
  imageSrc: string;
  items: AccordionItem[];
  buttonText: string;
  buttonLink: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  tagText,
  headline,
  subHeadline,
  imageSrc,
  items,
  buttonText,
  buttonLink
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="py-20 px-[20px] md:px-[60px] lg:px-[120px] bg-[#F4F5F6]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        {/* Left Side: Image */}
        <div className="w-full lg:w-[45%] shrink-0 rounded-[24px] overflow-hidden shadow-lg h-[450px] lg:h-[550px] relative">
          <img src={imageSrc} alt={headline} className="w-full h-full object-cover" />
          {/* Subtle gradient overlay at bottom like the image */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:flex-1 flex flex-col pt-2 lg:pt-8">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm w-max mb-6">
            <div className="bg-[#39A46B] text-white rounded-[6px] p-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <span className="text-[13px] font-bold text-[#222222] pr-1">{tagText}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4 tracking-tight">
            {headline}
          </h2>
          <p className="text-gray-500 text-[17px] leading-relaxed mb-8 max-w-[500px]">
            {subHeadline}
          </p>

          {/* Accordion */}
          <div className="flex flex-col gap-4 mb-10 w-full max-w-[550px]">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-[16px] p-5 shadow-sm cursor-pointer transition-all border border-gray-100"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-[17px] font-bold text-[#222222]">{item.title}</h3>
                    <div className={`shrink-0 flex items-center justify-center w-[28px] h-[28px] rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#39A46B] text-white' : 'bg-[#F4F5F6] text-[#727272]'}`}>
                      {isOpen ? (
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M2 6h8"/></svg>
                      ) : (
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 2v8M2 6h8"/></svg>
                      )}
                    </div>
                  </div>
                  {/* Content with height transition */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-500 text-[15px] leading-relaxed pr-10">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <Button to={buttonLink} variant="primary">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
