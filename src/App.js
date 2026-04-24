import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/ProductShowCase';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { BasketProvider } from './BasketContext';

function App() {
  return (
    <BasketProvider>
      <Router>
        <div className="relative text-white font-montserrat">

          <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0c0618] via-[#140a24] to-black" />
          <div className="fixed w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full top-[-200px] left-1/2 -translate-x-1/2 -z-10" />

          <Navbar />

          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutSection />
                <PortfolioSection />
                <ContactSection />
              </>
            }/>
          </Routes>

        </div>
      </Router>
    </BasketProvider>
  );
}

export default App;