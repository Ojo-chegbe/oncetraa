import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <SEO 
        title="About Oncetra | Cancer Research, Awareness & Health Equity in Africa"
        description="Learn about Oncetra's multidisciplinary team of doctors, pharmacists, and advocates building Africa's integrated cancer intelligence company."
      />
      <HeroSection 
        headline={<>From Registration<br />To <span className="text-[#39A46B] italic">Transformation.</span></>}
        subHeadline={"Oncetra is a phased, actionable blueprint to build Nigeria's definitive cancer research, consultancy, and sensitization ecosystem over the next two decades."}
        bgImage="/images/heroes/story.webp"
        showRightContent={false}
      />

      <div id="story" className="scroll-mt-24">
        {/* Section 1: What We Are (Editorial Layout) */}
        <div className="bg-white py-20 md:py-32">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px]">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* Left: Huge Title */}
                <div className="lg:col-span-5 sticky top-32">
                   <div className="inline-flex items-center gap-3 mb-6">
                     <span className="w-8 h-px bg-[#39A46B]"></span>
                     <h3 className="text-[#39A46B] font-semibold uppercase text-[13px] tracking-widest">What We Are</h3>
                   </div>
                   <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#122922] leading-[1.1] tracking-tight">
                     Africa's <br/> integrated cancer <br/> intelligence <br/> & action company.
                   </h2>
                </div>
                
                {/* Right: Content & Quote */}
                <div className="lg:col-span-7 flex flex-col gap-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-[#4A5568] text-[20px] leading-relaxed font-light mb-6">
                      Oncetra® Limited is registered with a public health mission — combining rigorous scientific research, expert consultancy, community sensitization, and nature-based interventions under one roof.
                    </p>
                    <p className="text-[#122922] text-[20px] leading-relaxed font-medium">
                      We are the organisation that sits at the intersection of science, community, and action — generating the evidence, building the awareness, and delivering the solutions that Africa's cancer crisis demands.
                    </p>
                  </div>

                  {/* The Equity Quote Breakout */}
                  <div className="mt-8 relative">
                    <div className="absolute -left-6 md:-left-12 top-0 bottom-0 w-1 bg-[#39A46B]"></div>
                    <svg className="w-12 h-12 text-[#39A46B]/20 mb-6 absolute -top-4 -left-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#122922] leading-[1.4] italic mb-8 relative z-10 pl-6">
                      "Cancer in Africa is not just a medical crisis. It is an equity crisis. Our response was not despair — <span className="font-bold text-[#39A46B] not-italic">it was determination.</span>"
                    </h2>
                    <div className="space-y-6 pl-6 text-[#727272] text-[16px] md:text-[18px] leading-relaxed">
                      <p>
                        In a region where millions live far from diagnostic laboratories, where treatment costs consume an entire family's savings, the toll is staggering, and largely invisible to the rest of the world.
                      </p>
                      <p className="font-medium text-[#4A5568]">
                        We are building the infrastructure for knowledge, evidence-based natural therapeutics, and accessible diagnostics that our communities urgently need.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div id="leadership" className="scroll-mt-24">
        {/* Section 2: Leadership & Team (Refined Layout) */}
        <div className="bg-[#F8F9FA] py-20 md:py-32 border-t border-gray-100">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px]">
            
            {/* Leadership Header */}
            <ScrollReveal>
              <div className="max-w-4xl mb-20">
                 <div className="inline-flex items-center gap-3 mb-6">
                   <span className="w-8 h-px bg-[#39A46B]"></span>
                   <h3 className="text-[#39A46B] font-semibold uppercase text-[13px] tracking-widest">Leadership</h3>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold text-[#122922] leading-tight mb-8">
                    Meet the Team
                 </h2>
                 <p className="text-[#122922] text-[20px] md:text-[24px] leading-snug font-medium mb-6">
                   Oncetra® is founded and led by a multidisciplinary team of Pharmacists, Doctors, public health experts, and community advocates united by a single goal.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#727272] text-[16px] md:text-[18px] leading-relaxed">
                   <p>
                     To see a measurable reduction in the incidence of cancer across Africa — and a fundamental improvement in the treatment strategies available to those who need them most. We believe that reducing cancer incidence across Africa requires more than better hospitals. It requires better information — reaching communities before cancer develops.
                   </p>
                   <div>
                     <p className="mb-6">
                       It requires better science — grounded in African biology, African environments, and African lives. And it requires better integration — of research, education, early detection, and treatment optimisation.
                     </p>
                     <p className="text-[#39A46B] font-semibold">
                       That integrated vision is what drives every decision we make.
                     </p>
                   </div>
                 </div>
              </div>
            </ScrollReveal>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { name: "Makwin Luther Luka", qualifications: "B.Pharm, MSc", role: "Team Lead", linkedin: "https://www.linkedin.com/in/makwin-luther-045206167/" },
                { name: "Luimommei Kpasham", qualifications: "DVM, MSc", role: "Research Lead", linkedin: "https://www.linkedin.com/in/kpasham-luimommei-zethan-a33b5425a/" },
                { name: "Ogwu Ojochegbe", qualifications: "", role: "Communications Lead", linkedin: "https://www.linkedin.com/in/ojochegbe/" }
              ].map((member, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-white p-8 md:p-10 rounded-[24px] border border-[#0000000A] shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group h-full flex flex-col relative overflow-hidden">
                     {/* Subtle hover accent */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#39A46B]/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
                     
                     <div className="mb-auto relative z-10">
                       <h3 className="text-[22px] font-bold text-[#122922] mb-2">{member.name}</h3>
                       {member.qualifications && <p className="text-[#727272] text-[14px] font-medium mb-4">{member.qualifications}</p>}
                       <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-md bg-[#F4F5F6] text-[#39A46B] font-semibold text-[13px] tracking-wide">
                         <span className="w-1.5 h-1.5 rounded-full bg-[#39A46B]"></span>
                         {member.role}
                       </span>
                     </div>
                     
                     <div className="mt-12 relative z-10">
                       <a href={member.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#4A5568] hover:text-[#0077b5] transition-colors font-semibold text-[14px] group/btn">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                         </svg>
                         Connect
                         <svg className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                         </svg>
                       </a>
                     </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Our Commitment to You (Refined Layout) */}
      <div className="bg-white py-20 md:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left Side: Huge Typography */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#39A46B]"></span>
                  <h3 className="text-[#39A46B] font-semibold uppercase text-[13px] tracking-widest">Our Commitment</h3>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#122922] leading-[1.1] tracking-tight">
                  Behind Every <br/> Statistic is a <br/> <span className="text-[#39A46B] italic font-light">Future Worth <br/> Fighting For.</span>
                </h2>
              </div>
              
              {/* Right Side: Editorial Content */}
              <div className="lg:col-span-7">
                <p className="text-[#4A5568] text-[18px] md:text-[22px] leading-relaxed font-light mb-10">
                  Whether you encounter Oncetra® as a patient seeking information, a clinician seeking a research partner, an institution seeking consultancy, or an investor seeking a mission worth backing — you will find a team that holds itself to the highest standards of scientific integrity, professional conduct, and human compassion.
                </p>
                
                <div className="bg-[#F8F9FA] rounded-[24px] p-8 md:p-10 border-l-4 border-[#39A46B]">
                  <p className="text-[#122922] text-[18px] md:text-[22px] leading-relaxed font-medium italic mb-6">
                    Because behind every cancer statistic is a person. And behind every person is a family, a community, a future worth fighting for.
                  </p>
                  <p className="text-[#39A46B] font-bold text-[14px] uppercase tracking-widest flex items-center gap-3">
                    <span className="w-6 h-px bg-[#39A46B]"></span>
                    That is who we work for. Every day.
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* The Shield Closing */}
      <div className="bg-white pb-20 md:pb-32">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[120px]">
          <ScrollReveal>
            <div className="bg-[#122922] text-white rounded-[32px] md:rounded-[48px] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
              
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#39A46B]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              
              <div className="relative z-10 md:max-w-xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">The Shield</h2>
                <p className="text-[18px] md:text-[22px] font-light text-white/90 leading-relaxed">
                  Oncetra is derived from "onco" (cancer) and "cetra" (a shield). We are here to be that shield: protective, evidence-based, and available to everyone.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0">
                <a href="/get-involved/partner" className="inline-flex items-center justify-center px-10 py-5 text-[16px] font-bold text-[#122922] bg-white rounded-full hover:bg-[#F8F9FA] transition-transform duration-300 hover:scale-105 shadow-xl whitespace-nowrap">
                  Partner With Us Today
                </a>
              </div>
              
            </div>
          </ScrollReveal>
        </div>
      </div>

    </>
  );
};

export default About;
