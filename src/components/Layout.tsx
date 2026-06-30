import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Onest']">
      <Navbar />
      <main className="flex-1 pt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
