import React from 'react';
import Hero from '../components/Hero';
import KeyFeatures from '../components/KeyFeatures';

// Страница Landing Page
const Landing = () => {
  return (
    <div>
      <Hero />
      <KeyFeatures />
      {/* Здесь можно добавить другие секции лендинга */}
    </div>
  );
};

export default Landing;