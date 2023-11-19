'use client';

import {RelayProvider} from './relay-provider';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({children}: ProvidersProps) {
  return <RelayProvider>{children}</RelayProvider>;
}
