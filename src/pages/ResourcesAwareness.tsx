import React from 'react';
import SEO from '../components/SEO';
import TextSection from '../components/TextSection';
import GridSection from '../components/GridSection';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import ScrollReveal from '../components/ScrollReveal';

const ResourcesAwareness = () => {
  return (
    <>
      <SEO 
        title="Cancer Awareness & Education | Oncetra Resources"
        description="Learn about cancer prevention, risk factors, and early detection in Africa with Oncetra's evidence-based awareness resources."
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Cancer Awareness & Education",
          "publisher": {
            "@type": "Organization",
            "name": "Oncetra"
          }
        }}
      />
      <ScrollReveal>
        <HeroSection 
          headline="Understanding Cancer Is the First Step to Defeating It."
          subHeadline="Oncetra's Cancer Awareness resource is written for everyone — patients, families, community leaders, and healthcare workers. No jargon. No overstatement. Just honest, evidence-based information."
          bgImage="/images/heroes/awareness.png"
          showRightContent={false}
        />
      </ScrollReveal>

      <ScrollReveal>
        <TextSection bgWhite={false}>
          <h3 className="text-[#222222] text-3xl font-bold mb-4">What Is Cancer?</h3>
          <p>
            Cancer occurs when cells in the body begin to grow and divide in an uncontrolled way, forming masses called tumors or, in blood cancers, flooding the bloodstream with abnormal cells. There are more than 100 types of cancer, each with its own characteristics, risk factors, and treatment pathways.
          </p>
          <p className="mt-4">
            What they share is this: nearly all cancers respond better to treatment when caught early. And many — perhaps most — can be prevented or significantly delayed through lifestyle, dietary choices, and vaccinations.
          </p>
        </TextSection>
      </ScrollReveal>

      <ScrollReveal>
        <SplitSection 
          headline="Cancer in Africa — Understanding the Scale"
          imageSrc="/resources/africa_burden.png"
          imageOnRight={true}
          bgWhite={true}
        >
          <p>
            Cancer is among the leading causes of death in Africa and its burden is growing. Rapid urbanisation, changing diets, tobacco use, and limited access to screening and treatment are all contributing to rising incidence rates. At the same time, the health systems that serve most Africans were not built to handle the volume or complexity of cancer cases they now face.
          </p>
          <p className="font-bold text-[#222222]">
            The result is a crisis that is largely preventable — and that is exactly the problem Oncetra is working to solve.
          </p>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <GridSection 
          headline="The Five Cancers Most Affecting Africans"
          bgWhite={false}
          cards={[
            {
              title: "Cervical Cancer",
              description: "The most common cancer among African women and one of the most preventable. Caused by HPV, detectable through PAP smear, and preventable through vaccination. Late diagnosis is the primary reason it remains so deadly.",
            },
            {
              title: "Breast Cancer",
              description: "Incidence is rising across Africa. Often diagnosed at a locally advanced stage due to limited screening access and cultural reluctance. Self-examination awareness and clinical screening can save lives.",
            },
            {
              title: "Prostate Cancer",
              description: "The most commonly diagnosed cancer among African men. Men of African descent carry a genetically higher risk and should begin screening conversations with a doctor by age 45.",
            },
            {
              title: "Liver Cancer",
              description: "Strongly linked to chronic hepatitis B infection, which is endemic across sub-Saharan Africa. Hepatitis B vaccination dramatically reduces liver cancer risk and is available through national programs.",
            },
            {
              title: "Colorectal Cancer",
              description: "Rising in line with dietary shifts toward processed foods and reduced fibre intake. Regular screening from age 45, combined with dietary vigilance, is the most effective prevention strategy.",
            }
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <SplitSection 
          headline="Warning Signs You Should Never Ignore"
          imageSrc="/home/diagnosis.png"
          imageOnRight={false}
          bgWhite={true}
        >
          <ul className="list-none space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[#39A46B] text-xl mt-0.5">•</span>
              <span>An unexplained lump anywhere in the body.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#39A46B] text-xl mt-0.5">•</span>
              <span>Unexplained weight loss of more than five kilograms over a few weeks.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#39A46B] text-xl mt-0.5">•</span>
              <span>Persistent fatigue that does not improve with rest.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#39A46B] text-xl mt-0.5">•</span>
              <span>Changes in bowel or bladder habits that last more than a few weeks.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#39A46B] text-xl mt-0.5">•</span>
              <span>Unusual bleeding — from any site.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#39A46B] text-xl mt-0.5">•</span>
              <span>A sore or wound that does not heal.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#39A46B] text-xl mt-0.5">•</span>
              <span>A change in the appearance of a mole or skin lesion.</span>
            </li>
          </ul>
          <p className="mt-4 italic text-[#222222] font-medium border-l-4 border-[#39A46B] pl-4 py-2 bg-gray-50">
            None of these symptoms necessarily means cancer. But all of them are reasons to see a doctor without delay.
          </p>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <TextSection bgWhite={false}>
          <div className="flex flex-col items-center text-center w-full mb-12">
            <h3 className="text-[#222222] text-4xl font-bold mb-4">Prevention</h3>
            <p className="text-xl text-[#727272]">What You Can Do Starting Today</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <span className="text-[#39A46B] font-bold text-lg mb-2 block">01</span>
                <p>Do not use tobacco in any form. Limit alcohol consumption.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <span className="text-[#39A46B] font-bold text-lg mb-2 block">02</span>
                <p>Eat a diet rich in vegetables, fruits, whole grains, and legumes, and limit processed meats and highly processed foods.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <span className="text-[#39A46B] font-bold text-lg mb-2 block">03</span>
                <p>Maintain a healthy body weight and stay physically active.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <span className="text-[#39A46B] font-bold text-lg mb-2 block">04</span>
                <p>Know your hepatitis B status and vaccinate if needed.</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <span className="text-[#39A46B] font-bold text-lg mb-2 block">05</span>
                <p>If you are a woman aged 25 to 65 and have never had a PAP smear, get one.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <span className="text-[#39A46B] font-bold text-lg mb-2 block">06</span>
                <p>If you are a man over 45, speak to a doctor about PSA testing.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <span className="text-[#39A46B] font-bold text-lg mb-2 block">07</span>
                <p>Ensure your children receive the HPV vaccine.</p>
              </div>
              
              <div className="bg-[#122922] p-8 rounded-2xl mt-auto">
                <p className="text-white text-xl font-medium leading-relaxed">
                  These are not radical interventions. They are the most powerful tools we have.
                </p>
              </div>
            </div>
          </div>
        </TextSection>
      </ScrollReveal>
    </>
  );
};

export default ResourcesAwareness;
