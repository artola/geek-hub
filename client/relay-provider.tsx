import {RelayEnvironmentProvider} from 'react-relay';

import {useEnvironment} from './relay-environment';

export interface RelayProviderProps {
  children: React.ReactNode;
}

export function RelayProvider(props: RelayProviderProps) {
  const environment = useEnvironment();

  return <RelayEnvironmentProvider environment={environment} {...props} />;
}
