import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <i>Stay Sharp. Keep Tuned.</i>
        </p>
        <div>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            powered by
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              className={styles.nextLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.hero}>
        <Image
          className={styles.logo}
          src="/geek-hub.svg"
          alt="GeekHub Logo"
          width={240}
          height={168}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/user" className={styles.card}>
          <h2>
            Relay for Dummies <span>-&gt;</span>
          </h2>
          <p>The Beginner's Guide to Mastering RelayJS</p>
        </Link>
      </div>
    </main>
  );
}
