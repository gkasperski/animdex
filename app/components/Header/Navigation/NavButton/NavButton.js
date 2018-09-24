import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavButton.scss';

const NavButton = ({ title }) => (
  <div className={styles.navButton}>{title}</div>
);

NavButton.defaultProps = {
  title: ''
};

NavButton.propTypes = {
  title: PropTypes.string
};
export default NavButton;
