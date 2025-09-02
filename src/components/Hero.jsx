import React from 'react';
import { Link } from 'react-router-dom';

// Секция Hero для главной страницы
const Hero = () => {
  return (
    <section className="text-center py-20 sm:py-32">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-text max-w-4xl mx-auto">
        Будущее децентрализованных финансов. <span className="bg-accent-gradient bg-clip-text text-transparent">Уже здесь.</span>
      </h1>
      <p className="text-lg text-muted max-w-2xl mx-auto mt-6">
        DexFlow — это сверхбыстрая и безопасная DEX в экосистеме DexNet. Торгуйте, зарабатывайте и инвестируйте без посредников.
      </p>
      <Link to="/exchange">
        <button className="mt-10 bg-accent-gradient text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
          Перейти в приложение
        </button>
      </Link>
    </section>
  );
};

export default Hero;
