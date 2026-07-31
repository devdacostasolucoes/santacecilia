import React from 'react';
import { Container, SectionTitle } from '../UI';
import { TestimonialCard } from '../Shared';

const testimonials = [
  {
    name: 'Maria Oliveira',
    comment: 'A Clínica Santa Cecília salvou a vida do meu pai. Atendimento impecável e equipa maravilhosa.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=center&auto=format',
  },
  {
    name: 'João Silva',
    comment: 'Excelente experiência. Profissionais competentes e instalações de primeiro nível.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center&auto=format',
  },
  {
    name: 'Sofia Rodrigues',
    comment: 'Acompanhamento da minha gravidez foi incrível. Maternidade acolhedora e segura.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=center&auto=format',
  },
  {
    name: 'Pedro Martins',
    comment: 'Realizei uma cirurgia ortopédica e tive todo o suporte que precisava. Recomendo a todos.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=center&auto=format',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-[120px] bg-white">
      <Container>
        <SectionTitle
          pretitle="Testemunhos"
          title="O que os nossos pacientes dizem"
          subtitle="A opinião de quem confia em nós é a nossa maior referência."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
