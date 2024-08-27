import styles from '../styles/Home.module.css'
export default function Home(){
    return (
        <div className={styles.container}>
            <h1>Welcome to Lead Foundation Africa Community</h1>
            <p>Building a Better future Together. </p>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <h2>About Us</h2>
                    <p>Learn More about Our Missions and Values.</p>
                </div>
                <div className={styles.card}>
                    <h2>What We Do</h2>
                    <p>Discover the impact we are making.</p>
                </div>
                <div className={styles.card}>
                    <h2>Join Us</h2>
                    <p>Get involved and make a difference today.</p>
                </div>
            </div>
        </div>
    );
}