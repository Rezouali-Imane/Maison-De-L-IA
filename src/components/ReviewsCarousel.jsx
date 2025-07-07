import React, { useState, useEffect } from 'react';
import styles from '../styles/ReviewsCarousel.module.css';
import avatar1 from '../images/pfp.png';
import avatar2 from '../images/pfp.png';
import avatar3 from '../images/pfp.png';

const REVIEWS = [
  {
    avatar: avatar1,
    name: 'JOHN DOE',
    text: 'Lorem ipsum dolor sit amet, consectetur dipiscing elit. Quisque feugiat. Lorem ipsum dolor sit amet, consectetur dipiscing elit. Quisque feugiat.'
  },
  {
    avatar: avatar2,
    name: 'JANE SMITH',
    text: 'Great platform! The retro vibe makes learning fun and engaging. Highly recommend to all coding enthusiasts.'
  },
  {
    avatar: avatar3,
    name: 'ALEX PIXEL',
    text: 'The interactive courses and pixel art UI are amazing. Progress tracking is super motivating!'
  }
];

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % REVIEWS.length), 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className={styles.reviews}>
      <h2 className={styles.sectionTitle}>STUDENT'S REVIEWS</h2>
      <div className={styles.reviewCarousel}>
        {REVIEWS.map((r, i) => (
          <div
            key={i}
            className={styles.reviewSlide + (i === current ? ' ' + styles.active : '')}
            style={{ display: i === current ? 'flex' : 'none' }}
          >
            <img src={r.avatar} alt="Student Avatar" className={styles.reviewAvatar} />
            <h4 className={styles.reviewName}>{r.name}</h4>
            <p className={styles.reviewText}>{r.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.carouselDots}>
        {REVIEWS.map((_, i) => (
          <span
            key={i}
            className={styles.dot + (i === current ? ' ' + styles.active : '')}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </section>
  );
} 