export default (fn: any, ...argv): void => {
  if (typeof fn === 'function') {
    return fn(...argv);
  }
};
