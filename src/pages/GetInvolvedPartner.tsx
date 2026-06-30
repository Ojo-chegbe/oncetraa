import React from 'react';
import HeroSection from '../components/HeroSection';
import GridSection from '../components/GridSection';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';

const GetInvolvedPartner = () => {
  return (
    <>
      <HeroSection 
        headline={"Your Organisation Can Help Change Cancer Outcomes."}
        subHeadline={"Oncetra is building a broad coalition of partners across research, clinical care, agriculture, and business. We welcome partnerships at every level to scale our impact across Africa."}
        bgImage="/home/banner.png"
        showRightContent={false}
      />

      <ScrollReveal>
        <GridSection 
          headline="Partnership Opportunities"
          subHeadline="We believe that systemic problems require systemic collaboration. Find where your organization fits within the Oncetra ecosystem."
          bgWhite={true}
          cards={[
            {
              title: "Research Partnerships",
              description: "For universities and independent research institutions. Co-investigate the clinical potential of our plant portfolio, design community-level prevention studies, and contribute to peer-reviewed literature.",
              imageSrc: "/home/partner_eu.png"
            },
            {
              title: "Clinical Partnerships",
              description: "For hospitals, specialist oncology centres, and diagnostic laboratories. Join our screening network, refer patients to Oncetra resources, and participate in treatment optimization programs.",
              imageSrc: "/home/partner_clinical.png"
            },
            {
              title: "Agricultural Partnerships",
              description: "For landowners and cooperatives. Help us scale the cultivation of soursop and medicinal plants. We provide agronomic guidance and guaranteed offtake. You provide land and local knowledge.",
              imageSrc: "/home/first_step.png"
            },
            {
              title: "Corporate Philanthropy",
              description: "For businesses and foundations. Make a measurable contribution to health equity by sponsoring awareness campaigns, funding mobile screening, or supporting youth career development.",
              imageSrc: "/home/treatment.png"
            }
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col items-center self-stretch py-[80px] px-[20px] md:px-[60px] lg:px-[120px] bg-[#F4F5F6]">
          <div className="w-full max-w-[900px] bg-white p-10 md:p-14 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="text-center mb-10">
                <h3 className="text-[#222222] text-3xl font-bold mb-4">To Discuss a Partnership</h3>
                <p className="text-[#727272] text-lg max-w-[600px] mx-auto">
                    Tell us who you are, what your organisation does, and what kind of collaboration you have in mind. We respond to every serious enquiry.
                </p>
              </div>
              
              <form className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Organisation Name</label>
                          <input type="text" placeholder="e.g. Acme Health Corp" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Contact Person Name</label>
                          <input type="text" placeholder="Jane Doe" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Contact Email</label>
                          <input type="email" placeholder="jane@example.com" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Country of Operation</label>
                          <input type="text" placeholder="e.g. Nigeria" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Type of Partnership</label>
                      <select className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] appearance-none cursor-pointer">
                          <option value="" disabled selected>Select an option...</option>
                          <option>Research Partnership</option>
                          <option>Clinical Partnership</option>
                          <option>Agricultural Partnership</option>
                          <option>Corporate/Philanthropic</option>
                          <option>Other</option>
                      </select>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Brief description of interest</label>
                      <textarea rows={5} placeholder="Tell us how we can work together..." className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] resize-none"></textarea>
                  </div>
                  
                  <div className="pt-4 flex justify-center">
                    <Button to="#" variant="primary">
                      Send Enquiry
                    </Button>
                  </div>
              </form>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
};

export default GetInvolvedPartner;
