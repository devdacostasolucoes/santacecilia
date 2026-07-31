import React from 'react';
import { Navbar, Footer } from '../Components/Layout';

export const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
