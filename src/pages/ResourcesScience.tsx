import React from 'react';
import TextSection from '../components/TextSection';
import GridSection from '../components/GridSection';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import ScrollReveal from '../components/ScrollReveal';

const ResourcesScience = () => {
  return (
    <>
      <ScrollReveal>
        <HeroSection 
          headline="What Does the Science Actually Say?"
          subHeadline="At Oncetra, we believe in the potential of plant-based medicine — and we believe in telling the truth about where the evidence is strong, where it is promising but preliminary, and where it is still unclear."
          bgImage="/resources/science_hero.png"
          showRightContent={false}
        />
      </ScrollReveal>

      <ScrollReveal>
        <SplitSection 
          headline="Our Approach to Evidence"
          imageSrc="/resources/science_evidence.png"
          imageOnRight={true}
          bgWhite={false}
        >
          <p className="mb-4">
            We use three categories when discussing the science behind our plant portfolio.
          </p>
          <ul className="list-none space-y-6">
            <li className="flex flex-col gap-2">
              <span className="font-bold text-[#222222] text-xl">1. Established Evidence</span>
              <span>Refers to findings that have been replicated across multiple well-designed studies in both laboratory settings and, where available, clinical trials.</span>
            </li>
            <li className="flex flex-col gap-2">
              <span className="font-bold text-[#222222] text-xl">2. Promising but Preliminary</span>
              <span>Refers to findings from laboratory and animal studies that have not yet been fully replicated in human clinical trials.</span>
            </li>
            <li className="flex flex-col gap-2">
              <span className="font-bold text-[#222222] text-xl">3. Emerging</span>
              <span>Refers to early-stage research that warrants attention but should not yet be the basis for health decisions.</span>
            </li>
          </ul>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <GridSection 
          headline="The Botanical Pipeline"
          subHeadline="The evidence behind the core plants we are investigating."
          bgWhite={true}
          columns={2}
          cards={[
            {
              title: "Soursop — Annona muricata",
              description: "What the research shows: Soursop leaves and seeds contain compounds called annonaceous acetogenins. These have shown selective cytotoxic activity in laboratory studies against breast, lung, colon, and prostate cancer cell lines.\n\nWhat the research does not yet show: No large-scale human clinical trials have confirmed these effects in people. Oncetra does not claim soursop cures or treats cancer.\n\nOur position: The evidence is promising and the biological mechanism is scientifically interesting. We believe in investing in this research, not overselling it.",
              imageSrc: "/resources/soursop_botanical.png",
              category: "Promising but Preliminary"
            },
            {
              title: "Ginger — Zingiber officinale",
              description: "Gingerols and shogaols, the active compounds in ginger, have demonstrated anti-inflammatory and antioxidant activity in multiple studies. Research has also explored their potential to reduce nausea in chemotherapy patients — an application with reasonably strong clinical evidence. Studies into ginger's direct anticancer properties are at the promising-but-preliminary stage.",
              imageSrc: "/resources/ginger_botanical.png",
              category: "Established Evidence"
            },
            {
              title: "Garlic — Allium sativum",
              description: "Epidemiological studies have associated higher garlic consumption with reduced incidence of gastric and colorectal cancers. Laboratory studies have explored allicin's antiproliferative effects on cancer cells. The findings are encouraging and the research is ongoing. Clinical confirmation in humans remains limited.",
              imageSrc: "/resources/garlic_botanical.png",
              category: "Emerging"
            },
            {
              title: "Cashew — Anacardium occidentale",
              description: "Anacardic acid from cashew has shown antiproliferative effects against certain cancer cell lines in laboratory studies. This is early-stage research. We include cashew in our future pipeline because the initial findings are scientifically interesting and because it is a plant deeply familiar to African communities.",
              imageSrc: "/resources/cashew_botanical.png",
              category: "Emerging"
            }
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <TextSection bgWhite={false}>
          <div className="flex flex-col items-center text-center w-full mb-12">
            <h3 className="text-[#222222] text-4xl font-bold mb-4">How to Read a Study About Plant Medicine</h3>
            <p className="text-xl text-[#727272]">When you encounter a headline claiming a plant cures cancer, ask these questions:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1000px] mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
              <span className="w-12 h-12 bg-green-50 text-[#39A46B] flex items-center justify-center rounded-full text-xl mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </span>
              <h4 className="font-bold text-[#222222] text-lg">Was it a lab study or human trial?</h4>
              <p className="text-[#727272]">Cell line studies are a necessary early step, but they do not confirm clinical benefit in humans.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
              <span className="w-12 h-12 bg-green-50 text-[#39A46B] flex items-center justify-center rounded-full text-xl mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </span>
              <h4 className="font-bold text-[#222222] text-lg">How large was the study?</h4>
              <p className="text-[#727272]">A finding in 50 patients is very different from a finding in 5,000.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
              <span className="w-12 h-12 bg-green-50 text-[#39A46B] flex items-center justify-center rounded-full text-xl mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </span>
              <h4 className="font-bold text-[#222222] text-lg">Was it peer-reviewed?</h4>
              <p className="text-[#727272]">Ensure the study was published in a reputable, peer-reviewed scientific journal.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
              <span className="w-12 h-12 bg-green-50 text-[#39A46B] flex items-center justify-center rounded-full text-xl mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </span>
              <h4 className="font-bold text-[#222222] text-lg">Has it been replicated?</h4>
              <p className="text-[#727272]">A single study is a starting point. Replication by independent researchers is the gold standard.</p>
            </div>
          </div>
          
          <p className="mt-12 italic text-center text-xl font-medium border-t border-gray-200 pt-8 w-full max-w-[800px] mx-auto">
            Good science is slow, cautious, and self-correcting. We try to be the same.
          </p>
        </TextSection>
      </ScrollReveal>

      <ScrollReveal>
        <div className="py-20 px-[20px] md:px-[60px] lg:px-[120px] bg-[#122922] text-center">
          <div className="max-w-[900px] mx-auto flex flex-col gap-6">
            <h3 className="text-white text-3xl font-bold">An Important Note</h3>
            <p className="text-[#F4F5F6] text-lg leading-relaxed">
              Nothing on this page constitutes medical advice. If you have cancer or suspect you might, please consult a qualified healthcare provider. Plant-based products are not a substitute for diagnosis and conventional medical treatment. They may, in specific and evidence-backed ways, support your overall health and complement the care you receive. The distinction matters.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
};

export default ResourcesScience;
