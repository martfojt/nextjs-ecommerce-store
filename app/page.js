import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <header className={styles.navbar}>Header</header>
      <div className={styles.mainBox}>
        <div className={`${styles.pictures} ${styles.picture1}`}>
          <span className={styles.hoverText}>Explore Middle-Earth</span>
        </div>
        <div className={`${styles.pictures} ${styles.picture2}`}>
          <span className={styles.hoverText}>Travel to Cadia</span>
        </div>
        <div className={`${styles.pictures} ${styles.picture3}`}>
          <span className={styles.hoverText}>Experience Hogwarts</span>
        </div>
        <div className={`${styles.pictures} ${styles.picture4}`}>
          <span className={styles.hoverText}>Journey to Azeroth</span>
        </div>
      </div>
    </div>
  );
}
