import React from 'react';
import { Container } from '../UI';

const partners = [
  { name: 'Allianz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Allianz_Logo.svg/2560px-Allianz_Logo.svg.png' },
  { name: 'Fidelidade', logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/70/Logo_Fidelidade.svg/1280px-Logo_Fidelidade.svg.png' },
  { name: 'Multicare', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Multicare_Logo.svg/2560px-Multicare_Logo.svg.png' },
  { name: 'Médis', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Médis_Logo.svg/2560px-Médis_Logo.svg.png' },
  { name: 'Generali', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Generali_Logo.svg/2560px-Generali_Logo.svg.png' },
  { name: 'Lusitania', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lusitania_Seguros_Logo.svg/2560px-Lusitania_Seguros_Logo.svg.png' },
];

export const Partners = () => {
  return (
    <section className="py-16 bg-[#F8FAFC] border-y border-[#E5E7EB] overflow-hidden">
      <Container>
        <p className="text-center text-[#6B7280] text-sm font-medium uppercase tracking-widest mb-8">
          Parceiros e Seguradoras
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-[scrollPartners_30s_linear_infinite] w-max hover:animate-pause">
            {[...partners, ...partners].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-12 flex items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img src={item.logo} alt={item.name} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scrollPartners {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .hover\\:animate-pause:hover {
            animation-play-state: paused;
          }
        `}</style>
      </Container>
    </section>
  );
};

export default Partners;
