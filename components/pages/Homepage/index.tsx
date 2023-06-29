'use client';

import Navbar from '@/components/elements/Navbar';
import React from 'react';
import HeroSection from './HeroSection';

const Homepage = () => {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default Homepage;
