import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-surface mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 mb-8 lg:mb-0">
          <div className="text-2xl font-bold text-text cursor-default mb-2">
            Dex<span className="bg-accent-gradient bg-clip-text text-transparent">Flow</span>
          </div>
          <p className="text-muted text-xs mb-2 max-w-xs">
            DexFlow - это передовая децентрализованная биржа, созданная для удобства и безопасности ваших финансовых операций.
          </p>
          <p className="text-muted text-xs max-w-xs">
            Все права защищены DExFlow 2025 © ИНН: 1234567890, Юр. адрес: г. Москва, ул. Примерная, д. 1, ОГРН: 9876543210, ООО 'ДексФлоу'. Мы стремимся к прозрачности и соблюдению всех норм законодательства.
          </p>
        </div>

        {/* Middle Section - Email */}
        <div className="flex items-center mb-8 lg:mb-0">
          <a href="mailto:DexFlow@pochtamail.com" className="text-text underline flex items-center hover:text-primary-cyan transition-colors">
            DexFlow@pochtamail.com
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>

        {/* Right Section - Legal Buttons */}
        <div className="flex flex-col space-y-2 items-center lg:items-end">
          <button className="text-primary-cyan hover:bg-primary-cyan hover:bg-opacity-20 rounded-md px-3 py-1 transition-colors">
            Юридическая информация
          </button>
          <button className="text-primary-cyan hover:bg-primary-cyan hover:bg-opacity-20 rounded-md px-3 py-1 transition-colors">
            Политика конфиденциальности
          </button>
          <button className="text-primary-cyan hover:bg-primary-cyan hover:bg-opacity-20 rounded-md px-3 py-1 transition-colors">
            Правила платформы
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
