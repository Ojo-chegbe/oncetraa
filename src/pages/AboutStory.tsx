import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const phases = [
  {
    id: "phase-1",
    title: "Phase 1: Foundation",
    subtitle: "0–3 Years",
    description: "Establishing our digital and community presence. We are launching comprehensive cancer intelligence platforms, initiating deep community engagement programs, and offering high-value research consultancy to health institutions.",
    items: ["Cancer Information Hub", "Community Sensitization", "Research Consultancy"]
  },
  {
    id: "phase-2",
    title: "Phase 2: Expansion",
    subtitle: "2–5 Years",
    description: "Transitioning into hard science. We will launch dedicated training academies, build Nigeria's most comprehensive cancer surveillance data platform, and accelerate our medicinal plant research, focusing on indigenous botanicals like Annona muricata.",
    items: ["Surveillance Data Platform", "Medicinal Plant Research", "Training Academies"]
  },
  {
    id: "phase-3",
    title: "Phase 3: Scale",
    subtitle: "5–10 Years",
    description: "Entering the clinical space. This phase sees the establishment of accredited research laboratories, the rollout of mobile cancer screening and diagnostic services to underserved populations, and the commercialisation of evidence-based health products.",
    items: ["Research Laboratories", "Diagnostic Screening", "Natural Health Commercialisation"]
  },
  {
    id: "phase-4",
    title: "Phase 4: Transformation",
    subtitle: "10–20 Years",
    description: "Achieving the ultimate vision. Oncetra will evolve into a leading Cancer Innovation Hub and accredited Research Institute—integrating precision oncology, drug distribution, and policy advocacy.",
    items: ["Cancer Innovation Hub", "Accredited Research Institute", "Comprehensive Ecosystem"]
  }
];

const AboutStory = () => {
  const [activePhase, setActivePhase] = useState("phase-1");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePhase(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    phases.forEach((phase) => {
      const el = document.getElementById(phase.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection 
        headline={<>From Registration<br />To <span className="text-[#39A46B] italic">Transformation.</span></>}
        subHeadline={"Oncetra is a phased, actionable blueprint to build Nigeria's definitive cancer research, consultancy, and sensitization ecosystem over the next two decades."}
        bgImage="/images/heroes/story.png"
        showRightContent={false}
      />

      {/* The Genesis Interlude */}
      <div className="bg-[#F4F5F6] py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight mb-8 max-w-4xl">
              "Cancer in Africa is not just a medical crisis. It is an equity crisis. Our response was not despair — it was determination."
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-[#727272] text-[15px] md:text-[18px] leading-relaxed font-normal">
              <p>
                In a region where millions live far from diagnostic laboratories, where treatment costs consume an entire family's savings, the toll is staggering, and largely invisible to the rest of the world.
              </p>
              <p>
                We are building the infrastructure for knowledge, evidence-based natural therapeutics, and accessible diagnostics that our communities urgently need.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Sticky Scroll Roadmap */}
      <div className="bg-white py-16 md:py-24 relative">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
            
            {/* Left Column (Sticky) */}
            <div className="w-full lg:w-1/3 lg:sticky top-32 z-10 hidden lg:block">
              <h3 className="text-[#39A46B] font-medium uppercase text-[13px] tracking-wide mb-4">The Masterplan</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-10">A Phased Evolution</h2>
              
              <div className="flex flex-col gap-8 relative pl-2">
                {/* Vertical connecting line */}
                <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-[#0000000D] z-[-1]" />
                
                {phases.map((phase) => {
                  const isActive = activePhase === phase.id;
                  return (
                    <div key={phase.id} className="flex items-start gap-5">
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-2 transition-all duration-300 ${isActive ? 'bg-[#39A46B] scale-150 ring-4 ring-[#39A46B]/20' : 'bg-gray-300'}`} />
                      <div>
                        <h4 className={`text-[22px] font-bold transition-colors duration-300 ${isActive ? 'text-[#222222]' : 'text-[#727272]/50'}`}>
                          {phase.title}
                        </h4>
                        <p className={`text-[15px] mt-1 transition-colors duration-300 ${isActive ? 'text-[#39A46B]' : 'text-transparent'}`}>
                          {phase.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column (Scrolling Content) */}
            <div className="w-full lg:w-2/3 flex flex-col gap-12 lg:gap-32 pb-16 lg:pb-32">
              {phases.map((phase, idx) => (
                <div key={phase.id} id={phase.id} className="scroll-mt-32">
                  <ScrollReveal>
                    <div className="bg-white rounded-[24px] p-8 md:p-12 border border-[#0000000D] relative overflow-hidden group transition-all duration-500">
                      <div className="absolute top-0 right-0 p-8 text-8xl md:text-9xl font-bold text-[#F4F5F6] select-none group-hover:-translate-x-2 transition-transform duration-700">
                        0{idx + 1}
                      </div>
                      
                      <div className="relative z-10">
                        <span className="inline-block py-1 px-3 rounded-md bg-[#39A46B]/10 text-[#39A46B] font-medium text-[13px] mb-6">
                          {phase.subtitle}
                        </span>
                        <h3 className="text-[28px] md:text-[32px] font-bold text-[#222222] mb-4">
                          {phase.title.split(': ')[1]}
                        </h3>
                        <p className="text-[#727272] text-[15px] md:text-[18px] leading-relaxed mb-8 max-w-xl">
                          {phase.description}
                        </p>
                        
                        <div className="space-y-4">
                          <h5 className="font-semibold text-[#222222] uppercase tracking-wide text-[13px]">Key Focus Areas</h5>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {phase.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-[#727272] text-[15px]">
                                <svg className="w-4 h-4 text-[#39A46B] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* The Shield Closing */}
      <div className="bg-[#F4F5F6] py-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px] text-center">
          <ScrollReveal>
            <div className="bg-[#39A46B] text-white rounded-[32px] p-10 md:p-20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The Shield</h2>
                <p className="text-[18px] md:text-[22px] font-light text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Oncetra is derived from "onco" (cancer) and "cetra" (a shield). We are here to be that shield: protective, evidence-based, and available to everyone.
                </p>
                <a href="/get-involved/partner" className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-bold text-[#39A46B] bg-white rounded-full hover:bg-gray-50 transition-all duration-300">
                  Partner With Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </>
  );
};

export default AboutStory;
