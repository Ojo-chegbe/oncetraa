import React from 'react';
import ScrollReveal from './ScrollReveal';

interface TimelineItem {
  period?: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  headline: string;
  subHeadline?: string;
  items: TimelineItem[];
  bgWhite?: boolean;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  headline,
  subHeadline,
  items,
  bgWhite = true
}) => {
  return (
    <div className={`flex justify-center py-20 px-6 md:px-12 lg:px-[120px] ${bgWhite ? 'bg-white' : 'bg-[#F4F5F6]'}`}>
      <div className="w-full max-w-[1400px] flex justify-center">
        <div className="w-full max-w-[1000px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            {headline}
          </h2>
          {subHeadline && (
            <p className="text-gray-500 text-[17px] max-w-[600px] mx-auto">
              {subHeadline}
            </p>
          )}
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-0.5 bg-[#39A46B]/20 md:-translate-x-1/2"></div>
          
          <div className="flex flex-col gap-8 md:gap-12 relative">
            {items.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Spacer for desktop to push content to one side */}
                    <div className="hidden md:block md:w-1/2"></div>
                    
                    {/* Node / Timeline Dot */}
                    <div className="absolute left-[20px] md:left-1/2 w-[20px] h-[20px] bg-[#39A46B] rounded-full mt-6 -translate-x-1/2 border-[5px] border-white z-10"></div>
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 lg:md:pr-16 md:text-right' : 'md:pl-12 lg:md:pl-16'}`}>
                      <div className="bg-white p-8 rounded-[24px] border border-gray-50 transition-all duration-300">
                        {item.period && (
                          <span className="inline-block px-3 py-1 bg-[#39A46B]/10 text-[#39A46B] rounded-lg text-[13px] font-bold mb-3">
                            {item.period}
                          </span>
                        )}
                        <h3 className="text-[22px] font-bold text-[#222222] mb-3">{item.title}</h3>
                        <p className="text-gray-500 text-[15px] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
