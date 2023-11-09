'use strict';

module.exports = {
  schema: 'schema/schema.docs.graphql',
  schemaExtensions: ['schema'],
  src: 'app',
  customScalars: {
    DateTime: 'string',
    Upload: 'File',
  },
  eagerEsModules: false,
  noFutureProofEnums: true,
  language: 'typescript',
};
