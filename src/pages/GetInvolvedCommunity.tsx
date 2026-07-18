import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';

const GetInvolvedCommunity = () => {
  return (
    <>
      <SEO 
        title="Community Programs | Cancer Education by Oncetra"
        description="Bring cancer education directly to your community with Oncetra. We host local programs on risk awareness, prevention, and early screening navigation."
      />
      <HeroSection 
        headline={"Cancer Awareness Belongs in Every Community."}
        subHeadline={"Oncetra's community programs bring cancer education directly to the people who need it — in local languages, through trusted community voices, and in spaces that feel familiar rather than clinical."}
        bgImage="/images/heroes/community.png"
        showRightContent={false}
      />

      <ScrollReveal>
        <SplitSection
          headline="What We Teach"
          imageSrc="/home/problem.png"
          bgWhite={true}
        >
          <p>
            Knowledge is a form of medicine. We believe that empowering communities with accurate, actionable information is the first step toward reducing cancer mortality rates.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-600">
            <li><strong>Risk Awareness:</strong> Recognizing early warning signs and understanding specific risk factors prevalent in African populations.</li>
            <li><strong>Prevention:</strong> The crucial role of diet, lifestyle, and natural interventions in cancer prevention.</li>
            <li><strong>Navigation:</strong> How and where to access subsidized screening services and clinical support.</li>
            <li><strong>Destigmatization:</strong> Facilitating open, supportive conversations about cancer within families and communities to break the silence.</li>
          </ul>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <SplitSection
          headline="Host a Program"
          imageOnRight={true}
          imageSrc="/home/partner_clinical.png"
          bgWhite={false}
        >
          <p>
            We don't wait for people to find us; we go to where the people are. Our outreach teams deliver sessions tailored to the specific cultural and demographic realities of the audience.
          </p>
          <p className="mb-6">
            If you are a community leader, a school administrator, a religious organisation, a women's group, or any kind of community body and you want to bring an Oncetra educational program to your area, we want to hear from you.
          </p>
          <Button to="/contact" variant="primary">
            Request a Community Session
          </Button>
        </SplitSection>
      </ScrollReveal>
    </>
  );
};

export default GetInvolvedCommunity;
