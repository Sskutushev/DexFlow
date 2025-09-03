import React, { useState, useRef, useEffect } from 'react';
export const languages = [
    { code: 'ru', name: 'Русский', flag: import.meta.env.BASE_URL + 'assets/icons/flags/ru.svg' },
    { code: 'uk', name: 'Українська', flag: import.meta.env.BASE_URL + 'assets/icons/flags/uk.svg' },
    { code: 'en', name: 'English', flag: import.meta.env.BASE_URL + 'assets/icons/flags/en.svg' },
    { code: 'es', name: 'Español', flag: import.meta.env.BASE_URL + 'assets/icons/flags/es.svg' },
    { code: 'fr', name: 'Français', flag: import.meta.env.BASE_URL + 'assets/icons/flags/fr.svg' },
    { code: 'de', name: 'Deutsch', flag: import.meta.env.BASE_URL + 'assets/icons/flags/de.svg' },
    { code: 'zh', name: '中文', flag: import.meta.env.BASE_URL + 'assets/icons/flags/zh.svg' },
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
