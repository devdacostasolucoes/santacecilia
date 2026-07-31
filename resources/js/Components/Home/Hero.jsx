import React from 'react';
import { Container, Button, Icon } from '../UI';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=900&fit=crop&crop=center&auto=format"
          alt="Clínica Santa Cecília"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/15" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            ✦ Excelência em Saúde
          </span>
          <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold leading-tight text-white">
            Cuidamos da sua saúde com <br />
            <span className="bg-gradient-to-r from-[#4FB27F] to-[#17A2D4] bg-clip-text text-transparent">
              excelência, inovação
            </span>{' '}
            <br />
            <span className="text-white">e humanização.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
            A Clínica Santa Cecília oferece cuidados médicos de alta qualidade, com tecnologia de
            ponta e uma equipa dedicada ao seu bem-estar.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="primary" size="lg" href="#contact">
              Marcar Consulta
            </Button>
            <Button variant="light" size="lg" href="#services">
              Conheça os nossos serviços
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
        <Icon name="chevron-down" size={32} />
      </div>
    </section>
  );
};

export default Hero;
