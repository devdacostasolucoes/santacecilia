import React, { useState, useEffect } from 'react';
import { Container, Button, Icon } from '../UI';
import { MobileMenu } from './MobileMenu';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Especialidades', href: '#specialties' },
  { label: 'Centro de Formação', href: '#training' },
  { label: 'Actualidade', href: '#news' },
  { label: 'Contactos', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-[16px] shadow-[0_2px_32px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <Container className="flex items-center justify-between h-[88px]">
          <a href="#home" className="flex items-center gap-2 font-poppins font-bold text-xl text-[#1F2937]">
            <span className="text-[#4FB27F]">✦</span>
            Santa<span className="text-[#4FB27F]">Cecília</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#1F2937] font-medium text-sm transition-colors hover:text-[#4FB27F]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="primary" size="sm" className="hidden md:inline-flex" href="#contact">
              Marcar Consulta
            </Button>
            <button
              onClick={toggleMobile}
              className="lg:hidden p-2 hover:bg-[#F1F5F9] rounded-xl transition-colors"
              aria-label="Abrir menu"
            >
              <Icon name="menu" size={28} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
    </>
  );
};

export default Navbar;
