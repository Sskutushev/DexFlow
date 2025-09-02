import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import LandingPage from './pages/LandingPage';
import ExchangePage from './pages/ExchangePage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto px-4 pt-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/exchange" element={<ExchangePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/profile/:address" element={<ProfilePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
