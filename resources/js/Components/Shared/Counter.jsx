import React, { useState, useEffect, useRef } from 'react';

export const Counter = ({ value, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-[#1F2937] leading-tight">
        {count}
        {suffix}
      </div>
      <div className="text-[#6B7280] text-sm font-medium mt-1">{label}</div>
    </div>
  );
};

export default Counter;
