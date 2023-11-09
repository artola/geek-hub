import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import {render, waitFor} from '@testing-library/react';
import {Suspense} from 'react';
import {graphql, RelayEnvironmentProvider, useLazyLoadQuery} from 'react-relay';
import {
  createMockEnvironment,
  MockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';

import {followingQuery} from './__generated__/followingQuery.graphql';
import Following from './following';

jest.mock('./followed', () => () => '((Followed))');

describe('<Following />', () => {
  let environment: MockEnvironment;

  beforeEach(() => {
    environment = createMockEnvironment();
  });

  function Tester() {
    const data = useLazyLoadQuery<followingQuery>(
      graphql`
        query followingQuery {
          viewer {
            ...followingFragment
          }
        }
      `,
      {},
    );

    return <Following fragmentRef={data.viewer} />;
  }

  it('should render "following" information', async () => {
    environment.mock.queueOperationResolver((operation) => {
      if (operation.request.node.params.name === 'followingQuery') {
        return MockPayloadGenerator.generate(operation, {
          Query() {
            return {
              viewer: {
                following: {
                  edges: [
                    {
                      node: {
                        id: '1',
                        login: 'followed',
                      },
                    },
                  ],
                },
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
      expect(getByTestId('followed-1')).toHaveTextContent('((Followed))');
    });
  });
});
