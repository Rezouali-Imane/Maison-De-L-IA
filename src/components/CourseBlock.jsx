import React, { useState } from 'react';
import styles from '../styles/CourseBlock.module.css';

const LEVEL_COLORS = {
  Beginner: styles.beginner,
  Intermediate: styles.intermediate,
  Advanced: styles.advanced,
};

export default function CourseBlock({ name, tags, rating, students, duration, modules, level, progress }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [progressAnimated, setProgressAnimated] = useState(false);

  // Tooltip logic
  const handleCardClick = e => {
    if (e.target.classList.contains(styles.learnBtn)) return;
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2200);
  };

  // Progress bar animation
  const handleProgress = () => {
    if (!progressAnimated) setProgressAnimated(true);
  };

  return (
    <div className={styles.courseCard} onClick={handleCardClick}>
      <div className={styles.courseHeader}>
        <h3>{name}</h3>
        <div className={styles.courseMeta}>
          <span className={styles.stars}>{'★'.repeat(rating)}{'☆'.repeat(5-rating)}</span>
          <span className={styles.students}>{students} students</span>
        </div>
      </div>
      <div className={styles.courseInfo}>
        <span>{duration}</span>
        <span className={styles.courseLabel + ' ' + LEVEL_COLORS[level]}>{level}</span>
        <span>{modules} modules</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: progressAnimated ? progress + '%' : 0 }}
        ></div>
      </div>
      <button className={styles.learnBtn} onClick={handleProgress} type="button">
        ▶ KEEP LEARNING
      </button>
      {/* Pixel corners */}
      <div className={styles.pixelCorner + ' ' + styles.bl}></div>
      <div className={styles.pixelCorner + ' ' + styles.br}></div>
      {/* Tooltip */}
      {showTooltip && (
        <div className={styles.courseTooltip + ' ' + styles.show}>
          🔔 You've selected the <b>{name}</b> course!<br />Get ready to build the web.
        </div>
      )}
    </div>
  );
} 