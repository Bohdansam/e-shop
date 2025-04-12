import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowCase';
import CategoryBrowser from './components/Category';
import ProductDiscount from './components/Discount';
import BigSummerSale from './components/SummerSale';
import Footer from './components/Footer';
import ProductCards from './components/ProductPage';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ProductShowcase />
            <CategoryBrowser />
            <ProductCards />
            <ProductDiscount />
            <BigSummerSale />
            
          </>
        }/>
            <Route path="/product/:id" element={< ProductDetailPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;