import React from 'react';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';

const GetInvolvedVolunteer = () => {
  return (
    <>
      <HeroSection 
        headline={"Give Your Time to Something That Matters."}
        subHeadline={"Oncetra's work happens in communities — in fields where medicinal plants are grown, in clinics where screenings happen, in schools and meeting halls where awareness is built. Volunteers are the heartbeat of this effort."}
        bgImage="/home/banner.png"
        showRightContent={false}
      />

      <ScrollReveal>
        <SplitSection
          headline="Where We Need Support"
          imageSrc="/home/education_support.png"
          bgWhite={true}
        >
          <p>
            We are currently looking for passionate individuals who can support our mission on the ground and digitally. Whether you have an hour a week or ten, your contribution matters.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-600 mb-6">
            <li><strong>Community Health Events:</strong> Support the logistics and coordination of local cancer awareness drives.</li>
            <li><strong>Translation & Localisation:</strong> Help us translate complex health education materials into local languages to maximize reach.</li>
            <li><strong>Screening Coordination:</strong> Assist with administrative tasks for our subsidized screening programs.</li>
            <li><strong>Professional Skills:</strong> Contribute pro-bono hours in research, communications, graphic design, or data science.</li>
          </ul>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col items-center self-stretch py-[80px] px-[20px] md:px-[60px] lg:px-[120px] bg-[#F4F5F6]">
          <div className="w-full max-w-[900px] bg-white p-10 md:p-14 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="text-center mb-10">
                <h3 className="text-[#222222] text-3xl font-bold mb-4">Volunteer Application</h3>
                <p className="text-[#727272] text-lg max-w-[600px] mx-auto">
                    If you want to give your time, tell us where you are, what skills you can offer, and how much time you have available.
                </p>
              </div>

              <form className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Full Name</label>
                          <input type="text" placeholder="Jane Doe" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Email Address</label>
                          <input type="email" placeholder="jane@example.com" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Country / City</label>
                          <input type="text" placeholder="e.g. Lagos, Nigeria" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Hours available per week</label>
                          <select className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] appearance-none cursor-pointer">
                              <option value="" disabled selected>Select an option...</option>
                              <option>1-5 hours</option>
                              <option>5-10 hours</option>
                              <option>10-20 hours</option>
                              <option>20+ hours</option>
                          </select>
                      </div>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Skills or professional background</label>
                      <textarea rows={3} placeholder="Tell us about your expertise..." className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] resize-none"></textarea>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Areas of interest</label>
                      <textarea rows={3} placeholder="What kind of volunteer work excites you?" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] resize-none"></textarea>
                  </div>
                  
                  <div className="pt-4 flex justify-center">
                    <Button to="#" variant="primary">
                      Submit Application
                    </Button>
                  </div>
              </form>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
};

export default GetInvolvedVolunteer;
