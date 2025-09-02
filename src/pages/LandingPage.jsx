import React, { useRef } from 'react';
import Hero from '../components/landing/Hero';
import BenefitsSection from '../components/landing/BenefitsSection';
import HowItWorks from '../components/landing/HowItWorks';
import CommunityTeaser from '../components/landing/CommunityTeaser';
import FinalCTA from '../components/landing/FinalCTA';
import useFullPageScroll from '../hooks/useFullPageScroll';

// Главная страница (Лендинг)
const LandingPage = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const communityRef = useRef(null);
  const finalCTARef = useRef(null);

  // Pass refs to the hook
  useFullPageScroll([heroRef, benefitsRef, howItWorksRef, communityRef, finalCTARef]);

  return (
    <div>
      <Hero ref={heroRef} />
      <BenefitsSection ref={benefitsRef} />
      <HowItWorks ref={howItWorksRef} />
      <CommunityTeaser ref={communityRef} />
      <FinalCTA ref={finalCTARef} />
    </div>
  );
};

export default LandingPage;
