export default (collection, iteratee) => {
    if (Array.isArray(collection)) {
        return collection.forEach(iteratee);
    }
    Object.keys(collection).forEach(key => {
        iteratee(collection[key], key);
    });
};
//# sourceMappingURL=forEach.js.map