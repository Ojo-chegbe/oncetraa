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
        bgImage="/home/banner.png"
        showRightContent={false}
      />

      <TeamSection
        headline="Executive Leadership"
        subHeadline="Our founding team bridges the gap between traditional African plant wisdom and rigorous, evidence-based medicine."
        columns={2}
        bgWhite={false}
        members={[
          {
            name: "Dr. Kwame Mensah",
            role: "Founder & Chief Executive Officer",
            bio: "Dr. Mensah is a leading oncologist with over 20 years of clinical experience across West Africa. Frustrated by the lack of accessible early diagnosis and the staggering costs of imported pharmaceuticals, he founded Oncetra to build a sustainable, Africa-first cancer care ecosystem.",
            linkedinUrl: "https://linkedin.com",
            imageSrc: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop" // Professional doctor placeholder
          },
          {
            name: "Dr. Amina Osei",
            role: "Chief Medical Officer",
            bio: "Dr. Osei oversees all clinical research and diagnostic partnerships. With a dual background in public health and pharmacology, her primary focus is ensuring that every natural therapeutic developed by Oncetra meets the highest international standards of safety and efficacy.",
            linkedinUrl: "https://linkedin.com",
            imageSrc: "https://images.unsplash.com/photo-1594824432258-f910406859e1?q=80&w=2070&auto=format&fit=crop" // Professional female doctor placeholder
          }
        ]}
      />

      <TeamSection
        headline="Scientific Advisory Board"
        subHeadline="Our work is guided and validated by leading minds in oncology, phytochemistry, and global public health."
        columns={3}
        bgWhite={true}
        members={[
          {
            name: "Prof. Sarah Jenkins",
            role: "Head of Phytochemistry, Oxford University",
            bio: "Prof. Jenkins advises on the extraction, isolation, and formulation of active compounds from Annona muricata (soursop) and other medicinal plants.",
            linkedinUrl: "https://linkedin.com"
          },
          {
            name: "Dr. David Alabi",
            role: "Director of Oncology, LUTH",
            bio: "Dr. Alabi provides clinical oversight and guidance on integrating Oncetra's screening programs with existing national healthcare infrastructure.",
            linkedinUrl: "https://linkedin.com"
          },
          {
            name: "Dr. Elena Rossi",
            role: "European Cancer Research Association",
            bio: "Dr. Rossi facilitates international research collaboration, ensuring that our clinical trials and data collection are peer-validated on a global stage.",
            linkedinUrl: "https://linkedin.com"
          }
        ]}
      />

      <ScrollReveal>
        <GridSection 
          headline="Our Institutional Affiliations"
          subHeadline="We actively engage with global institutions and local partners to ensure our work is validated, scaled, and impactful."
          bgWhite={false}
          cards={[
            {
              title: "European Cancer Research Association",
              description: "Our founder holds an active affiliation with the ECRA, providing a gateway to international research collaboration and peer-validated science.",
              imageSrc: "/home/partner_eu.png"
            },
            {
              title: "National Institutes of Health",
              description: "We align our educational and preventive programming with NIH guidelines and are pursuing deeper collaboration on community health initiatives.",
              imageSrc: "/home/partner_nih.png"
            },
            {
              title: "Local Clinical & Diagnostic Partners",
              description: "As our network of hospital and laboratory partners grows, they will be listed here with details of the specific services and programs we run together.",
              imageSrc: "/home/partner_clinical.png"
            }
          ]}
        />
      </ScrollReveal>
    </>
  );
};

export default AboutLeadership;
