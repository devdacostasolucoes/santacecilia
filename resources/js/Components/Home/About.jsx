import React from 'react';
import { Container, SectionTitle, Button, Icon } from '../UI';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-[120px]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle
              pretitle="Sobre Nós"
              title="Uma instituição com 25 anos de dedicação à saúde"
              subtitle="A Clínica Santa Cecília nasceu com o propósito de oferecer cuidados médicos de excelência, combinando tecnologia de ponta com um atendimento verdadeiramente humanizado."
              align="left"
              className="text-left"
            />
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4FB27F]/20 text-[#4FB27F] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="check" size={16} />
                </div>
                <p className="text-[#6B7280]">Mais de 45 médicos especialistas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4FB27F]/20 text-[#4FB27F] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="check" size={16} />
                </div>
                <p className="text-[#6B7280]">Equipamento médico de última geração</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4FB27F]/20 text-[#4FB27F] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="check" size={16} />
                </div>
                <p className="text-[#6B7280]">Atendimento humanizado e centrado no paciente</p>
              </div>
            </div>
            <Button variant="primary" size="default" className="mt-8" href="#">
              Conheça a Clínica
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[32px] overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1584438784894-089d6a0bcc48?w=800&h=600&fit=crop&crop=center&auto=format"
                alt="Clínica Santa Cecília"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
