import React from 'react';
import { Icon } from '../UI';

export const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`faq-item border-b border-[#E5E7EB] py-5 cursor-pointer transition-all duration-200 last:border-b-0 ${isOpen ? 'active' : ''}`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="font-poppins font-medium text-[#1F2937] text-lg leading-snug">
          {question}
        </h4>
        <span className={`faq-icon flex-shrink-0 text-[#4FB27F] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <Icon name="chevron-down" size={24} />
        </span>
      </div>
      <div
        className={`faq-answer text-[#6B7280] text-base leading-relaxed transition-all duration-300 ${
          isOpen ? 'max-h-[300px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 overflow-hidden'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FaqItem;
