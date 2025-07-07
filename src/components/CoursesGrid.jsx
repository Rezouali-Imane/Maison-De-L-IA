import React from 'react';
import CourseBlock from './CourseBlock';
import styles from '../styles/CoursesGrid.module.css';

const COURSES = [
  {
    name: 'HTML', tags: ['web'], rating: 4, students: 120, duration: '4 weeks', modules: 12, level: 'Beginner', progress: 65
  },
  {
    name: 'CSS', tags: ['web'], rating: 4, students: 110, duration: '4 weeks', modules: 12, level: 'Beginner', progress: 0
  },
  {
    name: 'JAVASCRIPT', tags: ['web'], rating: 4, students: 130, duration: '4 weeks', modules: 12, level: 'Intermediate', progress: 0
  },
  {
    name: 'DATA MANIPULATION', tags: ['data', 'tools'], rating: 4, students: 90, duration: '4 weeks', modules: 12, level: 'Intermediate', progress: 0
  },
  {
    name: 'PYTHON', tags: ['python', 'ml'], rating: 4, students: 150, duration: '4 weeks', modules: 12, level: 'Beginner', progress: 0
  },
  {
    name: 'PANDAS', tags: ['data'], rating: 4, students: 95, duration: '4 weeks', modules: 12, level: 'Intermediate', progress: 0
  },
  {
    name: 'GIT', tags: ['tools'], rating: 4, students: 105, duration: '4 weeks', modules: 12, level: 'Beginner', progress: 0
  },
  {
    name: 'GITHUB', tags: ['tools'], rating: 4, students: 100, duration: '4 weeks', modules: 12, level: 'Intermediate', progress: 0
  },
  {
    name: 'DOCKER', tags: ['tools'], rating: 4, students: 98, duration: '4 weeks', modules: 12, level: 'Advanced', progress: 0
  }
];

export default function CoursesGrid({ activeFilter }) {
  const filtered = activeFilter === 'all'
    ? COURSES
    : COURSES.filter(c => c.tags.includes(activeFilter));
  return (
    <section className={styles.coursesGrid}>
      {filtered.map((course, i) => (
        <CourseBlock key={course.name} {...course} />
      ))}
    </section>
  );
} 