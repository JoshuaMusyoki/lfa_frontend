import React from 'react';
import Image from 'next/image';
import styles from '../styles/projectBasedLearning.module.css';
import MissionImg from '../../../public/images/AfricaMap.png';

const ProjectBasedLearning = () => {
  const missionCards = [
    {
      title: 'Empower Communities',
      description: 'Empowering communities to foster sustainable development and collaboration.',
    },
    {
      title: 'Innovate for the Future',
      description: 'Driving innovation to create a better, more inclusive future for all.',
    },
    {
        title: 'Education for All',
        description: 'Ensuring access to quality education and learning opportunities for everyone.',
      },
  ];

//   const mainImage = {MissionImg}

  return (
    <section className={styles.projectBasedLearning}>
      <div className={styles.contentContainer}>
        <div className={styles.cardContainer}>
          {missionCards.map((card, index) => (
            <div className={styles.card} key={index}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.imageContainer}>
        <Image
            src={MissionImg}
            alt="Project Based Learning"
            className={styles.mainImage}
            layout="responsive"
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectBasedLearning;
