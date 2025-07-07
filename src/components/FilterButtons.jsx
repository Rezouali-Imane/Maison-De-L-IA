import React from 'react';
import styles from '../styles/FilterButtons.module.css';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Python', value: 'python' },
  { label: 'Web Development', value: 'web' },
  { label: 'Data Science', value: 'data' },
  { label: 'Tools', value: 'tools' },
  { label: 'ML', value: 'ml' },
];

export default function FilterButtons({ activeFilter, setActiveFilter }) {
  return (
    <section className={styles.filters}>
      <h2 className={styles.sectionTitle}>ALL COURSES</h2>
      <div className={styles.filterBtns}>
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={
              styles.filterBtn + (activeFilter === f.value ? ' ' + styles.active : '')
            }
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
    </section>
  );
} 