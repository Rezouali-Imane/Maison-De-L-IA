import React from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoPixel}>🧠</div>
      <ul className={styles.navMenu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Learn</a></li>
        <li><a href="#">Games</a></li>
        <li><a href="#">Coding</a></li>
        <li><a href="#">Events</a></li>
      </ul>
      <button className={styles.signupBtn}>SIGN UP</button>
    </nav>
  );
} 