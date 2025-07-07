import React, { useState } from 'react';
import styles from '../styles/FeedbackForm.module.css';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setShowConfirmation(true);
    setFeedback('');
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  return (
    <section className={styles.feedback}>
      <h2 className={styles.sectionTitle}>FEEDBACK AND SUGGESTIONS</h2>
      <form className={styles.feedbackForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.feedbackInput}
          placeholder="Your opinion and suggestions matter"
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          required
        />
        <button type="submit" className={styles.sendBtn}>SEND</button>
        <span className={styles.feedbackConfirmation + (showConfirmation ? ' ' + styles.show : '')}>
          Thank you for your feedback!
        </span>
      </form>
    </section>
  );
} 