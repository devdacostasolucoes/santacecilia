import React from 'react';
import { Container, SectionTitle, Icon } from '../UI';

const reasons = [
  { icon: 'clock', title: 'Atendimento 24h', description: 'Cuidados médicos disponíveis todos os dias, a qualquer hora.' },
  { icon: 'shield', title: 'Tecnologia de Ponta', description: 'Equipamentos modernos para diagnósticos precisos.' },
  { icon: 'users', title: 'Equipa Especializada', description: 'Médicos com formação de excelência e vasta experiência.' },
  { icon: 'heart', title: 'Humanização', description: 'Atendimento centrado no paciente, com empatia e respeito.' },
  { icon: 'award', title: 'Segurança', description: 'Protocolos rigorosos e ambiente seguro para todos.' },
  { icon: 'stethoscope', title: 'Cuidado Integral', description: 'Acompanhamento contínuo em todas as fases da vida.' },
];

export const WhyChoose = () => {
  return (
    <section className="py-20 md:py-[120px] bg-white">
      <Container>
        <SectionTitle
          pretitle="Diferenciais"
          title="Porque escolher a Clínica Santa Cecília"
          subtitle="Razões que fazem da nossa clínica uma referência em saúde."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#4FB27F]/10 text-[#4FB27F] flex items-center justify-center mb-4 group-hover:bg-[#4FB27F] group-hover:text-white transition-all duration-300">
                <Icon name={item.icon} size={26} />
              </div>
              <h4 className="font-poppins font-semibold text-[#1F2937] text-lg">{item.title}</h4>
              <p className="text-[#6B7280] text-sm mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
