import { Collection, Iteratee } from '../types';

export default (collection: Collection, iteratee: Iteratee): void => {
  if (Array.isArray(collection)) {
    return collection.forEach(iteratee);
  }

  Object.keys(collection).forEach(key => {
    iteratee(collection[key], key);
  });
};
