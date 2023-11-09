import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import {render, waitFor} from '@testing-library/react';
import {Suspense} from 'react';
import {RelayEnvironmentProvider} from 'react-relay';
import {
  createMockEnvironment,
  MockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';

import Viewer from './viewer';

jest.mock('./following', () => () => '((Following))');

describe('<Viewer />', () => {
  let environment: MockEnvironment;

  beforeEach(() => {
    environment = createMockEnvironment();
  });

  it('should render "viewer" information', async () => {
    environment.mock.queueOperationResolver((operation) => {
      if (operation.request.node.params.name === 'viewerQuery') {
        return MockPayloadGenerator.generate(operation, {
          Query() {
            return {
              viewer: {
                login: 'foo',
                bio: 'bar',
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
          <Viewer />
        </Suspense>
      </RelayEnvironmentProvider>,
    );

    await waitFor(() => {
      expect(getByTestId('login')).toHaveTextContent('foo');
      expect(getByTestId('bio')).toHaveTextContent('bar');
    });
  });
});
