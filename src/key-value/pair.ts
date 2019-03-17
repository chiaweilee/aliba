import map from '../_/map';

let _separator = ';';

export default (pairObject: object, separator: string | void): string => {
  return map(pairObject, (value: string, key) => {
    return key.toString().concat('=', encodeURIComponent(value));
  }).join(separator || _separator);
};
