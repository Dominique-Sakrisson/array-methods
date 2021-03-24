const {reduce, callback} = require('./reduce.js');

describe('array method reduce', () => {
    it('hi', () => {
        const arr = [2,4,null, 6];
         
        const callback = (accumulator, item) => {
            return accumulator += item;
        }
        const items = reduce(arr, callback, 0);
        expect(items).toEqual(12);
    })
})

