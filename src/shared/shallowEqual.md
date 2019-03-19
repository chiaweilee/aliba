## Usage

```javascript
import { shallowEual } from 'aliba'
```

```react.js
shouldComponentUpdate(nextProps, nextState) {
  return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
}
```
