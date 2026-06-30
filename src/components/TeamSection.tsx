import React from 'react';
import ScrollReveal from './ScrollReveal';

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  imageSrc?: string;
  linkedinUrl?: string;
}

interface TeamSectionProps {
  headline: string;
  subHeadline?: string;
  members: TeamMember[];
  columns?: 2 | 3 | 4;
  bgWhite?: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  headline,
  subHeadline,
  members,
  columns = 3,
  bgWhite = true,
}) => {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`py-20 px-[20px] md:px-[60px] lg:px-[120px] ${bgWhite ? 'bg-white' : 'bg-[#F4F5F6]'}`}>
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-[800px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6 tracking-tight">
              {headline}
            </h2>
            {subHeadline && (
              <p className="text-gray-500 text-[18px] leading-relaxed">
                {subHeadline}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className={`grid grid-cols-1 ${gridClass} gap-8 md:gap-10`}>
          {members.map((member, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="flex flex-col h-full bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                {member.imageSrc ? (
                  <div className={`w-full ${columns === 2 ? 'h-[350px] lg:h-[450px]' : 'h-[300px] lg:h-[350px]'} overflow-hidden bg-gray-100`}>
                    <img 
                      src={member.imageSrc} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                ) : (
                  <div className={`w-full ${columns === 2 ? 'h-[350px] lg:h-[450px]' : 'h-[300px] lg:h-[350px]'} bg-gradient-to-br from-[#E2F0E8] to-[#CBE5D5] flex items-center justify-center`}>
                    {/* Placeholder Avatar */}
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#39A46B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                )}
                
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-[22px] font-bold text-[#222222] mb-1">{member.name}</h3>
                      <p className="text-[#39A46B] font-semibold text-[15px]">{member.role}</p>
                    </div>
                    {member.linkedinUrl && (
                      <a href={member.linkedinUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors mt-1 shrink-0 ml-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  {member.bio && (
                    <p className="text-gray-500 text-[15px] leading-relaxed mt-4 pt-4 border-t border-gray-100 flex-1">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
