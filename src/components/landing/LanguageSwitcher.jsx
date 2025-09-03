import React, { useState, useRef, useEffect } from 'react';
import RuFlag from '../../assets/icons/flags/ru.svg';
import UkFlag from '../../assets/icons/flags/uk.svg';
import EnFlag from '../../assets/icons/flags/en.svg';
import EsFlag from '../../assets/icons/flags/es.svg';
import FrFlag from '../../assets/icons/flags/fr.svg';
import DeFlag from '../../assets/icons/flags/de.svg';
import ZhFlag from '../../assets/icons/flags/zh.svg';

export const languages = [
    { code: 'ru', name: 'Русский', flag: RuFlag },
    { code: 'uk', name: 'Українська', flag: UkFlag },
    { code: 'en', name: 'English', flag: EnFlag },
    { code: 'es', name: 'Español', flag: EsFlag },
    { code: 'fr', name: 'Français', flag: FrFlag },
    { code: 'de', name: 'Deutsch', flag: DeFlag },
    { code: 'zh', name: '中文', flag: ZhFlag },
];

const LanguageSwitcher = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to Russian
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleSelectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
        // Here you would typically change the actual application language
        console.log(`Language changed to: ${language.name}`);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-glass hover:bg-glass-strong transition-colors flex items-center justify-center w-10 h-10"
            >
                <img src={selectedLanguage.flag} alt={`${selectedLanguage.name} flag`} className="w-6 h-6" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-surface rounded-lg shadow-lg z-10 py-1">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelectLanguage(lang)}
                            className="w-full text-left px-4 py-2 text-sm text-text hover:bg-glass-strong flex items-center"
                        >
                            <img src={lang.flag} alt={`${lang.name} flag`} className="w-5 h-5 mr-2" />
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
