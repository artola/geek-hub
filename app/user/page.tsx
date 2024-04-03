'use client';

import {Suspense} from 'react';

import {ErrorBoundary} from '@/components';

import styles from './page.module.css';
import Viewer from './viewer';

export default function User() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <i>Stay Sharp. Keep Tuned.</i>
        </p>
        <div />
      </div>

      <div className={styles.content}>
        <ErrorBoundary>
          <Suspense fallback="loading">
            <Viewer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
}
