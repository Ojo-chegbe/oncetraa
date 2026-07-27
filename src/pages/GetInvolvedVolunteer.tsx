import React, { useState } from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import toast from 'react-hot-toast';
import SuccessModal from '../components/SuccessModal';

const GetInvolvedVolunteer = () => {
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
      toast.error("Failed to submit application");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <>
      <SEO 
        title="Volunteer With Oncetra | Cancer Awareness & Community Support"
        description="Give your time to something that matters. Volunteer with Oncetra to support cancer awareness drives, translation, and community health events."
      />
      <HeroSection 
        headline={"Give Your Time to Something That Matters."}
        subHeadline={"Oncetra's work happens in communities — in fields where medicinal plants are grown, in clinics where screenings happen, in schools and meeting halls where awareness is built. Volunteers are the heartbeat of this effort."}
        bgImage="/images/heroes/volunteer.webp"
        showRightContent={false}
      />

      <ScrollReveal>
        <SplitSection
          headline="Where We Need Support"
          imageSrc="/impact/education_support.webp"
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
          <div className="w-full max-w-[900px] bg-white p-10 md:p-14 rounded-[32px] border border-gray-100">
              <div className="text-center mb-10">
                <h3 className="text-[#222222] text-3xl font-bold mb-4">Volunteer Application</h3>
                <p className="text-[#727272] text-lg max-w-[600px] mx-auto">
                    If you want to give your time, tell us where you are, what skills you can offer, and how much time you have available.
                </p>
              </div>

              <form className="flex flex-col gap-8" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Full Name</label>
                          <input type="text" name="name" required placeholder="Jane Doe" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Email Address</label>
                          <input type="email" name="email" required placeholder="jane@example.com" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Country / City</label>
                          <input type="text" name="location" required placeholder="e.g. Lagos, Nigeria" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#222222] text-[15px] font-semibold">Hours available per week</label>
                          <select name="hours" required defaultValue="" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] appearance-none cursor-pointer">
                              <option value="" disabled>Select an option...</option>
                              <option value="1-5 hours">1-5 hours</option>
                              <option value="5-10 hours">5-10 hours</option>
                              <option value="10-20 hours">10-20 hours</option>
                              <option value="20+ hours">20+ hours</option>
                          </select>
                      </div>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Skills or professional background</label>
                      <textarea name="skills" required rows={3} placeholder="Tell us about your expertise..." className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] resize-none"></textarea>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Areas of interest</label>
                      <textarea name="interests" required rows={3} placeholder="What kind of volunteer work excites you?" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] resize-none"></textarea>
                  </div>
                  
                  <div className="pt-4 flex flex-col items-center gap-4">
                    <button type="submit" disabled={isSending} className="inline-flex items-center justify-center px-8 py-4 text-[16px] font-bold text-white bg-[#39A46B] rounded-full hover:bg-[#122922] transition-colors duration-300 disabled:opacity-50">
                      {isSending ? "Sending..." : "Submit Application"}
                    </button>
                  </div>
              </form>
          </div>
        </div>
      </ScrollReveal>

      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
        title="Application Received!"
        message="Thank you for volunteering with Oncetra. We will review your application and our team will be in touch soon." 
      />
    </>
  );
};

export default GetInvolvedVolunteer;
