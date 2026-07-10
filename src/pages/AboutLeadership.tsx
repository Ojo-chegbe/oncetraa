import React from 'react';
import HeroSection from '../components/HeroSection';
import TeamSection from '../components/TeamSection';
import GridSection from '../components/GridSection';
import ScrollReveal from '../components/ScrollReveal';

const AboutLeadership = () => {
  return (
    <>
      <HeroSection 
        headline={"Led by Science. \nDriven by Compassion."}
        subHeadline={"Oncetra was built by people who believe that where you are born should not determine your odds of surviving cancer. Our team combines scientific training, clinical experience, and a shared commitment to health equity across Africa."}
        bgImage="/images/heroes/partner.png"
        showRightContent={false}
      />

      <TeamSection
        headline="Executive Leadership"
        subHeadline="Our founding team bridges the gap between traditional African plant wisdom and rigorous, evidence-based medicine."
        columns={2}
        bgWhite={false}
        members={[
          {
            name: "Makwin Luther Luka",
            role: "",
            bio: "Makwin Luther Luka is a registered pharmacist and researcher with extensive experience in pharmacology, toxicology, and phytomedicine. His published research—conducted in collaboration with the National Institute for Pharmaceutical Research and Development (NIPRD)—focuses heavily on the therapeutic effects of African plant extracts, including Annona muricata (soursop). He is dedicated to translating rigorous scientific research into accessible, evidence-based cancer care.",
            linkedinUrl: "https://linkedin.com",
            imageSrc: "/team/makwin_luther.jpg"
          },
          {
            name: "Kpasham Luimommei Zethan",
            role: "",
            bio: "Kpasham Luimommei Zethan is an academic researcher and veterinary medicine expert affiliated with the University of Ibadan. With a deep background in neuroscience, toxicology, and clinical diagnostics, she brings critical scientific rigor to Oncetra's research initiatives. Her work ensures that all preclinical studies and diagnostic frameworks meet the highest standards of safety and efficacy.",
            linkedinUrl: "https://linkedin.com",
            imageSrc: "/team/kpasham_zethan.jpg"
          }
        ]}
      />
    </>
  );
};

export default AboutLeadership;
