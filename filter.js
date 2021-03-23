const callback = (item) => {
    if(item){
        return true;
    }
}

const callbackAboveFive = (item) => {
    if(item > 5){
        return true;
    }
}

const filter = ((arr, callback) => {
    let desiredItems = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== null && arr[i] !== undefined){
            if(callback(arr[i])) { desiredItems[i] = arr[i]};
        }
    }
    return desiredItems;
})

module.exports = {
    callback,
    callbackAboveFive,
    filter
}
