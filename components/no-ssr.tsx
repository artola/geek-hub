import dynamic from 'next/dynamic';

export interface NoSSRProps {
  children: React.ReactNode;
}

export const NoSSR = dynamic(
  () =>
    Promise.resolve(function NoSSR({children}: NoSSRProps) {
      return children;
    }),
  {ssr: false},
);
