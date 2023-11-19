import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

import {NoSSR, Providers} from '@/components';

import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'GeekHub',
  description: "Unlocking GitHub's Insights",
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NoSSR>
          <Providers>{children}</Providers>
        </NoSSR>
      </body>
    </html>
  );
}
