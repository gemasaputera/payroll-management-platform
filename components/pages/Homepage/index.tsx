'use client';

import Navbar from '@/components/elements/Navbar';
import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';

const Homepage = () => {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </main>
  );
};

export default Homepage;
