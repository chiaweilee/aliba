export default (fn: any, ...argv): any => {
  if (typeof fn === 'function') {
    return fn(...argv);
  }
};
