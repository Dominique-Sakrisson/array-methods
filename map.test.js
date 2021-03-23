const {map, callback} = require('./map.js');

describe('array method map', () => {
    it('takes in an array and callback function, iterates over each item and passes the item into the callback function', () => {
        const arr = [1, 2, null,4];
        const items = map(arr, callback);
        expect(items).toEqual([1,2, ,4]);
    });
})

