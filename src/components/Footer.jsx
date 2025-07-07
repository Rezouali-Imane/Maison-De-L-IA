import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCols}>
        <div className={styles.footerCol}>
          <h4>LEARNING</h4>
          <ul>
            <li>Courses</li>
            <li>Challenges</li>
            <li>Games</li>
            <li>Certifications</li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>COMMUNITY</h4>
          <ul>
            <li>Events</li>
            <li>Forum</li>
            <li>Discord</li>
            <li>Mentorship</li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>CONTACT</h4>
          <ul>
            <li>Université de Béjaïa</li>
            <li>06000 Béjaïa, Algérie</li>
            <li>contact@mosaic-bejaia.dz</li>
            <li>+213 34 XX XX XX</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2023 Mosaic Dev LTA. Terms Privacy Policy</span>
        <div className={styles.footerIcons}>
          <span className={styles.icon}>🎮</span>
          <span className={styles.icon}>💬</span>
          <span className={styles.icon}>📘</span>
        </div>
      </div>
    </footer>
  );
} 