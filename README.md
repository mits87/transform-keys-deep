# transform-keys-deep

> Deeply convert object keys from snakecase to camelcase and and other way around<br>
> Example: `{unicornRainbow: {fooBar: 1}}` → `{unicorn_rainbow: {foo_bar: 1}}`

## Install

```
$ npm install --save transform-keys-deep
```

## Usage

```js
const { camelcaseKeysDeep, snakecaseKeysDeep } = require('transform-keys-deep');

snakecaseKeysDeep({unicornRainbow: {fooBar: 1}});
//=> {unicorn_rainbow: {foo_bar: 1}}

camelcaseKeysDeep({unicorn_rainbow: {foo_bar: 1}});
//=> {unicornRainbow: {fooBar: 1}}
```
