import React from 'react';
import { Container, Icon } from '../UI';

const contacts = [
    { icon: 'phone', label: 'Telefone', value: '943 671 347', color: '#4FB27F' },
    { icon: 'phone', label: 'WhatsApp', value: '943 671 347', color: '#17A2D4' },
    { icon: 'mail', label: 'Email', value: 'geral@santacecilia.ao', color: '#FBA546' },
    { icon: 'map-pin', label: 'Morada', value: 'Rua Brasileira nº 22 Camama Luanda', color: '#4FB27F' },
];

const social = [
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'YouTube', icon: 'youtube', href: '#' },
    { name: 'LinkedIn', icon: 'linkedin', href: '#' },
];

export const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-[120px] bg-white pt-0">
            <Container>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)] h-[400px] lg:h-full min-h-[300px]">
                        <iframe
                            src="https://www.google.com/maps?q=-8.9430509,13.2538577&hl=pt&z=17&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                            title="Localização da Clínica Santa Cecília"
                        />
                    </div>
                    <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-10">
                        <h3 className="font-poppins text-2xl font-bold text-[#1F2937]">Contactos</h3>
                        <p className="text-[#6B7280] mt-2">Estamos aqui para si. Entre em contacto connosco.</p>
                        <div className="space-y-4 mt-6">
                            {contacts.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                                    <div
                                        className="w-12 h-12 rounded-xl bg-[#4FB27F]/10 flex items-center justify-center flex-shrink-0"
                                        style={{ color: item.color }}
                                    >
                                        <Icon name={item.icon} size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[#6B7280] text-sm">{item.label}</p>
                                        <p className="font-semibold text-[#1F2937]">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-6">
                            {social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="w-12 h-12 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#4FB27F] hover:border-[#4FB27F] hover:shadow-md transition-all duration-300"
                                    aria-label={item.name}
                                >
                                    <Icon name={item.icon} size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
