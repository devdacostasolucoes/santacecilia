import React, { useState } from 'react';
import { Container, SectionTitle } from '../UI';
import { FaqItem } from '../Shared';

const faqs = [
  { question: 'Como posso marcar uma consulta?', answer: 'Pode marcar uma consulta através do botão "Marcar Consulta" no topo do site, pelo telefone 21 123 4567 ou via WhatsApp no número 912 345 678.' },
  { question: 'A Clínica tem serviço de urgência 24h?', answer: 'Sim, o serviço de urgência está disponível 24 horas por dia, todos os dias da semana, incluindo feriados.' },
  { question: 'Quais são os horários de funcionamento?', answer: 'A clínica funciona de segunda a sexta-feira das 8h às 22h. O serviço de urgência e internamento funcionam 24h.' },
  { question: 'Aceitam todos os seguros de saúde?', answer: 'Trabalhamos com a maioria dos seguros de saúde nacionais. Consulte a lista completa na página de contactos ou contacte-nos para confirmar.' },
  { question: 'Como posso aceder ao Centro de Formação?', answer: 'Pode aceder através do menu "Centro de Formação" onde encontrará informações sobre cursos, inscrições e calendário.' },
  { question: 'A Clínica tem estacionamento?', answer: 'Sim, dispomos de estacionamento gratuito para pacientes e acompanhantes.' },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-[120px] bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            pretitle="FAQ"
            title="Perguntas frequentes"
            subtitle="Esclareça as suas dúvidas sobre a Clínica Santa Cecília."
          />
          <div className="mt-12 bg-[#F8FAFC] rounded-3xl p-6 md:p-8">
            {faqs.map((item, i) => (
              <FaqItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
