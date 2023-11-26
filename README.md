# Vocode Node Library

[![npm shield](https://img.shields.io/npm/v/@vocode/vocode-api)](https://www.npmjs.com/package/@vocode/vocode-api)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://buildwithfern.com/?utm_source=vocodedev/vocode-api-node/readme)

The Vocode Node.js library provides access to the Vocode API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://docs.vocode.dev/).

## Installation

```
npm install --save @vocode/vocode-api
# or
yarn add @vocode/vocode-api
```

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-nuefzg?file=app.ts)

```typescript
import { VocodeClient } from '@vocode/vocode-api';

const vocode = new VocodeClient({
  token: 'YOUR_TOKEN',
});

const phoneNumber = await vocode.numbers.buyNumber();

console.log('Bought phone number', phoneNumber);
```

## Handling errors

When the API returns a non-success status code (4xx or 5xx response), a subclass of [VocodeError](./src/errors/VocodeError.ts) will be thrown:

```ts
try {
  await vocode.numbers.buyNumber();
} catch (err) {
  if (err instanceof VocodeError) {
    console.log(err.statusCode);
    console.log(err.message); 
    console.log(err.body);
  }
}
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 422         | `UnprocessableEntityError` |


## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/FlatFilers/flatfile-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
