import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p>Our organization is committed to empowering communities through education, advocacy, and action.</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Our Mission</h2>
          <p>We strive to create a sustainable future for all.</p>
        </div>
        <div className={styles.card}>
          <h2>Our Vision</h2>
          <p>Envisioning a world where everyone has the opportunity to thrive.</p>
        </div>
      </div>
    </div>
  );
}
