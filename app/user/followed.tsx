'use client';

import {graphql, useFragment} from 'react-relay';

import {followedFragment$key} from './__generated__/followedFragment.graphql';

export interface FollowedProps {
  fragmentRef: followedFragment$key;
}

export default function Followed({fragmentRef}: FollowedProps) {
  const data = useFragment(
    graphql`
      fragment followedFragment on User {
        login
      }
    `,
    fragmentRef,
  );

  return <div data-testid="login">{data.login}</div>;
}
