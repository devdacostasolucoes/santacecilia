import React from 'react';
import { Icon, Button } from '../UI';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Especialidades', href: '#specialties' },
  { label: 'Centro de Formação', href: '#training' },
  { label: 'Actualidade', href: '#news' },
  { label: 'Contactos', href: '#contact' },
];

export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[320px] bg-white z-50 p-8 overflow-y-auto transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-poppins font-bold text-xl text-[#1F2937]">
            Santa<span className="text-[#4FB27F]">Cecília</span>
          </span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F1F5F9] rounded-xl transition-colors"
            aria-label="Fechar menu"
          >
            <Icon name="x" size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-3 text-[#1F2937] font-medium rounded-xl hover:bg-[#F1F5F9] transition-colors"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
            <Button variant="primary" size="default" className="w-full justify-center" href="#contact" onClick={onClose}>
              Marcar Consulta
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
