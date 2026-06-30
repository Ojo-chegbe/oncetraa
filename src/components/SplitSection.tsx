import React from 'react';

interface SplitSectionProps {
  headline: string;
  subHeadline?: string;
  imageOnRight?: boolean;
  imageSrc?: string;
  children: React.ReactNode;
  bgWhite?: boolean;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  headline,
  subHeadline,
  imageOnRight = false,
  imageSrc = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/qnxOmlfPAZ/ecq88n27_expires_30_days.png",
  children,
  bgWhite = false
}) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center self-stretch py-16 md:py-24 px-6 md:px-12 lg:px-[120px] gap-10 lg:gap-[55px] ${bgWhite ? 'bg-white' : 'bg-[#F4F5F6]'}`}>
      
      {!imageOnRight && imageSrc && (
        <div className="flex flex-1 flex-col relative">
          <img
            src={imageSrc} 
            className="w-full h-full min-h-[300px] lg:min-h-[400px] lg:h-[635px] rounded-3xl object-cover shadow-sm"
            alt={headline}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-[31px]">
        <div className="flex flex-col items-start self-stretch">
          <div className="flex flex-col items-start self-stretch mb-[18px]">
            <h2 className="text-[#222222] text-4xl md:text-5xl font-bold leading-tight" style={{ whiteSpace: 'pre-line' }}>
              {headline}
            </h2>
          </div>
          {subHeadline && (
            <div className="flex flex-col items-start self-stretch pt-[1px]">
              <p className="text-[#727272] text-lg leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                {subHeadline}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col items-start self-stretch gap-10 text-[#727272] text-lg leading-relaxed">
          {children}
        </div>
      </div>

      {imageOnRight && imageSrc && (
        <div className="flex flex-1 flex-col relative">
          <img
            src={imageSrc} 
            className="w-full h-full min-h-[300px] lg:min-h-[400px] lg:h-[635px] rounded-3xl object-cover shadow-sm"
            alt={headline}
          />
        </div>
      )}
      
    </div>
  );
};

export default SplitSection;
