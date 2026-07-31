import React from 'react';

export const Card = ({
  children,
  className = '',
  hover = false,
  padding = 'p-6',
  ...props
}) => {
  const base = 'bg-white rounded-2xl overflow-hidden';
  const hoverClasses = hover
    ? 'shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
    : 'shadow-card';

  return (
    <div className={`${base} ${hoverClasses} ${padding} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
