export default (obj: object): boolean => {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
};
