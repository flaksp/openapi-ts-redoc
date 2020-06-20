# openapi-ts-redoc

This library is an extension for [`@kojidev/openapi-ts`](https://github.com/kojidev/openapi-ts). It adds [OpenAPI extensions](http://spec.openapis.org/oas/v3.0.3#specification-extensions) and types used by [ReDoc](https://github.com/Redocly/redoc), please read [ReDoc vendor extensions reference](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md) first.

## Installation

This package is available in [npm Registry](https://www.npmjs.com/package/@flaksp/openapi-ts-redoc):

```
npm install @flaksp/openapi-ts-redoc --save
```

## Usage examples

This example shows how to extend `OpenAPI` and how to use ReDoc's type [`TagGroup`](src/schema/TagGroup.ts):

```typescript
import { OpenAPI, Tag, openapiVersion } from '@kojidev/openapi-ts';
import { OpenAPIReDocExtension, TagGroup } from '@flaksp/openapi-ts-redoc';

const cardTag: Tag = {
  name: 'Cart',
};

const shippingTag: Tag = {
  name: 'Shipping',
};

const storeTagGroup: TagGroup = {
  name: 'Store',
  tags: [
    cardTag.name,
    shippingTag.name,
  ],
};

export const openapi: OpenAPI & OpenAPIReDocExtension = {
  info: {
    title: 'Example',
    version: '1.0.0',
  },
  openapi: openapiVersion,
  paths: {},
  tags: [
    cardTag,
    shippingTag,
  ],
  'x-tagGroups': [
    storeTagGroup,
  ],
};
```
