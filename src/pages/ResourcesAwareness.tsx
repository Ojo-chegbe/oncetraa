import React from 'react';
import TextSection from '../components/TextSection';
import GridSection from '../components/GridSection';

const ResourcesAwareness = () => {
  return (
    <>
      <TextSection 
        headline="Understanding Cancer Is the First Step to Defeating It."
        subHeadline="Oncetra's Cancer Awareness resource is written for everyone — patients, families, community leaders, and healthcare workers. No jargon. No overstatement. Just honest, evidence-based information."
        bgWhite={false}
      >
        <h3 className="text-[#222222] text-2xl font-bold mb-2">What Is Cancer?</h3>
        <p>
          Cancer occurs when cells in the body begin to grow and divide in an uncontrolled way, forming masses called tumors or, in blood cancers, flooding the bloodstream with abnormal cells. There are more than 100 types of cancer, each with its own characteristics, risk factors, and treatment pathways.
        </p>
        <p className="mt-4">
          What they share is this: nearly all cancers respond better to treatment when caught early. And many — perhaps most — can be prevented or significantly delayed through lifestyle, dietary choices, and vaccinations.
        </p>
      </TextSection>

      <TextSection bgWhite={true}>
        <h3 className="text-[#222222] text-2xl font-bold mb-2">Cancer in Africa — Understanding the Scale</h3>
        <p>
          Cancer is among the leading causes of death in Africa and its burden is growing. Rapid urbanisation, changing diets, tobacco use, and limited access to screening and treatment are all contributing to rising incidence rates. At the same time, the health systems that serve most Africans were not built to handle the volume or complexity of cancer cases they now face.
        </p>
        <p className="mt-4 font-bold text-[#222222]">
          The result is a crisis that is largely preventable — and that is exactly the problem Oncetra is working to solve.
        </p>
      </TextSection>

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

      <TextSection bgWhite={true}>
        <h3 className="text-[#222222] text-2xl font-bold mb-4">Warning Signs You Should Never Ignore</h3>
        <ul className="list-disc pl-6 space-y-2">
            <li>An unexplained lump anywhere in the body.</li>
            <li>Unexplained weight loss of more than five kilograms over a few weeks.</li>
            <li>Persistent fatigue that does not improve with rest.</li>
            <li>Changes in bowel or bladder habits that last more than a few weeks.</li>
            <li>Unusual bleeding — from any site.</li>
            <li>A sore or wound that does not heal.</li>
            <li>A change in the appearance of a mole or skin lesion.</li>
            <li>Persistent cough, hoarseness, or difficulty swallowing.</li>
            <li>Pain that is new, unexplained, and does not respond to ordinary treatment.</li>
        </ul>
        <p className="mt-6 italic">
          None of these symptoms necessarily means cancer. But all of them are reasons to see a doctor without delay.
        </p>
      </TextSection>

      <TextSection bgWhite={false}>
        <h3 className="text-[#222222] text-2xl font-bold mb-4">Prevention — What You Can Do Starting Today</h3>
        <ul className="list-disc pl-6 space-y-2">
            <li>Do not use tobacco in any form. Limit alcohol consumption.</li>
            <li>Eat a diet rich in vegetables, fruits, whole grains, and legumes, and limit processed meats and highly processed foods.</li>
            <li>Maintain a healthy body weight and stay physically active.</li>
            <li>Know your hepatitis B status and vaccinate if needed.</li>
            <li>If you are a woman aged 25 to 65 and have never had a PAP smear, get one.</li>
            <li>If you are a man over 45, speak to a doctor about PSA testing.</li>
            <li>Ensure your children receive the HPV vaccine.</li>
        </ul>
        <p className="mt-6 font-bold text-[#222222]">
          These are not radical interventions. They are the most powerful tools we have.
        </p>
      </TextSection>
    </>
  );
};

export default ResourcesAwareness;
