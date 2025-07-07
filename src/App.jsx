import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterButtons from './components/FilterButtons';
import CoursesGrid from './components/CoursesGrid';
import ReviewsCarousel from './components/ReviewsCarousel';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import styles from './styles/App.module.css';

export default function App() {
  // Filter state for courses
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className={styles.appWrapper}>
      <Header />
      <HeroSection />
      <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <CoursesGrid activeFilter={activeFilter} />
      <ReviewsCarousel />
      <FeedbackForm />
      <Footer />
    </div>
  );
} 