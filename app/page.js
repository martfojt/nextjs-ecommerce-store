import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles.navbar}>Navbar</div>
      <div className={styles.mainBox}>
        <div className={`${styles.pictures} ${styles.picture1}`}>
          <span className={styles.hoverText}>Text for Picture 1</span>
        </div>
        <div className={`${styles.pictures} ${styles.picture2}`}>
          <span className={styles.hoverText}>Text for Picture 1</span>
        </div>
        <div className={`${styles.pictures} ${styles.picture3}`}>
          <span className={styles.hoverText}>Text for Picture 1</span>
        </div>
        <div className={`${styles.pictures} ${styles.picture4}`}>
          <span className={styles.hoverText}>Text for Picture 1</span>
        </div>
      </div>
    </div>
  );
}
