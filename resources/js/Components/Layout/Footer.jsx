import React from 'react';
import { Container, Icon } from '../UI';

const services = ['Laboratório', 'Farmácia', 'Urgência', 'Internamento', 'Maternidade', 'Imagiologia'];
const social = [
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
  { name: 'YouTube', icon: 'youtube', href: '#' },
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
];

export const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white/70 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-poppins font-bold text-xl text-white">
              Santa<span className="text-[#4FB27F]">Cecília</span>
            </span>
            <p className="text-sm mt-4 leading-relaxed max-w-xs">
              Cuidamos da sua saúde com excelência, inovação e humanização.
            </p>
            <div className="flex gap-3 mt-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4FB27F]/20 hover:text-[#4FB27F] transition-all"
                  aria-label={item.name}
                >
                  <Icon name={item.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Institutional */}
          <div>
            <h5 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider">
              Institucional
            </h5>
            <ul className="space-y-2 mt-4">
              <li><a href="#about" className="text-sm hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Missão</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Visão</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider">
              Serviços
            </h5>
            <ul className="space-y-2 mt-4">
              {services.slice(0, 4).map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h5 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider">
              Contactos
            </h5>
            <ul className="space-y-2 mt-4">
              <li className="text-sm">21 123 4567</li>
              <li className="text-sm">912 345 678</li>
              <li className="text-sm">geral@santacecilia.pt</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 Clínica Santa Cecília. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
