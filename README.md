# [Aliba](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/aliba/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/aliba.svg?style=flat)](https://www.npmjs.com/package/aliba) [![npm downloads](https://img.shields.io/npm/dm/aliba.svg)](https://npmcharts.com/compare/aliba?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Aliba is a JavaScript library.

* **[hyphenateCss](https://github.com/chiaweilee/aliba/tree/master/src/hyphenate-css):** convert JavaScript style object into style string by using `react-dom`'s shared [hyphenateStyleName](https://github.com/chiaweilee/aliba/blob/master/src/shared/hyphenateStyleName.ts), e.g, `hyphenateCss({ fontSize: '12px' })` result `font-size: 12px;`
* **[keyValue](https://github.com/chiaweilee/aliba/tree/master/src/key-value):** pair/unpair key-value pair, e.g, `pair({ a: 1, b: 2 })` result `a=1;b=2`, `unpair('a=1&b=2', '&')` result `{ a: 1, b: 2 }`
* **[setCookie](https://github.com/chiaweilee/aliba/tree/master/src/set-cookie):** set-cookie as `react`'s `setState()` like
* **[shallowEqual](https://github.com/chiaweilee/aliba/blob/master/src/shared/shallowEqual.md):** `react`'s `shallowEqual`

## Installation

```
npm install aliba
```
