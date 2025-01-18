import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;