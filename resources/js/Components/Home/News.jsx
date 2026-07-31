import React from 'react';
import { Container, SectionTitle } from '../UI';
import { NewsCard } from '../Shared';

const newsItems = [
  {
    title: 'Clínica Santa Cecília reforça equipa de Cardiologia',
    date: '28 Jul 2026',
    excerpt: 'Dois novos especialistas juntam-se ao corpo clínico para ampliar a oferta de cuidados cardíacos.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center&auto=format',
  },
  {
    title: 'Novo equipamento de Ressonância Magnética',
    date: '20 Jul 2026',
    excerpt: 'Investimento de 2M€ em tecnologia de última geração para diagnósticos mais precisos.',
    image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=400&h=250&fit=crop&crop=center&auto=format',
  },
  {
    title: 'Campanha de Rastreio Oncológico',
    date: '15 Jul 2026',
    excerpt: 'Iniciativa gratuita para a comunidade com rastreios de cancro da mama e colorretal.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop&crop=center&auto=format',
  },
];

export const News = () => {
  return (
    <section id="news" className="py-20 md:py-[120px] bg-white">
      <Container>
        <SectionTitle
          pretitle="Actualidade"
          title="Últimas notícias e eventos"
          subtitle="Fique a par das novidades da Clínica Santa Cecília."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {newsItems.map((item, i) => (
            <NewsCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default News;
