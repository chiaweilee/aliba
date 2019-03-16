export default (collection, iteratee) => {
    if (Array.isArray(collection)) {
        return collection.map(iteratee);
    }
    return Object.keys(collection).map(key => {
        return iteratee(collection[key], key);
    });
};
//# sourceMappingURL=map.js.map