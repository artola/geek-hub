/**
 * @generated SignedSource<<d0cd9d2d4e66d86a43fea1454c9c8642>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followedFragment$data = {
  readonly login: string;
  readonly " $fragmentType": "followedFragment";
};
export type followedFragment$key = {
  readonly " $data"?: followedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followedFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "followedFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "f8d49f0e6c88884db33a8df3f214e425";

export default node;
