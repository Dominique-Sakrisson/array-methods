const {map, callback} = require('./map.js');

describe('array methods', () => {
    it('takes in an array and callback function, iterates over each item and passes the item into the callback function', () => {
        const arr = [1, 2, 'bill'];
        const items = map(arr, callback);

        expect(items).toEqual(1, 2, 'bill');
    });
})
