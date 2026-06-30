import React from 'react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';

const Contact = () => {
  return (
    <>
      <HeroSection 
        headline={"Let's Build the Future of Cancer Care Together."}
        subHeadline={"Whether you are looking to partner with us, cover our story in the press, or ask a question about our work, our team is ready to connect."}
        bgImage="/home/banner.png"
        showRightContent={false}
      />

      <ScrollReveal>
        <div className="py-20 px-[20px] md:px-[60px] lg:px-[120px] bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="mailto:contact@oncetra.com" className="bg-[#F4F5F6] p-10 rounded-[24px] group hover:bg-[#39A46B] transition-colors duration-500">
                    <h4 className="font-semibold text-[#222222] text-xl mb-4 group-hover:text-white transition-colors duration-500">General Enquiries</h4>
                    <p className="text-gray-500 text-sm mb-8 group-hover:text-white/80 transition-colors duration-500">For all general questions about our programs, products, and services.</p>
                    <p className="text-[#39A46B] font-mono tracking-wide group-hover:text-white transition-colors duration-500">contact@oncetra.com</p>
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
          <div className="w-full max-w-[900px] bg-white p-10 md:p-14 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="text-center mb-10">
                <h3 className="text-[#222222] text-3xl font-bold mb-4">Send us a message</h3>
                <p className="text-[#727272] text-lg max-w-[600px] mx-auto">
                    Prefer to send a direct message? Fill out the form below and the appropriate team member will get back to you.
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
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Subject</label>
                      <select className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] appearance-none cursor-pointer">
                          <option value="" disabled selected>Select a topic...</option>
                          <option>General Enquiry</option>
                          <option>Partnership</option>
                          <option>Media</option>
                          <option>Career or Mentorship</option>
                          <option>Product Interest</option>
                          <option>Volunteer</option>
                          <option>Other</option>
                      </select>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-[#222222] text-[15px] font-semibold">Message</label>
                      <textarea rows={6} placeholder="How can we help you?" className="bg-[#F4F5F6] border-transparent rounded-[16px] py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[#39A46B] focus:bg-white transition-all text-[#222222] resize-none"></textarea>
                  </div>
                  
                  <div className="pt-4 flex justify-center">
                    <Button to="#" variant="primary">
                        Send Message
                    </Button>
                  </div>
              </form>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
};

export default Contact;
