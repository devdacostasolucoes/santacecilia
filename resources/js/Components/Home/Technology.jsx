import React from 'react';
import { Container, SectionTitle } from '../UI';

const techItems = [
  {
    title: 'Ressonância Magnética',
    description: 'Imagiologia de alta definição para diagnósticos precisos.',
    image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&h=400&fit=crop&crop=center&auto=format',
  },
  {
    title: 'Bloco Operatório',
    description: 'Salas cirúrgicas com equipamento de última geração.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&crop=center&auto=format',
  },
  {
    title: 'Internamento',
    description: 'Enfermarias confortáveis com cuidados 24 horas.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&crop=center&auto=format',
  },
];

export const Technology = () => {
  return (
    <section className="py-20 md:py-[120px] bg-[#F8FAFC]">
      <Container>
        <SectionTitle
          pretitle="Tecnologia & Infraestruturas"
          title="Equipamento de ponta para diagnósticos precisos"
          subtitle="Investimos em tecnologia de última geração para garantir os melhores resultados para os nossos pacientes."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {techItems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_64px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h4 className="font-poppins font-semibold text-[#1F2937]">{item.title}</h4>
                <p className="text-[#6B7280] text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Technology;
