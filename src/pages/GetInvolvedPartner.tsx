import React, { useState } from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import CarouselSection from '../components/CarouselSection';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import toast from 'react-hot-toast';
import SuccessModal from '../components/SuccessModal';

const GetInvolvedPartner = () => {
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;
    setIsSending(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        form.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message || "An error occurred");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send enquiry");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <>
      <SEO 
        title="Partner With Oncetra | Cancer Research & Clinical Collaboration"
        description="Join Oncetra's coalition of research, clinical, and agricultural partners to scale cancer care solutions across Africa."
      />
      <HeroSection 
        headline={"Your Organisation Can Help Change Cancer Outcomes."}
        subHeadline={"Oncetra is building a broad coalition of partners across research, clinical care, agriculture, and business. We welcome partnerships at every level to scale our impact across Africa."}
        bgImage="/images/heroes/partner.webp"
        showRightContent={false}
      />

      <ScrollReveal>
          <CarouselSection 
            headline="Partnership Opportunities"
            subHeadline="We believe that systemic problems require systemic collaboration. Find where your organization fits within the Oncetra ecosystem."
            bgWhite={true}
            cards={[
              {
                title: "Research Partnerships",
                description: "For universities and independent research institutions. Co-investigate the clinical potential of our plant portfolio, design community-level prevention studies, and contribute to peer-reviewed literature.",
                imageSrc: "/home/partner_eu.webp"
              },
              {
                title: "Clinical Partnerships",
                description: "For hospitals, specialist oncology centres, and diagnostic laboratories. Join our screening network, refer patients to Oncetra resources, and participate in treatment optimization programs.",
                imageSrc: "/home/partner_clinical.webp"
              },
              {
                title: "Agricultural Partnerships",
                description: "For landowners and cooperatives. Help us scale the cultivation of soursop and medicinal plants. We provide agronomic guidance and guaranteed offtake. You provide land and local knowledge.",
                imageSrc: "/home/first_step.webp"
              },
              {
                title: "Corporate Philanthropy",
                description: "For businesses and foundations. Make a measurable contribution to health equity by sponsoring awareness campaigns, funding mobile screening, or supporting youth career development.",
                imageSrc: "/home/treatment.webp"
              }
            ]}
          />
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col items-center self-stretch py-[80px] px-[20px] md:px-[60px] lg:px-[120px] bg-[#F4F5F6]">
          <div className="w-full max-w-[900px] bg-white p-10 md:p-14 rounded-[32px] border border-gray-100">
              <div className="text-center mb-10">
                <h3 className="text-[#222222] text-3xl font-bold mb-4">To Discuss a Partnership</h3>
                <p className="text-[#727272] text-lg max-w-[600px] mx-auto">
                    Tell us who you are, what your organisation does, and what kind of collaboration you have in mind. We respond to every serious enquiry.
                </p>
              </div>
              
              <form className="flex flex-col gap-8" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Organisation Name</label>
                          <input type="text" name="organisation" required placeholder="e.g. Acme Health Corp" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Contact Person Name</label>
                          <input type="text" name="contact_name" required placeholder="Jane Doe" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Contact Email</label>
                          <input type="email" name="email" required placeholder="jane@example.com" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Country of Operation</label>
                          <input type="text" name="country" required placeholder="e.g. Nigeria" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Type of Partnership</label>
                      <select name="partnership_type" required defaultValue="" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] appearance-none cursor-pointer">
                          <option value="" disabled>Select an option...</option>
                          <option value="Research Partnership">Research Partnership</option>
                          <option value="Clinical Partnership">Clinical Partnership</option>
                          <option value="Agricultural Partnership">Agricultural Partnership</option>
                          <option value="Corporate/Philanthropic">Corporate/Philanthropic</option>
                          <option value="Other">Other</option>
                      </select>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Brief description of interest</label>
                      <textarea name="message" required rows={5} placeholder="Tell us how we can work together..." className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] resize-none"></textarea>
                  </div>
                  
                  <div className="pt-4 flex flex-col items-center gap-4">
                    <button type="submit" disabled={isSending} className="inline-flex items-center justify-center px-8 py-4 text-[16px] font-bold text-white bg-[#39A46B] rounded-full hover:bg-[#122922] transition-colors duration-300 disabled:opacity-50">
                      {isSending ? "Sending..." : "Send Enquiry"}
                    </button>
                  </div>
              </form>
          </div>
        </div>
      </ScrollReveal>

      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
        title="Enquiry Sent!"
        message="Thank you for your interest in partnering with Oncetra. Our partnership team will review your enquiry and get back to you shortly." 
      />
    </>
  );
};

export default GetInvolvedPartner;
