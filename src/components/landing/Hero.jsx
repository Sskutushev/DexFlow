import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="text-center py-20 sm:py-32">
    <h1 className="text-4xl sm:text-6xl font-extrabold text-text max-w-4xl mx-auto">
      Будущее децентрализованных финансов. <span className="bg-accent-gradient bg-clip-text text-transparent">Уже здесь.</span>
    </h1>
    <p className="text-lg text-muted max-w-2xl mx-auto mt-6">
      DexFlow — это сверхбыстрая и безопасная DEX. Торгуйте, общайтесь и инвестируйте без посредников на рынке РФ и СНГ.
    </p>
    <Link to="/exchange">
      <button className="mt-10 bg-accent-gradient text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
        Начать торговать
      </button>
    </Link>
  </section>
);

export default Hero;
