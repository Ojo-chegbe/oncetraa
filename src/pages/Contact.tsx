import React, { useState } from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import toast from 'react-hot-toast';
import SuccessModal from '../components/SuccessModal';

const Contact = () => {
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
      toast.error("Failed to send message");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <>
      <SEO 
        title="Contact Oncetra | Partnerships, Press & General Enquiries"
        description="Get in touch with Oncetra for general enquiries, partnerships, and press opportunities."
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Oncetra"
        }}
      />
      <HeroSection 
        headline={"Let's Build the Future of Cancer Care Together."}
        subHeadline={"Whether you are looking to partner with us, cover our story in the press, or ask a question about our work, our team is ready to connect."}
        bgImage="/images/heroes/contact.png"
        showRightContent={false}
      />

      <ScrollReveal>
        <div className="py-20 px-[20px] md:px-[60px] lg:px-[120px] bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="mailto:hello@oncetra.org" className="bg-[#F4F5F6] p-10 rounded-[24px] group hover:bg-[#39A46B] transition-colors duration-500">
                    <h4 className="font-semibold text-[#222222] text-xl mb-4 group-hover:text-white transition-colors duration-500">General Enquiries</h4>
                    <p className="text-gray-500 text-sm mb-8 group-hover:text-white/80 transition-colors duration-500">For all general questions about our programs, products, and services.</p>
                    <p className="text-[#39A46B] font-mono tracking-wide group-hover:text-white transition-colors duration-500">hello@oncetra.org</p>
                </a>
                <a href="mailto:partnerships@oncetra.com" className="bg-[#F4F5F6] p-10 rounded-[24px] group hover:bg-[#39A46B] transition-colors duration-500">
                    <h4 className="font-semibold text-[#222222] text-xl mb-4 group-hover:text-white transition-colors duration-500">Partnerships</h4>
                    <p className="text-gray-500 text-sm mb-8 group-hover:text-white/80 transition-colors duration-500">For research, clinical, agricultural, and corporate collaboration enquiries.</p>
                    <p className="text-[#39A46B] font-mono tracking-wide group-hover:text-white transition-colors duration-500">partnerships@oncetra.com</p>
                </a>
                <a href="mailto:press@oncetra.com" className="bg-[#F4F5F6] p-10 rounded-[24px] group hover:bg-[#39A46B] transition-colors duration-500">
                    <h4 className="font-semibold text-[#222222] text-xl mb-4 group-hover:text-white transition-colors duration-500">Media and Press</h4>
                    <p className="text-gray-500 text-sm mb-8 group-hover:text-white/80 transition-colors duration-500">For journalists and media organizations looking to cover our work.</p>
                    <p className="text-[#39A46B] font-mono tracking-wide group-hover:text-white transition-colors duration-500">press@oncetra.com</p>
                </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col items-center self-stretch py-20 px-[20px] md:px-[60px] lg:px-[120px] bg-[#F4F5F6]">
          <div className="w-full max-w-[900px] bg-white p-10 md:p-14 rounded-[32px] border border-gray-100">
              <div className="text-center mb-10">
                <h3 className="text-[#222222] text-3xl font-bold mb-4">Send us a message</h3>
                <p className="text-[#727272] text-lg max-w-[600px] mx-auto">
                    Prefer to send a direct message? Fill out the form below and the appropriate team member will get back to you.
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
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Subject</label>
                      <select name="subject" required defaultValue="" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] appearance-none cursor-pointer">
                          <option value="" disabled>Select a topic...</option>
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Media">Media</option>
                          <option value="Career or Mentorship">Career or Mentorship</option>
                          <option value="Product Interest">Product Interest</option>
                          <option value="Volunteer">Volunteer</option>
                          <option value="Other">Other</option>
                      </select>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Message</label>
                      <textarea name="message" required rows={6} placeholder="How can we help you?" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] resize-none"></textarea>
                  </div>
                  
                  <div className="pt-4 flex flex-col items-center gap-4">
                    <button type="submit" disabled={isSending} className="inline-flex items-center justify-center px-8 py-4 text-[16px] font-bold text-white bg-[#39A46B] rounded-full hover:bg-[#122922] transition-colors duration-300 disabled:opacity-50">
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </div>
              </form>
          </div>
        </div>
      </ScrollReveal>

      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
        title="Message Sent!"
        message="Thanks for reaching out. We've received your message and our team will get back to you shortly." 
      />
    </>
  );
};

export default Contact;
