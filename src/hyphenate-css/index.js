import map from '../_/map';
import hyphenateStyleName from '../shared/hyphenateStyleName';
export default (style) => map(style, (value, name) => `${hyphenateStyleName(name)}:${value};`).join('');
//# sourceMappingURL=index.js.map