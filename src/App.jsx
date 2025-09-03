import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import LandingHeader from './components/landing/LandingHeader';
import LandingPage from './pages/LandingPage';
import ExchangePage from './pages/ExchangePage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';
import HelpCenterPage from './pages/HelpCenterPage';
import HomePage from './pages/HomePage'; // New import
import ConnectWalletModal from './components/common/ConnectWalletModal';
import ScrollToTopButton from './components/common/ScrollToTopButton'; // New import

const AppContent = () => {
  const location = useLocation();
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);

  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-bg">
      {isLandingPage ? 
        <LandingHeader onWalletConnect={() => setWalletModalOpen(true)} /> : 
        <Header />
      }
      <main className={`container mx-auto px-4 ${isLandingPage ? '' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} /> {/* New route */}
          <Route path="/exchange" element={<ExchangePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/profile/:address" element={<ProfilePage />} />
          <Route path="/help" element={<HelpCenterPage />} />
        </Routes>
      </main>
      <ConnectWalletModal isOpen={isWalletModalOpen} onClose={() => setWalletModalOpen(false)} />
      <ScrollToTopButton /> {/* New component */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
