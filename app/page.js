import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <header className={styles.navbar}>
        <div className={styles.test}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <img
            src="./shopping-basket.png"
            alt="Shopping cart"
            className={styles.shoppingCart}
          />
        </div>
      </header>
      <div className={styles.mainBox}>
        <Link href="/middle-earth">
          <div className={styles.pictures}>
            <div className={`${styles.background} ${styles.picture1}`}> </div>
            <span className={styles.hoverText}>
              <h1>Explore Middle-Earth</h1>
            </span>
          </div>
        </Link>
        <Link href="/cadia">
          <div className={styles.pictures}>
            <div className={`${styles.background} ${styles.picture2}`}> </div>
            <span className={styles.hoverText}>
              <h1>Travel to Cadia</h1>
            </span>
          </div>
        </Link>
        <Link href="/hogwarts">
          <div className={styles.pictures}>
            <div className={`${styles.background} ${styles.picture3}`}> </div>
            <span className={styles.hoverText}>
              <h1>Experience Hogwarts</h1>
            </span>
          </div>
        </Link>
        <Link href="/azeroth">
          <div className={styles.pictures}>
            <div className={`${styles.background} ${styles.picture4}`}> </div>
            <span className={styles.hoverText}>
              <h1>Journey to Azeroth</h1>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
