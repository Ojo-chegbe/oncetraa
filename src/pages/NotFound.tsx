import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found | Oncetra"
        description="The page you are looking for does not exist."
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="text-[#122922] text-6xl md:text-8xl font-bold mb-6 tracking-tight">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#122922] mb-6">Page Not Found</h2>
          <p className="text-[#4A5568] text-lg mb-10 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 text-[16px] font-bold text-white bg-[#39A46B] rounded-full hover:bg-[#122922] transition-colors duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
