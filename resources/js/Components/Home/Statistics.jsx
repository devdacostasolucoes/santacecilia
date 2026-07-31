import React from 'react';
import { Container, Icon } from '../UI';
import { Counter } from '../Shared';

const stats = [
  { value: 30, label: 'Especialidades', icon: 'stethoscope' },
  { value: 45, label: 'Médicos', icon: 'users' },
  { value: 12000, label: 'Pacientes', icon: 'heart', suffix: '+' },
  { value: 25, label: 'Anos de Experiência', icon: 'award' },
];

export const Statistics = () => {
  return (
    <section className="relative -mt-16 z-10">
      <Container>
        <div className="bg-white rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.12)] p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#4FB27F]/10 text-[#4FB27F] flex items-center justify-center mb-3">
                <Icon name={stat.icon} size={26} />
              </div>
              <Counter value={stat.value} label={stat.label} suffix={stat.suffix || ''} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Statistics;
