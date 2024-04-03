'use client';

import {meros} from 'meros/browser';
import {useState} from 'react';
import {RelayEnvironmentProvider} from 'react-relay';
import {
  Environment,
  FetchFunction,
  Network,
  Observable,
  RecordSource,
  Store,
} from 'relay-runtime';

import {isAsyncIterable, sleep} from '@/utils';

const HEADER_ACCEPT = 'Accept';
const HEADER_AUTHORIZATION = 'Authorization';
const HEADER_CONTENT_TYPE = 'Content-Type';

const fetchFn: FetchFunction = (
  operation,
  variables,
  _cacheConfig,
  _uploadables,
) => {
  return Observable.create((sink) => {
    const init = {
      method: 'POST',
      headers: {
        [HEADER_AUTHORIZATION]: `Bearer ${
          process.env.NEXT_PUBLIC_AUTH_TOKEN ?? '#'
        }`,
        [HEADER_ACCEPT]: 'application/json',
        [HEADER_CONTENT_TYPE]: 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    };

    (async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_HTTP_ENDPOINT ?? '#',
          init,
        );

        if (process.env.NEXT_PUBLIC_DEMO_SLOW_NETWORK === 'true') {
          await sleep(2000);
        }

        if (response.ok) {
          const parts = await meros<any>(response);

          if (isAsyncIterable(parts)) {
            for await (const part of parts) {
              if (!part.json) {
                throw Error('Failed to parse part as json.');
              }

              sink.next(part.body);
            }
          } else {
            sink.next(await parts.json());
          }

          sink.complete();
        } else {
          throw Error(response.statusText);
        }
      } catch (error) {
        sink.error(error as Error);
      }
    })();
  });
};

function createEnvironment(): Environment {
  const source = new RecordSource();

  /**
   * Presence of Data
   * @see https://relay.dev/docs/guided-tour/reusing-cached-data/presence-of-data/
   *
   * - Note that having a buffer size of 0 is equivalent to not having the release buffer, which means that queries will be immediately released and collected.
   * - By default, environments have a release buffer size of 10.
   *
   * @example
   * // last 10 queries
   * gcReleaseBufferSize: 10,
   *
   *
   * Staleness of Data
   * @see https://relay.dev/docs/guided-tour/reusing-cached-data/staleness-of-data/
   *
   * - If the query cache expiration time is not provided, staleness checks only look at whether the referenced records have been invalidated.
   *
   * @example
   * // 1 min
   * queryCacheExpirationTime: 60 * 1_000,
   */
  const options = {};

  const store = new Store(source, options);

  const network = Network.create(fetchFn);

  return new Environment({
    network,
    store,
  });
}

export interface RelayProviderProps {
  children: React.ReactNode;
}

export function RelayProvider(props: RelayProviderProps) {
  const [environment] = useState<Environment>(createEnvironment);

  return <RelayEnvironmentProvider environment={environment} {...props} />;
}
