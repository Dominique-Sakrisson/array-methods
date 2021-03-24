const reduce = (arr, callback , initialValue) => {
    let accumulator;
    
    if(initialValue !== undefined){
        accumulator = initialValue;

        for(let i = 0; i < arr.length; i++){
            console.log(accumulator);
            if(arr[i] !== null && arr[i] !== undefined){
                accumulator = callback(accumulator, arr[i])
            }
        }
        return accumulator;
    } else {
        accumulator = arr[0];
        for(let i = 0; i < arr.length; i++){
            console.log(accumulator);
            if(arr[i] !== null && arr[i] !== undefined){
                accumulator = callback(accumulator, arr[i])
            }
        }
        return accumulator;
    }
}

module.exports = {
    reduce
}
