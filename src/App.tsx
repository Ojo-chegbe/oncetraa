import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Approach from './pages/Approach';
import Products from './pages/Products';
import ResourcesAwareness from './pages/ResourcesAwareness';
import ResourcesScience from './pages/ResourcesScience';
import GetInvolvedPartner from './pages/GetInvolvedPartner';
import GetInvolvedCareers from './pages/GetInvolvedCareers';
import GetInvolvedVolunteer from './pages/GetInvolvedVolunteer';
import GetInvolvedCommunity from './pages/GetInvolvedCommunity';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import Models from './pages/Models';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path="about" element={<About />} />
            
            <Route path="approach" element={<Approach />} />
            
            <Route path="products" element={<Products />} />
            
            <Route path="models" element={<Models />} />
            
            <Route path="resources/cancer-awareness" element={<ResourcesAwareness />} />
            <Route path="resources/plant-medicine" element={<ResourcesScience />} />
            
            <Route path="get-involved/partner" element={<GetInvolvedPartner />} />
            <Route path="get-involved/careers" element={<GetInvolvedCareers />} />
            <Route path="get-involved/volunteer" element={<GetInvolvedVolunteer />} />
            <Route path="get-involved/community" element={<GetInvolvedCommunity />} />
            
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            
            {/* Fallback routing */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;