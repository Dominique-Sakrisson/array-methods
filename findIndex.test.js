const {findIndex, callback} = require('./findIndex.js');

describe('array method findIndex', () => {
    it('Takes in an array and a callback, returns the first index of the array whose callback returns true or truthy', () => {
        const arr = [null, 2,null,4, 6];
        const items = findIndex(arr, callback);
        expect(items).toEqual(4);
    })
})
