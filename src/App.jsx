import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Exchange from './pages/Exchange';
import Pools from './pages/Pools';
import Orders from './pages/Orders';

// Компонент-обертка для страниц внутри приложения
const AppLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8">
      {children}
    </main>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen flex flex-col bg-dark-bg text-text-primary">
          <main className="flex-grow container mx-auto px-4 py-8">
            <Landing />
          </main>
        </div>
      } />
      <Route path="/app/*" element={
        <AppLayout>
          <Routes>
            <Route path="/" element={<Exchange />} />
            <Route path="/pools" element={<Pools />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </AppLayout>
      } />
    </Routes>
  );
}

export default App;
