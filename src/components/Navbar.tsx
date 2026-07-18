import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 pt-8 flex justify-center pointer-events-none px-4">
        <nav className="flex items-center justify-between py-4 px-6 md:px-8 bg-white rounded-full w-full max-w-[1400px] shadow-sm border border-gray-100 pointer-events-auto">
          
          <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo.png" alt="Oncetra Logo" className="h-8 md:h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className="text-[#222222] text-[15px] font-medium hover:text-[#39A46B] py-2">Home</Link>
            <Link to="/models" className="text-[#222222] text-[15px] font-medium hover:text-[#39A46B] py-2">Models</Link>
            
            <div className="relative group">
              <button className="text-[#222222] text-[15px] font-medium hover:text-[#39A46B] py-2 flex items-center gap-1">
                About Us
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 pt-2 z-10 w-48">
                <div className="flex flex-col bg-white shadow-xl py-3 rounded-xl border border-gray-100 w-full">
                  <Link to="/about#story" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Our Story</Link>
                  <Link to="/about#leadership" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Leadership</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-[#222222] text-[15px] font-medium hover:text-[#39A46B] py-2 flex items-center gap-1">
                Approach
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 pt-2 z-10 w-56">
                <div className="flex flex-col bg-white shadow-xl py-3 rounded-xl border border-gray-100 w-full">
                  <Link to="/approach" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Overview</Link>
                  <Link to="/approach#prevention" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Prevention</Link>
                  <Link to="/approach#diagnosis" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Early Diagnosis</Link>
                  <Link to="/approach#treatment" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Treatment</Link>
                </div>
              </div>
            </div>

            <Link to="/products" className="text-[#222222] text-[15px] font-medium hover:text-[#39A46B] py-2">Products</Link>

            <div className="relative group">
              <button className="text-[#222222] text-[15px] font-medium hover:text-[#39A46B] py-2 flex items-center gap-1">
                Resources
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 pt-2 z-10 w-60">
                <div className="flex flex-col bg-white shadow-xl py-3 rounded-xl border border-gray-100 w-full">
                  <Link to="/resources/cancer-awareness" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Cancer Awareness</Link>
                  <Link to="/resources/plant-medicine" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Plant Medicine & Science</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-[#222222] text-[15px] font-medium hover:text-[#39A46B] py-2 flex items-center gap-1">
                Get Involved
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 pt-2 z-10 w-56">
                <div className="flex flex-col bg-white shadow-xl py-3 rounded-xl border border-gray-100 w-full">
                  <Link to="/get-involved/partner" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Partner With Us</Link>
                  <Link to="/get-involved/careers" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Careers & Mentorship</Link>
                  <Link to="/get-involved/volunteer" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Volunteer</Link>
                  <Link to="/get-involved/community" className="px-5 py-2.5 text-[15px] text-[#222222] hover:bg-gray-50 hover:text-[#39A46B] font-medium">Community Programs</Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-[#222222] text-[15px] font-medium hover:text-[#39A46B] py-2">Contact</Link>
          </div>

          <div className="hidden lg:block">
            <Button to="/get-involved/partner" variant="primary">
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Open Button */}
          <button 
            className="lg:hidden p-2 text-[#222222] hover:text-[#39A46B] focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col lg:hidden overflow-y-auto`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between py-6 px-6 md:px-8 border-b border-gray-100 shrink-0">
          <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo.png" alt="Oncetra Logo" className="h-8 w-auto object-contain" />
          </Link>
          <button 
            className="p-2 text-[#222222] hover:text-[#39A46B] focus:outline-none bg-gray-50 rounded-full"
            onClick={toggleMobileMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col p-8 gap-8">
          <Link to="/" className="text-[#222222] text-xl font-bold hover:text-[#39A46B]" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/models" className="text-[#222222] text-xl font-bold hover:text-[#39A46B]" onClick={toggleMobileMenu}>Models</Link>
          
          <div className="flex flex-col gap-4">
            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">About Us</span>
            <div className="flex flex-col gap-4">
              <Link to="/about#story" className="text-[#222222] text-lg font-medium hover:text-[#39A46B]" onClick={toggleMobileMenu}>Our Story</Link>
              <Link to="/about#leadership" className="text-[#222222] text-lg font-medium hover:text-[#39A46B]" onClick={toggleMobileMenu}>Leadership</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Approach</span>
            <div className="flex flex-col gap-4">
              <Link to="/approach" className="text-[#222222] text-lg font-medium hover:text-[#39A46B]" onClick={toggleMobileMenu}>Overview</Link>
            </div>
          </div>

          <Link to="/products" className="text-[#222222] text-xl font-bold hover:text-[#39A46B]" onClick={toggleMobileMenu}>Products</Link>

          <div className="flex flex-col gap-4">
            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Resources</span>
            <div className="flex flex-col gap-4">
              <Link to="/resources/cancer-awareness" className="text-[#222222] text-lg font-medium hover:text-[#39A46B]" onClick={toggleMobileMenu}>Cancer Awareness</Link>
              <Link to="/resources/plant-medicine" className="text-[#222222] text-lg font-medium hover:text-[#39A46B]" onClick={toggleMobileMenu}>Plant Medicine</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Get Involved</span>
            <div className="flex flex-col gap-4">
              <Link to="/get-involved/partner" className="text-[#222222] text-lg font-medium hover:text-[#39A46B]" onClick={toggleMobileMenu}>Partner With Us</Link>
              <Link to="/get-involved/careers" className="text-[#222222] text-lg font-medium hover:text-[#39A46B]" onClick={toggleMobileMenu}>Careers</Link>
              <Link to="/get-involved/volunteer" className="text-[#222222] text-lg font-medium hover:text-[#39A46B]" onClick={toggleMobileMenu}>Volunteer</Link>
              <Link to="/get-involved/community" className="text-[#222222] text-lg font-medium hover:text-[#39A46B]" onClick={toggleMobileMenu}>Community Programs</Link>
            </div>
          </div>

          <Link to="/contact" className="text-[#222222] text-xl font-bold hover:text-[#39A46B]" onClick={toggleMobileMenu}>Contact</Link>

          <div className="mt-8 pt-8 border-t border-gray-100 pb-8">
            <Button to="/get-involved/partner" variant="primary" className="w-full justify-center py-4 text-lg" onClick={toggleMobileMenu}>
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
