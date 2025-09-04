import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => changeLanguage('en')}
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        aria-label="Switch to English"
      >
        {t('languages.en')}
      </button>
      <button
        onClick={() => changeLanguage('ja')}
        className={`lang-btn ${i18n.language === 'ja' ? 'active' : ''}`}
        aria-label="Switch to Japanese"
      >
        {t('languages.ja')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
