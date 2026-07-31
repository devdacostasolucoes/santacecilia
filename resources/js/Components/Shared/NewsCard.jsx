import React from 'react';
import { Icon } from '../UI';

export const NewsCard = ({ title, date, excerpt, image }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_64px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-2 group">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="text-[#6B7280] text-sm">{date}</span>
        <h4 className="font-poppins font-semibold text-[#1F2937] text-lg mt-1 leading-snug">
          {title}
        </h4>
        <p className="text-[#6B7280] text-sm mt-2 leading-relaxed">{excerpt}</p>
        <button className="mt-4 text-[#4FB27F] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
          Ler mais <Icon name="chevron-right" size={16} />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
