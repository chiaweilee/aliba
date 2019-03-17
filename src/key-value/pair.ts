import map from '../_/map';

let _separator = ';';

export default (pairObject: object, separator?: string | void): string => {
  if (!pairObject) return '';

  return map(pairObject, (value: string, key) => {
    return key.toString().concat('=', value);
  }).join(separator || _separator);
};
