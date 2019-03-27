let _separator = ';';

export default (pair: string, separator?: string | void): object => {
  if (typeof pair !== 'string') return {};
  if (!pair.length) return {};

  const result = {};
  const separators = pair.trim().split(separator || _separator);

  if (separators.length < 2) return {};

  separators.forEach(keyValue => {
    const [key, value] = keyValue.trim().split('=');
    result[key.trim()] = value.trim();
  });

  return result;
};
