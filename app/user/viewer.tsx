'use client';

import {graphql, useLazyLoadQuery} from 'react-relay';

import {viewerQuery} from './__generated__/viewerQuery.graphql';
import Following from './following';
import styles from './viewer.module.css';

export default function Viewer() {
  const data = useLazyLoadQuery<viewerQuery>(
    graphql`
      query viewerQuery {
        viewer {
          login
          bio
          ...followingFragment
        }
      }
    `,
    {},
  );

  return (
    <div>
      <h2 data-testid="login">Viewer: {data.viewer.login}</h2>
      <div data-testid="bio" className={styles.bio}>
        {data.viewer.bio}
      </div>
      <hr />
      <div className={styles.following}>
        <Following fragmentRef={data.viewer} />
      </div>
    </div>
  );
}
