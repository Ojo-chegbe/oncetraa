import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';

const GetInvolvedCareers = () => {
  return (
    <>
      <SEO 
        title="Careers | Work at Oncetra"
        description="Build a career at the intersection of science and purpose. Join Oncetra's team of plant scientists, oncology researchers, and public health advocates."
      />
      <HeroSection 
        headline={"Build a Career at the Intersection of Science and Purpose."}
        subHeadline={"Oncetra is deliberately creating a career ecosystem — opening doors for Africa's next generation of plant scientists, oncology researchers, public health advocates, pharmacists, and healthcare entrepreneurs."}
        bgImage="/images/heroes/careers.png"
        showRightContent={false}
      />

      <ScrollReveal>
        <SplitSection
          headline="Current Opportunities"
          imageSrc="/home/problem.png"
          bgWhite={true}
        >
          <p>
            We are a young, fast-growing company and our formal hiring will scale alongside our impact. Open roles will be posted here as they arise. In the meantime, we actively welcome speculative applications and internship requests from people who deeply believe in what we are building.
          </p>
          <p className="mt-4 font-bold text-[#222222] mb-6">
            Send us your CV and a short note about what role you imagine for yourself in this work.
          </p>
          <Button to="/contact" variant="primary">
            Submit Application
          </Button>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <SplitSection
          headline="Mentorship"
          imageOnRight={true}
          imageSrc="/home/education_support.png"
          bgWhite={false}
        >
          <p>
            Are you a student or early-career professional with an interest in plant medicine, oncology, biotechnology, agricultural science, pharmaceutical sciences, or public health? 
          </p>
          <p className="mb-6">
            We offer mentorship conversations with our founding team and affiliated researchers — no formal program yet, just honest and generative conversations about building a career with purpose.
          </p>
          <Button to="/contact" variant="secondary">
            Request a Mentorship Conversation
          </Button>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <div className="py-20 px-[20px] md:px-[60px] lg:px-[120px] bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-[#222222] text-3xl md:text-4xl font-bold mb-4">Areas We Will Be Hiring In</h3>
              <p className="text-gray-500 text-lg max-w-[600px] mx-auto">As we expand our ecosystem across the continent, we will be actively seeking talent in the following critical domains.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Agricultural Science & Cultivation",
                "Pharmaceutical Quality Assurance",
                "Public Health & Outreach",
                "Oncology Research",
                "Laboratory & Data Science",
                "Marketing & Communications",
                "Finance & Operations",
                "Clinical Partner Management",
                "Supply Chain & Logistics"
              ].map((area, index) => (
                <div key={index} className="bg-[#F4F5F6] p-6 rounded-[20px] flex items-center gap-4 hover:bg-[#39A46B] group transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#39A46B] group-hover:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="font-semibold text-[#222222] group-hover:text-white transition-colors">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
};

export default GetInvolvedCareers;
