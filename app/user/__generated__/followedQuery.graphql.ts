/**
 * @generated SignedSource<<12e9229ea78566a99290fce972dc6eb1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followedQuery$variables = Record<PropertyKey, never>;
export type followedQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"followedFragment">;
  } | null | undefined;
};
export type followedQuery = {
  response: followedQuery$data;
  variables: followedQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "followedQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "followedFragment"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"1\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "followedQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "node(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "b5d32f2d9cafc0779dbc6583bc70f6cb",
    "id": null,
    "metadata": {},
    "name": "followedQuery",
    "operationKind": "query",
    "text": "query followedQuery {\n  node(id: \"1\") {\n    __typename\n    ... on User {\n      ...followedFragment\n    }\n    id\n  }\n}\n\nfragment followedFragment on User {\n  login\n}\n"
  }
};
})();

(node as any).hash = "24226f53d0dea7486acdb6b9e1436bfe";

export default node;
