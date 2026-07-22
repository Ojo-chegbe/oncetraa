import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, title = "Success!", message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0C201A]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-[32px] p-8 md:p-12 w-full max-w-md shadow-2xl transform transition-all flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
        
        {/* Success Icon */}
        <div className="w-24 h-24 bg-[#E8F5EE] rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-[#39A46B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <h3 className="text-3xl font-bold text-[#222222] mb-4">
          {title}
        </h3>
        
        <p className="text-[#727272] text-lg mb-8 leading-relaxed">
          {message}
        </p>
        
        <button 
          onClick={onClose}
          className="w-full inline-flex items-center justify-center px-8 py-4 text-[16px] font-bold text-white bg-[#39A46B] rounded-full hover:bg-[#122922] transition-colors duration-300"
        >
          Got it, thanks!
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
