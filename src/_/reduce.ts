import { Collection, ReduceIteratee } from '../../types';
import isNotArrayObject from './isNotArrayObject';

export default (collection: Collection, iteratee: ReduceIteratee, initialValue?: any): any => {
  if (Array.isArray(collection)) {
    return collection.reduce(iteratee, initialValue);
  }

  if (!isNotArrayObject(collection)) {
    return null;
  }

  return Object.keys(collection).reduce((total, key) => {
    return iteratee(total, collection[key], key, collection);
  }, initialValue);
};
