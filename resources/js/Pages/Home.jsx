import React from 'react';
import { Head } from '@inertiajs/react';
import { PublicLayout } from '../Layouts';
import {
  Hero,
  Statistics,
  About,
  Specialties,
  Services,
  WhyChoose,
  Training,
  Doctors,
  Technology,
  Testimonials,
  Gallery,
  News,
  Partners,
  FAQ,
  CTA,
  Contact,
} from '../Components/Home';

export default function Home() {
  return (
    <PublicLayout>
      <Head title="Início | Clínica Santa Cecília" />
      <Hero />
      <Statistics />
      <About />
      <Specialties />
      <Services />
      <WhyChoose />
      <Training />
      <Doctors />
      <Technology />
      <Testimonials />
      <Gallery />
      <News />
      <Partners />
      <FAQ />
      <CTA />
      <Contact />
    </PublicLayout>
  );
}
