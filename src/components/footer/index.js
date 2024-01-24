// Footer.js
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Footer content goes here */}
          This is the footer.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
