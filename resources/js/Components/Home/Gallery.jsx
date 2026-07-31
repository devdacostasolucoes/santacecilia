import React from 'react';
import { Container, SectionTitle } from '../UI';

const galleryImages = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&crop=center&auto=format',
  'https://images.unsplash.com/photo-1584438784894-089d6a0bcc48?w=600&h=400&fit=crop&crop=center&auto=format',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&crop=center&auto=format',
  'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&h=400&fit=crop&crop=center&auto=format',
  'https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=600&h=400&fit=crop&crop=center&auto=format',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop&crop=center&auto=format',
];

export const Gallery = () => {
  return (
    <section className="py-20 md:py-[120px] bg-[#F8FAFC]">
      <Container>
        <SectionTitle
          pretitle="Galeria"
          title="Conheça as nossas instalações"
          subtitle="Um ambiente moderno, acolhedor e preparado para o seu cuidado."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-4">
          {galleryImages.map((src, i) => {
            const classes = [
              'col-span-1 row-span-1',
              'col-span-1 row-span-1 md:col-span-2',
              'col-span-1 row-span-1 md:row-span-2',
              'col-span-1 row-span-1',
              'col-span-1 row-span-1 md:col-span-2',
              'col-span-1 row-span-1 md:row-span-2',
            ];
            return (
              <div key={i} className={`${classes[i]} rounded-2xl overflow-hidden relative group`}>
                <img
                  src={src}
                  alt={`Galeria ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
