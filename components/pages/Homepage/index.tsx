'use client';

import Navbar from '@/components/elements/Navbar';
import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import SecondFeatureSection from './SecondFeatureSection';
import ThirdFeatureSection from './ThirdFeatureSection';

const Homepage = () => {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <SecondFeatureSection />
      <ThirdFeatureSection />
    </main>
  );
};

export default Homepage;
