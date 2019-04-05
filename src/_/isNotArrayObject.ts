export default (object: object): boolean => {
  return object !== null && typeof object === 'object' && !Array.isArray(object);
};
