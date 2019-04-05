import { StyleObject } from '../../types';
import map from '../_/map';
import hyphenateStyleName from '../shared/hyphenateStyleName';

export default (style: StyleObject): string =>
  map(style, (value, name: string) => `${hyphenateStyleName(name)}:${value};`).join('');
