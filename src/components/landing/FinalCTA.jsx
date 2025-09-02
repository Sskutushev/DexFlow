import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA = () => (
  <section className="py-20 text-center">
    <h2 className="text-4xl font-bold">Готовы начать?</h2>
    <p className="text-muted mt-4">Платформа DexFlow ждёт вас.</p>
    <Link to="/exchange">
      <button className="mt-8 bg-accent-gradient text-white font-semibold py-4 px-10 rounded-lg text-lg shadow-lg hover:opacity-90 transition-opacity">
        Начать торговать
      </button>
    </Link>
  </section>
);

export default FinalCTA;
