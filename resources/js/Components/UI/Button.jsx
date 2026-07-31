import React from 'react';
import { Icon } from './Icon';

const variants = {
  primary: 'bg-[#4FB27F] text-white hover:bg-[#3d9e6d] hover:shadow-lg hover:shadow-[#4FB27F]/30 hover:-translate-y-1',
  secondary: 'bg-transparent text-[#1F2937] border-2 border-[#E5E7EB] hover:border-[#4FB27F] hover:text-[#4FB27F] hover:-translate-y-1',
  outline: 'bg-transparent text-[#4FB27F] border-2 border-[#4FB27F] hover:bg-[#4FB27F] hover:text-white hover:-translate-y-1',
  ghost: 'bg-transparent text-[#4FB27F] hover:text-[#3d9e6d] hover:translate-x-1',
  light: 'bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:border-white/60 hover:-translate-y-1 backdrop-blur-sm',
};

const sizes = {
  sm: 'px-4 py-2.5 text-sm',
  default: 'px-6 py-3.5 text-base',
  lg: 'px-8 py-4 text-lg',
  icon: 'p-3 text-base',
};

const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-[14px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4FB27F]';

export const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  href,
  onClick,
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  ...props
}) => {
  const classes = `${baseClasses} ${sizes[size]} ${variants[variant]} ${disabled || loading ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {loading ? (
        <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <Icon name={icon} size={size === 'sm' ? 18 : 22} />}
          {children}
          {icon && iconPosition === 'right' && <Icon name={icon} size={size === 'sm' ? 18 : 22} />}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
};

export default Button;
