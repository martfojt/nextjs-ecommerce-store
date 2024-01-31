import styles from './page.module.scss';

export default function Home() {
  return (
    <body className={styles.backgroundImage}>
      <div>
        <div className={styles.navbar}>Navbar</div>
        <div className={styles.mainBox}>
          <div className={`${styles.pictures} ${styles.picture1}`}> </div>
          <div className={`${styles.pictures} ${styles.picture2}`}> </div>
          <div className={`${styles.pictures} ${styles.picture3}`}> </div>
          <div className={`${styles.pictures} ${styles.picture4}`}> </div>
        </div>
      </div>
    </body>
  );
}
