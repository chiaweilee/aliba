export default (object: object | Array<any>): boolean => {
  if (object === null || typeof object !== 'object') return true;

  return Object.keys(object).length === 0;
};
