import React from 'react';
import styles from '../styles/HeroSection.module.css';
import robotImg from '../images/course1_1-removebg-preview.png';

export default function HeroSection() {
  return (
    <header className={styles.hero}>
      <img src={robotImg} alt="Pixel Robot" className={styles.heroImg} />
      <div className={styles.heroContent}>
        <h1 className={styles.pixelHeading}>
          Explore our <span className={styles.highlight}>INTERACTIVE COURSES</span>
        </h1>
        <p className={styles.heroDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat turpis eget velit ullamcorper vestibulum. Duis sit amet gravida urna.
        </p>
      </div>
    </header>
  );
} 