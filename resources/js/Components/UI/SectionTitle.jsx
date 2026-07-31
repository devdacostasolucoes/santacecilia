import React from 'react';

export const SectionTitle = ({
  pretitle,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {pretitle && (
        <span className="inline-block text-[#4FB27F] font-semibold text-sm tracking-widest uppercase font-poppins">
          {pretitle}
        </span>
      )}
      <h2 className="font-poppins text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-[#1F2937]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
