"use client"
import React, { useState } from 'react';
import styles from '../styles/join-community.module.css'; 
const JoinCommunity = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send form data to your backend or API
    console.log('Form submitted:', formData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
    <div className={styles.joinCommunityContainer}>
      <h1 className={styles.h1}>Join the Community</h1>
      <form onSubmit={handleSubmit} className={styles.communityForm}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Name</label>
          <input
          className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
          className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Join Now
        </button>
      </form>
    </div>
    </main>
  );
};

export default JoinCommunity;
