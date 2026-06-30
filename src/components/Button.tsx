import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  showIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  showIcon = true,
}) => {
  const baseClasses = "group relative inline-flex items-center rounded-full overflow-hidden transition-all shadow-sm w-max font-medium";
  
  let variantClasses = "";
  let circleClasses = "absolute top-1/2 -translate-y-1/2 rounded-full transition-transform duration-500 ease-out origin-center group-hover:scale-[25] z-0";
  let textClasses = "relative z-10 transition-colors duration-500";
  let iconContainerClasses = "relative z-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ml-4";
  
  if (variant === 'primary') {
    variantClasses = "border-2 border-[#39A46B] bg-[#39A46B] py-[9px] pl-6 pr-2.5";
    circleClasses += " right-2.5 w-9 h-9 bg-white";
    textClasses += " text-white group-hover:text-[#222222] text-[15px]";
    iconContainerClasses += " w-9 h-9 bg-white text-[#222222]";
  } else if (variant === 'secondary') {
    variantClasses = "border-2 border-[#39A46B] bg-transparent py-[9px] pl-6 pr-2.5 hover:border-[#39A46B]";
    circleClasses += " right-2.5 w-9 h-9 bg-[#39A46B]";
    textClasses += " text-[#39A46B] group-hover:text-white text-[15px]";
    iconContainerClasses += " w-9 h-9 bg-[#39A46B] text-white";
  } else if (variant === 'tertiary') {
    variantClasses = "border-2 border-white/30 hover:border-white bg-transparent py-[9px] pl-6 pr-2.5";
    circleClasses += " right-2.5 w-9 h-9 bg-white";
    textClasses += " text-white group-hover:text-[#222222] text-[15px]";
    iconContainerClasses += " w-9 h-9 bg-white text-[#222222]";
  }

  if (!showIcon) {
    variantClasses = variantClasses.replace('pr-2.5', 'pr-6');
    iconContainerClasses += " hidden";
  }

  const content = (
    <>
      <div className={circleClasses}></div>
      <span className={textClasses}>{children}</span>
      {showIcon && (
        <div className={iconContainerClasses}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-rotate-45 transition-transform duration-500">
            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </>
  );

  const finalClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (to) {
    return <Link to={to} className={finalClasses}>{content}</Link>;
  }
  
  if (href) {
    return <a href={href} className={finalClasses}>{content}</a>;
  }

  return (
    <button onClick={onClick} className={finalClasses}>
      {content}
    </button>
  );
};

export default Button;
