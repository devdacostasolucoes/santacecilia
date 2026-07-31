import React from 'react';
import { Container, SectionTitle } from '../UI';
import { DoctorCard } from '../Shared';

const doctors = [
  {
    name: 'Dr. Carlos Mendes',
    specialty: 'Cardiologia',
    bio: 'Especialista em hemodinâmica com mais de 15 anos de experiência.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=center&auto=format',
  },
  {
    name: 'Dra. Sofia Almeida',
    specialty: 'Pediatria',
    bio: 'Dedicada à saúde infantil e ao desenvolvimento das crianças.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=center&auto=format',
  },
  {
    name: 'Dr. Miguel Santos',
    specialty: 'Ortopedia',
    bio: 'Especialista em cirurgia ortopédica e medicina desportiva.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=center&auto=format',
  },
  {
    name: 'Dra. Ana Costa',
    specialty: 'Ginecologia',
    bio: 'Acompanhamento completo da saúde feminina em todas as idades.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=center&auto=format',
  },
];

export const Doctors = () => {
  return (
    <section className="py-20 md:py-[120px] bg-white">
      <Container>
        <SectionTitle
          pretitle="Corpo Clínico"
          title="Médicos especialistas ao seu dispor"
          subtitle="Conheça alguns dos profissionais que fazem da Clínica Santa Cecília uma referência."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {doctors.map((item, i) => (
            <DoctorCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Doctors;
