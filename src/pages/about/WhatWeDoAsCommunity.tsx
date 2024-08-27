import styles from '../styles/WhatWeDoCommunity.module.css'
export default function WhatWeDoAsCommunity(){
    return(
    <div className={styles.container}>
      <h1>What We Do in the Community</h1>
      <p>We focus on empowering individuals and families by providing resources, education, and support.</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Education</h2>
          <p>We offer various educational programs to help individuals improve their skills.</p>
        </div>
        <div className={styles.card}>
          <h2>Advocacy</h2>
          <p>We advocate for policies that promote equality and justice.</p>
        </div>
        <div className={styles.card}>
          <h2>Support Services</h2>
          <p>Our support services provide essential resources for those in need.</p>
        </div>
      </div>
    </div>
  );
}