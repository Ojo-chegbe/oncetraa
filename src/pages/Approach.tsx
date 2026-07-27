import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import TextSection from '../components/TextSection';
import SplitSection from '../components/SplitSection';
import GridSection from '../components/GridSection';
import ScrollReveal from '../components/ScrollReveal';

const Approach = () => {
  const { hash } = useLocation();

  // Handle scrolling to anchor links when the page loads with a hash
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <SEO 
        title="Our Approach | Cancer Prevention, Early Diagnosis & Treatment Access"
        description="Oncetra's multi-layered approach to cancer care in Africa focuses on prevention, early diagnosis, and optimizing treatment access."
      />
      <HeroSection 
        headline={"We Do Not Treat Cancer \nas a Single Problem."}
        subHeadline={"Cancer is not one disease. It is not one challenge. It cannot be solved with one intervention. Oncetra's approach is deliberately multi-layered, addressing cancer across the full arc of the human experience."}
        bgImage="/home/banner.webp"
        showRightContent={false}
      />

      <ScrollReveal>
        <div className="bg-[#F4F5F6] py-16 px-[20px] md:px-[60px] lg:px-[120px]">
          <div className="max-w-[1200px] mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#222222] mb-8">Our Ecosystem of Care</h3>
            <div className="flex flex-col md:flex-row rounded-[24px] overflow-hidden border border-gray-200 bg-white">
              {[
                { title: "Prevention", id: "prevention", desc: "Stopping cancer before it starts with education and natural interventions." },
                { title: "Early Diagnosis", id: "diagnosis", desc: "Systematic screening programs to catch cancer when it's most treatable." },
                { title: "Treatment Optimization", id: "treatment", desc: "Precision care and dedicated cancer pharmacies for accessible medicine." }
              ].map((item, idx) => (
                <a 
                  href={`#${item.id}`} 
                  key={idx}
                  className={`flex-1 p-8 md:p-12 text-left group hover:bg-[#39A46B] transition-colors duration-500 ${idx !== 2 ? 'border-b md:border-b-0 md:border-r border-gray-100' : ''}`}
                >
                  <span className="text-[#39A46B] group-hover:text-white/80 font-mono text-sm tracking-widest mb-4 block transition-colors duration-500">
                    0{idx + 1}
                  </span>
                  <h4 className="text-2xl font-bold text-[#222222] group-hover:text-white mb-4 transition-colors duration-500">{item.title}</h4>
                  <p className="text-gray-500 group-hover:text-white/90 text-[15px] leading-relaxed transition-colors duration-500">{item.desc}</p>
                  
                  <div className="mt-8 flex items-center gap-2 text-[#39A46B] group-hover:text-white transition-colors duration-500 font-medium">
                    <span className="text-[14px]">Explore</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-500">
                      <path d="M5 12h14M12 5l7 7M12 19l7-7"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* --- PREVENTION PILLAR --- */}
      <div id="prevention" className="scroll-mt-24">
        <ScrollReveal>
          <SplitSection
            headline="Pillar 1: Prevention"
            imageSrc="/home/problem.webp"
            bgWhite={true}
          >
            <h3 className="text-[#222222] text-xl font-bold mb-2">Stop Cancer Before It Starts.</h3>
            <p>
              Prevention is the most powerful and most underused tool in cancer care. In a landscape where treatment can cost tens of thousands of dollars and diagnostic infrastructure is limited, prevention is not just morally right. It is economically essential.
            </p>
            <p>
              Oncetra's prevention strategy operates on two levels. The first is primary prevention — educating people before cancer develops, equipping communities with the knowledge and the natural tools to reduce their risk. The second is intervention prevention — supporting individuals who are already at elevated risk.
            </p>
          </SplitSection>
        </ScrollReveal>

        <ScrollReveal>
          <GridSection 
            headline="Plant-Based Interventions"
            subHeadline="Modern science is validating what communities across Africa have long known — that certain plants contain compounds with meaningful biological activity."
            bgWhite={false}
            cards={[
              {
                title: "Soursop (Annona muricata)",
                description: "Contains acetogenins that have demonstrated selective cytotoxic activity against cancer cell lines in laboratory studies.",
                imageSrc: "/home/first_step.webp"
              },
              {
                title: "Ginger (Zingiber officinale)",
                description: "Contains gingerols and shogaols, compounds that have demonstrated anti-inflammatory and antioxidant properties.",
                imageSrc: "/home/nature_science.webp"
              },
              {
                title: "Garlic (Allium sativum)",
                description: "Sulfur compounds in garlic, particularly allicin, have been studied for their potential to inhibit tumor cell proliferation."
              },
              {
                title: "Cashew (Anacardium occidentale)",
                description: "Anacardic acid derived from cashew has attracted research attention for its antiproliferative effects on certain cancer cell lines."
              }
            ]}
          />
        </ScrollReveal>
      </div>

      {/* --- DIAGNOSIS PILLAR --- */}
      <div id="diagnosis" className="scroll-mt-24">
        <ScrollReveal>
          <SplitSection
            headline="Pillar 2: Early Diagnosis"
            imageOnRight={true}
            imageSrc="/home/partner_clinical.webp"
            bgWhite={true}
          >
            <h3 className="text-[#222222] text-xl font-bold mb-2">Caught Early. Treated Successfully.</h3>
            <p>
              In most cancers, early detection is the single greatest predictor of survival. A stage one cervical cancer diagnosis carries a survival rate above 90 percent. By stage four, that drops to below 20 percent. The biology does not change. The timing does.
            </p>
            <p>
              Across sub-Saharan Africa, the majority of cancer diagnoses occur at stage three or four. Distance, cost, stigma, and limited clinical infrastructure all play a role. Oncetra is committed to closing this gap.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li><strong>PAP Smear</strong>: Affordable screening for cervical cancer.</li>
                <li><strong>PSA Test</strong>: Prostate cancer screening for at-risk men.</li>
                <li><strong>HPV Vaccination</strong>: Preventing cervical cancer in adolescent girls.</li>
            </ul>
          </SplitSection>
        </ScrollReveal>
      </div>

      {/* --- TREATMENT PILLAR --- */}
      <div id="treatment" className="scroll-mt-24">
        <ScrollReveal>
          <SplitSection
            headline="Pillar 3: Treatment Optimization"
            imageSrc="/home/treatment.webp"
            bgWhite={false}
          >
            <h3 className="text-[#222222] text-xl font-bold mb-2">The Right Treatment. At the Right Time.</h3>
            <p>
              Cancer is not a uniform disease, and treatment should not be a uniform response. Oncetra believes in precision — matching patients to therapies based on their specific cancer type, stage, genetic profile where available, lifestyle context, and realistic access to resources.
            </p>
            <p>
              We are developing a dedicated cancer pharmacy — a specialist outlet for oncology medications sourced at affordable prices and distributed alongside patient education and counselling. This is not a general pharmacy. It is a focused resource built specifically for cancer patients and their caregivers.
            </p>
            <p className="mt-4 italic text-gray-500">
              Every person who comes into contact with the Oncetra ecosystem is treated as an individual, not a diagnosis. We do not offer a template. We offer a framework that adapts to the person in front of us.
            </p>
          </SplitSection>
        </ScrollReveal>
      </div>
    </>
  );
};

export default Approach;
