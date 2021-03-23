const {filter, callback, callbackAboveFive} = require('./filter.js');

describe('array method filter', () => {
    it('takes in an array and callback function, it returns each item that passed a conditional test within the callback function', () => {
        const arr = [1, 2,null,4, 6];
        const items = filter(arr, callback);
        expect(items).toEqual([1,2, ,4, 6]);
    });

    it('takes in an array and callback function, it returns each item that passed a conditional test within the callback function', () => {
        const arr = [1, 2,null,4, 6];
        const items = filter(arr, callbackAboveFive);
        expect(items).toEqual([,, ,, 6]);
    });
})
