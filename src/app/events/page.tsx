"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Events.module.css';
import EventImage1 from '../../../public/images/image1.png';
import EventImage2 from '../../../public/images/image2.png';


const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 10;

  // Static data for events (replace this with dynamic data later)
  const events = [
    {
      id: 1,
      title: 'Community Cleanup',
      date: 'September 12, 2024',
      description: 'Join us for a community cleanup event to help keep our neighborhood clean.',
      category: 'Community',
      location: 'Nairobi',
    },
    {
      id: 2,
      title: 'Fundraising Gala',
      date: 'October 5, 2024',
      description: 'A fundraising gala to support local schools and education programs.',
      category: 'Fundraising',
      location: 'Mombasa',
    },
    // Add more events as needed
  ];

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={styles.events}>
      <h2 className={styles.title}>Upcoming Events</h2>
      <div className={styles.eventCards}>
        {currentEvents.map((event) => (
          <div className={styles.eventCard} key={event.id}>
            {/* <img src={event.image} alt={event.title} className={styles.eventImage} /> */}
            <Image
            src={EventImage1}
            alt="Event 1"
            className={styles.eventImage}
            layout="responsive"
            width={400}
            height={300}
          />
            <div className={styles.eventInfo}>
              <h3>{event.title}</h3>
              <p className={styles.eventDate}>{event.date}</p>
              <p className={styles.eventDescription}>{event.description}</p>
              <button className={styles.learnMoreButton}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination controls */}
      <div className={styles.pagination}>
        {/* Example of simple pagination, replace with dynamic controls */}
        {Array.from({ length: Math.ceil(events.length / eventsPerPage) }, (_, index) => (
          <button
            key={index+1}
            onClick={() => handlePageChange(index + 1)}
            className={`${styles.pageButton} ${currentPage === index + 1 ? styles.active : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Events;
