import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex flex-col self-stretch bg-[#122922] pt-16 md:pt-[120px] pb-[29px] px-6 md:px-12 lg:px-[120px] gap-[30px]">
        <div className="flex flex-col self-stretch gap-[17px]">
            <div className="flex flex-col xl:flex-row items-center self-stretch gap-4">
                
                {/* Newsletter Box */}
                <div className="flex flex-col w-full xl:w-auto shrink-0 items-start py-10 md:py-[39px] px-6 md:px-10 gap-8 md:gap-[39px] rounded-2xl border border-solid border-[#0000000D] bg-[#0C201A]">
                    <div className="flex flex-col items-start xl:items-center gap-4 md:gap-[19px]">
                        <div className="flex flex-col items-start md:pr-14">
                            <span className="text-white text-3xl md:text-5xl xl:w-[349px]">
                                {"Stay Connected \nWith Our Impact"}
                            </span>
                        </div>
                        <span className="text-white text-lg md:text-xl md:w-[400px]">
                            {"Get stories, updates, and real impact reports \ndelivered to your inbox."}
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center p-2 rounded-2xl sm:rounded-[63px] border border-solid border-[#8888881A] bg-white w-full gap-2">
                        <input 
                            type="email" 
                            placeholder="Your Email Address" 
                            className="bg-transparent border-none outline-none text-black text-base flex-1 px-4 py-2 w-full text-center sm:text-left" 
                        />
                        <button className="bg-[#39A46B] text-white py-3 sm:py-2 px-6 rounded-[63px] w-full sm:w-auto hover:bg-[#2d8555] transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Links Box */}
                <div className="flex flex-1 w-full flex-col md:flex-row justify-between items-start pt-10 pb-16 md:pb-[91px] px-6 md:px-10 rounded-2xl border border-solid border-[#ffffff1a] bg-[#0C201A] gap-10 md:gap-4">
                    
                    <div className="flex flex-col shrink-0 items-start pr-4 gap-4 md:gap-[19px]">
                        <span className="text-[#39A46B] text-lg font-medium">
                            {"Company"}
                        </span>
                        <div className="flex flex-col items-start gap-3 md:gap-[15px]">
                            <Link to="/" className="text-white text-base hover:text-[#39A46B] transition-colors">Home</Link>
                            <Link to="/about/story" className="text-white text-base hover:text-[#39A46B] transition-colors">About</Link>
                            <Link to="/approach" className="text-white text-base hover:text-[#39A46B] transition-colors">Approach</Link>
                            <Link to="/products" className="text-white text-base hover:text-[#39A46B] transition-colors">Products</Link>
                        </div>
                    </div>

                    <div className="flex flex-col shrink-0 items-start pr-[38px] gap-4 md:gap-[19px]">
                        <span className="text-[#39A46B] text-lg font-medium">
                            {"More"}
                        </span>
                        <div className="flex flex-col items-start gap-3 md:gap-[15px]">
                            <Link to="/resources/cancer-awareness" className="text-white text-base hover:text-[#39A46B] transition-colors">Resources</Link>
                            <Link to="/get-involved/volunteer" className="text-white text-base hover:text-[#39A46B] transition-colors">Volunteer</Link>
                            <Link to="/contact" className="text-white text-base hover:text-[#39A46B] transition-colors">Contact</Link>
                            <Link to="/privacy-policy" className="text-white text-base hover:text-[#39A46B] transition-colors">Privacy Policy</Link>
                        </div>
                    </div>

                    <div className="flex flex-col shrink-0 items-start gap-4 md:gap-[19px]">
                        <span className="text-[#39A46B] text-lg font-medium">
                            {"Contact"}
                        </span>
                        <div className="flex flex-col items-start gap-4 md:gap-[23px]">
                            <div className="flex items-center gap-[7px]">
                                <a href="mailto:contact@oncetra.com" className="text-white text-base hover:text-[#39A46B] transition-colors">
                                    {"contact@oncetra.com"}
                                </a>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <a href="mailto:press@oncetra.com" className="text-white text-base hover:text-[#39A46B] transition-colors">
                                    {"press@oncetra.com"}
                                </a>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <a href="mailto:partnerships@oncetra.com" className="text-white text-base hover:text-[#39A46B] transition-colors">
                                    {"partnerships@oncetra.com"}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center self-stretch pt-6 md:pt-4 border-t border-[#ffffff1a] gap-4 sm:gap-0">
            <span className="text-[#F4F5F6] text-sm md:text-base text-center">
                {"© 2026 Oncetra All Rights Reserved"}
            </span>
            <span className="text-[#F4F5F6] text-sm md:text-base text-center">
                {"Made with purpose."}
            </span>
        </div>
    </div>
  );
};

export default Footer;
