import React from 'react';
import styles from './LanguageSwitcher.scss';
import navButtonStyle from '../Navigation/NavButton/NavButton.scss';

const LanguageSwitcher = () => (
  <ul className={styles.languagesBar}>
    <li className={`${navButtonStyle.navButton} ${styles.active}`}>EN</li>
  </ul>
);

export default LanguageSwitcher;
