import React from 'react';
import { Icon } from '../UI';

export const TestimonialCard = ({ name, comment, rating = 5, image }) => {
  return (
    <div className="testimonial-card bg-white rounded-[20px] p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_56px_rgba(0,0,0,0.07)]">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#4FB27F]/20">
          <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <h5 className="font-poppins font-semibold text-[#1F2937]">{name}</h5>
          <div className="flex text-[#FBA546] gap-0.5 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star-filled" size={16} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[#6B7280] text-base leading-relaxed italic">"{comment}"</p>
    </div>
  );
};

export default TestimonialCard;
