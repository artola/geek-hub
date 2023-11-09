import {beforeEach, describe, expect, it} from '@jest/globals';
import {render, waitFor} from '@testing-library/react';
import {Suspense} from 'react';
import {graphql, RelayEnvironmentProvider, useLazyLoadQuery} from 'react-relay';
import {
  createMockEnvironment,
  MockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';

import {followedQuery} from './__generated__/followedQuery.graphql';
import Followed from './followed';

describe('<Followed />', () => {
  let environment: MockEnvironment;

  beforeEach(() => {
    environment = createMockEnvironment();
  });

  function Tester() {
    const data = useLazyLoadQuery<followedQuery>(
      graphql`
        query followedQuery {
          node(id: "1") {
            ... on User {
              ...followedFragment
            }
          }
        }
      `,
      {},
    );

    return data.node && <Followed fragmentRef={data.node} />;
  }

  it('should render "followed" information', async () => {
    environment.mock.queueOperationResolver((operation) => {
      if (operation.request.node.params.name === 'followedQuery') {
        return MockPayloadGenerator.generate(operation, {
          Query() {
            return {
              node: {
                id: '1',
                login: 'followed',
              },
            };
          },
        });
      }

      return null;
    });

    const {getByTestId} = render(
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback="loading">
          <Tester />
        </Suspense>
      </RelayEnvironmentProvider>,
    );

    await waitFor(() => {
      expect(getByTestId('login')).toHaveTextContent('followed');
    });
  });
});
