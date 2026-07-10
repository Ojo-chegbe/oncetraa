import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import GridSection from '../components/GridSection';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import AccordionSection from '../components/AccordionSection';
import CarouselSection from '../components/CarouselSection';

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
        <CarouselSection 
          headline="Our Core Pillars"
          subHeadline="Our approach addresses cancer across the full arc of the human experience."
          bgWhite={true}
          itemsPerView={3}
          cards={[
            {
              title: "Research",
              description: "Every product and intervention is developed alongside the science. We work with doctors, researchers, and institutions to make sure what we offer holds up to scrutiny.",
              imageSrc: "/home/research.png",
              buttonText: "Learn More",
              buttonLink: "/approach/overview"
            },
            {
              title: "Education and Awareness",
              description: "Educating people before cancer develops, equipping communities with the knowledge and the natural tools to reduce their risk.",
              imageSrc: "/home/community.png",
              buttonText: "Learn More",
              buttonLink: "/approach/overview"
            },
            {
              title: "Cultivation of Medicinal Plants",
              description: "Mass cultivation of medicinal plants like Annona muricata to build the supply chain for Africa's first science-aligned therapeutic product line.",
              imageSrc: "/home/nature_science.png",
              buttonText: "Learn More",
              buttonLink: "/approach/overview"
            },
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
            imageSrc: "/home/research.png"
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
        <div className="flex justify-center self-stretch py-16 md:py-24 px-6 md:px-12 lg:px-[120px] bg-white">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full max-w-[1400px] gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex flex-col items-start justify-center gap-6 lg:w-[40%]">
              <span className="text-[#39A46B] text-lg md:text-xl font-bold uppercase tracking-wider">Our First Step</span>
              <h2 className="text-[#122922] text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight">
                Establishing the Foundation
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Our immediate priority is becoming Nigeria's most credible online source for cancer information. We believe that empowering communities with accurate, actionable intelligence is the absolute prerequisite for changing cancer outcomes.
              </p>
              <div className="mt-4">
                <Button to="/resources/cancer-awareness" variant="primary">
                  Explore Our Resources
                </Button>
              </div>
            </div>

            {/* Right Content - 2x2 Grid of Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-[60%]">
              
              <div className="flex flex-col justify-center p-8 md:p-10 rounded-[32px] bg-[#F4F5F6] border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#39A46B]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#39A46B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#122922] mb-3">Resource Library</h4>
                <p className="text-gray-600 leading-relaxed">Publishing well-researched, deeply informative cancer articles and building a publicly accessible resource library for patients and families.</p>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 rounded-[32px] bg-[#F4F5F6] border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#39A46B]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#39A46B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#122922] mb-3">Monthly Intelligence</h4>
                <p className="text-gray-600 leading-relaxed">Distributing a monthly cancer intelligence newsletter alongside an active, engaging social media presence to keep our community informed.</p>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 rounded-[32px] bg-[#F4F5F6] border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#39A46B]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#39A46B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#122922] mb-3">Quarterly Webinars</h4>
                <p className="text-gray-600 leading-relaxed">Hosting free, expert-led quarterly webinars focused entirely on prevention, understanding risk factors, and early detection strategies.</p>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 rounded-[32px] bg-[#F4F5F6] border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#39A46B]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#39A46B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#122922] mb-3">Media Engagement</h4>
                <p className="text-gray-600 leading-relaxed">Working closely with local radio and online news outlets to provide expert commentary and dramatically amplify cancer awareness efforts.</p>
              </div>

            </div>

          </div>
        </div>
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


      {/* Closing Banner */}
      <ScrollReveal>
        <div className="flex justify-center py-20 px-[20px] md:px-[60px] lg:px-[120px] bg-[#F4F5F6]">
          <div className="flex flex-col relative w-full max-w-[1400px] min-h-[500px] lg:min-h-[600px] rounded-[32px] overflow-hidden">
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
                <div className="inline-flex items-center bg-white rounded-full pr-5 pl-1.5 py-1.5 w-max">
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
