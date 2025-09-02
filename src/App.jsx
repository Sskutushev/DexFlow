import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Exchange from './pages/Exchange';

// Основной компонент приложения с роутингом
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg">
        <Header />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/exchange" element={<Exchange />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;