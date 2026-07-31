import React from 'react';
import { Container, SectionTitle } from '../UI';
import { ServiceCard } from '../Shared';

const services = [
  { name: 'Laboratório de Análises', icon: 'flask', description: 'Exames de diagnóstico com precisão e rapidez.' },
  { name: 'Farmácia', icon: 'pill', description: 'Dispensa de medicamentos com acompanhamento farmacêutico.' },
  { name: 'Serviço de Urgência', icon: 'ambulance', description: 'Atendimento 24h para situações urgentes.' },
  { name: 'Internamento', icon: 'bed', description: 'Enfermarias confortáveis com cuidados 24h.' },
  { name: 'Maternidade', icon: 'heart', description: 'Acompanhamento completo da gestação ao parto.' },
  { name: 'Imagiologia', icon: 'microscope', description: 'Ressonância, TAC, ecografia e raio-X.' },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-[120px] bg-[#F8FAFC]">
      <Container>
        <SectionTitle
          pretitle="Serviços"
          title="Serviços integrados para a sua saúde"
          subtitle="Oferecemos um leque completo de serviços para cuidar de si em todas as fases da vida."
        />
        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {services.map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
