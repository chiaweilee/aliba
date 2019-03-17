## Usage

```javascript
import { keyValue } from 'aliba'
```

```javascript
pair({ a: 1, b: 2 })
// String 'a=1;b=2'
```

```javascript
pair({ a: 1, b: 2 }, '&')
// String 'a=1&b=2'
```

```javascrit
unpair('a=1;b=2')
// Object { a: 1, b: 2 }
```

```javascrit
unpair('a=1&b=2', '&')
// Object { a: 1, b: 2 }
```
