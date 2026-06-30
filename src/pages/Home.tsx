import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import GridSection from '../components/GridSection';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import AccordionSection from '../components/AccordionSection';

const Home = () => {
  return (
    <>
      <HeroSection 
        headline={
          <>
            Rewriting the Story of <span className="text-[#39A46B] italic">Cancer Care</span> in Africa.
          </>
        }
        subHeadline={"Oncetra is building Africa's most comprehensive cancer care ecosystem — rooted in nature, powered by science, and committed to every community."}
        button1Text="Explore Our Approach"
        button1Link="/approach/overview"
        button2Text="Join the Movement"
        button2Link="/get-involved/partner"
      />

      <ScrollReveal>
        <SplitSection
          headline={"The Problem"}
        imageSrc="/home/problem.png"
        bgWhite={false}
      >
        <p>
          70% of cancer cases in Africa are diagnosed at late stages. The result is lower survival rates, higher treatment costs, and deaths that did not have to happen.
        </p>
        <p>
          In high-income countries, cancer is increasingly manageable — even beatable. In low- and middle-income nations, especially across Africa, it remains a near-certain death sentence. Not because treatments do not exist. But because prevention is overlooked, early detection is inaccessible, and affordable, effective therapies are out of reach for the people who need them most.
        </p>
        <p className="font-bold text-[#222222] text-xl mt-4">
          Oncetra exists to change this.
        </p>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <GridSection 
          headline="The Three Pillars"
        subHeadline="Our approach addresses cancer across the full arc of the human experience."
        bgWhite={true}
        cards={[
          {
            title: "Prevention",
            description: "We harness the science-backed power of medicinal plants — led by soursop (Annona muricata) — alongside public education campaigns to stop cancer before it starts.",
            imageSrc: "/home/prevention.png",
            buttonText: "Learn More",
            buttonLink: "/approach/prevention"
          },
          {
            title: "Early Diagnosis",
            description: "We partner with diagnostic laboratories to bring affordable cancer screening — PAP smears, PSA tests, and HPV vaccination programs — to underserved communities.",
            imageSrc: "/home/diagnosis.png",
            buttonText: "Learn More",
            buttonLink: "/approach/early-diagnosis"
          },
          {
            title: "Treatment Optimization",
            description: "We are building a dedicated cancer pharmacy and a data-driven patient care model that matches individuals to the right treatments at the right time.",
            imageSrc: "/home/treatment.png",
            buttonText: "Learn More",
            buttonLink: "/approach/treatment-optimization"
          }
        ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <GridSection
          headline="Why Oncetra Is Different"
        columns={2}
        bgWhite={false}
        cards={[
          {
            title: "Nature-First, Science-Backed",
            description: "We do not choose between traditional plant wisdom and evidence-based medicine. We use both. Every plant-based intervention we champion is grounded in published phytochemical and clinical research.",
            imageSrc: "/home/nature_science.png"
          },
          {
            title: "Built for Africa",
            description: "Our solutions are designed for local realities — climate, culture, cost, and access. We are not importing a model from elsewhere. We are building one here.",
            imageSrc: "/home/built_for_africa.png"
          },
          {
            title: "Research-Oriented",
            description: "Every product and intervention is developed alongside the science. We work with doctors, researchers, and institutions to make sure what we offer holds up to scrutiny.",
            imageSrc: "/home/nature_science.png"
          },
          {
            title: "Community-Centered",
            description: "From farming to pharmacies, our model creates local employment, empowers young people to pursue careers in health and science, and distributes access to care more equitably.",
            imageSrc: "/home/community.png"
          }
        ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <SplitSection
          headline="Our First Step"
        imageSrc="/home/first_step.png"
        bgWhite={true}
      >
        <p>
          Our pilot project — the mass cultivation of Annona muricata, commonly known as soursop — is already underway. With an initial target of 1,000 plants, we are building the supply chain for Africa's first science-aligned soursop therapeutic product line. Harvest begins within two years. From farm to formulation, every step is traceable, intentional, and community-powered.
        </p>
        <div className="mt-4">
          <Button to="/products" variant="primary">
            Discover Our Products
          </Button>
        </div>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <AccordionSection
          tagText="Volunteer"
          headline="Drive Research & Awareness"
          subHeadline="Your expertise and voice can save lives. Join our network of researchers and advocates to expand cancer awareness and accelerate science-backed care."
          imageSrc="/impact/education_support.png"
          buttonText="Volunteer with us"
          buttonLink="/get-involved/volunteer"
          items={[
            {
              title: "Clinical Research Support",
              description: "Collaborate with our teams to analyze data, validate plant-based therapies, and advance clinical evidence for cancer care."
            },
            {
              title: "Cancer Awareness Campaigns",
              description: "Lead community outreach programs to educate the public on cancer prevention, early warning signs, and the importance of regular screening."
            },
            {
              title: "Public Health Advocacy",
              description: "Work with local organizations and policymakers to advocate for accessible screening facilities and better healthcare policies."
            }
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <GridSection 
          headline="Partnerships"
        subHeadline="Oncetra does not operate in isolation. We actively engage with global institutions, local hospitals, diagnostic partners, and research bodies to ensure our work is validated, scaled, and impactful."
        bgWhite={false}
        cards={[
          {
            title: "European Cancer Research Association",
            description: "Providing a gateway to international research collaboration and peer-validated science.",
            imageSrc: "/home/partner_eu.png"
          },
          {
            title: "National Institutes of Health",
            description: "Aligning our educational and preventive programming with NIH guidelines and community health initiatives.",
            imageSrc: "/home/partner_nih.png"
          },
          {
            title: "Clinical and Diagnostic Partners",
            description: "As our network of hospital and laboratory partners grows, they will be listed here.",
            imageSrc: "/home/partner_clinical.png"
          }
        ]}
        />
      </ScrollReveal>

      {/* Closing Banner */}
      <ScrollReveal>
        <div className="py-20 px-[20px] md:px-[60px] lg:px-[120px] bg-[#F4F5F6]">
          <div className="flex flex-col relative w-full min-h-[500px] lg:min-h-[600px] rounded-[32px] overflow-hidden shadow-xl">
          {/* Background Image & Gradient */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/home/banner.png" 
              className="w-full h-full object-cover" 
              alt="Banner Background" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a14]/90 via-[#0a1a14]/40 to-transparent"></div>
          </div>
          
          {/* Content Area */}
          <div className="relative z-10 flex flex-col justify-end h-full flex-1 p-10 md:p-16">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
              
              {/* Left Side */}
              <div className="flex flex-col gap-6 max-w-[700px]">
                <div className="inline-flex items-center bg-white rounded-full pr-5 pl-1.5 py-1.5 w-max shadow-sm">
                  <div className="bg-[#39A46B] text-white rounded-full p-2 mr-3">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1L13 7M13 7L7 13M13 7H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#222222] text-[15px] font-bold">Join the Movement</span>
                </div>
                
                <h2 className="text-white text-5xl md:text-6xl font-bold leading-[1.1]">
                  Cancer justice is not a distant dream. It starts here.
                </h2>
              </div>
              
              {/* Right Side */}
              <div className="flex flex-col items-start lg:items-end gap-8 max-w-[450px]">
                <p className="text-white/90 text-lg lg:text-right leading-relaxed">
                  Whether you are a researcher, a patient, an investor, a farmer, or simply someone who cares — there is a place for you in the Oncetra movement.
                </p>
                
                <div className="flex flex-row items-center gap-4 flex-wrap lg:justify-end">
                  <Button to="/get-involved/partner" variant="primary">
                    Partner With Us
                  </Button>
                  <Button href="#newsletter" variant="tertiary">
                    Join Newsletter
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </>
  );
};

export default Home;
