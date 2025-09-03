import React, { useState } from 'react';

const InfoIcon = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block ml-2">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4 text-muted cursor-pointer"
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-card rounded-lg shadow-lg border border-glass-strong text-xs text-text z-50">
          {content}
        </div>
      )}
    </div>
  );
};

export default InfoIcon;
