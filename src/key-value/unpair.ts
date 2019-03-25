let _separator = ';';

export default (pair: string, separator?: string | void): object => {
  if (typeof pair !== 'string') return {};
  if (!pair.length) return {};

  const result = {};
  pair
    .trim()
    .split(separator || _separator)
    .forEach(keyValue => {
      const [key, value] = keyValue.trim().split('=');
      result[key.trim()] = value.trim();
    });

  return result;
};
