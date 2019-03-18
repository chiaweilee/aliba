import { Collection, Iteratee } from '../types';
import isNotArrayObject from './isNotArrayObject';

export default (collection: Collection, iteratee: Iteratee): void => {
  if (Array.isArray(collection)) {
    return collection.forEach(iteratee);
  }

  if (!isNotArrayObject(collection)) {
    return;
  }

  Object.keys(collection).forEach(key => {
    iteratee(collection[key], key);
  });
};
