import React from 'react';

export const DoctorCard = ({ name, specialty, bio, image }) => {
  return (
    <div className="card-doctor bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl">
            <p className="text-[#1F2937] text-sm font-medium">{bio}</p>
          </div>
        </div>
      </div>
      <div className="p-5 text-center">
        <h4 className="font-poppins font-semibold text-[#1F2937] text-lg">{name}</h4>
        <p className="text-[#4FB27F] text-sm font-medium">{specialty}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
