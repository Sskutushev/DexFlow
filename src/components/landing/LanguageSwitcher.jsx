import React, { useState, useRef, useEffect } from 'react';

export const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
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
                <span role="img" aria-label={`${selectedLanguage.name} flag`} className="text-xl">{selectedLanguage.flag}</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-surface rounded-lg shadow-lg z-10 py-1">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelectLanguage(lang)}
                            className="w-full text-left px-4 py-2 text-sm text-text hover:bg-glass-strong flex items-center"
                        >
                            <span role="img" aria-label={`${lang.name} flag`} className="mr-2">{lang.flag}</span>
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
