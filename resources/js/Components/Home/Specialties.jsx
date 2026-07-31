import React from 'react';
import { Container, SectionTitle } from '../UI';
import { SpecialtyCard } from '../Shared';

const specialties = [
  {
    name: 'Cardiologia',
    description: 'Cuidado especializado para o seu coração.',
    image: 'https://images.unsplash.com/photo-1631815589968-85b92d7b4c5b?w=400&h=300&fit=crop&crop=center&auto=format',
  },
  {
    name: 'Ortopedia',
    description: 'Tratamento de lesões e doenças do sistema locomotor.',
    image: 'https://images.unsplash.com/photo-1581595220893-b0739db0e1e6?w=400&h=300&fit=crop&crop=center&auto=format',
  },
  {
    name: 'Pediatria',
    description: 'Saúde e bem-estar para os seus filhos.',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=300&fit=crop&crop=center&auto=format',
  },
  {
    name: 'Ginecologia',
    description: 'Cuidado integral para a saúde da mulher.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop&crop=center&auto=format',
  },
  {
    name: 'Neurologia',
    description: 'Diagnóstico e tratamento de doenças do sistema nervoso.',
    image: 'https://images.unsplash.com/photo-1559757175-0b9f1f22c2d5?w=400&h=300&fit=crop&crop=center&auto=format',
  },
  {
    name: 'Dermatologia',
    description: 'Cuidado com a pele, cabelos e unhas.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&crop=center&auto=format',
  },
];

export const Specialties = () => {
  return (
    <section id="specialties" className="py-20 md:py-[120px] bg-white">
      <Container>
        <SectionTitle
          pretitle="Especialidades"
          title="Cuidado especializado para si"
          subtitle="Conheça as nossas especialidades médicas e encontre o cuidado que precisa."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {specialties.map((item, i) => (
            <SpecialtyCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Specialties;
