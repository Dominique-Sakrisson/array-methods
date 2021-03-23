const callback = (item) => {
   return item;
}
const map = (( arr, callback) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== null && arr[i] !== undefined){
            newArr[i] = callback(arr[i]);
        }
    }
    return newArr;
})  

module.exports= {
    callback,
    map
}
