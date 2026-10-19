import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Onest']">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:p-4">Skip to content</a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
