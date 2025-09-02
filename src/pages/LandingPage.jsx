import React from 'react';
import Hero from '../components/landing/Hero';
import KeyFeatures from '../components/landing/KeyFeatures';
import HowItWorks from '../components/landing/HowItWorks';
import CommunityTeaser from '../components/landing/CommunityTeaser';
import FinalCTA from '../components/landing/FinalCTA';

// Главная страница (Лендинг)
const LandingPage = () => {
  return (
    <div className="space-y-24 md:space-y-32">
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <CommunityTeaser />
      <FinalCTA />
    </div>
  );
};

export default LandingPage;
