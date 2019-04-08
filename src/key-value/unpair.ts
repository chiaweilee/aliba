let _separator = ';';

export default (pair: string, separator?: string | void): object => {
  if (typeof pair !== 'string' || !pair) return {};

  const result = {};
  const separators = pair.trim().split(separator || _separator);

  separators.forEach(keyValue => {
    const [key, value] = keyValue.trim().split('=');
    if (typeof value === 'undefined') return;
    result[key.trim()] = value.trim();
  });

  return result;
};
