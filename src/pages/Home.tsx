import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <ProductGrid />
      <Testimonials />
    </main>
  );
} 