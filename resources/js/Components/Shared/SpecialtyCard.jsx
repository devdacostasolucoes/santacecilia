import React from 'react';
import { Icon } from '../UI';

export const SpecialtyCard = ({ name, description, image, index }) => {
  return (
    <div className="card-specialty group bg-white rounded-[18px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(79,178,127,0.15)]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-white font-poppins font-semibold text-lg drop-shadow-sm">
            {name}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-[#6B7280] text-sm leading-relaxed">{description}</p>
        <button className="mt-4 text-[#4FB27F] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
          Ver mais <Icon name="chevron-right" size={16} />
        </button>
      </div>
    </div>
  );
};

export default SpecialtyCard;
