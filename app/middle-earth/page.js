import Link from 'next/link';
import styles from '../page.module.scss';

export const metadata = {
  title: {
    default: 'Home Page',
    template: '%s ++++hello',
  },
  description: 'Generated by create next app',
};

export default function MiddleEarth() {
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

      <div className={styles.productDivMain}>
        <div className={styles.productDivLeft}> </div>
        <div className={styles.productDivRight}> </div>
      </div>
    </div>
  );
}
