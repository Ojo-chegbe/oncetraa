import React from 'react';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import TextSection from '../components/TextSection';
import TimelineSection from '../components/TimelineSection';
import ScrollReveal from '../components/ScrollReveal';

const AboutStory = () => {
  return (
    <>
      <HeroSection 
        headline={"Every Movement Starts \nWith a Moment of Enough."}
        subHeadline={"Oncetra was born from frustration — at the preventable, the neglected, and the unjust — and from a fierce belief that nature and science, working together, can do better."}
        bgImage="/home/banner.png"
        showRightContent={false}
      />

      <ScrollReveal>
        <SplitSection
          headline="The Genesis"
          imageSrc="/home/problem.png"
          bgWhite={false}
        >
          <p>
            Cancer is not just a medical crisis in Africa. It is an equity crisis. In a region where millions live far from diagnostic laboratories, where treatment costs can consume an entire family's savings, and where late-stage diagnosis is the norm rather than the exception — the toll is staggering, and largely invisible to the rest of the world.
          </p>
          <p>
            The founder of Oncetra saw this reality up close. The response was not despair — it was determination. The question became: what if we could intercept cancer before it takes hold? What if we could bring the science of plants — plants that grow in African soil, plants that communities already know and trust — into a rigorous, evidence-based framework for cancer prevention and care?
          </p>
          <p className="font-bold text-[#222222] text-xl mt-4">
            That question became Oncetra.
          </p>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <TextSection headline="The Name" bgWhite={true}>
          <p>
            Oncetra is derived from "onco" — the medical prefix for cancer — and "cetra," meaning a shield. We are here to be that shield: protective, evidence-based, and available to everyone regardless of where they were born or how much they earn.
          </p>
        </TextSection>
      </ScrollReveal>

      <ScrollReveal>
        <SplitSection
          headline="Where We Are Today"
          imageOnRight={true}
          imageSrc="/home/first_step.png"
          bgWhite={false}
        >
          <p>
            We are in our founding phase — focused, methodical, and clear about what we are building. Our pilot soursop cultivation project is underway. Our institutional relationships are active. Our research agenda is forming.
          </p>
          <p>
            We are not a company that promises miracles. We are a company that believes in process, partnership, and persistent innovation. Every step we take is one we can defend scientifically and sustain operationally.
          </p>
        </SplitSection>
      </ScrollReveal>

      <TimelineSection 
        headline="The Road Ahead"
        subHeadline="Our roadmap to build Africa's most comprehensive cancer care ecosystem."
        bgWhite={true}
        items={[
          {
            title: "Foundation & Cultivation",
            description: "Mass soursop cultivation reaches 1,000 plants. Community awareness campaigns launch across key regions. Initial research partnerships with local and global institutions are formalised."
          },
          {
            title: "Production & Screening",
            description: "Our first science-backed soursop product line enters production. Diagnostic screening partnerships go live, and mobile screening programs begin reaching underserved communities."
          },
          {
            title: "Clinical Integration",
            description: "A dedicated cancer pharmacy opens to the public. Clinical collaboration agreements with major hospitals are fully operational. Our plant portfolio expands to include ginger, garlic, and cashew."
          },
          {
            title: "Expansion & Mentorship",
            description: "Regional expansion begins across Africa. Our first major research publications enter the academic record. Youth mentorship and medical career development programs mature."
          }
        ]}
      />
    </>
  );
};

export default AboutStory;
