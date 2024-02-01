import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <header className={styles.navbar}>Header</header>
      <div className={styles.mainBox}>
        <div className={styles.pictures}>
          <div className={`${styles.background} ${styles.picture1}`}></div>
          <span className={styles.hoverText}>
            <h1>Explore Middle-Earth</h1>
          </span>
        </div>
        <div className={styles.pictures}>
          <div className={`${styles.background} ${styles.picture2}`}></div>
          <span className={styles.hoverText}>
            <h1>Travel to Cadia</h1>
          </span>
        </div>
        <div className={styles.pictures}>
          <div className={`${styles.background} ${styles.picture3}`}></div>
          <span className={styles.hoverText}>
            <h1>Experience Hogwarts</h1>
          </span>
        </div>
        <div className={styles.pictures}>
          <div className={`${styles.background} ${styles.picture4}`}></div>
          <span className={styles.hoverText}>
            <h1>Journey to Azeroth</h1>
          </span>
        </div>
      </div>
    </div>
  );
}
