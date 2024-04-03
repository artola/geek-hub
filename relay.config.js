'use strict';

module.exports = {
  schema: 'schema/schema.docs.graphql',
  schemaExtensions: ['schema'],
  src: 'app',
  customScalarTypes: {
    DateTime: 'string',
    Upload: 'File',
  },
  eagerEsModules: false,
  noFutureProofEnums: true,
  language: 'typescript',
  typescriptExcludeUndefinedFromNullableUnion: true,
};
