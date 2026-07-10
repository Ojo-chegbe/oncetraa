import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import ImpactCarousel from './ImpactCarousel';

interface HeroSectionProps {
  headline: React.ReactNode;
  subHeadline: React.ReactNode;
  button1Text?: string;
  button1Link?: string;
  button2Text?: string;
  button2Link?: string;
  bgImage?: string;
  showRightContent?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subHeadline,
  button1Text,
  button1Link,
  bgImage = "/hero-bg.png",
  showRightContent = true
}) => {
  return (
    <div className="flex flex-col relative min-h-screen xl:min-h-[900px] overflow-hidden -mt-[100px]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage} 
          className="w-full h-full object-cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 flex justify-center self-stretch py-[100px] lg:py-[119px] px-6 md:px-12 lg:px-[120px] h-full flex-1 mt-[100px] lg:mt-[120px]">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1400px] gap-10 h-full">
        {/* Left Content */}
        <div className="flex flex-col shrink-0 items-start pb-[1px] gap-8 max-w-[600px]">
            <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ whiteSpace: 'pre-line' }}>
                        {headline}
                    </h1>
                </div>
                <div className="flex flex-col items-start mt-2">
                    <p className="text-white/90 text-[19px] leading-relaxed">
                        {subHeadline}
                    </p>
                </div>
            </div>
            
            {button1Text && (
                <div className="flex items-center gap-4 mt-6">
                    <Button to={button1Link || "#"} variant="primary" className="text-[17px] !pl-8 !pr-3 !py-[10px] w-auto">
                        <span className="mr-2">{button1Text}</span>
                    </Button>
                </div>
            )}
        </div>
        
        {/* Right Content - Floating Card */}
        {showRightContent && (
            <ImpactCarousel />
        )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
