import React, { useState, useEffect } from 'react';

const carouselData = [
  {
    id: 0,
    number: "1,195+",
    title: "Education Support",
    subtitle: "For Families and individuals.",
    image: "/home/education_support.png"
  },
  {
    id: 1,
    number: "1,000+",
    title: "Prevention",
    subtitle: "Building a natural supply chain.",
    image: "/home/first_step.png"
  },
  {
    id: 2,
    number: "5,000+",
    title: "Early Diagnosis",
    subtitle: "Accessible care for all.",
    image: "/home/treatment.png"
  }
];

const ImpactCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center bg-white rounded-2xl p-0 max-w-[520px] lg:self-end mt-10 lg:mt-0 mb-10 translate-y-0 lg:translate-y-10 relative overflow-hidden h-[240px] lg:h-[284px] w-full">
      {carouselData.map((item, idx) => (
        <div 
          key={item.id}
          className={`absolute inset-0 p-6 lg:p-8 flex items-center gap-4 lg:gap-8 transition-opacity duration-500 ease-in-out ${
            idx === activeIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col flex-1 gap-4">
            {/* Progress bars indicator */}
            <div className="flex gap-2 mb-2">
              {carouselData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    dotIdx === activeIndex ? 'bg-[#39A46B]' : 'bg-gray-200'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-2 lg:mt-4">
              <h3 className="text-xl lg:text-[28px] font-bold text-[#222222] leading-tight">{item.title}</h3>
              <p className="text-[#727272] text-sm lg:text-[16px] leading-snug">{item.subtitle}</p>
            </div>
          </div>
          
          <div className="w-[110px] h-[130px] lg:w-[180px] lg:h-[220px] shrink-0 rounded-xl overflow-hidden relative">
            <img 
              src={item.image} 
              className="w-full h-full object-cover"
              alt={item.title}
            />
            {/* Decorative green swirl */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-[#39A46B] rounded-full rotate-45 transform origin-center"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactCarousel;
