import global from './global.css';
import styles from './page.module.css';

export default function Home() {
  return (
    <body>
      <div className={styles.backgroundImage}>
        <div className={styles.navbar}>Navbar</div>
        <div className={styles.mainBox}>
          <div className={styles.pictures}>Picture 1</div>
          <div className={styles.pictures}>Picture 2</div>
          <div className={styles.pictures}>Picture 3</div>
          <div className={styles.pictures}>Picture 4</div>
        </div>
      </div>
    </body>
  );
}
