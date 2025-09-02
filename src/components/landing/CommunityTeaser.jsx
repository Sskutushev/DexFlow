import React from 'react';
import { Link } from 'react-router-dom';

const CommunityTeaser = React.forwardRef((props, ref) => { return (
  <section ref={ref} className="py-20 min-h-screen">
    <div className="container mx-auto w-[1240px]">
      <div className="bg-surface rounded-2xl p-10 md:p-16 text-center border border-glass">
        <h2 className="text-3xl font-bold">Присоединяйтесь к сообществу</h2>
        <p className="text-muted mt-4 max-w-xl mx-auto">Обсуждайте рыночные тренды, делитесь аналитикой и следите за лучшими трейдерами в нашей социальной ленте.</p>
        <Link to="/feed">
          <button className="mt-8 bg-accent-gradient text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
            Перейти в Ленту
          </button>
        </Link>
      </div>
    </div>
  </section>
); });

export default CommunityTeaser;