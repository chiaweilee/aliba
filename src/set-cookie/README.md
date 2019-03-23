## Usage

```javascript
import { setCookie } from 'aliba'
```

### Update Cookie

```javascript
setCookie({
  a: 1,
  b: '2',
})
```

```javascript
setCookie((cookie) => {
  return {
    a: cookie.a + 1,
  }
})
```

```javascript
setCookie({
  c: {
    value: 3,
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie#Syntax
    // path: path,
    // domain: domain,
    // 'max-age': max-age-in-seconds,
    // expires: date-in-GMTString-format
    // secure: true,
  },
})
```

#### Delete Cookie

*breaking changed from 0.2.6*

```javascript
setCookie({
  d: null,
})
```
