'use client';

import { useState } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
}

const ServiceCard = ({ icon, title, description, features, bgColor }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card self-start">
      {/* Всегда видимая часть */}
      <div 
        className="p-6 lg:p-8 text-center cursor-pointer lg:cursor-default"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={`w-14 h-14 lg:w-16 lg:h-16 ${bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6`}>
          <span className="text-2xl lg:text-3xl">{icon}</span>
        </div>
        <div className="flex items-center justify-between lg:block">
          <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-left lg:text-center lg:mb-3 xl:mb-4" style={{color: 'var(--color-primary)'}}>
            {title}
          </h3>
          {/* Стрелка только на мобильных */}
          <div className="lg:hidden">
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{color: 'var(--color-text-light)'}}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Раскрывающаяся часть на мобильных / всегда видимая на десктопе */}
      <div className={`
        lg:block overflow-hidden transition-all duration-300 ease-in-out
        ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'}
      `}>
        <div className="px-6 pb-6 lg:px-8 lg:pb-8 lg:pt-0">
          <p className="text-sm lg:text-base leading-relaxed mb-4 lg:mb-6 text-left lg:text-center" style={{color: 'var(--color-text-light)'}}>
            {description}
          </p>
          <ul className="text-xs lg:text-sm space-y-2 text-left" style={{color: 'var(--color-text-light)'}}>
            {features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
