export default (obj: object): boolean => {
  return typeof obj === 'object' && !Array.isArray(obj);
};
