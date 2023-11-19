import dynamic from 'next/dynamic';

export interface NoSSRProps {
  children: React.ReactNode;
}

export const NoSSR = dynamic<NoSSRProps>(
  () =>
    Promise.resolve(function NoSSR({children}) {
      return children;
    }),
  {ssr: false},
);
