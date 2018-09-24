import React from 'react';
import NavButton from './NavButton/NavButton';
import styles from './Navigation.scss';

const Navigation = () => (
  <nav className={styles.navigation}>
    <NavButton title="Scenarios" />
    <NavButton title="Brokers" />
    <NavButton title="Routes" />
    <NavButton title="Raports" />
    <NavButton title="Settings" />
  </nav>
);

export default Navigation;
