import React from 'react';

const Roadmap = React.forwardRef((props, ref) => { return (
    <section ref={ref} className="py-20">
        <div className="container mx-auto w-[1240px] text-center">
            <h2 className="text-3xl font-bold mb-12">Дорожная карта</h2>
            {/* Здесь будет более сложный компонент дорожной карты */}
            <div className="text-muted">
                <p>Компонент дорожной карты в разработке.</p>
            </div>
        </div>
    </section>
); });

export default Roadmap;
