import { Collection, Iteratee } from '../../types';
import isNotArrayObject from './isNotArrayObject';

export default (collection: Collection, iteratee: Iteratee): Array<any> => {
  if (Array.isArray(collection)) {
    return collection.map(iteratee);
  }

  if (!isNotArrayObject(collection)) {
    return [];
  }

  return Object.keys(collection).map(key => {
    return iteratee(collection[key], key);
  });
};
