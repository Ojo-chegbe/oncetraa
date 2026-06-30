import React from 'react';

interface TextSectionProps {
  headline?: string;
  subHeadline?: string;
  children: React.ReactNode;
  bgWhite?: boolean;
}

const TextSection: React.FC<TextSectionProps> = ({
  headline,
  subHeadline,
  children,
  bgWhite = true
}) => {
  return (
    <div className={`flex flex-col items-center self-stretch py-16 md:py-20 px-6 md:px-12 lg:px-[120px] ${bgWhite ? 'bg-white' : 'bg-[#F4F5F6]'}`}>
      <div className="w-full max-w-[900px] flex flex-col items-start gap-8">
        {(headline || subHeadline) && (
          <div className="flex flex-col items-start gap-4 mb-4">
            {headline && (
              <h2 className="text-[#222222] text-4xl font-bold leading-tight" style={{ whiteSpace: 'pre-line' }}>
                {headline}
              </h2>
            )}
            {subHeadline && (
              <p className="text-[#727272] text-xl leading-relaxed font-medium" style={{ whiteSpace: 'pre-line' }}>
                {subHeadline}
              </p>
            )}
          </div>
        )}
        <div className="text-[#444444] text-lg leading-relaxed space-y-6 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TextSection;
