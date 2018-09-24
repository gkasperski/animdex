import React from 'react';
import Navigation from './Navigation/Navigation';
import Version from './Version/Version';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.headerContainer}>
    <header className={styles.header}>
      <Navigation />
      <div className={styles.rightSide}>
        <Version />
        <LanguageSwitcher />
      </div>
    </header>
  </div>
);

export default Header;
