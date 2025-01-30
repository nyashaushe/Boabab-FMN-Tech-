import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900">
        <Navbar />
        <main>
          <Hero />
          <ProductGrid />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;