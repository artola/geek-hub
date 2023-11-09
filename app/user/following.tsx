'use client';

import {graphql, usePaginationFragment} from 'react-relay';

import {followingFragment$key} from './__generated__/followingFragment.graphql';
import Followed from './followed';
import styles from './following.module.css';

export interface FollowingProps {
  fragmentRef: followingFragment$key;
}

export default function Following({fragmentRef}: FollowingProps) {
  const {data, hasNext, loadNext} = usePaginationFragment(
    graphql`
      fragment followingFragment on User
      @argumentDefinitions(
        cursor: {type: "String"}
        count: {type: "Int", defaultValue: 5}
      )
      @refetchable(queryName: "followingPaginationQuery") {
        following(after: $cursor, first: $count)
          @connection(key: "following_following") {
          edges {
            node {
              id
              ...followedFragment
            }
          }
        }
      }
    `,
    fragmentRef,
  );

  return (
    <div>
      <h3>Following</h3>
      <ul className={styles.list}>
        {data.following.edges?.map(
          (edge) =>
            edge?.node && (
              <li
                key={edge.node.id}
                data-testid={`followed-${edge.node.id}`}
                className={styles.listItem}
              >
                <Followed fragmentRef={edge.node} />
              </li>
            ),
        )}
      </ul>
      {hasNext && (
        <button
          className={styles.more}
          onClick={() => {
            loadNext(5);
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
}
