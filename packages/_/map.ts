import { Collection, Iteratee } from '../types';

export default (collection: Collection, iteratee: Iteratee): Array<any> => {
    if (Array.isArray(collection)) {
        return collection.map(iteratee);
    }

    return Object.keys(collection).map(key => {
        return iteratee(collection[key], key);
    });
};
