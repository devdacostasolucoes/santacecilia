import React from 'react';
import { Container, Button } from '../UI';

export const Training = () => {
  return (
    <section id="training" className="py-20 md:py-[120px] bg-[#F8FAFC]">
      <Container>
        <div className="bg-gradient-to-br from-[#4FB27F] to-[#17A2D4] rounded-[32px] p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                📚 Centro de Formação
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold leading-tight">
                Formação e desenvolvimento <br />para profissionais de saúde
              </h2>
              <p className="text-white/80 text-lg mt-4 max-w-lg leading-relaxed">
                Cursos, certificações e eventos para elevar o padrão dos cuidados de saúde na nossa comunidade.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button variant="light" size="default" href="#">
                  Saiba Mais
                </Button>
                <Button variant="light" size="default" href="#" className="bg-white/20 border-white/20 hover:bg-white/30">
                  Ver Cursos
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '12+', label: 'Cursos Ativos' },
                { value: '8', label: 'Certificações' },
                { value: '24', label: 'Eventos/Ano' },
                { value: '600+', label: 'Formandos' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
                >
                  <div className="text-3xl font-poppins font-bold">{item.value}</div>
                  <div className="text-white/70 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Training;
