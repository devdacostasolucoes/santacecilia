import React from 'react';
import { Container, Button } from '../UI';

export const CTA = () => {
  return (
    <section className="py-20 md:py-[120px]">
      <Container>
        <div className="bg-gradient-to-br from-[#4FB27F] to-[#17A2D4] rounded-[32px] p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="relative z-10">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight">
              Ainda precisa de ajuda?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mt-4 leading-relaxed">
              A nossa equipa está pronta para o atender. Marque já a sua consulta ou entre em contacto connosco.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="light" size="lg" href="#contact">
                Marcar Consulta
              </Button>
              <Button variant="light" size="lg" href="#contact" className="bg-white/20 border-white/20 hover:bg-white/30">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
