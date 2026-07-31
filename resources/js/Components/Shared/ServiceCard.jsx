import React from 'react';
import { Icon } from '../UI';

export const ServiceCard = ({ name, icon, description }) => {
  return (
    <div className="card-service rounded-[18px] p-6 md:p-8 bg-white border-l-4 border-[#4FB27F] shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_12px_40px_rgba(79,178,127,0.10)]">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#4FB27F]/10 text-[#4FB27F] flex items-center justify-center group-hover:bg-[#4FB27F] group-hover:text-white transition-all duration-300">
          <Icon name={icon} size={24} />
        </div>
        <div>
          <h4 className="font-poppins font-semibold text-[#1F2937] text-lg">{name}</h4>
          <p className="text-[#6B7280] text-sm mt-1 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
