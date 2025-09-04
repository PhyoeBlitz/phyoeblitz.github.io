import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <main id="about">
      <h1 className="lg-heading">
        {t('contact.title.first')} <span className="text-secondary">{t('contact.title.second')}</span>
      </h1>
      <h2 className="small-heading">{t('contact.subtitle')}</h2>
      <div className="boxes">
        <div>
          <span className="text-secondary">{t('contact.email')}</span>{' '}
          <a href="mailto:1997kophyoe@gmail.com" style={{ textDecoration: 'none' }}>
            1997kophyoe@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
