import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <LanguageSwitcher />
      <div className={`hamburger ${showMenu ? 'close' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      <nav className={`menu ${showMenu ? 'show' : ''}`}>
        <div className="menu-branding">
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setShowMenu(false)}>
              {t('nav.home')}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setShowMenu(false)}>
              {t('nav.about')}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-link" onClick={() => setShowMenu(false)}>
              {t('nav.work')}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setShowMenu(false)}>
              {t('nav.contact')}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
