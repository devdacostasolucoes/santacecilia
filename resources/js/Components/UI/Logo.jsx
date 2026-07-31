import React from 'react';
import logo from '../../../images/logo.png';
export const Logo = ({ className = '', size = 'default' }) => {
    const sizes = {
        sm: 'h-8',
        default: 'h-10',
        lg: 'h-32',
    };

    const heightClass = sizes[size] || sizes.default;

    return (
        <img
            src={logo}
            alt="Clínica Santa Cecília"
            className={`${heightClass} w-auto object-contain ${className}`}
        />
    );
};

export default Logo;
