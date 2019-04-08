import map from '../_/map';
import isNotArrayObject from '../_/isNotArrayObject';

let _separator = ';';

export default (pairObject: object, separator?: string | void): string => {
  if (!isNotArrayObject(pairObject)) return '';

  return map(pairObject, (value: string, key) => {
    return key.toString().concat('=', value);
  }).join(separator || _separator);
};
